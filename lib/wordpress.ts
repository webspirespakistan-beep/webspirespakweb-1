import { WPPost, WPPage, WPMedia } from "@/types/wordpress";

const WP_API = process.env.NEXT_PUBLIC_WP_API_URL || "https://wordpress-1196470-4364598.cloudwaysapps.com/wp-json/wp/v2";

async function fetchWP<T>(endpoint: string, revalidate = 3600): Promise<T> {
  const res = await fetch(`${WP_API}${endpoint}`, {
    next: { revalidate },
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    throw new Error(`WordPress API error: ${res.status} for ${endpoint}`);
  }

  return res.json();
}

// ─── Posts ───────────────────────────────────────────────────────────────────

export async function getAllPosts(): Promise<WPPost[]> {
  return fetchWP<WPPost[]>(
    "/posts?_embed&per_page=100&status=publish",
    3600
  );
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  const posts = await fetchWP<WPPost[]>(
    `/posts?slug=${slug}&_embed&status=publish`,
    3600
  );
  return posts[0] || null;
}

export async function getRecentPosts(count = 3): Promise<WPPost[]> {
  return fetchWP<WPPost[]>(
    `/posts?_embed&per_page=${count}&status=publish&orderby=date&order=desc`,
    3600
  );
}

// ─── Projects ────────────────────────────────────────────────────────────────

export async function getAllProjects(): Promise<WPPost[]> {
  return fetchWP<WPPost[]>(
    "/projects?_embed&per_page=100&status=publish",
    3600
  );
}

export async function getProjectBySlug(slug: string): Promise<WPPost | null> {
  const posts = await fetchWP<WPPost[]>(
    `/projects?slug=${slug}&_embed&status=publish`,
    3600
  );
  return posts[0] || null;
}

// ─── Pages ───────────────────────────────────────────────────────────────────

export async function getPageBySlug(slug: string): Promise<WPPage | null> {
  const pages = await fetchWP<WPPage[]>(`/pages?slug=${slug}&_embed`, 86400);
  return pages[0] || null;
}

// ─── Media ───────────────────────────────────────────────────────────────────

export async function getMediaById(id: number): Promise<WPMedia | null> {
  try {
    return await fetchWP<WPMedia>(`/media/${id}`, 86400);
  } catch {
    return null;
  }
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").trim();
}

export function getFeaturedImage(post: WPPost): string | null {
  return post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;
}

export function getAuthorName(post: WPPost): string {
  return post._embedded?.author?.[0]?.name || "Webspires";
}

export function getPostCategories(post: WPPost): string[] {
  if (!post._embedded || !post._embedded["wp:term"]) return ["Uncategorized"];
  
  // wp:term is an array of arrays (one array per taxonomy)
  const categories = post._embedded["wp:term"].flat().filter(term => term.taxonomy === "categories" || term.taxonomy === "project_category");
  
  if (categories.length === 0) return ["Uncategorized"];
  return categories.map(cat => cat.name);
}

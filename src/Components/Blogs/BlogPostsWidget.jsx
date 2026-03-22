import React from 'react';
import { Link } from 'react-router-dom';
import { getBlogPostsSorted } from '../../data/blogPosts';

function formatPublishedDate(isoDate) {
  try {
    return new Date(isoDate).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  } catch {
    return '';
  }
}

/**
 * Renders all published blog posts from the central registry (newest first).
 */
function BlogPostsWidget() {
  const posts = getBlogPostsSorted();

  if (posts.length === 0) {
    return (
      <div
        className="rounded-2xl border border-dashed border-gray-200 bg-white/80 p-10 text-center text-gray-600"
        role="status"
      >
        New articles will appear here as they are published.
      </div>
    );
  }

  return (
    <div
      className="rounded-2xl border border-gray-200 bg-white shadow-lg shadow-gray-200/50 overflow-hidden"
      aria-label="Latest blog articles"
    >
      <div className="border-b border-gray-100 bg-gradient-to-r from-primary/[0.06] to-secondary/[0.08] px-5 py-4 sm:px-6">
        <p className="text-xs font-primary font-semibold uppercase tracking-wider text-secondary">Live feed</p>
        <h3 className="text-lg font-tertiary font-bold text-primary sm:text-xl">Latest articles</h3>
        <p className="mt-1 text-sm text-gray-600">Updated automatically when new posts are added.</p>
      </div>

      <ul className="divide-y divide-gray-100">
        {posts.map((post, index) => {
          const href = `/blogs/${post.slug}`;
          const isLatest = index === 0;

          return (
            <li key={post.slug}>
              <Link
                to={href}
                className="group grid grid-cols-1 gap-3 p-5 transition-colors duration-200 hover:bg-secondary/[0.04] sm:grid-cols-[10rem_minmax(0,1fr)] sm:items-start sm:gap-6 sm:p-6"
              >
                {post.image ? (
                  <div className="relative w-full">
                    <div className="aspect-[16/10] w-full overflow-hidden rounded-xl bg-gray-100">
                      <img
                        src={post.image}
                        alt=""
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="hidden sm:block sm:w-40">
                    <div className="flex aspect-[16/10] w-full items-center justify-center rounded-xl bg-gradient-to-br from-secondary/15 to-primary/10 text-secondary">
                      <span className="font-tertiary text-3xl font-bold opacity-40" aria-hidden>
                        RBT
                      </span>
                    </div>
                  </div>
                )}

                <div className="min-w-0 text-left">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    {isLatest && (
                      <span className="rounded-full bg-secondary/15 px-2.5 py-0.5 text-xs font-primary font-semibold uppercase tracking-wide text-secondary">
                        New
                      </span>
                    )}
                    <time className="text-xs font-primary text-gray-500" dateTime={post.publishedAt}>
                      {formatPublishedDate(post.publishedAt)}
                    </time>
                    {post.readTimeMinutes ? (
                      <span className="text-xs text-gray-400">· {post.readTimeMinutes} min read</span>
                    ) : null}
                  </div>
                  <h4 className="text-lg font-tertiary font-bold text-primary transition-colors group-hover:text-secondary sm:text-xl">
                    {post.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600 sm:text-base">{post.excerpt}</p>
                  <span className="mt-3 inline-flex items-center text-sm font-primary font-semibold text-secondary group-hover:underline">
                    Read article
                    <span className="ml-1 transition-transform group-hover:translate-x-0.5" aria-hidden>
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BlogPostsWidget;

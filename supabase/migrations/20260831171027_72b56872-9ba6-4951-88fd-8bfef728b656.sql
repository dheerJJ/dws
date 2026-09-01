CREATE TABLE public.blog_comments (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  post_slug text NOT NULL,
  author_name text NOT NULL,
  body text NOT NULL,
  is_visible boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX blog_comments_post_slug_idx ON public.blog_comments (post_slug, created_at DESC);

GRANT SELECT, INSERT ON public.blog_comments TO anon;
GRANT SELECT, INSERT, UPDATE ON public.blog_comments TO authenticated;
GRANT ALL ON public.blog_comments TO service_role;

ALTER TABLE public.blog_comments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read visible comments" ON public.blog_comments
  FOR SELECT TO anon, authenticated USING (is_visible = true);

CREATE POLICY "Anyone can post a comment" ON public.blog_comments
  FOR INSERT TO anon, authenticated WITH CHECK (true);

CREATE POLICY "Admins can read all comments" ON public.blog_comments
  FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can moderate comments" ON public.blog_comments
  FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));
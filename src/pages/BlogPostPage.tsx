import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getPostBySlug, blogPosts } from "@/data/blogData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Share2, Bookmark, Tag, Send } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import ReactMarkdown from 'react-markdown';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { MessageSquare, UserCircle } from "lucide-react";

interface Comment {
    id: string;
    name: string;
    content: string;
    date: string;
}

const BlogPostPage = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const post = slug ? getPostBySlug(slug) : null;

    useEffect(() => {
        if (post) {
            document.title = `${post.title} | GyaanTrika Labs Blog`;
            const metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc) {
                metaDesc.setAttribute("content", post.excerpt);
            }
        }
    }, [post]);

    // Comment State
    const [comments, setComments] = useState<Comment[]>([
        {
            id: "1",
            name: "Rahul Sharma",
            content: "Excellent guide on Arduino! This really helped me understand the basics before starting my first robotics project.",
            date: "2026-01-20"
        }
    ]);

    const [newComment, setNewComment] = useState("");
    const [authorName, setAuthorName] = useState("");

    const handleCommentSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newComment.trim() || !authorName.trim()) return;

        const comment: Comment = {
            id: Date.now().toString(),
            name: authorName,
            content: newComment,
            date: new Date().toISOString().split('T')[0]
        };

        setComments([comment, ...comments]);
        setNewComment("");
        setAuthorName("");
        toast.success("Comment posted successfully!");
    };

    if (!post) {
        return (
            <div className="min-h-screen flex flex-col bg-background">
                <Header />
                <main className="flex-1 container py-20 px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
                    <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
                    <Button onClick={() => navigate('/blogs')}>
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Blog
                    </Button>
                </main>
                <Footer />
            </div>
        );
    }

    // Get related posts (same category, exclude current)
    const relatedPosts = blogPosts
        .filter(p => p.category === post.category && p.id !== post.id)
        .slice(0, 3);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    };

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: post.title,
                text: post.excerpt,
                url: window.location.href,
            }).catch(() => {
                // Fallback: copy to clipboard
                navigator.clipboard.writeText(window.location.href);
                toast.success("Link copied to clipboard!");
            });
        } else {
            navigator.clipboard.writeText(window.location.href);
            toast.success("Link copied to clipboard!");
        }
    };

    const handleBookmark = () => {
        toast.success("Article bookmarked!");
    };

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Header />

            {/* Hero Section with Featured Image */}
            <section className="relative h-[60vh] overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20" />
                </div>

                <div className="container px-4 h-full relative z-10 flex items-end pb-12">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-4"
                        >
                            <div className="flex flex-wrap gap-2">
                                <Badge className="bg-primary/90 backdrop-blur-sm">
                                    {post.category}
                                </Badge>
                                {post.featured && (
                                    <Badge variant="secondary" className="backdrop-blur-sm">
                                        Featured
                                    </Badge>
                                )}
                            </div>

                            <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground">
                                {post.title}
                            </h1>

                            <div className="flex flex-wrap items-center gap-4 text-sm">
                                <div className="flex items-center gap-2">
                                    <img
                                        src={post.author.avatar}
                                        alt={post.author.name}
                                        className="w-10 h-10 rounded-full object-cover ring-2 ring-primary/50"
                                    />
                                    <div>
                                        <p className="font-semibold text-foreground">{post.author.name}</p>
                                        <p className="text-muted-foreground text-xs">{post.author.role}</p>
                                    </div>
                                </div>

                                <Separator orientation="vertical" className="h-10" />

                                <div className="flex items-center gap-4 text-muted-foreground">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-4 h-4" />
                                        <span>{formatDate(post.publishDate)}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-4 h-4" />
                                        <span>{post.readTime} min read</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <main className="flex-1 container py-12 px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-8">
                        <Card className="p-8 md:p-12">
                            {/* Excerpt */}
                            <p className="text-xl text-muted-foreground mb-8 pb-8 border-b italic">
                                {post.excerpt}
                            </p>

                            {/* Article Content */}
                            <article className="prose prose-lg dark:prose-invert max-w-none">
                                <ReactMarkdown
                                    components={{
                                        h1: ({ node, ...props }) => <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />,
                                        h2: ({ node, ...props }) => <h2 className="text-2xl font-bold mt-6 mb-3" {...props} />,
                                        h3: ({ node, ...props }) => <h3 className="text-xl font-semibold mt-5 mb-2" {...props} />,
                                        p: ({ node, ...props }) => <p className="mb-4 leading-relaxed" {...props} />,
                                        ul: ({ node, ...props }) => <ul className="list-disc pl-6 mb-4 space-y-2" {...props} />,
                                        ol: ({ node, ...props }) => <ol className="list-decimal pl-6 mb-4 space-y-2" {...props} />,
                                        code: ({ node, inline, ...props }: any) =>
                                            inline ? (
                                                <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono" {...props} />
                                            ) : (
                                                <code className="block bg-muted p-4 rounded-lg overflow-x-auto font-mono text-sm" {...props} />
                                            ),
                                        blockquote: ({ node, ...props }) => (
                                            <blockquote className="border-l-4 border-primary pl-4 italic my-4" {...props} />
                                        ),
                                    }}
                                >
                                    {post.content}
                                </ReactMarkdown>
                            </article>

                            {/* Tags */}
                            <div className="mt-8 pt-8 border-t">
                                <div className="flex items-center gap-2 mb-3">
                                    <Tag className="w-4 h-4 text-primary" />
                                    <span className="text-sm font-semibold">Tags:</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {post.tags.map((tag, i) => (
                                        <Badge key={i} variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </div>

                            {/* Share and Bookmark */}
                            <div className="mt-8 pt-8 border-t flex items-center justify-between">
                                <p className="text-sm text-muted-foreground">Share this article:</p>
                                <div className="flex gap-2">
                                    <Button variant="outline" size="sm" onClick={handleShare}>
                                        <Share2 className="w-4 h-4 mr-2" />
                                        Share
                                    </Button>
                                    <Button variant="outline" size="sm" onClick={handleBookmark}>
                                        <Bookmark className="w-4 h-4 mr-2" />
                                        Bookmark
                                    </Button>
                                </div>
                            </div>
                        </Card>

                        {/* Posted Comments List */}
                        <div className="mt-12 space-y-8">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-2 bg-primary/10 rounded-lg">
                                    <MessageSquare className="w-6 h-6 text-primary" />
                                </div>
                                <h2 className="text-2xl font-display font-bold text-foreground capitalize">
                                    Discussion ({comments.length})
                                </h2>
                            </div>

                            <div className="space-y-6">
                                {comments.length === 0 ? (
                                    <div className="text-center py-10 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-dashed border-slate-200 dark:border-slate-800">
                                        <p className="text-muted-foreground">No comments yet. Be the first to share your thoughts!</p>
                                    </div>
                                ) : (
                                    comments.map((comment) => (
                                        <motion.div
                                            key={comment.id}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm"
                                        >
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center flex-shrink-0">
                                                    <UserCircle className="w-8 h-8 text-slate-400" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center justify-between mb-2">
                                                        <h4 className="font-bold text-primary">{comment.name}</h4>
                                                        <span className="text-xs text-muted-foreground">{formatDate(comment.date)}</span>
                                                    </div>
                                                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                                        {comment.content}
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))
                                )}
                            </div>
                        </div>

                        {/* Leave a Comment Section - Main Content Position */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mt-12 p-8 md:p-12 bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm"
                        >
                            <h2 className="text-2xl md:text-3xl font-display font-bold text-primary mb-4 uppercase tracking-tight">
                                Leave a Comment
                            </h2>
                            <p className="text-sm text-muted-foreground mb-10 pb-6 border-b border-slate-100 dark:border-slate-800">
                                Your email address will not be published. Required fields are marked *
                            </p>

                            <form className="space-y-8" onSubmit={handleCommentSubmit}>
                                <div className="space-y-3">
                                    <Label className="text-sm font-semibold ml-1">Comment*</Label>
                                    <Textarea
                                        placeholder="Type here.."
                                        required
                                        value={newComment}
                                        onChange={(e) => setNewComment(e.target.value)}
                                        className="min-h-[180px] bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 focus:ring-primary rounded-2xl p-6 text-base"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="space-y-3">
                                        <Label className="text-sm font-semibold ml-1">Name*</Label>
                                        <Input
                                            placeholder="Enter your name"
                                            required
                                            value={authorName}
                                            onChange={(e) => setAuthorName(e.target.value)}
                                            className="h-14 bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 focus:ring-primary rounded-xl px-5"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <Label className="text-sm font-semibold ml-1">Email*</Label>
                                        <Input
                                            type="email"
                                            placeholder="Enter your email"
                                            required
                                            className="h-14 bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 focus:ring-primary rounded-xl px-5"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <Label className="text-sm font-semibold ml-1">Website</Label>
                                        <Input
                                            placeholder="Your website"
                                            className="h-14 bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 focus:ring-primary rounded-xl px-5"
                                        />
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 bg-slate-50/50 dark:bg-slate-800/30 rounded-2xl border border-dashed border-slate-200 dark:border-slate-700">
                                    <Checkbox id="main-save-info" className="mt-1 border-primary/50 data-[state=checked]:bg-primary" />
                                    <Label htmlFor="main-save-info" className="text-sm text-slate-600 dark:text-slate-400 font-normal leading-relaxed cursor-pointer">
                                        Save my name, email, and website in this browser for the next time I comment.
                                    </Label>
                                </div>

                                <Button
                                    type="submit"
                                    size="lg"
                                    className="h-14 px-10 bg-primary hover:bg-primary/90 text-white font-bold rounded-2xl group shadow-xl shadow-primary/20 transition-all hover:translate-y-[-2px]"
                                >
                                    Post Comment »
                                </Button>
                            </form>
                        </motion.div>

                        {/* Navigation */}
                        <div className="mt-8">
                            <Button
                                variant="ghost"
                                onClick={() => navigate('/blogs')}
                                className="gap-2"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Back to All Articles
                            </Button>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-4 space-y-6">
                        {/* Author Info */}
                        <Card className="p-6">
                            <h3 className="font-semibold mb-4">About the Author</h3>
                            <div className="flex items-center gap-3 mb-4">
                                <img
                                    src={post.author.avatar}
                                    alt={post.author.name}
                                    className="w-16 h-16 rounded-full object-cover ring-2 ring-primary/20"
                                />
                                <div>
                                    <p className="font-semibold">{post.author.name}</p>
                                    <p className="text-sm text-muted-foreground">{post.author.role}</p>
                                </div>
                            </div>
                        </Card>

                        {/* Related Articles */}
                        {relatedPosts.length > 0 && (
                            <Card className="p-6">
                                <h3 className="font-semibold mb-4">Related Articles</h3>
                                <div className="space-y-4">
                                    {relatedPosts.map((relatedPost) => (
                                        <div
                                            key={relatedPost.id}
                                            className="group cursor-pointer"
                                            onClick={() => navigate(`/blog/${relatedPost.slug}`)}
                                        >
                                            <div className="flex gap-3">
                                                <img
                                                    src={relatedPost.image}
                                                    alt={relatedPost.title}
                                                    className="w-20 h-20 rounded-lg object-cover flex-shrink-0 group-hover:ring-2 group-hover:ring-primary transition-all"
                                                />
                                                <div className="flex-1 min-w-0">
                                                    <h4 className="text-sm font-semibold line-clamp-2 group-hover:text-primary transition-colors mb-1">
                                                        {relatedPost.title}
                                                    </h4>
                                                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                                        <Clock className="w-3 h-3" />
                                                        <span>{relatedPost.readTime} min</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <Separator className="mt-4" />
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        )}

                        {/* Newsletter CTA */}
                        <Card className="p-6 bg-gradient-to-br from-primary/10 to-purple-500/10 border-primary/20">
                            <h3 className="font-semibold mb-2">Stay Updated</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                Get the latest articles and insights delivered to your inbox.
                            </p>
                            <Button className="w-full" onClick={() => toast.success("Thanks for subscribing!")}>
                                Subscribe to Newsletter
                            </Button>
                        </Card>

                        {/* Recent Blogs Quick Links */}
                        <Card className="p-6">
                            <h3 className="font-semibold mb-4 text-primary">Latest Insights</h3>
                            <div className="space-y-4">
                                {blogPosts
                                    .filter(p => p.id !== post.id)
                                    .slice(0, 5)
                                    .map((p) => (
                                        <div
                                            key={p.id}
                                            className="group cursor-pointer flex items-start gap-2"
                                            onClick={() => {
                                                navigate(`/blog/${p.slug}`);
                                                window.scrollTo(0, 0);
                                            }}
                                        >
                                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors flex-shrink-0" />
                                            <div className="flex-1">
                                                <h4 className="text-sm font-medium leading-snug group-hover:text-primary transition-colors line-clamp-2">
                                                    {p.title}
                                                </h4>
                                                <span className="text-[10px] text-muted-foreground uppercase tracking-wider">{formatDate(p.publishDate)}</span>
                                            </div>
                                            <ArrowRight className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-1 opacity-0 group-hover:opacity-100" />
                                        </div>
                                    ))}
                            </div>
                            <Button
                                variant="link"
                                className="w-full mt-6 text-xs text-primary font-bold uppercase tracking-widest hover:no-underline p-0"
                                onClick={() => navigate('/blogs')}
                            >
                                View All Articles →
                            </Button>
                        </Card>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default BlogPostPage;

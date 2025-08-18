import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Blog = () => {
  const blogPosts = [
    {
      title: "Complete Guide to German Student Visa Application 2024",
      description: "Everything you need to know about applying for a German student visa, including requirements, timeline, and tips for success.",
      author: "Sarah Mueller",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Visa Guide",
      featured: true,
    },
    {
      title: "Top 10 Universities in Germany for International Students",
      description: "Discover the best German universities offering world-class education, research opportunities, and excellent career prospects.",
      author: "Dr. Hans Weber",
      date: "March 12, 2024",
      readTime: "12 min read",
      category: "Education",
    },
    {
      title: "Living Costs in Germany: Complete Budget Guide for Students",
      description: "Detailed breakdown of living expenses in major German cities including accommodation, food, transportation, and entertainment.",
      author: "Maria Schmidt",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Lifestyle",
    },
    {
      title: "Learning German: Essential Tips for Beginners",
      description: "Practical strategies and resources to master the German language and integrate successfully into German society.",
      author: "Thomas Klein",
      date: "March 8, 2024",
      readTime: "10 min read",
      category: "Language",
    },
    {
      title: "Job Market in Germany: Opportunities for International Graduates",
      description: "Explore career opportunities, salary expectations, and job search strategies for international students in Germany.",
      author: "Lisa Anderson",
      date: "March 5, 2024",
      readTime: "15 min read",
      category: "Career",
    },
    {
      title: "Cultural Integration: Making Friends and Building Networks in Germany",
      description: "Tips for building meaningful relationships and professional networks while studying and working in Germany.",
      author: "Ahmed Hassan",
      date: "March 1, 2024",
      readTime: "7 min read",
      category: "Social",
    },
  ];

  return (
    <section id="blog" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Latest Insights & <span className="text-yellow-400">Resources</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest information about studying, working, and living in Germany.
            Our expert team shares valuable insights to help you succeed.
          </p>
        </div>

        {/* Featured Post */}
        <div className="max-w-5xl mx-auto mb-12">
          <Card className="group hover:shadow-lg transition-all duration-300 border border-border/50 overflow-hidden">
            <div className="bg-yellow-400 p-1">
              <div className="bg-background p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                  <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">
                    {blogPosts[0].category}
                  </span>
                </div>

                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-2xl font-bold text-foreground group-hover:text-yellow-500 transition-colors">
                    {blogPosts[0].title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {blogPosts[0].description}
                  </CardDescription>
                </CardHeader>

                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-4">
                    <span>By {blogPosts[0].author}</span>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {blogPosts[0].date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {blogPosts[0].readTime}
                    </div>
                  </div>
                </div>

                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold group">
                  Read Full Article
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Recent Posts - Moving Train */}
        <div className="overflow-hidden relative">
          <motion.div
            className="flex space-x-6"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: "linear",
            }}
          >
            {[...blogPosts.slice(1), ...blogPosts.slice(1)].map((post, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border border-border/50 min-w-[300px] max-w-[320px]"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground group-hover:text-yellow-500 transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-sm line-clamp-2">
                    {post.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>By {post.author}</span>
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {post.date}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>

        {/* View All Articles */}
        <div className="text-center mt-12">
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg shadow-md">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;

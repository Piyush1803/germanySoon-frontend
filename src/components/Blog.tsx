import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "Complete Guide to German Student Visa Application 2024",
      description: "Everything you need to know about applying for a German student visa, including requirements, timeline, and tips for success.",
      author: "Sarah Mueller",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Visa Guide",
      featured: true
    },
    {
      title: "Top 10 Universities in Germany for International Students",
      description: "Discover the best German universities offering world-class education, research opportunities, and excellent career prospects.",
      author: "Dr. Hans Weber",
      date: "March 12, 2024",
      readTime: "12 min read",
      category: "Education"
    },
    {
      title: "Living Costs in Germany: Complete Budget Guide for Students",
      description: "Detailed breakdown of living expenses in major German cities including accommodation, food, transportation, and entertainment.",
      author: "Maria Schmidt",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Lifestyle"
    },
    {
      title: "Learning German: Essential Tips for Beginners",
      description: "Practical strategies and resources to master the German language and integrate successfully into German society.",
      author: "Thomas Klein",
      date: "March 8, 2024",
      readTime: "10 min read",
      category: "Language"
    },
    {
      title: "Job Market in Germany: Opportunities for International Graduates",
      description: "Explore career opportunities, salary expectations, and job search strategies for international students in Germany.",
      author: "Lisa Anderson",
      date: "March 5, 2024",
      readTime: "15 min read",
      category: "Career"
    },
    {
      title: "Cultural Integration: Making Friends and Building Networks in Germany",
      description: "Tips for building meaningful relationships and professional networks while studying and working in Germany.",
      author: "Ahmed Hassan",
      date: "March 1, 2024",
      readTime: "7 min read",
      category: "Social"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Latest Insights & <span className="text-german-gold">Resources</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest information about studying, working, and living in Germany. 
            Our expert team shares valuable insights to help you succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Post */}
          <div className="lg:col-span-2">
            <Card className="group hover:shadow-elegant transition-all duration-300 border-border/50 overflow-hidden">
              <div className="bg-gradient-accent p-1">
                <div className="bg-background p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="bg-german-gold text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                    <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">
                      {blogPosts[0].category}
                    </span>
                  </div>
                  
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
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

                  <Button variant="professional" className="group">
                    Read Full Article
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Recent Posts */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground">Recent Posts</h3>
            {blogPosts.slice(1).map((post, index) => (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 border-border/50">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs">
                      {post.category}
                    </span>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
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
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
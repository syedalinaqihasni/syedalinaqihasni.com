import { Post } from "@/types/blogs";

const CONSTANT = {
  pageTitle: "My Blog",
  pageDescription:
    "Thoughts, tutorials, and insights about web development, design, and technology.",
  searchPlaceholder: "Search articles...",
  shareButton: "Share Article",
  blogTitleSuffix: " | Blog",
  readUnit: "min read",
};

const posts: Post[] = [
  {
    id: 2,
    title: "Headless WordPress and Content Management Systems",
    excerpt:
      "Explore how Headless WordPress works and compare it with other modern content management systems for greater flexibility and performance.",
    slug: "headless-wordpress-and-content-management-systems",
    publishedAt: "2022-11-02",
    readingTime: "6 min read",
    image:
      "/images/blogs/headless-wordpress-and-content-management-systems.webp",
    categories: ["Wordpress", "CMS", "Headless"],
    content: `<div>
    <p>
        Keeping up with the ever-expanding Internet of Things (IoT) can be a scramble for
        content developers and programmers alike. Repackaging content from a traditional WordPress implementation for
        more and more client-side endpoints (such as smart speakers or watches) can put a real strain on your resources.
    </p>
    <p>
        That’s where the concept of ‘headless’ Content Management Systems (CMSs) comes in.
        The headless CMS approach provides more flexibility on the back end of content management while offering
        developers access to the front-end tools they prefer to use. It also enables you to use the same bucket of
        content for many different outputs.</p>
    <p>
        Need a complete guide on the Headless WordPress CMS? In this article, we’ll look at
        how a WordPress website can function as a headless CMS solution and some of the benefits are to this approach.
        We’ll also discuss how to host a headless WordPress setup. Let’s get started!</p>
    <h2>
        What Is a Headless CMS?</h2>
    <p>
        A headless content management system is not necessarily a brand-new concept. Before
        the sleek and accessible administration interface we know and love in WordPress, there were databases of content
        with less attractive front-end delivery systems. Codes or queries were used to pull content forward to the user.
    </p>
    <p>
        Similarly, a headless approach is becoming very valuable in our multi-device world.
        Headless content management means the system exists solely for content input, editing, containment, and sorting
        on the back end. A headless system should be highly accessible, but its job is not to worry about front-end
        visual impact.</p>
    <p>
        So, how does content in a headless system make it out into the world? WordPress
        content in the database is accessed through RESTful API calls. This means it can be viewed wherever it is called
        to, without templates or plugins. This can be used to create a traditional browser-based website or almost
        anything else in the IoT.</p>
    <h2>
        Headless WordPress CMS</h2>
    <p>
        WordPress is sometimes referred to as a ‘monolithic’ CMS. This means that, while it
        does have a robust back end for content creation and organization, it is still built to be pretty concerned with
        front-end display. WordPress also wraps display functionality into themes and plugins, so the front and back
        ends are tied together.</p>
    <p>
        You can, however, take advantage of WordPress’s excellent content management
        functionality and effectively decapitate it, leaving you with a fast and lightweight headless CMS. By using
        WordPress’ REST API, you can extend the content management you’ve crafted in WordPress beyond your theme.</p>
    <p>
        In this scenario, you would still be able to use all the platform’s back-end
        functionality, but it would become a reactive system. Content would wait to be called upon and respond
        accordingly. This is in stark contrast to the current, more proactive way that WordPress pushes or delivers
        content to primarily browser-based sites.</p>
    <h2>
        Decoupled vs Headless CMS</h2>
    <p>
        However, what if you love your theme and how it looks online? If you want to have
        your cake and eat it too, there is a solution. You can create a ‘decoupled’ CMS using WordPress.</p>
    <p>
        Standard WordPress has the front and back ends coupled. They coordinate read and
        write calls, to present your site to its end users. However, decoupling the front and back ends enables you to
        get the best of both worlds.</p>
    <p>
        When you decouple your CMS, you end up with more of a chimera. Not only will your
        database of content be able to present a more traditional display to the front end, but you can also use API
        traditional, theme-based, front-end display option.</p>
    <p>
        There are plugins available to uncouple your WordPress front end and back end, but
        it’s important to be prepared for what that means. Decoupling can mean you must have a more hands-on approach to
        site maintenance, security, and Search Engine Optimization (SEO). In addition, you’ll lose the standard live
        preview you’re used to with a coupled WordPress structure.</p>
    <h2>
        Utilizing a Headless CMS</h2>
    <p>
        Now that you have a better understanding of the mechanics and architecture of a
        headless CMS, and what it might look like in WordPress core, let’s talk about what you can get out of taking
        this approach.</p>
    <h2>
        What Can You Do With a Headless CMS?</h2>
    <p>
        Perhaps the best thing you can do with a headless CMS is essentially future-proof
        your WordPress content. As long as the API endpoint still exists, content can be called forth. A headless CMS
        means you’re creating a developer-focused, API-first system, rather than focusing on how the back-end
        administration will feed the front-end design.</p>
    <p>
        Therefore, going headless enables you greater flexibility in migrating content if
        you need to since you won’t be tied so tightly to themes and plugins. From a marketing standpoint, you’re also
        able to create personalized customer journeys, without filing a ticket every time you want to add or change some
        content.</p>
    <p>
        This is a great option for developers who want to deliver content to both Android
        and iOS platforms from the same back end. Another use case for a headless structure is websites or applications
        that use JavaScript frameworks like AngularJS, VueJS, or React.</p>
    <h2>
        Headless WordPress Benefits</h2>
    <p>
        At this point, we’ve already mentioned a few of the benefits of going with a
        headless WordPress architecture for your content management. However, there are plenty of additional advantages:
    </p>
    <p>
        Greater control. When you uncouple WordPress, you gain nearly endless control from
        a development standpoint. Front-end developers can get creative with dynamic uses of JavaScript, and deliver an
        ‘outside the template’ experience.</p>
    <p>
        Increased scalability. When you develop a headless system, you can scale it up very
        quickly. Your content can continue to build, and since you are now an API-first shop, you can respond to new
        user needs in a snap.</p>
    <p>
        Tighter security. Decoupled and headless approaches minimize risk to your content.
        Since your content lives separate from your front-end delivery, it is not as exposed or at risk to third-party
        application issues.</p>
    <p>
        Lightweight design. When you go headless, you shed some serious weight. Since your
        system now consists of just a content database and API calls, your content delivery can be responsive, sleek,
        and fast.</p>
    <p>
        When you consider the many benefits of decoupling your WordPress structure, it
        might be just what you need. This is especially true if you are comfortable developing outside the standard CMS
        package, and you want your content to be accessible on all devices.</p>
    <h2>
        Potential Issues With A Headless WordPress Site</h2>
    <p>
        Before you get started, however, it’s worth noting that there are some drawbacks to
        taking WordPress into a decoupled or headless state. If you have a small website that delivers simple content,
        you’ll likely want to review these potential issues before taking the plunge:</p>
    <p>
        No WYSIWYG editor. A truly headless approach means you will lose your live preview
        option. You won’t be able to easily test what the front-end user will see.</p>
    <p>
        Advanced programming. If you didn’t previously need a front-end programmer, you
        will now. You’ll require some more advanced libraries to make the most of a headless system.</p>
    <p>
        More maintenance. This comes into play with a decoupled setup. You may end up with
        two systems to maintain, especially in terms of updates and security.</p>
    <p>
        Tougher credentialing. A headless system requires different credentialing of users
        than a coupled CMS. This can be a tedious task, although it does lead to a more secure environment.</p>
    <p>
        Once you consider the needs of your site and what you want to achieve, you can
        decide if a headless CMS is right for you.</p>
    <h2>
        Hosting A Headless WordPress Site</h2>
    <p>
        Moving to a headless CMS could open up new doors for your content, but it doesn’t
        eliminate the need for reliable hosting. Here at WP Engine, we have support and information that might help if
        you plan on using WordPress to create a headless CMS.</p>
    <p>
        As a WordPress Digital Experience Platform (DXP), WP Engine can help you with the
        platform-specific aspects of your site. This includes troubleshooting REST API issues and standard WordPress
        functionality problems, along with providing fast and reliable hosting services.</p>
</div>`,
  },
  {
    id: 1,
    title: "The Beginner’s Guide to Search Engin Optimization",
    excerpt:
      "Discover the fundamentals of Search Engine Optimization (SEO) and learn how to improve your website’s visibility on search engines.",
    slug: "the-beginners-guide-to-seo",
    publishedAt: "2022-09-26",
    readingTime: "4 min read",
    image: "/images/blogs/the-beginners-guide-to-seo.jpg",
    categories: ["SEO", "Getting Started", "Tutorial"],
    content: `<div>
    <h2>
        Welcome to your SEO learning journey!</h2>
    <p>
        You’ll get the most out of this guide if your desire to learn <strong>
            search engine optimization</strong> (SEO) is exceeded only by your willingness to execute and
        test concepts.</p>
    <p>
        This guide is designed to describe all major aspects of SEO, from finding the terms
        and phrases (<a href='https://moz.com/beginners-guide-to-seo/keyword-research#index'>
            keywords</a>) that can generate qualified traffic to your
        website, to making your site <a href='https://moz.com/beginners-guide-to-seo/technical-seo#index'>
            friendly to search engines</a>, to <a
            href="https://moz.com/beginners-guide-to-seo/growing-popularity-and-links#index" rel="noopener ugc nofollow"
            target="_blank">
            building links</a> and marketing the unique value of your site.</p>
    <p>
        The world of search engine optimization is complex and ever-changing. Still, you
        can easily understand the basics, and even a small amount of SEO knowledge can make a big difference. Free SEO
        education is also widely available on the web, including guides like this! (Woohoo!)</p>
    <p>
        Combine this information with some practice and you are well on becoming a savvy
        SEO.</p>
    <h2>
        The basics of search engine optimization</h2>
    <p>
        Ever heard of Maslow’s hierarchy of needs? It’s a theory of psychology that
        prioritizes the most fundamental human needs (like air, water, and physical safety) over more advanced needs
        (like esteem and social belonging). The theory is that you can’t achieve the needs at the top without ensuring
        the more fundamental needs are met first. Love doesn’t matter if you don’t have food.</p>
    <p>
        Our founder, Rand Fishkin, made a similar pyramid to explain how folks should go
        about SEO, and we’ve affectionately dubbed it “<em>
            Moz</em>low’s hierarchy of SEO needs.”</p>
    <p>
        Here’s what it looks like:</p>
    <h2>
        Try Moz Pro, free!</h2>
    <p>
        Strong data and smart analytics are must-haves when it comes to SEO work. Try Moz
        Pro free for 30 days and see why so many marketers trust our SEO tools!</p>
    <p>
        <a href='hhttps://moz.com/checkout/freetrial' rel='noopener ugc nofollow'>
            Start my free trial</a>
    </p>
    <p>
        As you can see, the foundation of good SEO begins with ensuring crawl accessibility
        and moves up from there.</p>
    <p>
        Using this beginner’s guide, we can follow these seven steps to successful SEO:</p>
    <ol>
        <li>
            Crawl accessibility so engines can read your website</li>
        <li>
            Compelling content that answers the searcher’s query</li>
        <li>
            Keywords optimized to attract searchers &amp; engines</li>
        <li>
            Great user experience including a fast load speed and compelling UX</li>
        <li>
            Share-worthy content that earns links, citations, and amplification</li>
        <li>
            Title, URL, &amp; description to draw high CTR in the rankings</li>
        <li>
            Snippet/schema markup to stand out in SERPs</li>
    </ol>
    <p>
        We’ll spend time on each of these areas throughout this guide, but we wanted to
        introduce it here because it offers a look at how we structured the guide as a whole.</p>
    <p>
        Explore the chapters:</p>
    <p>
        <a href="https://moz.com/beginners-guide-to-seo/why-search-engine-marketing-is-necessary">
            CHAPTER 1: SEO 101</a>
    </p>
    <p>
        <em>
            What is it, and why is it important?</em>
    </p>
    <p>
        For true beginners. Learn what search engine optimization is, why it matters, and
        all the need-to-know basics to start yourself off right.</p>
    <p>
        <a href="https://moz.com/beginners-guide-to-seo/how-search-engines-operate" rel="noopener ugc nofollow"
            target="_blank">
            CHAPTER 2: HOW SEARCH ENGINES WORK — CRAWLING, INDEXING, AND RANKING</a>
    </p>
    <p>
        <em>
            First, you need to show up.</em>
    </p>
    <p>
        If search engines literally can find you, none of the rest of your work matters.
        This chapter shows you how their robots crawl the Internet to find your site and add it to their indexes.</p>
    <p>
        <a href="https://moz.com/beginners-guide-to-seo/keyword-research" >
            CHAPTER 3: KEYWORD RESEARCH</a>
    </p>
    <p>
        <em>
            Understand what your audience wants to find.</em>
    </p>
    <p>
        Our approach targets users first because that’s what search engines reward. This
        chapter covers keyword research and other methods to determine what your audience is seeking.</p>
    <p>
        <a href="https://moz.com/beginners-guide-to-seo/on-page-seo">
            CHAPTER 4: ON-SITE OPTIMIZATION</a>
    </p>
    <p>
        <em>
            Use your research to craft your message.</em>
    </p>
    <p>
        This is a hefty chapter, covering optimized design, user experience, information
        architecture, and all the ways you can adjust how you publish content to maximize its visibility and resonance
        with your audience.</p>
    <p>
        <a href="https://moz.com/beginners-guide-to-seo/technical-seo">
            CHAPTER 5: TECHNICAL SEO</a>
    </p>
    <p>
        <em>
            Basic technical knowledge will help you optimize your site for
            search engines and establish credibility with developers.</em>
    </p>
    <p>
        By implementing responsive design, robot directives, and other technical elements
        like structured data and meta tags, you can tell Google (a robot itself) what your site is all about. This helps
        it rank for the right things.</p>
    <p>
        <a href="https://moz.com/beginners-guide-to-seo/growing-popularity-and-links" rel="noopener ugc nofollow"
            target="_blank">
            CHAPTER 6: LINK BUILDING &amp; ESTABLISHING AUTHORITY</a>
    </p>
    <p>
        <em>
            Turn up the volume.</em>
    </p>
    <p>
        Once you’ve got everything in place, it’s time to expand your influence by earning
        attention and links from other sites and influencers.</p>
    <p>
        <a href="https://moz.com/beginners-guide-to-seo/measuring-and-tracking-success" rel="noopener ugc nofollow"
            target="_blank">
            CHAPTER 7: MEASURING, PRIORITIZING, &amp; EXECUTING SEO</a>
    </p>
    <p>
        <em>
            Set yourself up for success.</em>
    </p>
    <p>
        An essential part of any SEO strategy is knowing what’s working (and what isn’t),
        and adjusting your approach as you go along.</p>
    <p>
        <a href="https://moz.com/beginners-guide-to-seo/seo-glossary">
            THE SEO GLOSSARY</a>
    </p>
    <p>
        <em>
            Understand key terms and phrases.</em>
    </p>
    <p>
        Learning SEO can sometimes feel like learning another language, with all the jargon
        and industry terms you’re expected to know. This chapter-by-chapter glossary will help you get a handle on all
        the new words.</p>
    <h2>
        How much of this guide do I need to read?</h2>
    <p>
        If you’re serious about improving search traffic and are unfamiliar with SEO, we
        recommend reading the Beginner’s Guide to Search Engin Optimization front-to-back. We’ve tried to make it as concise and easy to
        understand as possible, and learning the basics of SEO is a vital first step in achieving your online business
        goals.</p>
    <p>
        Go through at the pace that suits you best, and be sure to take note of the dozens
        of resources we link to throughout the chapters — they’re also worthy of your attention.</p>
    <p>
        If you want to take a more organized approach to learn SEO or training your entire
        team, check out the <a href="https://academy.moz.com/path/seo-essentials-moz-certification"> 
            Moz Academy SEO Essentials Certification</a>. We’ve consolidated
        all the resources you need to learn SEO fundamentals alongside unique learning strategies, task lessons and
        quizzes to test your knowledge. You can also display your knowledge with your Linkedin Moz SEO Essentials
        certification badge.</p>
    <p>
        Getting excited yet? You should be! Search engine marketing is a fascinating field
        and can be lots of fun! If you get confused, don’t give up; we have folks who can help you with instructor-led
        <a href="https://moz.com/training">
            SEO training
            seminars</a>.
    </p>
</div>`,
  },
];

export { CONSTANT, posts };

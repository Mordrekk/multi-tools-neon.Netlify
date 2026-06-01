/* ===================================
   MoneyFree - Neon Website Script
   Interactive Ideas & Tools
   =================================== */

// ===== DOM Ready =====
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initIdeaCards();
    initModal();
    initTools();
    initScrollCTA();
    initRandomIdea();
});

/* ============ PARTICLES ============ */

function initParticles() {
    const container = document.getElementById('particles');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        
        // Random colors
        const colors = ['var(--neon-cyan)', 'var(--neon-pink)', 'var(--neon-blue)', 'var(--neon-lime)'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.boxShadow = `0 0 10px ${colors[Math.floor(Math.random() * colors.length)]}`;
        
        container.appendChild(particle);
    }
}

/* ============ MONEY-MAKING IDEAS DATA ============ */

const moneyIdeas = [
    {
        id: 'affiliate',
        icon: '🎯',
        title: 'Affiliate Marketing',
        description: 'Promote products and earn commissions for every sale made through your unique affiliate links. One of the most popular methods!',
        tags: ['High Income', 'Passive', 'Popular'],
        earning: '$100 - $10,000+/month',
        difficulty: 3,
        details: `
            <h4>How It Works:</h4>
            <ul>
                <li>Join affiliate programs (Amazon Associates, ShareASale, CJ Affiliate)</li>
                <li>Create content around products (reviews, comparisons, guides)</li>
                <li>Add affiliate links naturally within your content</li>
                <li>Earn commission when visitors purchase through your links</li>
            </ul>
            
            <h4>Best Platforms:</h4>
            <ul>
                <li>Amazon Associates - Millions of products</li>
                <li>ClickBank - Digital products with high commissions</li>
                <li>ShareASale - Diverse merchants across categories</li>
                <li>Impact - Premium brand partnerships</li>
            </ul>
            
            <h4>Pro Tips:</h4>
            <ul>
                <li>Focus on products you genuinely recommend</li>
                <li>Create comparison and review content</li>
                <li>Build an email list for better conversions</li>
                <li>SEO is key for organic traffic</li>
            </ul>
        `
    },
    {
        id: 'adsense',
        icon: '📊',
        title: 'Google AdSense',
        description: 'Display targeted ads on your website and earn money when visitors click or view them. Set and forget passive income!',
        tags: ['Passive', 'Easy Setup', 'Google'],
        earning: '$10 - $5,000+/month',
        difficulty: 2,
        details: `
            <h4>Requirements:</h4>
            <ul>
                <li>Quality original content (at least 10-15 articles)</li>
                <li>Professional website design</li>
                <li>Good user experience and navigation</li>
                <li>Compliant with AdSense policies</li>
            </ul>
            
            <h4>Optimization Tips:</h4>
            <ul>
                <li>Place ads above the fold for higher visibility</li>
                <li>Use responsive ad units</li>
                <li>Test different ad placements</li>
                <li>Balance ads with user experience</li>
            </ul>
            
            <h4>Earnings Factors:</h4>
            <ul>
                <li>Traffic volume and demographics</li>
                <li>Niche (finance/insurance pay more)</li>
                <li>Ad placement optimization</li>
                <li>Content quality and length</li>
            </ul>
        `
    },
    {
        id: 'sponsored',
        icon: '🤝',
        title: 'Sponsored Content',
        description: 'Partner with brands to create sponsored blog posts, reviews, or social media content. Premium rates for engaged audiences!',
        tags: ['High Value', 'Direct Contact', 'Premium'],
        earning: '$200 - $20,000+/post',
        difficulty: 4,
        details: `
            <h4>Getting Started:</h4>
            <ul>
                <li>Build a media kit showcasing your audience</li>
                <li>Reach out to brands in your niche</li>
                <li>Use platforms like Cooperatize, IZEA, Influence.co</li>
                <li>Network at industry events</li>
            </ul>
            
            <h4>Rates Structure:</h4>
            <ul>
                <li>Typical rate: $100 per 10,000 monthly visitors</li>
                <li>Social media integration extra</li>
                <li>Email newsletter mentions add value</li>
                <li>Long-term partnerships pay more</li>
            </ul>
            
            <h4>Best Practices:</h4>
            <ul>
                <li>Always disclose sponsored content</li>
                <li>Only work with brands you trust</li>
                <li>Maintain editorial integrity</li>
                <li>Create detailed contracts</li>
            </ul>
        `
    },
    {
        id: 'services',
        icon: '💼',
        title: 'Fiverr Services',
        description: 'Offer your skills as services on Fiverr or similar platforms. Web design, writing, SEO, and more!',
        tags: ['Active Income', 'Skills Based', 'Quick'],
        earning: '$100 - $5,000+/month',
        difficulty: 2,
        details: `
            <h4>Popular Services:</h4>
            <ul>
                <li>Logo design & branding</li>
                <li>Website development</li>
                <li>Content writing & copywriting</li>
                <li>Social media management</li>
                <li>SEO audits and consulting</li>
                <li>Video editing</li>
            </ul>
            
            <h4>Platforms:</h4>
            <ul>
                <li>Fiverr - Entry level, high volume</li>
                <li>Upwork - Long-term projects</li>
                <li>Toptal - Premium clients</li>
                <li>99designs - Design contests</li>
            </ul>
            
            <h4>Success Tips:</h4>
            <ul>
                <li>Start with competitive pricing</li>
                <li>Build a strong portfolio</li>
                <li>Deliver exceptional customer service</li>
                <li>Upsell and offer packages</li>
            </ul>
        `
    },
    {
        id: 'print',
        icon: '👕',
        title: 'Print on Demand',
        description: 'Create and sell custom-designed merchandise like t-shirts, mugs, and phone cases without inventory!',
        tags: ['No Inventory', 'Creative', 'Scalable'],
        earning: '$50 - $3,000+/month',
        difficulty: 2,
        details: `
            <h4>How It Works:</h4>
            <ul>
                <li>Create designs using free tools like Canva</li>
                <li>Upload to print-on-demand platforms</li>
                <li>Products are printed only when ordered</li>
                <li>You earn the profit margin after costs</li>
            </ul>
            
            <h4>Best Platforms:</h4>
            <ul>
                <li>Merch by Amazon - Access to Amazon marketplace</li>
                <li>Redbubble - Large marketplace, passive</li>
                <li>Teepublic - Community features</li>
                <li>Printful - Integrates with your store</li>
            </ul>
            
            <h4>Trending Niches:</h4>
            <ul>
                <li>Pet lovers and pet owners</li>
                <li>Nerd/geek culture</li>
                <li>Funny quote shirts</li>
                <li>Professional mother designs</li>
            </ul>
        `
    },
    {
        id: 'newsletter',
        icon: '📧',
        title: 'Email Newsletter',
        description: 'Build an email list and monetize through sponsored emails, premium content, and affiliate offers. Highly profitable!',
        tags: ['High Income', 'Scalable', 'Ownership'],
        earning: '$50 - $50,000+/month',
        difficulty: 4,
        details: `
            <h4>Getting Started:</h4>
            <ul>
                <li>Choose a niche you're passionate about</li>
                <li>Set up email marketing (Mailchimp, Substack, Beehiiv)</li>
                <li>Create a lead magnet to attract subscribers</li>
                <li>Publish valuable content consistently</li>
            </ul>
            
            <h4>Monetization Methods:</h4>
            <ul>
                <li>Sponsored newsletter placements ($500-$5,000/issue)</li>
                <li>Premium subscriptions for exclusive content</li>
                <li>Affiliate links within emails</li>
                <li>Paid community access</li>
            </ul>
            
            <h4>Growth Strategies:</h4>
            <ul>
                <li>Guest posting for exposure</li>
                <li>Social media lead magnets</li>
                <li>Referral programs</li>
                <li>Collaborations with other newsletters</li>
            </ul>
        `
    },
    {
        id: 'courses',
        icon: '🎓',
        title: 'Online Courses',
        description: 'Share your expertise by creating video courses. Platforms make it easy to host and sell your knowledge!',
        tags: ['High Value', 'Passive', 'Expertise'],
        earning: '$500 - $50,000+/month',
        difficulty: 4,
        details: `
            <h4>Course Platforms:</h4>
            <ul>
                <li>Udemy - Large marketplace, auction pricing</li>
                <li>Teachable - Your own branded school</li>
                <li>Skillshare - Subscription model, passive income</li>
                <li>Gumroad - Simple digital product sales</li>
            </ul>
            
            <h4>Popular Topics:</h4>
            <ul>
                <li>Programming and web development</li>
                <li>Business and marketing</li>
                <li>Design (graphic, UI/UX)</li>
                <li>Language learning</li>
                <li>Personal development</li>
            </ul>
            
            <h4>Creation Tips:</h4>
            <ul>
                <li>Start with free YouTube content</li>
                <li>Validate demand before creating</li>
                <li>Keep videos short and focused</li>
                <li>Build an email list alongside</li>
            </ul>
        `
    },
    {
        id: 'dropshipping',
        icon: '📦',
        title: 'Dropshipping Store',
        description: 'Build an e-commerce store without inventory. The supplier ships products directly to your customers!',
        tags: ['E-commerce', 'No Inventory', 'Scalable'],
        earning: '$200 - $10,000+/month',
        difficulty: 4,
        details: `
            <h4>Best Platforms:</h4>
            <ul>
                <li>Shopify - Easiest to set up</li>
                <li>WooCommerce - WordPress integration</li>
                <li>Square Online - Free tier available</li>
                <li>BigCommerce - Scalable solution</li>
            </ul>
            
            <h4>Finding Suppliers:</h4>
            <ul>
                <li>AliExpress - Wide product selection</li>
                <li>SaleHoo - Verified suppliers directory</li>
                <li>Oberlo - Shopify app for dropshipping</li>
                <li>Worldwide Brands - Premium directory</li>
            </ul>
            
            <h4>Success Strategies:</h4>
            <ul>
                <li>Focus on a specific niche</li>
                <li>Use dropshipping aggregators (DSers)</li>
                <li>Optimize product descriptions</li>
                <li>Invest in paid ads initially</li>
            </ul>
        `
    },
    {
        id: 'youtube',
        icon: '🎬',
        title: 'YouTube Channel',
        description: 'Create videos around your website niche. Earn from ads, sponsorships, and merchandise!',
        tags: ['Video Content', 'Ad Revenue', 'Viral'],
        earning: '$100 - $100,000+/month',
        difficulty: 3,
        details: `
            <h4>Monetization Methods:</h4>
            <ul>
                <li>YouTube Partner Program ads (CPM varies)</li>
                <li>Channel memberships</li>
                <li>Super Chat during live streams</li>
                <li>YouTube Premium revenue share</li>
                <li>Brand sponsorships</li>
                <li>Merchandise shelf</li>
            </ul>
            
            <h4>Requirements:</h4>
            <ul>
                <li>1,000 subscribers minimum</li>
                <li>4,000 watch hours in 12 months</li>
                <li>AdSense account linked</li>
                <li>Consistent upload schedule</li>
            </ul>
            
            <h4>Content Ideas:</h4>
            <ul>
                <li>Tutorials and how-to guides</li>
                <li>Product reviews and comparisons</li>
                <li>Educational content</li>
                <li>Entertainment and vlogs</li>
            </ul>
        `
    },
    {
        id: 'membership',
        icon: '👥',
        title: 'Membership Site',
        description: 'Create an exclusive community or premium content area. Members pay recurring fees for access!',
        tags: ['Recurring Revenue', 'Community', 'Premium'],
        earning: '$500 - $30,000+/month',
        difficulty: 4,
        details: `
            <h4>Membership Models:</h4>
            <ul>
                <li>Content access (exclusive articles/videos)</li>
                <li>Community access (Discord, forums)</li>
                <li>Tools and resources</li>
                <li>Coaching and consulting</li>
                <li>Hybrid of multiple above</li>
            </ul>
            
            <h4>Platform Options:</h4>
            <ul>
                <li>Patreon - Creator-focused</li>
                <li>Ghost - Built-in membership</li>
                <li>Memberful - Professional solution</li>
                <li>Gumroad - Simple setup</li>
            </ul>
            
            <h4>Pricing Strategy:</h4>
            <ul>
                <li>Start with a free tier</li>
                <li>Entry-level paid tier ($5-15/month)</li>
                <li>Premium tier ($29-99/month)</li>
                <li>Annual discount (20-30%)</li>
            </ul>
        `
    },
    {
        id: 'freelancing',
        icon: '✍️',
        title: 'Freelance Writing',
        description: 'Write articles, blog posts, and content for clients. Get paid per word, per article, or hourly!',
        tags: ['Active Income', 'Flexible', 'In Demand'],
        earning: '$500 - $10,000+/month',
        difficulty: 2,
        details: `
            <h4>Finding Clients:</h4>
            <ul>
                <li>ProBlogger Job Board</li>
                <li>Contently - Premium clients</li>
                <li>Skyword - Enterprise content</li>
                <li>Direct outreach to blogs</li>
                <li>LinkedIn networking</li>
            </ul>
            
            <h4>Rates Guide:</h4>
            <ul>
                <li>Entry: $0.05-0.15 per word</li>
                <li>Mid-level: $0.15-0.50 per word</li>
                <li>Expert: $0.50-1+ per word</li>
                <li>Blog posts: $50-500+ each</li>
            </ul>
            
            <h4>Specializations:</h4>
            <ul>
                <li>Tech and SaaS companies</li>
                <li>Finance and investing blogs</li>
                <li>Healthcare and medical</li>
                <li>E-commerce product descriptions</li>
            </ul>
        `
    },
    {
        id: 'consulting',
        icon: '💡',
        title: 'Consulting & Advice',
        description: 'Offer one-on-one consulting calls or advice sessions. Premium rates for expertise in high-demand areas!',
        tags: ['Premium Rates', 'Expertise', 'High Value'],
        earning: '$500 - $20,000+/month',
        difficulty: 3,
        details: `
            <h4>Consulting Niches:</h4>
            <ul>
                <li>Business and marketing strategy</li>
                <li>Technical consulting (dev, design)</li>
                <li>Career coaching</li>
                <li>Health and fitness coaching</li>
                <li>Financial planning</li>
            </ul>
            
            <h4>Booking Platforms:</h4>
            <ul>
                <li>Calendly - Scheduling automation</li>
                <li>Superlawyer - Legal consulting</li>
                <li>Clarity.fm - Expert calls</li>
                <li>Coach.me - Coaching platform</li>
            </ul>
            
            <h4>Pricing Models:</h4>
            <ul>
                <li>Hourly rates: $50-500+/hour</li>
                <li>Package deals: 3-5 sessions</li>
                <li>Monthly retainers for ongoing work</li>
                <li>Discovery calls (free or low cost)</li>
            </ul>
        `
    }
];

/* ============ IDEA CARDS ============ */

function initIdeaCards() {
    const grid = document.getElementById('ideas-grid');
    
    moneyIdeas.forEach((idea, index) => {
        const card = document.createElement('div');
        card.className = 'idea-card';
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        card.setAttribute('aria-label', `Learn more about ${idea.title}: ${idea.description}`);
        card.style.animationDelay = `${index * 0.1}s`;
        card.innerHTML = `
            <span class="idea-icon">${idea.icon}</span>
            <h3>${idea.title}</h3>
            <p>${idea.description}</p>
            <div class="idea-tags">
                ${idea.tags.map(tag => `<span class="idea-tag">${tag}</span>`).join('')}
            </div>
            <div class="idea-earning">💰 ${idea.earning}</div>
        `;
        
        card.addEventListener('click', () => openModal(idea));
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openModal(idea);
            }
        });
        grid.appendChild(card);
    });
}

/* ============ MODAL ============ */

let currentModal = null;
let lastFocusedElement = null;

function initModal() {
    const modal = document.getElementById('modal');
    const closeBtn = document.getElementById('modal-close');
    
    closeBtn.addEventListener('click', closeModal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

function openModal(idea) {
    const modal = document.getElementById('modal');
    const closeBtn = document.getElementById('modal-close');
    
    // Store the currently focused element to return focus later
    lastFocusedElement = document.activeElement;
    
    document.getElementById('modal-icon').textContent = idea.icon;
    document.getElementById('modal-title').textContent = idea.title;
    document.getElementById('modal-body').innerHTML = idea.details;
    document.getElementById('modal-income').textContent = '💰 ' + idea.earning;
    document.getElementById('modal-difficulty').textContent = 'Difficulty: ' + '⭐'.repeat(idea.difficulty);
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Focus the close button when modal opens for accessibility
    setTimeout(() => closeBtn.focus(), 100);
    
    currentModal = idea;
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
    
    // Return focus to the element that opened the modal
    if (lastFocusedElement) {
        lastFocusedElement.focus();
    }
    
    currentModal = null;
}

/* ============ TOOLS ============ */

function initTools() {
    initIncomeCalculator();
    initNicheFinder();
    initContentIdeas();
    initLinkFinder();
}

function initIncomeCalculator() {
    const btn = document.getElementById('calculate-income');
    
    btn.addEventListener('click', () => {
        const visitors = parseInt(document.getElementById('calc-visitors').value) || 0;
        const method = document.getElementById('calc-method').value;
        const resultEl = document.getElementById('income-result');
        
        if (visitors === 0) {
            showToast('Enter your monthly visitors first!');
            return;
        }
        
        // Earnings estimates per method
        const estimates = {
            adsense: { low: 0.5, high: 3 }, // per 1000 visitors
            affiliate: { low: 5, high: 50 },
            newsletter: { low: 1, high: 20 }, // per subscriber
            services: { low: 50, high: 500 } // per client
        };
        
        const est = estimates[method];
        const methodNames = {
            adsense: 'AdSense',
            affiliate: 'Affiliate Marketing',
            newsletter: 'Newsletter Sponsorship',
            services: 'Fiverr Services'
        };
        
        const lowEarning = Math.round(visitors * est.low / 1000);
        const highEarning = Math.round(visitors * est.high / 1000);
        
        resultEl.innerHTML = `
            <strong>${methodNames[method]}</strong><br>
            Estimated: $${lowEarning} - $${highEarning}/month<br>
            <small>Based on ${visitors.toLocaleString()} monthly visitors</small>
        `;
        
        showToast('Income estimate calculated!');
    });
}

function initNicheFinder() {
    const btn = document.getElementById('find-niche');
    
    const nicheIdeas = {
        tech: ['AI Tools Reviews', 'SaaS Comparisons', 'Coding Tutorials', 'Tech News'],
        finance: ['Personal Finance Tips', 'Investment Strategies', 'Crypto Guides', 'Tax Advice'],
        lifestyle: ['Home Organization', 'Productivity Hacks', 'Self-Improvement', 'Hobby Guides'],
        business: ['Startup Stories', 'Marketing Tips', 'Side Hustles', 'Entrepreneurship'],
        health: ['Fitness Routines', 'Mental Health', 'Diet Plans', 'Wellness Tips']
    };
    
    btn.addEventListener('click', () => {
        const interest = document.getElementById('interest-input').value.toLowerCase();
        const resultsEl = document.getElementById('niche-results');
        
        if (!interest) {
            showToast('Enter your interest or skill first!');
            return;
        }
        
        // Find matching categories
        let suggestions = [];
        
        Object.entries(nicheIdeas).forEach(([category, ideas]) => {
            if (category.includes(interest) || interest.includes(category)) {
                suggestions.push(...ideas);
            }
            // Also check individual ideas
            ideas.forEach(idea => {
                if (idea.toLowerCase().includes(interest) || interest.includes(idea.split(' ')[0].toLowerCase())) {
                    suggestions.push(idea);
                }
            });
        });
        
        // Fallback suggestions based on interest keywords
        if (suggestions.length === 0) {
            suggestions = [
                `${interest} Reviews & Guides`,
                `Best ${interest} Products`,
                `${interest} Tips & Tricks`,
                `${interest} for Beginners`
            ];
        }
        
        resultsEl.innerHTML = suggestions.slice(0, 4).map(s => `• ${s}`).join('<br>');
        showToast('Niche ideas generated!');
    });
}

function initContentIdeas() {
    const btn = document.getElementById('generate-ideas');
    
    const contentIdeas = {
        tech: [
            '10 Best AI Tools for Productivity in 2026',
            'How to Build Your First Website (Step-by-Step)',
            'Top 5 Programming Languages for Beginners',
            'The Future of Web Development',
            'Why Every Business Needs a Chatbot'
        ],
        finance: [
            'How to Start Investing with $100',
            'Best High-Yield Savings Accounts 2026',
            'Side Hustles That Actually Make Money',
            'How to Pay Off Debt Fast',
            'Retirement Planning for Beginners'
        ],
        lifestyle: [
            'Morning Routine That Changed My Life',
            '10 Habits of Highly Productive People',
            'How to Stay Motivated Every Day',
            'Best Budget App for Tracking Expenses',
            'Declutter Your Home in 30 Days'
        ],
        business: [
            'How to Start a Online Business in 2026',
            'Best Email Marketing Platforms Compared',
            'How to Get Your First 100 Customers',
            'Top Growth Hacking Strategies',
            'Building a Personal Brand That Sells'
        ],
        health: [
            '30-Day Fitness Challenge for Beginners',
            'Healthy Meal Prep Ideas on a Budget',
            'How to Build a Sustainable Workout Routine',
            'Best Meditation Apps for Anxiety',
            'Weight Loss Tips That Actually Work'
        ]
    };
    
    btn.addEventListener('click', () => {
        const category = document.getElementById('content-category').value;
        const listEl = document.getElementById('idea-list');
        
        const ideas = contentIdeas[category];
        listEl.innerHTML = ideas.map((idea, i) => `${i + 1}. ${idea}`).join('<br>');
        
        showToast('Content ideas generated!');
    });
}

function initLinkFinder() {
    const btn = document.getElementById('find-links');
    
    const affiliatePrograms = {
        tech: [
            'Amazon Associates - All tech products',
            'TechRewards - Tech accessories',
            'ShareASale - Multiple tech merchants',
            'Commission Junction - Premium brands'
        ],
        finance: [
            'Amazon Associates - Finance books',
            'ClickBank - Financial products',
            'MaxMyInterest - Banking referrals',
            'Credit Karma - Credit tools'
        ],
        lifestyle: [
            'Amazon Associates - Home & lifestyle',
            'Target Partners - Home goods',
            'Wayfair Associates - Furniture',
            'Etsy Affiliate - Handmade items'
        ],
        business: [
            'Amazon Associates - Business books',
            'HubSpot Affiliate - Marketing tools',
            'Shopify Affiliate - E-commerce platform',
            'Canva Teams - Design platform'
        ],
        health: [
            'Amazon Associates - Health products',
            'Fitbits - Fitness trackers',
            'Gymshark - Athletic wear',
            'MyFitnessPal - Nutrition tracking'
        ]
    };
    
    // Add generic programs for all niches
    const genericPrograms = [
        'Amazon Associates - Universal, all niches',
        'ShareASale - 3000+ merchants',
        'CJ Affiliate - Major brands',
        'Impact - Premium partnerships'
    ];
    
    btn.addEventListener('click', () => {
        const niche = document.getElementById('niche-link').value.toLowerCase();
        const resultsEl = document.getElementById('link-results');
        
        if (!niche) {
            showToast('Enter your niche first!');
            return;
        }
        
        // Find niche-specific programs
        let programs = [];
        
        Object.entries(affiliatePrograms).forEach(([category, progs]) => {
            if (niche.includes(category) || category.includes(niche)) {
                programs.push(...progs);
            }
        });
        
        // Add generic if no specific found
        if (programs.length === 0) {
            programs = genericPrograms;
        }
        
        resultsEl.innerHTML = programs.slice(0, 4).map(p => `🔗 ${p}`).join('<br>');
        showToast('Affiliate programs found!');
    });
}

/* ============ SCROLL CTA ============ */

function initScrollCTA() {
    const btn = document.getElementById('scroll-cta');
    
    btn.addEventListener('click', () => {
        const section = document.getElementById('ideas-section');
        section.scrollIntoView({ behavior: 'smooth' });
    });
}

/* ============ RANDOM IDEA ============ */

function initRandomIdea() {
    const btn = document.getElementById('random-idea');
    
    btn.addEventListener('click', () => {
        const randomIdea = moneyIdeas[Math.floor(Math.random() * moneyIdeas.length)];
        openModal(randomIdea);
        showToast('🎲 You got: ' + randomIdea.title);
    });
}

/* ============ TOAST ============ */

function showToast(message) {
    const toast = document.getElementById('toast');
    const messageEl = document.getElementById('toast-message');
    
    messageEl.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}
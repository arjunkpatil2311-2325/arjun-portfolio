import React, { useState, useRef, useEffect } from 'react';
import { 
  Send, 
  Sparkles, 
  CheckCheck, 
  Utensils, 
  RotateCcw, 
  Plus, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Coffee 
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
  quickReplies?: string[];
  menuItems?: Array<{
    name: string;
    category: string;
    price: number;
    description: string;
  }>;
  orderSummary?: {
    items: Array<{ name: string; price: number; qty: number }>;
    total: number;
  };
}

interface RestaurantBotDemoProps {
  onGetBotClick: () => void;
}

export const RestaurantBotDemo: React.FC<RestaurantBotDemoProps> = ({ onGetBotClick }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'bot',
      text: '👋 Welcome to The Urban Cafe! I am your 24/7 digital assistant. How can I help you today?',
      time: 'Just now',
      quickReplies: ['View Menu', 'Opening Hours', 'Location', 'Order Enquiry', 'Table Enquiry']
    }
  ]);

  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [cart, setCart] = useState<Array<{ name: string; price: number; qty: number }>>([]);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  const menuDatabase = [
    { name: 'Cold Brew Tonic', category: 'Coffee', price: 5.5, description: 'Single-origin espresso, elderflower tonic, citrus peel.' },
    { name: 'Velvet Flat White', category: 'Coffee', price: 4.8, description: 'Double ristretto with micro-foamed organic oat milk.' },
    { name: 'Truffle Avocado Sourdough', category: 'Food', price: 11.5, description: 'Crushed avocado, shaved black truffle, organic poached egg.' },
    { name: 'Smoked Salmon Brioche', category: 'Food', price: 13.0, description: 'Wild smoked salmon, herbed cream cheese, pickled capers.' },
    { name: 'Matcha Basque Cheesecake', category: 'Bakery', price: 7.0, description: 'Uji ceremonial grade matcha with caramelized crust.' }
  ];

  // Auto-scroll chat to bottom
  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const addBotResponse = (
    text: string, 
    quickReplies?: string[], 
    menuItems?: Message['menuItems'], 
    orderSummary?: Message['orderSummary']
  ) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          sender: 'bot',
          text,
          time: getCurrentTime(),
          quickReplies,
          menuItems,
          orderSummary
        }
      ]);
    }, 450);
  };

  const handleUserReply = (choice: string) => {
    // Add user message
    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: choice,
      time: getCurrentTime()
    };
    setMessages((prev) => [...prev, userMsg]);

    const lower = choice.toLowerCase();

    // Contextual responses based on choice
    if (lower.includes('view menu') || lower.includes('menu') || lower.includes('food') || lower.includes('drinks')) {
      addBotResponse(
        'Here are today’s curated favorites from our artisan kitchen. Tap any item to add it to your order enquiry:',
        ['Order Enquiry', 'Opening Hours', 'Location', 'Reset Chat'],
        menuDatabase
      );
    } else if (lower.includes('opening hours') || lower.includes('hours') || lower.includes('open') || lower.includes('timings')) {
      addBotResponse(
        '⏰ **The Urban Cafe Timings:**\n• Mon – Fri: 7:30 AM – 9:00 PM\n• Sat – Sun: 8:00 AM – 10:00 PM\n\nKitchen closes 45 mins prior to closing. We serve breakfast all day!',
        ['View Menu', 'Location', 'Table Enquiry', 'Order Enquiry']
      );
    } else if (lower.includes('location') || lower.includes('address') || lower.includes('where') || lower.includes('directions')) {
      addBotResponse(
        '📍 **Location & Parking:**\n142 Heritage Boulevard, Downtown Arts District.\n\n🚗 Dedicated customer parking available in rear lot. We are just a 2-minute walk from Central Metro Station.',
        ['View Menu', 'Opening Hours', 'Call Staff', 'Order Enquiry']
      );
    } else if (lower.includes('table enquiry') || lower.includes('reservation') || lower.includes('book')) {
      addBotResponse(
        '🪑 We welcome walk-ins anytime! For parties of 5 or more, or special brunch celebrations, we hold tables with 2 hours advance notice.\n\nWould you like our host to reserve a table for you?',
        ['Yes, Book Table', 'View Menu', 'Call Staff']
      );
    } else if (lower.includes('book table')) {
      addBotResponse(
        '🎉 Perfect! Please provide your Party Size & Preferred Time, or click below to directly confirm with our reservation host on WhatsApp.',
        ['Call Staff', 'View Menu', 'Reset Chat']
      );
    } else if (lower.includes('order enquiry') || lower.includes('order') || lower.includes('cart')) {
      if (cart.length === 0) {
        addBotResponse(
          'Your order basket is currently empty! Please choose items from our menu first:',
          ['View Menu', 'Opening Hours', 'Location']
        );
      } else {
        const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
        addBotResponse(
          '🛍️ **Your Order Enquiry is Ready:**\nHere is your receipt preview. Once confirmed, this is dispatched immediately to our kitchen terminal:',
          ['Confirm Order via WhatsApp', 'Add More Items', 'Reset Chat'],
          undefined,
          { items: cart, total }
        );
      }
    } else if (lower.includes('confirm order')) {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
      addBotResponse(
        '✅ Order received! In a live deployment, this immediately sends a formatted ticket to the cafe’s WhatsApp & POS printer with zero aggregator fees. Customers love the instant speed!',
        ['View Menu', 'Reset Chat']
      );
    } else if (lower.includes('call staff') || lower.includes('contact') || lower.includes('human')) {
      addBotResponse(
        '📞 Connecting to our manager on duty: +91 98765 43210. In a live system, this sends an instant notification to floor staff.',
        ['View Menu', 'Opening Hours', 'Reset Chat']
      );
    } else if (lower.includes('reset')) {
      setCart([]);
      setMessages([
        {
          id: Date.now().toString(),
          sender: 'bot',
          text: '👋 Welcome back to The Urban Cafe! How can I assist you right now?',
          time: getCurrentTime(),
          quickReplies: ['View Menu', 'Opening Hours', 'Location', 'Order Enquiry', 'Table Enquiry']
        }
      ]);
    } else {
      // General NLP fallback
      addBotResponse(
        `Got it! I understand you're asking about "${choice}". Our automated bot can be programmed with all your cafe's specific FAQs, catering policies, or wifi passwords!`,
        ['View Menu', 'Opening Hours', 'Location', 'Order Enquiry']
      );
    }
  };

  const handleAddItemToCart = (item: { name: string; price: number }) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.name === item.name);
      if (existing) {
        return prev.map((i) => (i.name === item.name ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { name: item.name, price: item.price, qty: 1 }];
    });

    // Provide immediate feedback in bot
    addBotResponse(
      `Added 1x **${item.name}** ($${item.price.toFixed(2)}) to your order tray! Would you like to review your order or add more?`,
      ['Order Enquiry', 'View Menu', 'Opening Hours']
    );
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    const text = inputText;
    setInputText('');
    handleUserReply(text);
  };

  return (
    <section id="bot-demo" className="py-24 sm:py-32 relative bg-[#08090D] overflow-hidden border-t border-white/5">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] radial-glow-cyan pointer-events-none blur-3xl opacity-30" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] radial-glow pointer-events-none blur-3xl opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Business Benefits for Cafes & Restaurants */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-mono text-[#42D9FF] mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>INTERACTIVE LIVE DEMONSTRATION</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F5F5F7] tracking-tight leading-tight">
                YOUR BUSINESS CAN HAVE{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#42D9FF] via-[#9B7BFF] to-[#7952F5]">
                  ITS OWN ASSISTANT.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-[#9699A8] mt-4 leading-relaxed font-normal">
                Imagine your customers getting instant answers, browsing today’s specials, and placing orders on WhatsApp 24/7 while you focus on running your kitchen and welcoming guests.
              </p>
            </div>

            {/* Core Value Pillars for Restaurant Owners */}
            <div className="space-y-4">
              <div className="p-4 rounded-2xl glass-panel border-white/5 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Save 25–30% in Aggregator Commissions</h4>
                  <p className="text-xs text-[#9699A8] mt-0.5">
                    Third-party delivery apps eat up your profits. A direct WhatsApp ordering bot routes orders straight to you with 0% commission fees.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl glass-panel border-white/5 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#42D9FF]/20 text-[#42D9FF] flex items-center justify-center shrink-0 border border-[#42D9FF]/30">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Zero Missed Phone Calls at Peak Hours</h4>
                  <p className="text-xs text-[#9699A8] mt-0.5">
                    During a busy lunch rush, staff cannot always pick up the phone. The bot instantly answers menus, directions, allergens, and reservation queries.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl glass-panel border-white/5 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#9B7BFF]/20 text-[#9B7BFF] flex items-center justify-center shrink-0 border border-[#9B7BFF]/30">
                  <Utensils className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">No App Downloads or Login Passwords</h4>
                  <p className="text-xs text-[#9699A8] mt-0.5">
                    Customers hate downloading another app. With WhatsApp, 100% of your guests already have the app installed on their phone.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={onGetBotClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#9B7BFF] to-[#42D9FF] text-white font-bold text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(155,123,255,0.4)] hover:scale-105 transition-all"
              >
                <span>Get a Bot for My Business</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <span className="text-xs text-[#9699A8] font-mono">
                Custom built & deployed in 3–5 days
              </span>
            </div>
          </div>

          {/* Right Column: The WhatsApp-Inspired Phone Interface */}
          <div className="lg:col-span-6 flex justify-center">
            
            {/* Phone Bezel Container */}
            <div className="w-full max-w-[390px] h-[640px] rounded-[44px] bg-[#0C0E14] border-[7px] border-[#222533] shadow-[0_25px_70px_rgba(0,0,0,0.85)] flex flex-col overflow-hidden relative">
              
              {/* Dynamic Island / Notch */}
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-30" />

              {/* WhatsApp App Header */}
              <div className="bg-[#10131E] px-4 pt-7 pb-3 border-b border-white/10 flex items-center justify-between z-20 shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#9B7BFF] to-[#42D9FF] p-[1px]">
                    <div className="w-full h-full bg-[#08090D] rounded-full flex items-center justify-center">
                      <Coffee className="w-4 h-4 text-[#42D9FF]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-white tracking-wide">
                        The Urban Cafe
                      </span>
                      <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 text-[9px] text-white flex items-center justify-center font-bold">
                        ✓
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Online • AI Assistant</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleUserReply('Reset')}
                    title="Reset conversation"
                    className="p-1.5 rounded-lg bg-white/5 text-[#9699A8] hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Chat Message Scrollable Viewport */}
              <div className="flex-1 p-3.5 overflow-y-auto space-y-3.5 chat-scroll bg-[#08090D]/90 relative">
                
                {/* Security notice pill */}
                <div className="text-center my-1">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/[0.04] text-[9px] text-[#9699A8] font-mono border border-white/5">
                    🔒 Messages are end-to-end simulated for demo
                  </span>
                </div>

                {/* Render Messages */}
                {messages.map((msg) => {
                  const isBot = msg.sender === 'bot';
                  return (
                    <div
                      key={msg.id}
                      className={`flex flex-col ${isBot ? 'items-start' : 'items-end'}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs shadow-md ${
                          isBot
                            ? 'bg-[#161926] text-[#F5F5F7] rounded-tl-none border border-white/10'
                            : 'bg-gradient-to-r from-[#9B7BFF] to-[#7952F5] text-white rounded-tr-none'
                        }`}
                      >
                        <p className="whitespace-pre-line leading-relaxed">{msg.text}</p>

                        {/* Interactive Menu Items inside the message */}
                        {msg.menuItems && (
                          <div className="mt-3 space-y-2 pt-2 border-t border-white/10">
                            {msg.menuItems.map((item) => (
                              <div
                                key={item.name}
                                className="p-2 rounded-xl bg-black/40 border border-white/5 flex flex-col gap-1"
                              >
                                <div className="flex items-center justify-between">
                                  <span className="font-semibold text-white">{item.name}</span>
                                  <span className="font-mono text-[#42D9FF] font-bold">
                                    ${item.price.toFixed(2)}
                                  </span>
                                </div>
                                <p className="text-[10px] text-[#9699A8] leading-tight">
                                  {item.description}
                                </p>
                                <button
                                  onClick={() => handleAddItemToCart(item)}
                                  className="mt-1 self-start inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#9B7BFF]/20 text-[#9B7BFF] hover:bg-[#9B7BFF] hover:text-white text-[10px] font-semibold transition-colors"
                                >
                                  <Plus className="w-3 h-3" />
                                  <span>Add to Order</span>
                                </button>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Order Summary receipt preview */}
                        {msg.orderSummary && (
                          <div className="mt-3 p-2.5 rounded-xl bg-black/60 border border-emerald-500/30 text-[11px] font-mono space-y-1.5">
                            <div className="text-emerald-400 font-bold border-b border-white/10 pb-1">
                              RECEIPT PREVIEW:
                            </div>
                            {msg.orderSummary.items.map((it, idx) => (
                              <div key={idx} className="flex justify-between text-white/90">
                                <span>{it.qty}x {it.name}</span>
                                <span>${(it.price * it.qty).toFixed(2)}</span>
                              </div>
                            ))}
                            <div className="border-t border-white/10 pt-1 flex justify-between font-bold text-white">
                              <span>Estimated Total:</span>
                              <span className="text-[#42D9FF]">${msg.orderSummary.total.toFixed(2)}</span>
                            </div>
                          </div>
                        )}

                        <div
                          className={`flex items-center justify-end gap-1 mt-1 text-[9px] ${
                            isBot ? 'text-[#9699A8]' : 'text-white/70'
                          }`}
                        >
                          <span>{msg.time}</span>
                          {!isBot && <CheckCheck className="w-3 h-3 text-[#42D9FF]" />}
                        </div>
                      </div>

                      {/* Quick-reply buttons attached to bot messages */}
                      {msg.quickReplies && (
                        <div className="flex flex-wrap gap-1.5 mt-2 max-w-[92%]">
                          {msg.quickReplies.map((reply) => (
                            <button
                              key={reply}
                              onClick={() => handleUserReply(reply)}
                              className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-[#10121A] text-[#42D9FF] border border-[#42D9FF]/30 hover:bg-[#42D9FF] hover:text-black transition-all shadow-sm"
                            >
                              {reply}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex items-center gap-1.5 bg-[#161926] px-3.5 py-2 rounded-2xl rounded-tl-none border border-white/10 w-16">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9B7BFF] animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9B7BFF] animate-bounce [animation-delay:0.15s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9B7BFF] animate-bounce [animation-delay:0.3s]" />
                  </div>
                )}

                <div ref={chatBottomRef} />
              </div>

              {/* Chat Text Input Box */}
              <form
                onSubmit={handleFormSubmit}
                className="p-2.5 bg-[#10131E] border-t border-white/10 flex items-center gap-2 shrink-0 z-20"
              >
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Type a question (e.g. menu, hours)..."
                  className="flex-1 bg-[#08090D] text-xs text-white px-3 py-2 rounded-xl border border-white/10 focus:outline-none focus:border-[#42D9FF] placeholder:text-[#9699A8]/60"
                />
                <button
                  type="submit"
                  disabled={!inputText.trim()}
                  className="w-8 h-8 rounded-xl bg-gradient-to-r from-[#9B7BFF] to-[#42D9FF] text-white flex items-center justify-center disabled:opacity-40 transition-opacity"
                  aria-label="Send message"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

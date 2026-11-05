import React, { useState, useRef, useEffect } from 'react';
import { Send, RotateCcw, Plus, CheckCheck, Coffee, ArrowUpRight, ShieldCheck, Zap } from 'lucide-react';

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
      text: 'Welcome to The Urban Cafe digital concierge. How may I assist your visit or order today?',
      time: 'Just now',
      quickReplies: ['View Menu', 'Opening Hours', 'Location', 'Order Enquiry', 'Table Enquiry']
    }
  ]);

  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [cart, setCart] = useState<Array<{ name: string; price: number; qty: number }>>([]);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  const menuDatabase = [
    { name: 'Cold Brew Tonic', category: 'Coffee', price: 5.5, description: 'Single-origin espresso, elderflower tonic, citrus.' },
    { name: 'Velvet Flat White', category: 'Coffee', price: 4.8, description: 'Double ristretto with micro-foamed oat milk.' },
    { name: 'Truffle Avocado Toast', category: 'Food', price: 11.5, description: 'Organic sourdough, shaved black truffle, poached egg.' },
    { name: 'Matcha Basque Tart', category: 'Bakery', price: 6.5, description: 'Ceremonial grade Uji matcha, caramelized crust.' }
  ];

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
    }, 380);
  };

  const handleUserReply = (choice: string) => {
    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: choice,
      time: getCurrentTime()
    };
    setMessages((prev) => [...prev, userMsg]);

    const lower = choice.toLowerCase();

    if (lower.includes('view menu') || lower.includes('menu') || lower.includes('food') || lower.includes('drinks')) {
      addBotResponse(
        'Here is today’s curated seasonal menu. Tap any item to add it to your order basket:',
        ['Order Enquiry', 'Opening Hours', 'Location', 'Reset Chat'],
        menuDatabase
      );
    } else if (lower.includes('opening hours') || lower.includes('hours') || lower.includes('timings')) {
      addBotResponse(
        'The Urban Cafe Timings:\n• Mon – Fri: 7:30 AM – 9:00 PM\n• Sat – Sun: 8:00 AM – 10:00 PM\n\nAll-day breakfast & specialty pour-overs served continuously.',
        ['View Menu', 'Location', 'Table Enquiry', 'Order Enquiry']
      );
    } else if (lower.includes('location') || lower.includes('address') || lower.includes('where')) {
      addBotResponse(
        'Location & Transit:\n142 Heritage Boulevard, Arts District.\n\nDedicated parking available in rear lot; 2-minute walk from Central Metro.',
        ['View Menu', 'Opening Hours', 'Table Enquiry']
      );
    } else if (lower.includes('table enquiry') || lower.includes('reservation') || lower.includes('book')) {
      addBotResponse(
        'We welcome walk-ins anytime. For groups of 5+ or weekend brunch, please let us know your preferred time and party size.',
        ['View Menu', 'Opening Hours', 'Reset Chat']
      );
    } else if (lower.includes('order enquiry') || lower.includes('order') || lower.includes('cart')) {
      if (cart.length === 0) {
        addBotResponse(
          'Your order basket is currently empty. Please select items from our menu first:',
          ['View Menu', 'Opening Hours', 'Location']
        );
      } else {
        const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
        addBotResponse(
          'Receipt Preview:\nHere is your calculated summary ready for immediate kitchen ticket dispatch:',
          ['Confirm Order', 'View Menu', 'Reset Chat'],
          undefined,
          { items: cart, total }
        );
      }
    } else if (lower.includes('confirm order')) {
      addBotResponse(
        'Order Confirmed. In a live deployment, this immediately prints an order slip in your kitchen and updates your inventory with 0% third-party aggregator commissions.',
        ['View Menu', 'Reset Chat']
      );
    } else if (lower.includes('reset')) {
      setCart([]);
      setMessages([
        {
          id: Date.now().toString(),
          sender: 'bot',
          text: 'Welcome back to The Urban Cafe digital concierge. How may I assist you?',
          time: getCurrentTime(),
          quickReplies: ['View Menu', 'Opening Hours', 'Location', 'Order Enquiry', 'Table Enquiry']
        }
      ]);
    } else {
      addBotResponse(
        `Understood. You inquired about "${choice}". In your custom business bot, all specific FAQs, allergies, and policies are indexed with natural response matching.`,
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

    addBotResponse(
      `Added 1x ${item.name} ($${item.price.toFixed(2)}) to your order tray. Ready to checkout or add more?`,
      ['Order Enquiry', 'View Menu', 'Opening Hours']
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    const text = inputText;
    setInputText('');
    handleUserReply(text);
  };

  return (
    <section id="bot-demo" className="py-20 sm:py-28 border-b border-[#C9C8C0] bg-[#F2F1EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Editorial Value Proposition */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            <div className="text-[11px] font-mono text-[#7555FF] tracking-wider uppercase">
              [ 04 // AUTOMATION PROTOTYPE ]
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] leading-[1.08] tracking-tight">
              WHAT IF YOUR BUSINESS NEVER MISSED A CUSTOMER ENQUIRY?
            </h2>

            <p className="text-base sm:text-lg text-[#73736D] leading-relaxed font-normal">
              Intelligent customer experiences that help businesses respond faster and work smarter. Give your guests immediate menu details, bookings, and ordering on WhatsApp without adding staff friction.
            </p>

            {/* Direct Benefits for Food & Cafe Venues */}
            <div className="space-y-3 pt-2">
              <div className="p-4 bg-[#F9F8F3] border border-[#C9C8C0] rounded-xs flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-[#7555FF] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-mono font-bold text-[#111111] uppercase">
                    0% Commission Fees
                  </div>
                  <div className="text-xs text-[#73736D] mt-0.5">
                    Avoid losing 25–30% of each ticket to delivery apps. Orders route directly to your staff.
                  </div>
                </div>
              </div>

              <div className="p-4 bg-[#F9F8F3] border border-[#C9C8C0] rounded-xs flex items-start gap-3">
                <Zap className="w-4 h-4 text-[#43BFD0] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-mono font-bold text-[#111111] uppercase">
                    Zero Missed Phone Calls at Rush Hour
                  </div>
                  <div className="text-xs text-[#73736D] mt-0.5">
                    When the counter is packed, the bot handles directions, dietary questions, and bookings automatically.
                  </div>
                </div>
              </div>
            </div>

            {/* Direct CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onGetBotClick}
                className="btn-tactile px-6 py-4 text-xs font-mono font-semibold tracking-wider uppercase inline-flex items-center justify-center gap-2 rounded-xs"
              >
                <span>GET YOUR OWN BUSINESS BOT</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono text-[#73736D]">
                Deployed in 3–5 working days
              </span>
            </div>
          </div>

          {/* Right Column: Tactile E-Ink Smartphone Simulator */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-[400px] h-[600px] bg-[#FFFFFF] border-2 border-[#111111] shadow-[6px_6px_0px_#111111] rounded-xs flex flex-col overflow-hidden relative">

              {/* Phone Header */}
              <div className="p-3.5 bg-[#F9F8F3] border-b border-[#C9C8C0] flex items-center justify-between shrink-0">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xs bg-[#111111] text-[#F2F1EB] flex items-center justify-center">
                    <Coffee className="w-4 h-4 text-[#43BFD0]" />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-bold text-[#111111]">
                      The Urban Cafe
                    </div>
                    <div className="text-[10px] font-mono text-[#7555FF] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7555FF]" />
                      <span>Online • Autonomous Concierge</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleUserReply('Reset')}
                  title="Reset demo"
                  className="p-1.5 border border-[#C9C8C0] text-[#73736D] hover:text-[#111111] hover:border-[#111111] rounded-xs text-xs font-mono"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Chat Viewport */}
              <div className="flex-1 p-3.5 overflow-y-auto space-y-3 chat-scroll bg-[#F2F1EB]">
                {messages.map((msg) => {
                  const isBot = msg.sender === 'bot';
                  return (
                    <div
                      key={msg.id}
                      className={`flex flex-col ${isBot ? 'items-start' : 'items-end'}`}
                    >
                      <div
                        className={`max-w-[85%] p-3 text-xs font-mono border rounded-xs ${
                          isBot
                            ? 'bg-[#FFFFFF] text-[#111111] border-[#C9C8C0]'
                            : 'bg-[#111111] text-[#F2F1EB] border-[#111111]'
                          }`}
                      >
                        <p className="whitespace-pre-line leading-relaxed">{msg.text}</p>

                        {/* Interactive Menu Items inside Chat */}
                        {msg.menuItems && (
                          <div className="mt-3 space-y-2 pt-2 border-t border-[#C9C8C0]">
                            {msg.menuItems.map((item) => (
                              <div
                                key={item.name}
                                className="p-2 bg-[#F9F8F3] border border-[#C9C8C0] rounded-xs space-y-1"
                              >
                                <div className="flex justify-between items-center">
                                  <span className="font-bold text-[#111111]">{item.name}</span>
                                  <span className="font-bold text-[#7555FF]">${item.price.toFixed(2)}</span>
                                </div>
                                <div className="text-[10px] text-[#73736D] leading-tight">
                                  {item.description}
                                </div>
                                <button
                                  onClick={() => handleAddItemToCart(item)}
                                  className="mt-1 inline-flex items-center gap-1 px-2 py-0.5 bg-[#111111] text-[#F2F1EB] text-[10px] font-mono hover:bg-[#7555FF] transition-colors rounded-xs"
                                >
                                  <Plus className="w-3 h-3" />
                                  <span>Add to Basket</span>
                                </button>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Receipt Preview */}
                        {msg.orderSummary && (
                          <div className="mt-2.5 p-2 bg-[#F9F8F3] border border-[#C9C8C0] text-[11px] font-mono space-y-1">
                            <div className="font-bold border-b border-[#C9C8C0] pb-1 text-[#111111]">
                              KITCHEN SLIP PREVIEW:
                            </div>
                            {msg.orderSummary.items.map((it, idx) => (
                              <div key={idx} className="flex justify-between text-[#73736D]">
                                <span>{it.qty}x {it.name}</span>
                                <span>${(it.price * it.qty).toFixed(2)}</span>
                              </div>
                            ))}
                            <div className="border-t border-[#C9C8C0] pt-1 flex justify-between font-bold text-[#111111]">
                              <span>Total:</span>
                              <span className="text-[#7555FF]">${msg.orderSummary.total.toFixed(2)}</span>
                            </div>
                          </div>
                        )}

                        <div className="flex items-center justify-end gap-1 mt-1 text-[9px] text-[#73736D]">
                          <span>{msg.time}</span>
                          {!isBot && <CheckCheck className="w-3 h-3 text-[#43BFD0]" />}
                        </div>
                      </div>

                      {/* Quick Reply Pills */}
                      {msg.quickReplies && (
                        <div className="flex flex-wrap gap-1 mt-2 max-w-[95%]">
                          {msg.quickReplies.map((reply) => (
                            <button
                              key={reply}
                              onClick={() => handleUserReply(reply)}
                              className="px-2 py-1 text-[10px] font-mono bg-[#FFFFFF] text-[#111111] border border-[#C9C8C0] hover:border-[#111111] hover:bg-[#111111] hover:text-[#F2F1EB] transition-colors rounded-xs"
                            >
                              {reply}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}

                {isTyping && (
                  <div className="p-2.5 bg-[#FFFFFF] border border-[#C9C8C0] text-[10px] font-mono text-[#73736D] w-20 text-center rounded-xs">
                    typing...
                  </div>
                )}

                <div ref={chatBottomRef} />
              </div>

              {/* Message Input Form */}
              <form
                onSubmit={handleSubmit}
                className="p-2.5 bg-[#F9F8F3] border-t border-[#C9C8C0] flex items-center gap-2 shrink-0"
              >
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Type a query (menu, hours)..."
                  className="flex-1 bg-[#FFFFFF] border border-[#C9C8C0] text-xs font-mono px-3 py-2 text-[#111111] focus:outline-none focus:border-[#111111] rounded-xs placeholder:text-[#73736D]"
                />
                <button
                  type="submit"
                  disabled={!inputText.trim()}
                  className="btn-tactile p-2 rounded-xs disabled:opacity-40"
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

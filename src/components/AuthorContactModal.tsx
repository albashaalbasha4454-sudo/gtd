import React, { useState, useEffect } from 'react';
import {
  User,
  Phone,
  MessageCircle,
  Sparkles,
  Heart,
  Copy,
  Check,
  Award,
  BookOpen,
  GraduationCap,
  X,
  ExternalLink,
  HelpCircle,
  Share2,
  MousePointerClick
} from 'lucide-react';

interface AuthorContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  language?: 'ar' | 'en' | 'bilingual';
}

export const AuthorContactModal: React.FC<AuthorContactModalProps> = ({
  isOpen,
  onClose,
  language = 'ar'
}) => {
  const [copied, setCopied] = useState<boolean>(false);
  const phoneNumber = '0960648360';
  const internationalPhone = '+963960648360';
  const whatsappUrl = `https://wa.me/963960648360?text=${encodeURIComponent(
    'مرحباً زميلنا عمر ياسر (الباشا)، أود الاستفسار بخصوص تلخيص وشرح المواد الأكاديمية...'
  )}`;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="author-modal-title"
    >
      <div
        className="bg-gradient-to-b from-[#051a1d] to-[#020d0f] border-2 border-amber-500/60 rounded-3xl max-w-2xl w-full p-5 sm:p-8 text-white shadow-2xl shadow-amber-950/50 relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-24 bg-gradient-to-b from-amber-500/25 via-red-500/10 to-transparent blur-2xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 sm:top-5 sm:left-5 p-2.5 rounded-full bg-teal-950/80 border border-teal-800 text-slate-300 hover:text-white hover:bg-[#8b0a1a] hover:rotate-90 transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-amber-400"
          aria-label="إغلاق النافذة"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Ribbon */}
        <div className="text-center space-y-3 pt-1">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 via-amber-400/30 to-amber-500/20 border border-amber-400/60 text-amber-300 text-xs sm:text-sm font-black shadow-inner">
            <Sparkles className="w-4 h-4 text-amber-300 animate-spin" />
            <span>بصمة إبداع وإعداد أكاديمي متميز</span>
          </div>

          <h2
            id="author-modal-title"
            className="text-xl sm:text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-white to-amber-400"
          >
            تم إنشاء وتطوير هذا الموقع بواسطة:
          </h2>

          {/* Author Name Tag */}
          <div className="py-2">
            <div className="inline-block px-6 py-2.5 rounded-2xl bg-gradient-to-r from-[#8b0a1a] via-[#a81023] to-[#8b0a1a] border-2 border-amber-400/80 shadow-2xl shadow-red-950/60 transform hover:scale-105 transition-transform">
              <span className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-wide flex items-center justify-center gap-2">
                <span>الطالب: عمر ياسر (الباشا)</span>
                <span className="text-amber-300 animate-pulse">⭐</span>
              </span>
            </div>
          </div>
        </div>

        {/* Media-style Body Content */}
        <div className="mt-5 space-y-4 text-xs sm:text-sm leading-relaxed">
          {/* Main Broadcast Notice */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#07252a]/95 border border-teal-700/80 shadow-inner space-y-2.5 text-slate-200">
            <div className="flex items-center gap-2 text-amber-300 font-extrabold text-sm sm:text-base">
              <BookOpen className="w-5 h-5 text-amber-400 shrink-0" />
              <span>خدمة إعداد الشروحات والملخصات الأكاديمية الاحترافية</span>
            </div>
            <p className="text-slate-200 text-justify font-medium leading-relaxed">
              «إلى جميع الزملاء والطلبة الأعزاء.. إذا كنتم بحاجة إلى <strong>ملخص شامل، بنوك أسئلة مؤتمتة، خرائط ذهنية ذكية، أو شرح مبسط وممنهج</strong> لأي مادة ومقرر دراسي في كليتكم، يسعدني ويشرفني تقديم كامل الدعم والمساعدة الأكاديمية لكم بأعلى معايير الإتقان والتنسيق.»
            </p>
          </div>

          {/* Contact Box with Phone Number */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-950/50 via-red-950/50 to-teal-950/50 border-2 border-amber-500/60 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500/30 to-red-500/30 border border-amber-400/60 flex items-center justify-center text-amber-300 shrink-0 shadow-lg">
                <Phone className="w-6 h-6 animate-bounce text-amber-300" />
              </div>
              <div className="text-center sm:text-right">
                <span className="text-xs text-amber-200 block font-bold">
                  للتواصل المباشر والطلب (اتصال / واتساب):
                </span>
                <span className="text-2xl sm:text-3xl font-black font-mono text-white tracking-widest text-amber-300 drop-shadow-md">
                  {phoneNumber}
                </span>
              </div>
            </div>

            {/* Quick Action Buttons for Phone & Whatsapp */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={handleCopyPhone}
                className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-teal-900 hover:bg-teal-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 border border-teal-600 transition-all shadow-md active:scale-95"
                title="نسخ رقم الهاتف"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-amber-300" />}
                <span>{copied ? 'تم النسخ!' : 'نسخ الرقم'}</span>
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/60 transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>محادثة واتساب</span>
              </a>
            </div>
          </div>

          {/* Heartfelt Wishes & Du'aa Request */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div className="p-3.5 rounded-2xl bg-[#031316] border border-teal-900 flex items-start gap-2.5">
              <GraduationCap className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-extrabold text-amber-200 block text-xs">أمنيات التوفيق والنجاح:</span>
                <p className="text-[11px] text-slate-300 leading-snug mt-0.5">
                  مع أصدق وأطيب تمنياتي لكم جميعاً بدوام التوفيق، التميز، وأعلى المراتب والدرجات بإذن الله تعالى.
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#031316] border border-amber-900/50 flex items-start gap-2.5">
              <Heart className="w-5 h-5 text-rose-400 shrink-0 mt-0.5 fill-rose-500/30" />
              <div>
                <span className="font-extrabold text-rose-200 block text-xs">دعوة صالحة بظهر الغيب:</span>
                <p className="text-[11px] text-slate-300 leading-snug mt-0.5">
                  «إذا استفدتم من هذا الشرح وهذا الجهد في دراستكم، فلا تنسونا ووالدينا من صالح دعائكم.»
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Dismiss Button */}
        <div className="mt-6 pt-3 border-t border-teal-900/80 flex justify-center">
          <button
            onClick={onClose}
            className="px-8 py-2.5 rounded-2xl bg-gradient-to-r from-[#8b0a1a] via-[#a81023] to-[#8b0a1a] hover:from-[#700714] hover:to-[#8b0a1a] text-white font-black text-xs sm:text-sm shadow-xl shadow-red-950/50 border border-red-400/50 transition-all hover:scale-105 active:scale-95"
          >
            متابعة الدراسة والتصفح ✨
          </button>
        </div>
      </div>
    </div>
  );
};

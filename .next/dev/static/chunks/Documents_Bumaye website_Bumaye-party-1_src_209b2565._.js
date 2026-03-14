(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navbar",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/node_modules/lucide-react/dist/esm/icons/instagram.js [app-client] (ecmascript) <export default as Instagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const Navbar = ({ logoUrl })=>{
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            setMounted(true);
        }
    }["Navbar.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleScroll = {
                "Navbar.useEffect.handleScroll": ()=>setScrolled(window.scrollY > 50)
            }["Navbar.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll);
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            document.body.style.overflow = isOpen ? 'hidden' : '';
            return ({
                "Navbar.useEffect": ()=>{
                    document.body.style.overflow = '';
                }
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], [
        isOpen
    ]);
    const smoothScrollTo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Navbar.useCallback[smoothScrollTo]": (id)=>{
            const el = document.getElementById(id);
            if (el) {
                const offset = 80;
                const top = el.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({
                    top,
                    behavior: 'smooth'
                });
            }
        }
    }["Navbar.useCallback[smoothScrollTo]"], []);
    const handleNavClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Navbar.useCallback[handleNavClick]": (e, id)=>{
            e.preventDefault();
            if (isOpen) {
                setIsOpen(false);
                setTimeout({
                    "Navbar.useCallback[handleNavClick]": ()=>smoothScrollTo(id)
                }["Navbar.useCallback[handleNavClick]"], 400);
            } else {
                smoothScrollTo(id);
            }
        }
    }["Navbar.useCallback[handleNavClick]"], [
        isOpen,
        smoothScrollTo
    ]);
    const scrollToEvents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Navbar.useCallback[scrollToEvents]": (e)=>{
            e.preventDefault();
            if (isOpen) {
                setIsOpen(false);
                setTimeout({
                    "Navbar.useCallback[scrollToEvents]": ()=>smoothScrollTo('events')
                }["Navbar.useCallback[scrollToEvents]"], 400);
            } else {
                smoothScrollTo('events');
            }
        }
    }["Navbar.useCallback[scrollToEvents]"], [
        isOpen,
        smoothScrollTo
    ]);
    // Mobile menu rendered via portal to escape nav stacking context
    const mobileMenu = mounted && isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            transition: {
                duration: 0.3
            },
            className: "fixed inset-0 z-[9999] bg-bumaye-black flex flex-col items-center justify-center text-center",
            style: {
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                position: 'fixed'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "absolute top-6 right-6 text-white/60 hover:text-bumaye-orange transition-colors p-2",
                    onClick: ()=>setIsOpen(false),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                        size: 32
                    }, void 0, false, {
                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Navbar.tsx",
                        lineNumber: 72,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Navbar.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-8 font-display text-5xl uppercase tracking-tighter",
                    children: [
                        'Events',
                        'About',
                        'Gallery',
                        'Contact'
                    ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                            initial: {
                                opacity: 0,
                                y: 30
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                delay: i * 0.08
                            },
                            href: `#${item.toLowerCase()}`,
                            onClick: (e)=>handleNavClick(e, item.toLowerCase()),
                            className: "hover:text-bumaye-orange transition-colors",
                            children: item
                        }, item, false, {
                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Navbar.tsx",
                            lineNumber: 78,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Navbar.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        delay: 0.4
                    },
                    className: "flex flex-col items-center gap-6 mt-14 w-full max-w-xs px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: scrollToEvents,
                            className: "w-full bg-bumaye-orange text-white py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-2xl shadow-bumaye-orange/40",
                            children: "TICKETS KOPEN"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Navbar.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://www.instagram.com/bumaye.nl",
                            target: "_blank",
                            rel: "noreferrer",
                            className: "p-4 bg-white/5 border border-white/10 rounded-full text-bumaye-orange hover:bg-bumaye-orange hover:text-white transition-all",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"], {
                                size: 28
                            }, void 0, false, {
                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Navbar.tsx",
                                lineNumber: 111,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Navbar.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Navbar.tsx",
                    lineNumber: 93,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, "mobile-menu", true, {
            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Navbar.tsx",
            lineNumber: 58,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Navbar.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)), document.body) : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: `fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-bumaye-black/90 backdrop-blur-xl py-4 border-b border-white/5' : 'bg-transparent py-6'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-6 flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#",
                            className: "flex items-center gap-2 h-8 md:h-10",
                            children: logoUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: logoUrl,
                                alt: "BUMAYE",
                                className: "h-full object-contain"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Navbar.tsx",
                                lineNumber: 124,
                                columnNumber: 24
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-display text-3xl tracking-tighter text-bumaye-orange",
                                children: "BUMAYE"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Navbar.tsx",
                                lineNumber: 124,
                                columnNumber: 95
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Navbar.tsx",
                            lineNumber: 123,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex items-center gap-8 font-display text-sm uppercase tracking-[0.15em]",
                            children: [
                                [
                                    'Events',
                                    'About',
                                    'Gallery',
                                    'Contact'
                                ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `#${item.toLowerCase()}`,
                                        onClick: (e)=>handleNavClick(e, item.toLowerCase()),
                                        className: "hover:text-bumaye-orange transition-colors",
                                        children: item
                                    }, item, false, {
                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Navbar.tsx",
                                        lineNumber: 130,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-4 w-[1px] bg-white/20 mx-2"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Navbar.tsx",
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://www.instagram.com/bumaye.nl",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "p-2 glass rounded-full hover:bg-bumaye-orange transition-all",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Navbar.tsx",
                                        lineNumber: 133,
                                        columnNumber: 165
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Navbar.tsx",
                                    lineNumber: 133,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: scrollToEvents,
                                    className: "bg-bumaye-orange text-white px-8 py-2.5 rounded-full font-bold hover:scale-105 transition-transform shadow-lg shadow-bumaye-orange/20",
                                    children: "TICKETS"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Navbar.tsx",
                                    lineNumber: 134,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Navbar.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "md:hidden text-white p-2 glass rounded-lg relative z-[10000]",
                            onClick: ()=>setIsOpen(!isOpen),
                            children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 24
                            }, void 0, false, {
                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Navbar.tsx",
                                lineNumber: 142,
                                columnNumber: 23
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                size: 24
                            }, void 0, false, {
                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Navbar.tsx",
                                lineNumber: 142,
                                columnNumber: 41
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Navbar.tsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Navbar.tsx",
                    lineNumber: 122,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Navbar.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            mobileMenu
        ]
    }, void 0, true);
};
_s(Navbar, "rbxpGIqvNrUDqaewB2kg7WVf44g=");
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hero",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
"use client";
;
;
;
const Hero = ({ gallery, firstEvent })=>{
    const scrollToEvents = (e)=>{
        e.preventDefault();
        const el = document.getElementById('events');
        if (el) el.scrollIntoView({
            behavior: 'smooth'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative flex flex-col bg-bumaye-black",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-[85vh] md:min-h-screen flex flex-col items-center justify-center pt-28 md:pt-32 pb-12 md:pb-20 px-4 md:px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto relative z-10 text-center w-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            scale: 0.9
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        transition: {
                            duration: 1,
                            ease: "easeOut"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full mb-4 border border-white/10 scale-90 md:scale-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-1.5 h-1.5 bg-white rounded-full animate-ping"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Hero.tsx",
                                        lineNumber: 21,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-white",
                                        children: [
                                            "Next Event: ",
                                            firstEvent ? `${firstEvent.city} • ${firstEvent.date}` : 'Checking dates...'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Hero.tsx",
                                        lineNumber: 22,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Hero.tsx",
                                lineNumber: 20,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative mb-8 md:mb-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            y: 20,
                                            opacity: 0
                                        },
                                        animate: {
                                            y: 0,
                                            opacity: 1
                                        },
                                        transition: {
                                            delay: 0.3
                                        },
                                        className: "relative inline-block",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/assets/bumaye-banner.png",
                                            alt: "BUMAYE!",
                                            className: "w-[60vw] md:w-[45vw] max-w-[700px] h-auto drop-shadow-[0_20px_50px_rgba(251,27,129,0.4)] transform -rotate-1 select-none pointer-events-none mb-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Hero.tsx",
                                            lineNumber: 28,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Hero.tsx",
                                        lineNumber: 27,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                        initial: {
                                            opacity: 0
                                        },
                                        animate: {
                                            opacity: 1
                                        },
                                        transition: {
                                            delay: 0.5
                                        },
                                        className: "text-white/50 text-sm md:text-lg italic tracking-wide mb-6 md:mb-8",
                                        children: "Where genres blend & nations fuse"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Hero.tsx",
                                        lineNumber: 30,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            y: 10,
                                            opacity: 0
                                        },
                                        animate: {
                                            y: 0,
                                            opacity: 1
                                        },
                                        transition: {
                                            delay: 0.6
                                        },
                                        className: "font-display text-[3.8vw] sm:text-xl md:text-[2.2vw] tracking-[0.15em] sm:tracking-[0.2em] uppercase text-white drop-shadow-lg flex items-center justify-center gap-1.5 sm:gap-3 md:gap-4 whitespace-nowrap",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "HIPHOP"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Hero.tsx",
                                                lineNumber: 34,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white/40",
                                                children: "X"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Hero.tsx",
                                                lineNumber: 34,
                                                columnNumber: 36
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "R&B"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Hero.tsx",
                                                lineNumber: 34,
                                                columnNumber: 76
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white/40",
                                                children: "X"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Hero.tsx",
                                                lineNumber: 34,
                                                columnNumber: 92
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "AFRO"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Hero.tsx",
                                                lineNumber: 34,
                                                columnNumber: 132
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white/40",
                                                children: "X"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Hero.tsx",
                                                lineNumber: 34,
                                                columnNumber: 149
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "DANCEHALL"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Hero.tsx",
                                                lineNumber: 34,
                                                columnNumber: 189
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Hero.tsx",
                                        lineNumber: 33,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Hero.tsx",
                                lineNumber: 26,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: 0.8,
                                    duration: 0.8
                                },
                                className: "flex flex-col md:flex-row items-center justify-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#events",
                                        onClick: scrollToEvents,
                                        className: "group bg-white text-bumaye-black px-8 py-3.5 rounded-full font-bold text-base flex items-center gap-3 hover:bg-bumaye-pink hover:text-white transition-all shadow-2xl shadow-black/20",
                                        children: [
                                            "GET TICKETS ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                size: 20,
                                                className: "group-hover:translate-x-2 transition-transform"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Hero.tsx",
                                                lineNumber: 39,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Hero.tsx",
                                        lineNumber: 38,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "group bg-black/10 backdrop-blur-md text-white border border-white/20 px-8 py-3.5 rounded-full font-bold text-base flex items-center gap-3 hover:bg-white/10 transition-all",
                                        children: [
                                            "WATCH TEASER ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                size: 18,
                                                className: "fill-current"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Hero.tsx",
                                                lineNumber: 42,
                                                columnNumber: 30
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Hero.tsx",
                                        lineNumber: 41,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Hero.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Hero.tsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Hero.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Hero.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            gallery && gallery.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "gallery",
                className: "w-full px-4 md:px-6 pb-16 md:pb-24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-8 mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-display text-3xl sm:text-4xl md:text-6xl uppercase tracking-tighter text-white drop-shadow-md",
                                    children: "THE VIBE"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Hero.tsx",
                                    lineNumber: 54,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://www.instagram.com/bumaye.nl",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "group flex items-center gap-4 font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] hover:text-bumaye-orange transition-colors",
                                    children: [
                                        "Follow @bumaye.nl ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            size: 16,
                                            className: "group-hover:translate-x-2 transition-transform"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Hero.tsx",
                                            lineNumber: 56,
                                            columnNumber: 35
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Hero.tsx",
                                    lineNumber: 55,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Hero.tsx",
                            lineNumber: 53,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex overflow-x-auto gap-6 hide-scrollbar snap-x snap-mandatory pb-4",
                            children: gallery.slice(0, 12).map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        x: 20
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        x: 0
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    transition: {
                                        delay: i * 0.08
                                    },
                                    whileHover: {
                                        scale: 1.05
                                    },
                                    className: "flex-none w-[180px] md:w-[240px] aspect-[3/4] rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 snap-start",
                                    children: item.url.endsWith('.mp4') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                        src: item.url,
                                        controls: true,
                                        className: "w-full h-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Hero.tsx",
                                        lineNumber: 62,
                                        columnNumber: 48
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: item.url,
                                        alt: `Gallery ${item.id}`,
                                        className: "w-full h-full object-cover",
                                        referrerPolicy: "no-referrer",
                                        loading: "lazy",
                                        decoding: "async"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Hero.tsx",
                                        lineNumber: 62,
                                        columnNumber: 123
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, item.id, false, {
                                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Hero.tsx",
                                    lineNumber: 61,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Hero.tsx",
                            lineNumber: 59,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Hero.tsx",
                    lineNumber: 52,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Hero.tsx",
                lineNumber: 51,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Hero.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Marquee.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Marquee",
    ()=>Marquee
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
;
const Marquee = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-bumaye-orange py-4 overflow-hidden whitespace-nowrap border-y border-black/10 mt-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            animate: {
                x: [
                    "0%",
                    "-50%"
                ]
            },
            transition: {
                duration: 60,
                repeat: Infinity,
                ease: "linear"
            },
            className: "inline-block",
            children: [
                ...Array(15)
            ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-display text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tighter",
                    children: "AFRO • DANCEHALL • HIPHOP • R&B • AMAPIANO • "
                }, i, false, {
                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Marquee.tsx",
                    lineNumber: 7,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Marquee.tsx",
            lineNumber: 5,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Marquee.tsx",
        lineNumber: 4,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = Marquee;
var _c;
__turbopack_context__.k.register(_c, "Marquee");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Bumaye website/Bumaye-party-1/src/components/FeaturedEvent.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FeaturedEvent",
    ()=>FeaturedEvent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ticket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ticket$3e$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/node_modules/lucide-react/dist/esm/icons/ticket.js [app-client] (ecmascript) <export default as Ticket>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/node_modules/lucide-react/dist/esm/icons/camera.js [app-client] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const FeaturedEvent = ({ event, onBook })=>{
    _s();
    const [showFlyer, setShowFlyer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FeaturedEvent.useEffect": ()=>{
            const check = {
                "FeaturedEvent.useEffect.check": ()=>setIsMobile(window.innerWidth < 768)
            }["FeaturedEvent.useEffect.check"];
            check();
            window.addEventListener('resize', check);
            return ({
                "FeaturedEvent.useEffect": ()=>window.removeEventListener('resize', check)
            })["FeaturedEvent.useEffect"];
        }
    }["FeaturedEvent.useEffect"], []);
    // Pick the right flyer: mobile gets TikTok format, desktop gets banner
    const activeFlyer = isMobile ? event.flyerMobileUrl || event.flyerUrl : event.flyerUrl || event.flyerMobileUrl;
    const hasFlyer = !!(event.flyerUrl || event.flyerMobileUrl);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 40
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true
        },
        className: "relative w-full max-w-6xl mx-auto bg-white/5 rounded-[2rem] sm:rounded-[3rem] overflow-hidden border border-white/10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "aspect-square lg:aspect-auto relative overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: event.image,
                                alt: event.title,
                                className: "w-full h-full object-cover",
                                referrerPolicy: "no-referrer",
                                loading: "lazy",
                                decoding: "async"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/FeaturedEvent.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-r from-bumaye-black/60 to-transparent lg:hidden"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/FeaturedEvent.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-8 left-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "px-6 py-2 bg-bumaye-yellow text-bumaye-black rounded-full text-xs font-bold uppercase tracking-widest",
                                    children: event.status === 'sold-out' ? 'SOLD OUT' : 'TICKETS AVAILABLE'
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/FeaturedEvent.tsx",
                                    lineNumber: 33,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/FeaturedEvent.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/FeaturedEvent.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 md:p-16 flex flex-col justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 sm:gap-6 mb-6 md:mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-bumaye-orange font-mono text-xs uppercase tracking-widest",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/FeaturedEvent.tsx",
                                                lineNumber: 40,
                                                columnNumber: 117
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            event.date
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/FeaturedEvent.tsx",
                                        lineNumber: 40,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    event.time && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-white/40 font-mono text-xs uppercase tracking-widest",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/FeaturedEvent.tsx",
                                                lineNumber: 41,
                                                columnNumber: 127
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            event.time
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/FeaturedEvent.tsx",
                                        lineNumber: 41,
                                        columnNumber: 28
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/FeaturedEvent.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-display text-6xl md:text-8xl uppercase mb-6 leading-[0.85] tracking-tighter",
                                children: event.title
                            }, void 0, false, {
                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/FeaturedEvent.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 text-white/60 text-lg uppercase tracking-widest mb-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                        size: 20,
                                        className: "text-bumaye-orange"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/FeaturedEvent.tsx",
                                        lineNumber: 44,
                                        columnNumber: 106
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    event.location,
                                    " • ",
                                    event.city
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/FeaturedEvent.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            event.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white/40 text-lg mb-12 leading-relaxed max-w-md",
                                children: event.description
                            }, void 0, false, {
                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/FeaturedEvent.tsx",
                                lineNumber: 45,
                                columnNumber: 33
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>event.status !== 'sold-out' && onBook(event.ticketUrl),
                                        className: `flex-1 py-6 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all text-lg ${event.status === 'sold-out' ? 'bg-white/5 text-white/20 cursor-not-allowed' : 'bg-white text-bumaye-black hover:bg-bumaye-orange hover:text-white'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ticket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ticket$3e$__["Ticket"], {
                                                size: 24
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/FeaturedEvent.tsx",
                                                lineNumber: 48,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            event.status === 'sold-out' ? 'JOIN WAITLIST' : 'SECURE TICKETS'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/FeaturedEvent.tsx",
                                        lineNumber: 47,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    hasFlyer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowFlyer(true),
                                        className: "px-10 py-6 rounded-2xl font-bold border border-white/10 hover:bg-white/5 transition-all flex items-center justify-center gap-3 text-white uppercase tracking-widest text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/FeaturedEvent.tsx",
                                                lineNumber: 52,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "VIEW FLYER"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/FeaturedEvent.tsx",
                                        lineNumber: 51,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/FeaturedEvent.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/FeaturedEvent.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/FeaturedEvent.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: showFlyer && activeFlyer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    className: "fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-bumaye-black/95 backdrop-blur-2xl",
                            onClick: ()=>setShowFlyer(false)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/FeaturedEvent.tsx",
                            lineNumber: 63,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                scale: 0.9,
                                y: 20
                            },
                            animate: {
                                scale: 1,
                                y: 0
                            },
                            exit: {
                                scale: 0.9,
                                y: 20
                            },
                            className: `relative bg-bumaye-black rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 ${isMobile ? 'w-full max-w-[85vw] aspect-[9/16]' /* TikTok format on mobile */  : 'w-full max-w-6xl aspect-[21/9]' /* Banner format on desktop */ }`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowFlyer(false),
                                    className: "absolute top-4 right-4 md:top-8 md:right-8 z-20 p-3 bg-black/50 hover:bg-bumaye-orange rounded-full transition-colors text-white",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 24
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/FeaturedEvent.tsx",
                                        lineNumber: 74,
                                        columnNumber: 200
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/FeaturedEvent.tsx",
                                    lineNumber: 74,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: activeFlyer,
                                    alt: `${event.title} Flyer`,
                                    className: "w-full h-full object-cover",
                                    referrerPolicy: "no-referrer"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/FeaturedEvent.tsx",
                                    lineNumber: 75,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/FeaturedEvent.tsx",
                            lineNumber: 64,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/FeaturedEvent.tsx",
                    lineNumber: 62,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/FeaturedEvent.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/FeaturedEvent.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(FeaturedEvent, "6qqbzCCePJJd+gTDQ3yJHa2Hy8c=");
_c = FeaturedEvent;
var _c;
__turbopack_context__.k.register(_c, "FeaturedEvent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AboutSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AboutSection",
    ()=>AboutSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const AboutSection = ({ imageUrl })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "about",
        className: "py-8 md:py-12 px-4 md:px-6 bg-white text-bumaye-black rounded-[2rem] sm:rounded-[3rem] mx-4 my-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-5xl mx-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative group w-full mx-auto lg:max-w-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl border border-black/5",
                            children: imageUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: imageUrl,
                                alt: "Bumaye Crowd",
                                className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000",
                                referrerPolicy: "no-referrer",
                                loading: "lazy",
                                decoding: "async"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AboutSection.tsx",
                                lineNumber: 8,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-full bg-bumaye-black flex items-center justify-center p-12 text-center border border-black/5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-display text-white/10 uppercase tracking-tighter text-4xl",
                                    children: "BUMAYE"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AboutSection.tsx",
                                    lineNumber: 11,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AboutSection.tsx",
                                lineNumber: 10,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AboutSection.tsx",
                            lineNumber: 6,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AboutSection.tsx",
                        lineNumber: 5,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center lg:text-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono text-bumaye-orange text-[10px] uppercase tracking-[0.4em] mb-3 block",
                                children: "The Movement"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AboutSection.tsx",
                                lineNumber: 17,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-display text-4xl sm:text-5xl md:text-6xl uppercase mb-6 leading-[0.9] tracking-tighter",
                                children: [
                                    "WHAT IS",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AboutSection.tsx",
                                        lineNumber: 18,
                                        columnNumber: 126
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "BUMAYE?"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AboutSection.tsx",
                                lineNumber: 18,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4 text-base md:text-lg leading-relaxed text-bumaye-black/70 font-light max-w-md mx-auto lg:mx-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Bumaye is more than an event — it's a feeling. A space where good energy, love and freedom hit different. Where you walk in as a stranger and leave as family."
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AboutSection.tsx",
                                        lineNumber: 20,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Come as you are. Dance like nobody's watching. From Afrobeats to Dancehall, R&B to Amapiano — we keep the vibes high and the love higher. See you on the next one ♥"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AboutSection.tsx",
                                        lineNumber: 21,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AboutSection.tsx",
                                lineNumber: 19,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AboutSection.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AboutSection.tsx",
                lineNumber: 4,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AboutSection.tsx",
            lineNumber: 3,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AboutSection.tsx",
        lineNumber: 2,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = AboutSection;
var _c;
__turbopack_context__.k.register(_c, "AboutSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Bumaye website/Bumaye-party-1/src/lib/supabase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isSupabaseConfigured",
    ()=>isSupabaseConfigured,
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/node_modules/@supabase/supabase-js/dist/index.mjs [app-client] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://tsqlatnixqpvdcqiadbc.supabase.co");
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRzcWxhdG5peHFwdmRjcWlhZGJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMzNzgzOTAsImV4cCI6MjA4ODk1NDM5MH0.SlWUBVrAeVLqRdRgUR_fpKtj_ScUh2NyJHoLgWSek3g");
// Helper to check if a string is a valid URL
const isValidUrl = (url)=>{
    if (!url) return false;
    try {
        new URL(url);
        return url.startsWith('http');
    } catch  {
        return false;
    }
};
const isSupabaseConfigured = isValidUrl(supabaseUrl) && Boolean(supabaseAnonKey);
// We use a safe placeholder to prevent the constructor from throwing.
// The SDK validates the URL format strictly.
const SAFE_URL = 'https://placeholder.supabase.co';
const SAFE_KEY = 'placeholder';
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(isSupabaseConfigured ? supabaseUrl : SAFE_URL, isSupabaseConfigured ? supabaseAnonKey : SAFE_KEY);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Newsletter.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Newsletter",
    ()=>Newsletter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/src/lib/supabase.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
const Newsletter = ()=>{
    _s();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('idle');
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!email) return;
        setStatus('loading');
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('subscribers').insert([
            {
                email
            }
        ]);
        if (error) {
            setStatus(error.code === '23505' ? 'success' : 'error');
            return;
        }
        setStatus('success');
        setEmail('');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-16 md:py-20 px-4 md:px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-5xl mx-auto glass rounded-[2rem] md:rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                    className: "mx-auto mb-6 text-bumaye-orange",
                    size: 32
                }, void 0, false, {
                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Newsletter.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "font-display text-4xl md:text-6xl uppercase mb-4 leading-none",
                    children: "JOIN THE TRIBE"
                }, void 0, false, {
                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Newsletter.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-white/40 max-w-lg mx-auto mb-10 text-base",
                    children: "Subscribe to get early access to tickets, exclusive line-up reveals, and special discounts."
                }, void 0, false, {
                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Newsletter.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                status === 'success' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 10
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    className: "bg-bumaye-orange/20 text-bumaye-orange py-4 px-8 rounded-2xl inline-block font-bold",
                    children: "WELCOME TO THE FAMILY! CHECK YOUR INBOX SOON."
                }, void 0, false, {
                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Newsletter.tsx",
                    lineNumber: 30,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "flex flex-col md:flex-row gap-4 max-w-md mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "email",
                            required: true,
                            value: email,
                            onChange: (e)=>setEmail(e.target.value),
                            placeholder: "YOUR EMAIL ADDRESS",
                            className: "flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-bumaye-orange transition-colors font-mono text-sm",
                            disabled: status === 'loading'
                        }, void 0, false, {
                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Newsletter.tsx",
                            lineNumber: 35,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            disabled: status === 'loading',
                            className: "bg-white text-bumaye-black px-8 py-4 rounded-2xl font-bold hover:bg-bumaye-orange hover:text-white transition-all flex items-center justify-center gap-2",
                            children: [
                                status === 'loading' ? 'SUBMITTING...' : 'JOIN',
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Newsletter.tsx",
                                    lineNumber: 37,
                                    columnNumber: 65
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Newsletter.tsx",
                            lineNumber: 36,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Newsletter.tsx",
                    lineNumber: 34,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                status === 'error' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-red-500 mt-4 text-xs font-mono",
                    children: "Something went wrong. Please try again."
                }, void 0, false, {
                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Newsletter.tsx",
                    lineNumber: 41,
                    columnNumber: 32
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Newsletter.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Newsletter.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Newsletter, "4e7CyTvSIXKg0XJWYe8bTLqSzlM=");
_c = Newsletter;
var _c;
__turbopack_context__.k.register(_c, "Newsletter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Bumaye website/Bumaye-party-1/src/components/ContactSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContactSection",
    ()=>ContactSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/node_modules/lucide-react/dist/esm/icons/instagram.js [app-client] (ecmascript) <export default as Instagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/src/lib/supabase.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const ContactSection = ()=>{
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        email: '',
        subject: 'General Inquiry',
        message: ''
    });
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('idle');
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setStatus('loading');
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('contact_messages').insert([
            formData
        ]);
        if (error) {
            setStatus('error');
            return;
        }
        setStatus('success');
        setFormData({
            name: '',
            email: '',
            subject: 'General Inquiry',
            message: ''
        });
        setTimeout(()=>setStatus('idle'), 5000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact",
        className: "py-16 md:py-32 px-4 md:px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-mono text-bumaye-orange text-xs tracking-widest uppercase mb-4 block",
                            children: "Get in Touch"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/ContactSection.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-display text-5xl sm:text-7xl uppercase mb-8 leading-none",
                            children: [
                                "WANT TO",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/ContactSection.tsx",
                                    lineNumber: 24,
                                    columnNumber: 96
                                }, ("TURBOPACK compile-time value", void 0)),
                                "COLLABORATE?"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/ContactSection.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-white/60 text-xl mb-12 leading-relaxed",
                            children: "Whether you're a DJ, promoter, or brand looking to partner with the hottest Afrobeats event in the NL, we'd love to hear from you."
                        }, void 0, false, {
                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/ContactSection.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-8",
                            children: [
                                {
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                        size: 24
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/ContactSection.tsx",
                                        lineNumber: 27,
                                        columnNumber: 23
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    label: 'Email Us',
                                    value: 'info@bumaye.nl'
                                },
                                {
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"], {
                                        size: 24
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/ContactSection.tsx",
                                        lineNumber: 27,
                                        columnNumber: 97
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    label: 'Follow Us',
                                    value: '@bumaye.nl'
                                }
                            ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-14 h-14 glass rounded-2xl flex items-center justify-center text-bumaye-orange",
                                            children: item.icon
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/ContactSection.tsx",
                                            lineNumber: 29,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-mono text-[10px] uppercase tracking-widest text-white/40 mb-1",
                                                    children: item.label
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/ContactSection.tsx",
                                                    lineNumber: 31,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xl font-bold",
                                                    children: item.value
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/ContactSection.tsx",
                                                    lineNumber: 32,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/ContactSection.tsx",
                                            lineNumber: 30,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, item.label, true, {
                                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/ContactSection.tsx",
                                    lineNumber: 28,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/ContactSection.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/ContactSection.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "glass rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-12 relative overflow-hidden",
                    children: [
                        status === 'success' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 z-10 bg-bumaye-black/90 backdrop-blur-xl flex flex-col items-center justify-center text-center p-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-20 h-20 bg-bumaye-orange/20 rounded-full flex items-center justify-center mb-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                        size: 32,
                                        className: "text-bumaye-orange"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/ContactSection.tsx",
                                        lineNumber: 42,
                                        columnNumber: 113
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/ContactSection.tsx",
                                    lineNumber: 42,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-display text-4xl mb-4 uppercase",
                                    children: "MESSAGE SENT!"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/ContactSection.tsx",
                                    lineNumber: 43,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white/60 mb-8 max-w-xs",
                                    children: "We've received your inquiry and will get back to you shortly."
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/ContactSection.tsx",
                                    lineNumber: 44,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setStatus('idle'),
                                    className: "text-bumaye-orange font-mono text-xs tracking-widest uppercase hover:underline",
                                    children: "Send another message"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/ContactSection.tsx",
                                    lineNumber: 45,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/ContactSection.tsx",
                            lineNumber: 41,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                    children: [
                                        {
                                            label: 'Name',
                                            field: 'name',
                                            type: 'text'
                                        },
                                        {
                                            label: 'Email',
                                            field: 'email',
                                            type: 'email'
                                        }
                                    ].map(({ label, field, type })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "font-mono text-[10px] uppercase tracking-widest text-white/40 ml-2",
                                                    children: label
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/ContactSection.tsx",
                                                    lineNumber: 52,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    required: true,
                                                    type: type,
                                                    value: formData[field],
                                                    onChange: (e)=>setFormData({
                                                            ...formData,
                                                            [field]: e.target.value
                                                        }),
                                                    className: "w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-bumaye-orange transition-colors",
                                                    disabled: status === 'loading'
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/ContactSection.tsx",
                                                    lineNumber: 53,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, field, true, {
                                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/ContactSection.tsx",
                                            lineNumber: 51,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/ContactSection.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "font-mono text-[10px] uppercase tracking-widest text-white/40 ml-2",
                                            children: "Subject"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/ContactSection.tsx",
                                            lineNumber: 58,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: formData.subject,
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    subject: e.target.value
                                                }),
                                            className: "w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-bumaye-orange transition-colors appearance-none",
                                            disabled: status === 'loading',
                                            children: [
                                                'General Inquiry',
                                                'DJ / Artist Booking',
                                                'Partnership',
                                                'Press'
                                            ].map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    className: "bg-bumaye-black",
                                                    children: o
                                                }, o, false, {
                                                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/ContactSection.tsx",
                                                    lineNumber: 60,
                                                    columnNumber: 91
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/ContactSection.tsx",
                                            lineNumber: 59,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/ContactSection.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "font-mono text-[10px] uppercase tracking-widest text-white/40 ml-2",
                                            children: "Message"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/ContactSection.tsx",
                                            lineNumber: 64,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            required: true,
                                            rows: 4,
                                            value: formData.message,
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    message: e.target.value
                                                }),
                                            className: "w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-bumaye-orange transition-colors resize-none",
                                            disabled: status === 'loading'
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/ContactSection.tsx",
                                            lineNumber: 65,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/ContactSection.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: status === 'loading',
                                    className: "w-full bg-bumaye-orange text-white py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-bumaye-black transition-all flex items-center justify-center gap-3",
                                    children: [
                                        status === 'loading' ? 'SENDING...' : 'SEND MESSAGE',
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/ContactSection.tsx",
                                            lineNumber: 68,
                                            columnNumber: 70
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/ContactSection.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                status === 'error' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-red-500 text-center text-xs font-mono",
                                    children: "Failed to send. Please try again."
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/ContactSection.tsx",
                                    lineNumber: 70,
                                    columnNumber: 36
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/ContactSection.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/ContactSection.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/ContactSection.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/ContactSection.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ContactSection, "HISEnqce4jDDxc90gpM4zh4QYWk=");
_c = ContactSection;
var _c;
__turbopack_context__.k.register(_c, "ContactSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/node_modules/lucide-react/dist/esm/icons/instagram.js [app-client] (ecmascript) <export default as Instagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music2$3e$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/node_modules/lucide-react/dist/esm/icons/music-2.js [app-client] (ecmascript) <export default as Music2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
;
;
const Footer = ({ onAdminClick })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-bumaye-black border-t border-white/10 pt-32 pb-10 px-6 relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none opacity-[0.03] select-none hidden sm:block",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-display text-[30vw] leading-none uppercase tracking-tighter",
                    children: "BUMAYE"
                }, void 0, false, {
                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Footer.tsx",
                    lineNumber: 6,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Footer.tsx",
                lineNumber: 5,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-4 gap-16 mb-32",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-span-1 md:col-span-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-display text-6xl text-bumaye-orange mb-8 tracking-tighter",
                                        children: "BUMAYE"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Footer.tsx",
                                        lineNumber: 11,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white/40 max-w-sm mb-10 text-lg leading-relaxed",
                                        children: "The ultimate Afrobeats, Dancehall, and Urban experience in the Netherlands."
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Footer.tsx",
                                        lineNumber: 12,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://www.instagram.com/bumaye.nl",
                                                className: "w-14 h-14 glass rounded-2xl flex items-center justify-center hover:bg-bumaye-orange transition-all group",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"], {
                                                    size: 24,
                                                    className: "group-hover:scale-110 transition-transform"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Footer.tsx",
                                                    lineNumber: 14,
                                                    columnNumber: 176
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Footer.tsx",
                                                lineNumber: 14,
                                                columnNumber: 13
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "w-14 h-14 glass rounded-2xl flex items-center justify-center hover:bg-bumaye-orange transition-all group",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music2$3e$__["Music2"], {
                                                    size: 24,
                                                    className: "group-hover:scale-110 transition-transform"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Footer.tsx",
                                                    lineNumber: 15,
                                                    columnNumber: 142
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Footer.tsx",
                                                lineNumber: 15,
                                                columnNumber: 13
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Footer.tsx",
                                        lineNumber: 13,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Footer.tsx",
                                lineNumber: 10,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-8",
                                        children: "Quick Links"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Footer.tsx",
                                        lineNumber: 19,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-4 font-bold uppercase text-sm tracking-widest",
                                        children: [
                                            'Events',
                                            'About',
                                            'Gallery',
                                            'Contact'
                                        ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: `#${item.toLowerCase()}`,
                                                    className: "hover:text-bumaye-orange transition-colors flex items-center gap-2 group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                            size: 14,
                                                            className: "opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Footer.tsx",
                                                            lineNumber: 22,
                                                            columnNumber: 150
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        item
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Footer.tsx",
                                                    lineNumber: 22,
                                                    columnNumber: 30
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, item, false, {
                                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Footer.tsx",
                                                lineNumber: 22,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Footer.tsx",
                                        lineNumber: 20,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Footer.tsx",
                                lineNumber: 18,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 mb-8",
                                        children: "Legal"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Footer.tsx",
                                        lineNumber: 27,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-4 font-bold uppercase text-sm tracking-widest",
                                        children: [
                                            'Privacy Policy',
                                            'Terms of Use',
                                            'Cookies'
                                        ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "#",
                                                    className: "hover:text-bumaye-orange transition-colors",
                                                    children: item
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Footer.tsx",
                                                    lineNumber: 30,
                                                    columnNumber: 30
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, item, false, {
                                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Footer.tsx",
                                                lineNumber: 30,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Footer.tsx",
                                        lineNumber: 28,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Footer.tsx",
                                lineNumber: 26,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Footer.tsx",
                        lineNumber: 9,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-white/20 text-[10px] font-mono uppercase tracking-[0.4em]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "© 2026 BUMAYE EVENTS • ALL RIGHTS RESERVED"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Footer.tsx",
                                lineNumber: 36,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-8",
                                children: [
                                    [
                                        'Instagram',
                                        'TikTok',
                                        'Spotify'
                                    ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "hover:text-white transition-colors",
                                            children: s
                                        }, s, false, {
                                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Footer.tsx",
                                            lineNumber: 38,
                                            columnNumber: 54
                                        }, ("TURBOPACK compile-time value", void 0))),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onAdminClick,
                                        className: "hover:text-white transition-colors opacity-50 lowercase text-[10px] font-mono tracking-[0.4em]",
                                        children: "admin"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Footer.tsx",
                                        lineNumber: 39,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Footer.tsx",
                                lineNumber: 37,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Footer.tsx",
                        lineNumber: 35,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Footer.tsx",
                lineNumber: 8,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Footer.tsx",
        lineNumber: 4,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdminPanel",
    ()=>AdminPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$Reorder$2f$namespace$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Reorder$3e$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/node_modules/framer-motion/dist/es/components/Reorder/namespace.mjs [app-client] (ecmascript) <export * as Reorder>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/node_modules/lucide-react/dist/esm/icons/camera.js [app-client] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/node_modules/lucide-react/dist/esm/icons/pen.js [app-client] (ecmascript) <export default as Edit2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/node_modules/lucide-react/dist/esm/icons/database.js [app-client] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/node_modules/lucide-react/dist/esm/icons/palette.js [app-client] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grip$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GripVertical$3e$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/node_modules/lucide-react/dist/esm/icons/grip-vertical.js [app-client] (ecmascript) <export default as GripVertical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/src/lib/supabase.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
const AdminPanel = ({ events, onAdd, onUpdate, onDelete, onRefresh, onClose, gallery = [], onGalleryAdd, onGalleryRemove, onGalleryReorder, logoUrl, onLogoUpload, aboutImageUrl, onAboutImageUpload, subscribers = [], contactMessages = [], onSubscriberDelete, onMessageDelete, onMessageRead, onImageUpload })=>{
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('events');
    // Gallery manager state
    const [galleryInput, setGalleryInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [galleryFiles, setGalleryFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [galleryError, setGalleryError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isGalleryUploading, setIsGalleryUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedMessage, setSelectedMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [copyStatus, setCopyStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleGalleryAddSubmit = async ()=>{
        if (!galleryInput && galleryFiles.length === 0) {
            setGalleryError('Voer een URL in of selecteer bestanden');
            return;
        }
        setIsGalleryUploading(true);
        if (onGalleryAdd) {
            await onGalleryAdd(galleryFiles, galleryInput);
        }
        setGalleryFiles([]);
        setGalleryInput('');
        setGalleryError('');
        setIsGalleryUploading(false);
    };
    const handleCopy = (text, id)=>{
        navigator.clipboard.writeText(text);
        setCopyStatus(id);
        setTimeout(()=>setCopyStatus(null), 2000);
    };
    const handleExportCSV = ()=>{
        if (!subscribers || subscribers.length === 0) return;
        const headers = [
            'Email',
            'Joined At'
        ];
        const rows = subscribers.map((sub)=>[
                sub.email,
                new Date(sub.created_at).toLocaleString()
            ]);
        const csvContent = [
            headers,
            ...rows
        ].map((e)=>e.join(',')).join('\n');
        const blob = new Blob([
            csvContent
        ], {
            type: 'text/csv;charset=utf-8;'
        });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', `bumaye_subscribers_${new Date().toISOString().split('T')[0]}.csv`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminPanel.useEffect": ()=>{
            if (activeTab === 'inbox') {
                onRefresh();
            }
        }
    }["AdminPanel.useEffect"], [
        activeTab
    ]);
    const handleGalleryFile = (e)=>{
        const files = e.target.files;
        if (files && files.length > 0) {
            setGalleryFiles(Array.from(files));
        } else {
            setGalleryFiles([]);
        }
    };
    const handleGalleryRemoveClick = async (id)=>{
        if (onGalleryRemove) await onGalleryRemove(id);
    };
    const handleLogoFile = async (e)=>{
        const file = e.target.files?.[0];
        if (file && onLogoUpload) {
            await onLogoUpload(file);
        }
    };
    const [editingId, setEditingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isRefreshing, setIsRefreshing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [deletingId, setDeletingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [newEvent, setNewEvent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: '',
        description: '',
        date: '',
        time: '',
        location: '',
        city: '',
        ticketUrl: '',
        image: '',
        flyerUrl: '',
        flyerMobileUrl: '',
        status: 'upcoming'
    });
    const handleEdit = (event)=>{
        setEditingId(event.id);
        setNewEvent({
            title: event.title,
            description: event.description || '',
            date: event.date,
            time: event.time || '',
            location: event.location,
            city: event.city,
            ticketUrl: event.ticketUrl,
            image: event.image,
            flyerUrl: event.flyerUrl || '',
            flyerMobileUrl: event.flyerMobileUrl || '',
            status: event.status
        });
    };
    const handleCancelEdit = ()=>{
        setEditingId(null);
        setNewEvent({
            title: '',
            description: '',
            date: '',
            time: '',
            location: '',
            city: '',
            ticketUrl: '',
            image: '',
            flyerUrl: '',
            flyerMobileUrl: '',
            status: 'upcoming'
        });
    };
    const [isUploadingImage, setIsUploadingImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleFileUpload = async (e, field)=>{
        const file = e.target.files?.[0];
        if (file && onImageUpload) {
            setIsUploadingImage(true);
            try {
                const url = await onImageUpload(file);
                setNewEvent((prev)=>({
                        ...prev,
                        [field]: url
                    }));
            } catch (err) {
                console.error('Upload failed:', err);
            } finally{
                setIsUploadingImage(false);
            }
        }
    };
    const handleRefresh = async ()=>{
        setIsRefreshing(true);
        try {
            await onRefresh();
        } catch (error) {
            console.error('Refresh error:', error);
        } finally{
            setIsRefreshing(false);
        }
    };
    const handleDelete = async (id)=>{
        setDeletingId(id);
        try {
            await onDelete(id);
        } catch (error) {
            console.error('Delete error:', error);
        } finally{
            setDeletingId(null);
        }
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setIsSubmitting(true);
        try {
            if (editingId) {
                await onUpdate(editingId, newEvent);
                setEditingId(null);
            } else {
                await onAdd(newEvent);
            }
            setNewEvent({
                title: '',
                description: '',
                date: '',
                time: '',
                location: '',
                city: '',
                ticketUrl: '',
                image: '',
                flyerUrl: '',
                flyerMobileUrl: '',
                status: 'upcoming'
            });
        } catch (error) {
            console.error('Submit error:', error);
        } finally{
            setIsSubmitting(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-bumaye-black/95 backdrop-blur-md",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                lineNumber: 226,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] bg-white rounded-3xl sm:rounded-[2.5rem] overflow-hidden flex flex-col text-bumaye-black",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 sm:p-8 border-b border-black/5 flex flex-col sm:flex-row justify-between items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-display text-4xl uppercase tracking-tighter",
                                        children: "Admin Panel"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                        lineNumber: 230,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest ${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSupabaseConfigured"] ? 'bg-green-100 text-green-600' : 'bg-amber-100 text-amber-600'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"], {
                                                size: 12
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                lineNumber: 232,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSupabaseConfigured"] ? 'Supabase Connected' : 'Local Mode'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                        lineNumber: 231,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                lineNumber: 229,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onRefresh,
                                        disabled: isRefreshing,
                                        className: "flex items-center gap-2 px-4 py-2 bg-black/5 hover:bg-black/10 rounded-xl transition-all font-mono text-[10px] uppercase tracking-widest disabled:opacity-50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                size: 14,
                                                className: isRefreshing ? 'animate-spin' : ''
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                lineNumber: 242,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            isRefreshing ? 'Syncing...' : 'Sync Now'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                        lineNumber: 237,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onClose,
                                        className: "p-2 hover:bg-black/5 rounded-full transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            size: 24
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                            lineNumber: 245,
                                            columnNumber: 103
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                        lineNumber: 245,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                lineNumber: 236,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                        lineNumber: 228,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-8 flex border-b border-black/5",
                        children: [
                            {
                                id: 'events',
                                label: 'Events',
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                    lineNumber: 251,
                                    columnNumber: 52
                                }, ("TURBOPACK compile-time value", void 0))
                            },
                            {
                                id: 'gallery',
                                label: 'Gallery',
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                    lineNumber: 252,
                                    columnNumber: 54
                                }, ("TURBOPACK compile-time value", void 0))
                            },
                            {
                                id: 'branding',
                                label: 'Branding',
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                    lineNumber: 253,
                                    columnNumber: 56
                                }, ("TURBOPACK compile-time value", void 0))
                            },
                            {
                                id: 'inbox',
                                label: 'Inbox',
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                    lineNumber: 254,
                                    columnNumber: 50
                                }, ("TURBOPACK compile-time value", void 0)),
                                count: subscribers.length + contactMessages.filter((m)=>!m.is_read).length
                            }
                        ].map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab(tab.id),
                                className: `px-6 py-4 font-mono text-[10px] uppercase tracking-widest flex items-center gap-2 border-b-2 transition-all ${activeTab === tab.id ? 'border-bumaye-orange text-bumaye-orange' : 'border-transparent text-black/40 hover:text-black'}`,
                                children: [
                                    tab.icon,
                                    " ",
                                    tab.label,
                                    tab.count !== undefined && tab.count > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-bumaye-orange text-white px-2 py-0.5 rounded-full text-[8px]",
                                        children: tab.count
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                        lineNumber: 263,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, tab.id, true, {
                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                lineNumber: 256,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                        lineNumber: 249,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto",
                        children: [
                            activeTab === 'events' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-8 grid grid-cols-1 lg:grid-cols-2 gap-12 border-b border-black/5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between mb-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-mono text-[10px] uppercase tracking-[0.3em] text-black/40",
                                                        children: editingId ? 'Edit Event' : 'Add New Event'
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                        lineNumber: 274,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    editingId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: handleCancelEdit,
                                                        className: "text-[10px] font-mono uppercase tracking-widest text-bumaye-orange hover:underline",
                                                        children: "Cancel Edit"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                        lineNumber: 278,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                lineNumber: 273,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                onSubmit: handleSubmit,
                                                className: "space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        placeholder: "Event Title",
                                                        value: newEvent.title,
                                                        onChange: (e)=>setNewEvent({
                                                                ...newEvent,
                                                                title: e.target.value
                                                            }),
                                                        className: "w-full bg-black/5 border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:border-bumaye-orange",
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                        lineNumber: 287,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        placeholder: "Description",
                                                        value: newEvent.description,
                                                        onChange: (e)=>setNewEvent({
                                                                ...newEvent,
                                                                description: e.target.value
                                                            }),
                                                        className: "w-full bg-black/5 border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:border-bumaye-orange resize-none",
                                                        rows: 3
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                        lineNumber: 294,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-2 gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "text-[10px] font-mono text-black/40 uppercase ml-2",
                                                                        children: "Date"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                        lineNumber: 303,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "date",
                                                                        value: newEvent.date,
                                                                        onChange: (e)=>setNewEvent({
                                                                                ...newEvent,
                                                                                date: e.target.value
                                                                            }),
                                                                        className: "w-full bg-black/5 border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:border-bumaye-orange",
                                                                        required: true
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                        lineNumber: 304,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                lineNumber: 302,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "text-[10px] font-mono text-black/40 uppercase ml-2",
                                                                        children: "Time"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                        lineNumber: 313,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "time",
                                                                        value: newEvent.time,
                                                                        onChange: (e)=>setNewEvent({
                                                                                ...newEvent,
                                                                                time: e.target.value
                                                                            }),
                                                                        className: "w-full bg-black/5 border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:border-bumaye-orange"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                        lineNumber: 314,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                lineNumber: 312,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                        lineNumber: 301,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-2 gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "text-[10px] font-mono text-black/40 uppercase ml-2",
                                                                        children: "Venue / Location"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                        lineNumber: 324,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        placeholder: "e.g. Club AIR",
                                                                        value: newEvent.location,
                                                                        onChange: (e)=>setNewEvent({
                                                                                ...newEvent,
                                                                                location: e.target.value
                                                                            }),
                                                                        className: "w-full bg-black/5 border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:border-bumaye-orange",
                                                                        required: true
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                        lineNumber: 325,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                lineNumber: 323,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "text-[10px] font-mono text-black/40 uppercase ml-2",
                                                                        children: "City"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                        lineNumber: 334,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        placeholder: "e.g. Amsterdam",
                                                                        value: newEvent.city,
                                                                        onChange: (e)=>setNewEvent({
                                                                                ...newEvent,
                                                                                city: e.target.value
                                                                            }),
                                                                        className: "w-full bg-black/5 border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:border-bumaye-orange",
                                                                        required: true
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                        lineNumber: 335,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                lineNumber: 333,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                        lineNumber: 322,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-[10px] font-mono text-black/40 uppercase ml-2",
                                                                children: "Event Image"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                lineNumber: 345,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "file",
                                                                accept: "image/*",
                                                                onChange: (e)=>handleFileUpload(e, 'image'),
                                                                className: "hidden",
                                                                id: "event-img"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                lineNumber: 346,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                htmlFor: "event-img",
                                                                className: "w-full bg-black/5 border border-black/10 rounded-xl px-4 py-3 cursor-pointer hover:bg-black/10 transition-all flex items-center gap-2 text-xs",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                                                                        size: 16
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                        lineNumber: 348,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    " ",
                                                                    newEvent.image ? 'CHANGE IMAGE' : 'UPLOAD IMAGE'
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                lineNumber: 347,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                        lineNumber: 344,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-2 gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "text-[10px] font-mono text-black/40 uppercase ml-2",
                                                                        children: "🖥️ Banner Flyer (Desktop)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                        lineNumber: 353,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "file",
                                                                        accept: "image/*",
                                                                        onChange: (e)=>handleFileUpload(e, 'flyerUrl'),
                                                                        className: "hidden",
                                                                        id: "event-flyer-desktop"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                        lineNumber: 354,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        htmlFor: "event-flyer-desktop",
                                                                        className: "w-full bg-black/5 border border-black/10 rounded-xl px-4 py-3 cursor-pointer hover:bg-black/10 transition-all flex items-center gap-2 text-xs",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                                                                                size: 16
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                                lineNumber: 356,
                                                                                columnNumber: 25
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            " ",
                                                                            newEvent.flyerUrl ? '✓ UPLOADED' : 'UPLOAD 21:9'
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                        lineNumber: 355,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-[8px] font-mono text-black/30 ml-2",
                                                                        children: "Breed formaat (bijv. 1920×823)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                        lineNumber: 358,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                lineNumber: 352,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "text-[10px] font-mono text-black/40 uppercase ml-2",
                                                                        children: "📱 TikTok Flyer (Mobiel)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                        lineNumber: 361,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "file",
                                                                        accept: "image/*",
                                                                        onChange: (e)=>handleFileUpload(e, 'flyerMobileUrl'),
                                                                        className: "hidden",
                                                                        id: "event-flyer-mobile"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                        lineNumber: 362,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        htmlFor: "event-flyer-mobile",
                                                                        className: "w-full bg-black/5 border border-black/10 rounded-xl px-4 py-3 cursor-pointer hover:bg-black/10 transition-all flex items-center gap-2 text-xs",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                                                                                size: 16
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                                lineNumber: 364,
                                                                                columnNumber: 25
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            " ",
                                                                            newEvent.flyerMobileUrl ? '✓ UPLOADED' : 'UPLOAD 9:16'
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                        lineNumber: 363,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-[8px] font-mono text-black/30 ml-2",
                                                                        children: "Verticaal formaat (bijv. 1080×1920)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                        lineNumber: 366,
                                                                        columnNumber: 23
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                lineNumber: 360,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                        lineNumber: 351,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        placeholder: "Ticket URL",
                                                        value: newEvent.ticketUrl,
                                                        onChange: (e)=>setNewEvent({
                                                                ...newEvent,
                                                                ticketUrl: e.target.value
                                                            }),
                                                        className: "w-full bg-black/5 border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:border-bumaye-orange",
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                        lineNumber: 369,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        disabled: isSubmitting || isUploadingImage,
                                                        className: "w-full bg-bumaye-orange text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-bumaye-black transition-all disabled:opacity-50 disabled:cursor-not-allowed",
                                                        children: [
                                                            isSubmitting || isUploadingImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                lineNumber: 381,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)) : editingId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                                                size: 20
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                lineNumber: 383,
                                                                columnNumber: 35
                                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                size: 20
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                lineNumber: 383,
                                                                columnNumber: 57
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            isUploadingImage ? 'UPLOADING...' : isSubmitting ? 'SAVING...' : editingId ? 'UPDATE EVENT' : 'CREATE EVENT'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                        lineNumber: 376,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                lineNumber: 286,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                        lineNumber: 272,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-mono text-[10px] uppercase tracking-[0.3em] text-black/40 mb-6",
                                                children: "Existing Events"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                lineNumber: 391,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-4",
                                                children: events.map((event)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between p-4 bg-black/5 rounded-2xl group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-12 h-12 rounded-lg overflow-hidden flex-shrink-0",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                            src: event.image,
                                                                            alt: "",
                                                                            className: "w-full h-full object-cover"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                            lineNumber: 397,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                        lineNumber: 396,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                className: "font-bold text-sm uppercase",
                                                                                children: event.title
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                                lineNumber: 400,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-[10px] text-black/40 uppercase",
                                                                                children: [
                                                                                    event.city,
                                                                                    " • ",
                                                                                    event.date
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                                lineNumber: 401,
                                                                                columnNumber: 27
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                        lineNumber: 399,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                lineNumber: 395,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>handleEdit(event),
                                                                        className: "p-2 text-bumaye-orange hover:bg-bumaye-orange/10 rounded-lg transition-colors",
                                                                        title: "Edit Event",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                                                            size: 18
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                            lineNumber: 410,
                                                                            columnNumber: 27
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                        lineNumber: 405,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>handleDelete(event.id),
                                                                        disabled: deletingId === event.id,
                                                                        className: "p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50",
                                                                        title: "Delete Event",
                                                                        children: deletingId === event.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "w-4 h-4 border-2 border-red-500/30 border-t-red-500 rounded-full animate-spin"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                            lineNumber: 419,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                            size: 18
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                            lineNumber: 421,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                        lineNumber: 412,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                lineNumber: 404,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, event.id, true, {
                                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                        lineNumber: 394,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                lineNumber: 392,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                        lineNumber: 390,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                lineNumber: 271,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            activeTab === 'gallery' && gallery && onGalleryAdd && onGalleryRemove && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-8 border-b border-black/5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-mono text-[10px] uppercase tracking-[0.3em] text-black/40 mb-6",
                                        children: "Gallery Manager"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                        lineNumber: 434,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-4 mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                placeholder: "Afbeelding/video URL",
                                                value: galleryInput,
                                                onChange: (e)=>setGalleryInput(e.target.value),
                                                className: "flex-1 bg-black/5 border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:border-bumaye-orange"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                lineNumber: 436,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "cursor-pointer bg-black/5 border border-black/10 rounded-xl px-4 py-3 hover:bg-black/10 transition-colors flex items-center justify-center relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                                                        size: 20
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                        lineNumber: 444,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    galleryFiles.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "absolute -top-2 -right-2 bg-bumaye-orange text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center",
                                                        children: galleryFiles.length
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                        lineNumber: 446,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "file",
                                                        multiple: true,
                                                        className: "hidden",
                                                        accept: "image/*,video/*",
                                                        onChange: handleGalleryFile
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                        lineNumber: 448,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                lineNumber: 443,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleGalleryAddSubmit,
                                                disabled: isGalleryUploading,
                                                className: "bg-bumaye-orange text-white px-6 py-3 rounded-xl font-bold hover:bg-bumaye-black transition-all disabled:opacity-50",
                                                children: isGalleryUploading ? 'Uploading...' : 'Toevoegen'
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                lineNumber: 450,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                        lineNumber: 435,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$Reorder$2f$namespace$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Reorder$3e$__["Reorder"].Group, {
                                        axis: "x",
                                        values: gallery,
                                        onReorder: onGalleryReorder || (()=>{}),
                                        className: "flex overflow-x-auto gap-4 mt-6 pb-4 hide-scrollbar",
                                        children: gallery.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$Reorder$2f$namespace$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Reorder$3e$__["Reorder"].Item, {
                                                value: item,
                                                className: "relative flex-none w-[120px] aspect-[3/4] rounded-2xl overflow-hidden bg-black/5 border border-black/5 group",
                                                children: [
                                                    item.url.startsWith('data:video') || item.url.endsWith('.mp4') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                        src: item.url,
                                                        className: "w-full h-full object-cover pointer-events-none"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                        lineNumber: 471,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: item.url,
                                                        alt: "",
                                                        className: "w-full h-full object-cover pointer-events-none"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                        lineNumber: 473,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-grab active:cursor-grabbing",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grip$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GripVertical$3e$__["GripVertical"], {
                                                            className: "text-white",
                                                            size: 24
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                            lineNumber: 478,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                        lineNumber: 477,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute top-2 right-2 z-[60]",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onPointerDown: (e)=>{
                                                                e.stopPropagation();
                                                                e.preventDefault();
                                                            },
                                                            onClick: (e)=>{
                                                                e.stopPropagation();
                                                                e.preventDefault();
                                                                handleGalleryRemoveClick(item.id);
                                                            },
                                                            className: "bg-red-500 text-white rounded-full p-2 hover:bg-red-600 shadow-xl transition-all hover:scale-110 relative pointer-events-auto",
                                                            title: "Delete Image",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                size: 14,
                                                                className: "pointer-events-none"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                lineNumber: 496,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                            lineNumber: 483,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                        lineNumber: 482,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, item.id, true, {
                                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                lineNumber: 465,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                        lineNumber: 458,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                lineNumber: 433,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            activeTab === 'branding' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-8 space-y-12",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-mono text-[10px] uppercase tracking-[0.3em] text-black/40 mb-8",
                                            children: "Branding Settings"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                            lineNumber: 508,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-12",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "font-mono text-[10px] uppercase tracking-widest text-black/40 mb-2 block",
                                                    children: "Site Logo"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                    lineNumber: 511,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-16 bg-black/5 rounded-2xl p-4 flex items-center justify-center border border-black/5 min-w-[120px]",
                                                            children: logoUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: logoUrl,
                                                                alt: "Current Logo",
                                                                className: "h-full object-contain"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                lineNumber: 515,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] font-mono text-black/20",
                                                                children: "NO LOGO"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                lineNumber: 517,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                            lineNumber: 513,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "file",
                                                                    accept: "image/*",
                                                                    onChange: handleLogoFile,
                                                                    className: "absolute inset-0 opacity-0 cursor-pointer w-full h-full z-10"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                    lineNumber: 521,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "bg-bumaye-black text-white px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-bumaye-orange transition-all flex items-center gap-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                                                                            size: 18
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                            lineNumber: 528,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        " ",
                                                                        logoUrl ? 'Change Logo' : 'Upload Logo'
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                    lineNumber: 527,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                            lineNumber: 520,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                    lineNumber: 512,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-4 text-[10px] font-mono text-black/40 leading-relaxed uppercase tracking-[0.2em]",
                                                    children: [
                                                        "Recommended: PNG or SVG with transparent background.",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                            lineNumber: 533,
                                                            columnNumber: 73
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        "Maintain a horizontal ratio. Max height: 60px."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                    lineNumber: 532,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                            lineNumber: 510,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "font-mono text-[10px] uppercase tracking-widest text-black/40 mb-2 block",
                                                    children: "About Section Image"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                    lineNumber: 540,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-24 w-20 bg-black/5 rounded-2xl overflow-hidden border border-black/5",
                                                            children: aboutImageUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: aboutImageUrl,
                                                                alt: "Current About",
                                                                className: "w-full h-full object-cover"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                lineNumber: 544,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-full h-full flex items-center justify-center bg-black/5 text-black/20 font-mono text-[8px] text-center p-2",
                                                                children: "NO IMAGE"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                lineNumber: 546,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                            lineNumber: 542,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "file",
                                                                    accept: "image/*",
                                                                    onChange: (e)=>{
                                                                        const file = e.target.files?.[0];
                                                                        if (file) onAboutImageUpload?.(file);
                                                                    },
                                                                    className: "absolute inset-0 opacity-0 cursor-pointer w-full h-full z-10"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                    lineNumber: 550,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "bg-bumaye-black text-white px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-bumaye-orange transition-all flex items-center gap-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                                                                            size: 18
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                            lineNumber: 560,
                                                                            columnNumber: 25
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        " ",
                                                                        aboutImageUrl ? 'Change Image' : 'Upload Image'
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                    lineNumber: 559,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                            lineNumber: 549,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                    lineNumber: 541,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-4 text-[10px] font-mono text-black/40 leading-relaxed uppercase tracking-[0.2em]",
                                                    children: [
                                                        'This image appears in the "What is Bumaye?" section.',
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                            lineNumber: 565,
                                                            columnNumber: 73
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        "Recommended: Vertical 4:5 ratio image."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                    lineNumber: 564,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                            lineNumber: 539,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                    lineNumber: 507,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                lineNumber: 506,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            activeTab === 'inbox' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 lg:grid-cols-2 gap-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-display text-4xl mb-6 uppercase tracking-tight",
                                                    children: "Messages"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                    lineNumber: 578,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4",
                                                    children: !contactMessages || contactMessages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-12 text-center border border-dashed border-black/10 rounded-3xl",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                                className: "mx-auto mb-4 text-black/10",
                                                                size: 32
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                lineNumber: 582,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-black/40 font-mono text-xs uppercase tracking-widest",
                                                                children: "No messages yet"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                lineNumber: 583,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                        lineNumber: 581,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)) : contactMessages.map((msg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `p-6 rounded-3xl border transition-all cursor-pointer group/msg ${msg.is_read ? 'bg-black/5 border-transparent' : 'bg-white border-bumaye-orange shadow-lg'}`,
                                                            onMouseEnter: ()=>!msg.is_read && onMessageRead?.(msg.id),
                                                            onClick: ()=>setSelectedMessage(msg),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between items-start mb-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-3",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: `w-2 h-2 rounded-full ${msg.is_read ? 'bg-black/10' : 'bg-bumaye-orange'}`
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                                    lineNumber: 595,
                                                                                    columnNumber: 31
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                            className: "font-bold uppercase text-sm mb-1",
                                                                                            children: msg.name
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                                            lineNumber: 597,
                                                                                            columnNumber: 33
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex items-center gap-2",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                    className: "text-[10px] font-mono text-black/40 uppercase tracking-widest",
                                                                                                    children: msg.email
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                                                    lineNumber: 599,
                                                                                                    columnNumber: 35
                                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                    onClick: (e)=>{
                                                                                                        e.stopPropagation();
                                                                                                        handleCopy(msg.email, msg.id);
                                                                                                    },
                                                                                                    className: "p-1 text-black/20 hover:text-bumaye-orange transition-colors",
                                                                                                    title: "Copy Email",
                                                                                                    children: copyStatus === msg.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                                                        size: 10
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                                                        lineNumber: 608,
                                                                                                        columnNumber: 62
                                                                                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                                                                        size: 10
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                                                        lineNumber: 608,
                                                                                                        columnNumber: 84
                                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                                                    lineNumber: 600,
                                                                                                    columnNumber: 35
                                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                                            lineNumber: 598,
                                                                                            columnNumber: 33
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                                    lineNumber: 596,
                                                                                    columnNumber: 31
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                            lineNumber: 594,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: (e)=>{
                                                                                e.stopPropagation();
                                                                                onMessageDelete?.(msg.id);
                                                                            },
                                                                            className: "text-black/10 hover:text-red-500 transition-colors p-2",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                                size: 16
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                                lineNumber: 620,
                                                                                columnNumber: 31
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                            lineNumber: 613,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                    lineNumber: 593,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "bg-black/5 p-4 rounded-xl mb-4 line-clamp-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-[10px] font-mono font-bold uppercase tracking-widest mb-1 text-bumaye-orange",
                                                                            children: [
                                                                                "Subject: ",
                                                                                msg.subject
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                            lineNumber: 624,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm leading-relaxed",
                                                                            children: msg.message
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                            lineNumber: 625,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                    lineNumber: 623,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between items-center",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[10px] font-mono text-bumaye-orange opacity-0 group-hover/msg:opacity-100 transition-opacity",
                                                                            children: "Read Message →"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                            lineNumber: 628,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-[8px] font-mono text-black/20 uppercase",
                                                                            children: new Date(msg.created_at).toLocaleString()
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                            lineNumber: 629,
                                                                            columnNumber: 29
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                    lineNumber: 627,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, msg.id, true, {
                                                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                            lineNumber: 587,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                    lineNumber: 579,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                            lineNumber: 577,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between mb-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-display text-4xl uppercase tracking-tight",
                                                            children: "Subscribers"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                            lineNumber: 642,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        subscribers && subscribers.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: handleExportCSV,
                                                            className: "flex items-center gap-2 px-4 py-2 bg-black/5 hover:bg-black/10 rounded-full transition-all text-xs font-mono uppercase tracking-widest text-black/40 hover:text-black",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                                    size: 14
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                    lineNumber: 648,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                " Export CSV"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                            lineNumber: 644,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                    lineNumber: 641,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-black/5 rounded-[2.5rem] p-6",
                                                    children: !subscribers || subscribers.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "py-12 text-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                                className: "mx-auto mb-4 text-black/10",
                                                                size: 32
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                lineNumber: 655,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-black/40 font-mono text-xs uppercase tracking-widest",
                                                                children: "No subscribers yet"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                lineNumber: 656,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                        lineNumber: 654,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-2",
                                                        children: subscribers.map((sub)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between p-4 bg-white rounded-2xl",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs font-mono font-bold",
                                                                        children: sub.email
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                        lineNumber: 662,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>handleCopy(sub.email, sub.id),
                                                                                className: "p-2 text-black/20 hover:text-bumaye-orange transition-colors",
                                                                                title: "Copy Email",
                                                                                children: copyStatus === sub.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                                    size: 14
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                                    lineNumber: 669,
                                                                                    columnNumber: 58
                                                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                                                    size: 14
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                                    lineNumber: 669,
                                                                                    columnNumber: 80
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                                lineNumber: 664,
                                                                                columnNumber: 31
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>onSubscriberDelete?.(sub.id),
                                                                                className: "p-2 text-black/10 hover:text-red-500 transition-colors",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                                    size: 14
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                                    lineNumber: 675,
                                                                                    columnNumber: 33
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                                lineNumber: 671,
                                                                                columnNumber: 31
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                        lineNumber: 663,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, sub.id, true, {
                                                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                lineNumber: 661,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                        lineNumber: 659,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                    lineNumber: 652,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                            lineNumber: 640,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                    lineNumber: 575,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                lineNumber: 574,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                        lineNumber: 269,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        children: selectedMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "fixed inset-0 z-[250] flex items-center justify-center p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    exit: {
                                        opacity: 0
                                    },
                                    className: "absolute inset-0 bg-bumaye-black/98 backdrop-blur-xl",
                                    onClick: ()=>setSelectedMessage(null)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                    lineNumber: 693,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        scale: 0.9,
                                        y: 20
                                    },
                                    animate: {
                                        scale: 1,
                                        y: 0
                                    },
                                    exit: {
                                        scale: 0.9,
                                        y: 20
                                    },
                                    className: "relative w-full max-w-2xl bg-white rounded-[2.5rem] overflow-hidden shadow-2xl",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-12",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-start mb-10",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-mono text-bumaye-orange text-[10px] uppercase tracking-[0.3em] mb-4 block",
                                                                children: "Information"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                lineNumber: 709,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "font-display text-4xl uppercase mb-2",
                                                                children: selectedMessage.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                lineNumber: 710,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm font-mono text-black/40",
                                                                        children: selectedMessage.email
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                        lineNumber: 712,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>handleCopy(selectedMessage.email, 'modal-email'),
                                                                        className: "text-bumaye-orange hover:bg-bumaye-orange/10 p-2 rounded-lg transition-colors flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest font-bold",
                                                                        children: [
                                                                            copyStatus === 'modal-email' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                                size: 14
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                                lineNumber: 717,
                                                                                columnNumber: 59
                                                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                                                size: 14
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                                lineNumber: 717,
                                                                                columnNumber: 81
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            copyStatus === 'modal-email' ? 'Copied' : 'Copy Email'
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                        lineNumber: 713,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                lineNumber: 711,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                        lineNumber: 708,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setSelectedMessage(null),
                                                        className: "p-3 bg-black/5 hover:bg-black/10 rounded-full transition-colors",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                            size: 24
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                            lineNumber: 726,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                        lineNumber: 722,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                lineNumber: 707,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-mono text-[10px] uppercase tracking-widest text-black/20 block mb-2",
                                                                children: "Subject"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                lineNumber: 732,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xl font-bold uppercase",
                                                                children: selectedMessage.subject
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                lineNumber: 733,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                        lineNumber: 731,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-mono text-[10px] uppercase tracking-widest text-black/20 block mb-2",
                                                                children: "Message"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                lineNumber: 736,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-black/5 p-8 rounded-2xl",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-lg leading-relaxed whitespace-pre-wrap",
                                                                    children: selectedMessage.message
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                    lineNumber: 738,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                lineNumber: 737,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                        lineNumber: 735,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "pt-8 border-t border-black/5 flex justify-between items-center text-[10px] font-mono text-black/20 uppercase tracking-[0.2em]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    "Sent on ",
                                                                    new Date(selectedMessage.created_at).toLocaleString()
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                lineNumber: 742,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>{
                                                                    onMessageDelete?.(selectedMessage.id);
                                                                    setSelectedMessage(null);
                                                                },
                                                                className: "text-red-500 hover:underline",
                                                                children: "Delete Message"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                                lineNumber: 743,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                        lineNumber: 741,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                                lineNumber: 730,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                        lineNumber: 706,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                                    lineNumber: 700,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                            lineNumber: 692,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                        lineNumber: 690,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
                lineNumber: 227,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx",
        lineNumber: 225,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AdminPanel, "t0ipRApAwjvq/6Y+YbPTPpqWTWs=");
_c = AdminPanel;
var _c;
__turbopack_context__.k.register(_c, "AdminPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminLogin.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdminLogin",
    ()=>AdminLogin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
const AdminLogin = ({ onLogin, onClose, error })=>{
    _s();
    const [pw, setPw] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[200] flex items-center justify-center p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-bumaye-black/95 backdrop-blur-md",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminLogin.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full max-w-xs bg-white rounded-2xl p-8 flex flex-col gap-4 items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-display text-2xl mb-2",
                        children: "Admin Login"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminLogin.tsx",
                        lineNumber: 9,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "password",
                        placeholder: "Wachtwoord",
                        value: pw,
                        onChange: (e)=>setPw(e.target.value),
                        className: "w-full bg-black/5 border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:border-bumaye-orange"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminLogin.tsx",
                        lineNumber: 10,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-red-500 text-xs",
                        children: "Onjuist wachtwoord"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminLogin.tsx",
                        lineNumber: 11,
                        columnNumber: 19
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onLogin(pw),
                        className: "w-full bg-bumaye-orange text-white py-3 rounded-xl font-bold hover:bg-bumaye-black transition-all",
                        children: "Login"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminLogin.tsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        className: "text-xs text-bumaye-orange mt-2 hover:underline",
                        children: "Annuleren"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminLogin.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminLogin.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminLogin.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AdminLogin, "HowERZebFlvw6CxBspc75eP18U4=");
_c = AdminLogin;
var _c;
__turbopack_context__.k.register(_c, "AdminLogin");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Bumaye website/Bumaye-party-1/src/components/TicketModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TicketModal",
    ()=>TicketModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
;
;
;
const ensureAbsoluteUrl = (url)=>{
    if (!url) return '';
    if (url.startsWith('http://') || url.startsWith('https://')) return url;
    if (url.startsWith('//')) return `https:${url}`;
    return `https://${url}`;
};
const TicketModal = ({ url, isOpen, onClose })=>{
    if (!isOpen) return null;
    const absoluteUrl = ensureAbsoluteUrl(url);
    const isBlocked = [
        'linktr.ee',
        'instagram.com',
        'facebook.com',
        'tiktok.com',
        'spotify.com'
    ].some((s)=>absoluteUrl.toLowerCase().includes(s));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            className: "fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-bumaye-black/90 backdrop-blur-xl",
                    onClick: onClose
                }, void 0, false, {
                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/TicketModal.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        scale: 0.9,
                        y: 20
                    },
                    animate: {
                        scale: 1,
                        y: 0
                    },
                    exit: {
                        scale: 0.9,
                        y: 20
                    },
                    className: "relative w-full max-w-5xl h-[80vh] bg-white rounded-[2rem] overflow-hidden shadow-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-4 right-4 z-10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "p-2 bg-bumaye-black/10 hover:bg-bumaye-black/20 rounded-full transition-colors text-bumaye-black",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 24
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/TicketModal.tsx",
                                    lineNumber: 22,
                                    columnNumber: 148
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/TicketModal.tsx",
                                lineNumber: 22,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/TicketModal.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-full pt-12",
                            children: isBlocked ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-full flex flex-col items-center justify-center p-12 text-center bg-bumaye-black",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-24 h-24 bg-white/5 rounded-3xl flex items-center justify-center mb-8 border border-white/10",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                            size: 40,
                                            className: "text-bumaye-orange"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/TicketModal.tsx",
                                            lineNumber: 27,
                                            columnNumber: 128
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/TicketModal.tsx",
                                        lineNumber: 27,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-display text-4xl text-white mb-4 uppercase tracking-tighter",
                                        children: "SECURE REDIRECT"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/TicketModal.tsx",
                                        lineNumber: 28,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white/40 max-w-sm mb-12 text-lg leading-relaxed",
                                        children: "This shop requires a dedicated browser window for a secure checkout experience."
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/TicketModal.tsx",
                                        lineNumber: 29,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: absoluteUrl,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        onClick: onClose,
                                        className: "px-12 py-5 bg-white text-bumaye-black rounded-2xl font-bold text-xl hover:bg-bumaye-orange hover:text-white transition-all transform hover:scale-105",
                                        children: "OPEN TICKET SHOP"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/TicketModal.tsx",
                                        lineNumber: 30,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/TicketModal.tsx",
                                lineNumber: 26,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                src: absoluteUrl,
                                className: "w-full h-full border-none",
                                title: "Ticket Shop"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/TicketModal.tsx",
                                lineNumber: 33,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/TicketModal.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-0 left-0 w-full p-4 bg-white border-t border-black/5 flex justify-between items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] font-mono uppercase tracking-widest text-black/40",
                                    children: "Secure Checkout via Ticket Provider"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/TicketModal.tsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: absoluteUrl,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "text-[10px] font-mono uppercase tracking-widest text-bumaye-orange flex items-center gap-1 hover:underline",
                                    children: [
                                        "Open in new tab ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                            size: 12
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/TicketModal.tsx",
                                            lineNumber: 38,
                                            columnNumber: 203
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/TicketModal.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/TicketModal.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/TicketModal.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/TicketModal.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/TicketModal.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = TicketModal;
var _c;
__turbopack_context__.k.register(_c, "TicketModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Bumaye website/Bumaye-party-1/src/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */ __turbopack_context__.s([
    "EVENTS",
    ()=>EVENTS,
    "GALLERY",
    ()=>GALLERY
]);
const EVENTS = [];
const GALLERY = [];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Bumaye website/Bumaye-party-1/src/components/MainApp.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>App
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$src$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$src$2f$components$2f$Hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Hero.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$src$2f$components$2f$Marquee$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Marquee.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$src$2f$components$2f$FeaturedEvent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/src/components/FeaturedEvent.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$src$2f$components$2f$AboutSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AboutSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$src$2f$components$2f$Newsletter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Newsletter.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$src$2f$components$2f$ContactSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/src/components/ContactSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/src/components/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$src$2f$components$2f$AdminPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$src$2f$components$2f$AdminLogin$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/src/components/AdminLogin.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$src$2f$components$2f$TicketModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/src/components/TicketModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$src$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/src/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Bumaye website/Bumaye-party-1/src/lib/supabase.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const ADMIN_PASSWORD = 'bumaye2026';
const ensureAbsoluteUrl = (url)=>{
    if (!url) return '';
    if (url.startsWith('http://') || url.startsWith('https://')) return url;
    if (url.startsWith('//')) return `https:${url}`;
    return `https://${url}`;
};
function App() {
    _s();
    const [events, setEvents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$src$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EVENTS"]);
    const [isAdminOpen, setIsAdminOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [ticketUrl, setTicketUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isAdminLoggedIn, setIsAdminLoggedIn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showLogin, setShowLogin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loginError, setLoginError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [gallery, setGallery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$src$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GALLERY"]);
    const [logoUrl, setLogoUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [aboutImageUrl, setAboutImageUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [subscribers, setSubscribers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isSyncing, setIsSyncing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            const init = {
                "App.useEffect.init": async ()=>{
                    setIsSyncing(true);
                    // Fetch only essential data for landing page first
                    await Promise.all([
                        fetchSettings(),
                        fetchEvents(),
                        fetchGallery()
                    ]);
                    setIsSyncing(false);
                }
            }["App.useEffect.init"];
            init();
        }
    }["App.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            if (isAdminOpen) fetchInbox();
        }
    }["App.useEffect"], [
        isAdminOpen
    ]);
    const handleBook = (url)=>{
        if (!url) return;
        setTicketUrl(ensureAbsoluteUrl(url));
    };
    const compressImage = (file)=>new Promise((resolve)=>{
            if (file.type === 'image/svg+xml') {
                resolve(file);
                return;
            }
            const reader = new FileReader();
            reader.onload = (e)=>{
                const img = new Image();
                img.onload = ()=>{
                    const canvas = document.createElement('canvas');
                    let { width, height } = img;
                    const MAX = 1200;
                    if (width > height && width > MAX) {
                        height = Math.round(height * (MAX / width));
                        width = MAX;
                    } else if (height > MAX) {
                        width = Math.round(width * (MAX / height));
                        height = MAX;
                    }
                    canvas.width = width;
                    canvas.height = height;
                    const ctx = canvas.getContext('2d');
                    if (ctx) {
                        ctx.clearRect(0, 0, width, height);
                        ctx.drawImage(img, 0, 0, width, height);
                    }
                    canvas.toBlob((blob)=>{
                        if (blob) resolve(blob);
                    }, file.type === 'image/png' ? 'image/png' : 'image/jpeg', file.type === 'image/png' ? 0.8 : 0.6);
                };
                img.src = e.target?.result;
            };
            reader.readAsDataURL(file);
        });
    const uploadImage = async (file, path)=>{
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSupabaseConfigured"]) return '';
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].storage.from('assets').upload(`${path}/${fileName}`, file, {
            cacheControl: '3600',
            upsert: false
        });
        if (error) throw error;
        const { data: { publicUrl } } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].storage.from('assets').getPublicUrl(data.path);
        return publicUrl;
    };
    const fetchInbox = async ()=>{
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSupabaseConfigured"]) return;
        const [subs, msgs] = await Promise.all([
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('subscribers').select('*').order('created_at', {
                ascending: false
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('contact_messages').select('*').order('created_at', {
                ascending: false
            })
        ]);
        if (subs.data) setSubscribers(subs.data);
        if (msgs.data) setMessages(msgs.data);
    };
    const fetchSettings = async ()=>{
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSupabaseConfigured"]) return;
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('settings').select('*');
        if (!error && data) {
            const map = {};
            data.forEach((s)=>{
                map[s.key] = s.value;
            });
            if (map.logo_url) setLogoUrl(map.logo_url);
            if (map.about_image_url) setAboutImageUrl(map.about_image_url);
        }
    };
    const fetchGallery = async ()=>{
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSupabaseConfigured"]) return;
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('gallery').select('*').order('display_order', {
            ascending: true,
            nullsFirst: false
        });
        if (error?.message.includes('display_order')) {
            const fallback = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('gallery').select('*').order('created_at', {
                ascending: false
            });
            if (!fallback.error && fallback.data) setGallery(fallback.data);
            return;
        }
        if (data) {
            console.log(`Gallery sync: Found ${data.length} items`);
            setGallery(data.length > 0 ? data : []);
        }
    };
    const fetchEvents = async ()=>{
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSupabaseConfigured"]) return;
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('events').select('*').order('date', {
            ascending: true
        });
        if (!error && data) {
            console.log(`Events sync: Found ${data.length} items`);
            if (data.length > 0) setEvents(data);
        }
    };
    const handleRefreshAll = async ()=>{
        await Promise.all([
            fetchEvents(),
            fetchGallery(),
            fetchSettings(),
            fetchInbox()
        ]);
    };
    const handleAddEvent = async (newEvent)=>{
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSupabaseConfigured"]) {
            setEvents([
                ...events,
                {
                    ...newEvent,
                    id: Math.random().toString(36).substr(2, 9)
                }
            ]);
            return;
        }
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('events').insert([
            newEvent
        ]).select();
        if (!error && data) setEvents([
            ...events,
            data[0]
        ]);
    };
    const handleDeleteEvent = async (id)=>{
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSupabaseConfigured"]) {
            setEvents(events.filter((e)=>e.id !== id));
            return;
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('events').delete().eq('id', id);
        setEvents(events.filter((e)=>e.id !== id));
    };
    const handleUpdateEvent = async (id, updatedEvent)=>{
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSupabaseConfigured"]) {
            setEvents(events.map((e)=>e.id === id ? {
                    ...updatedEvent,
                    id
                } : e));
            return;
        }
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('events').update(updatedEvent).eq('id', id).select();
        if (!error && data) setEvents(events.map((e)=>e.id === id ? data[0] : e));
    };
    const handleAppGalleryAdd = async (files, url)=>{
        const maxOrder = gallery.length > 0 ? Math.max(...gallery.map((g)=>g.display_order || 0)) : 0;
        let currentOrder = maxOrder + 1;
        const newItems = [];
        // Handle uploaded files
        for (const file of files){
            try {
                const compressed = await compressImage(file);
                const publicUrl = await uploadImage(compressed, 'gallery');
                newItems.push({
                    id: Math.random().toString(36).substring(2, 9),
                    url: publicUrl,
                    display_order: currentOrder++
                });
            } catch (err) {
                console.error('Upload failed:', err);
            }
        }
        // Handle URL input
        if (url) {
            newItems.push({
                id: Math.random().toString(36).substring(2, 9),
                url,
                display_order: currentOrder++
            });
        }
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSupabaseConfigured"]) {
            setGallery([
                ...gallery,
                ...newItems
            ]);
            return;
        }
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('gallery').insert(newItems.map((i)=>({
                url: i.url,
                display_order: i.display_order
            }))).select();
        if (!result.error && result.data) setGallery([
            ...gallery,
            ...result.data
        ]);
    };
    const handleAppGalleryRemove = async (id)=>{
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSupabaseConfigured"]) {
            setGallery(gallery.filter((g)=>g.id !== id));
            return;
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('gallery').delete().eq('id', id);
        setGallery(gallery.filter((g)=>g.id !== id));
    };
    const handleAppGalleryReorder = (newGallery)=>{
        const updated = newGallery.map((item, i)=>({
                ...item,
                display_order: i + 1
            }));
        setGallery(updated);
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSupabaseConfigured"]) updated.forEach((item)=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('gallery').update({
                display_order: item.display_order
            }).eq('id', item.id));
    };
    const handleLogoUpload = async (file)=>{
        try {
            const compressed = await compressImage(file);
            const url = await uploadImage(compressed, 'branding');
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSupabaseConfigured"]) {
                setLogoUrl(url);
                return;
            }
            await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('settings').upsert({
                key: 'logo_url',
                value: url
            });
            setLogoUrl(url);
        } catch (err) {
            console.error('Logo upload failed:', err);
        }
    };
    const handleEventImageUpload = async (file)=>{
        const compressed = await compressImage(file);
        return await uploadImage(compressed, 'events');
    };
    const handleAboutImageUpload = async (file)=>{
        try {
            const compressed = await compressImage(file);
            const url = await uploadImage(compressed, 'branding');
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSupabaseConfigured"]) {
                setAboutImageUrl(url);
                return;
            }
            await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('settings').upsert({
                key: 'about_image_url',
                value: url
            });
            setAboutImageUrl(url);
        } catch (err) {
            console.error('About image upload failed:', err);
        }
    };
    const handleSubscriberDelete = async (id)=>{
        await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('subscribers').delete().eq('id', id);
        setSubscribers(subscribers.filter((s)=>s.id !== id));
    };
    const handleMessageDelete = async (id)=>{
        await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('contact_messages').delete().eq('id', id);
        setMessages(messages.filter((m)=>m.id !== id));
    };
    const handleMessageRead = async (id)=>{
        await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('contact_messages').update({
            is_read: true
        }).eq('id', id);
        setMessages(messages.map((m)=>m.id === id ? {
                ...m,
                is_read: true
            } : m));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen selection:bg-bumaye-orange selection:text-white overflow-x-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$src$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Navbar"], {
                logoUrl: logoUrl
            }, void 0, false, {
                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/MainApp.tsx",
                lineNumber: 254,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$src$2f$components$2f$Hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hero"], {
                gallery: gallery,
                firstEvent: events[0]
            }, void 0, false, {
                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/MainApp.tsx",
                lineNumber: 255,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$src$2f$components$2f$Marquee$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Marquee"], {}, void 0, false, {
                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/MainApp.tsx",
                lineNumber: 256,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "events",
                className: "py-16 md:py-32 px-4 md:px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center text-center mb-12 md:mb-24",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-mono text-bumaye-orange text-xs tracking-[0.6em] uppercase mb-6 block",
                                    children: "The Main Event"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/MainApp.tsx",
                                    lineNumber: 260,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-display text-7xl md:text-[12rem] uppercase leading-[0.75] tracking-tighter mb-8 px-4",
                                    children: "NEXT UP"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/MainApp.tsx",
                                    lineNumber: 261,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "max-w-xl text-white/40 font-light leading-relaxed text-xl mb-12",
                                    children: "where genres blend & nations fuse."
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/MainApp.tsx",
                                    lineNumber: 262,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/MainApp.tsx",
                            lineNumber: 259,
                            columnNumber: 11
                        }, this),
                        events.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$src$2f$components$2f$FeaturedEvent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FeaturedEvent"], {
                            event: events[0],
                            onBook: handleBook
                        }, void 0, false, {
                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/MainApp.tsx",
                            lineNumber: 264,
                            columnNumber: 32
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center py-32 glass rounded-[3rem] border border-dashed border-white/10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-mono text-white/20 uppercase tracking-widest",
                                children: "No upcoming events scheduled"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/MainApp.tsx",
                                lineNumber: 266,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/MainApp.tsx",
                            lineNumber: 265,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/MainApp.tsx",
                    lineNumber: 258,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/MainApp.tsx",
                lineNumber: 257,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$src$2f$components$2f$AboutSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AboutSection"], {
                imageUrl: aboutImageUrl
            }, void 0, false, {
                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/MainApp.tsx",
                lineNumber: 271,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$src$2f$components$2f$Newsletter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Newsletter"], {}, void 0, false, {
                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/MainApp.tsx",
                lineNumber: 272,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$src$2f$components$2f$ContactSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContactSection"], {}, void 0, false, {
                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/MainApp.tsx",
                lineNumber: 273,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Footer"], {
                onAdminClick: ()=>isAdminLoggedIn ? setIsAdminOpen(true) : setShowLogin(true)
            }, void 0, false, {
                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/MainApp.tsx",
                lineNumber: 274,
                columnNumber: 7
            }, this),
            isSyncing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-8 left-8 z-[200] flex items-center gap-3 bg-bumaye-black/80 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-2xl shadow-2xl pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-2 h-2 bg-bumaye-orange rounded-full animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/MainApp.tsx",
                        lineNumber: 278,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono text-[10px] uppercase tracking-[0.2em] text-white/60",
                        children: "Updating Feed..."
                    }, void 0, false, {
                        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/MainApp.tsx",
                        lineNumber: 279,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/MainApp.tsx",
                lineNumber: 277,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$src$2f$components$2f$TicketModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TicketModal"], {
                url: ticketUrl || '',
                isOpen: !!ticketUrl,
                onClose: ()=>setTicketUrl(null)
            }, void 0, false, {
                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/MainApp.tsx",
                lineNumber: 283,
                columnNumber: 7
            }, this),
            showLogin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$src$2f$components$2f$AdminLogin$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdminLogin"], {
                onLogin: (pw)=>{
                    if (pw === ADMIN_PASSWORD) {
                        setIsAdminLoggedIn(true);
                        setShowLogin(false);
                        setLoginError(false);
                        setIsAdminOpen(true);
                    } else {
                        setLoginError(true);
                    }
                },
                onClose: ()=>{
                    setShowLogin(false);
                    setLoginError(false);
                },
                error: loginError
            }, void 0, false, {
                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/MainApp.tsx",
                lineNumber: 284,
                columnNumber: 21
            }, this),
            isAdminOpen && isAdminLoggedIn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Bumaye__website$2f$Bumaye$2d$party$2d$1$2f$src$2f$components$2f$AdminPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdminPanel"], {
                events: events,
                onAdd: handleAddEvent,
                onUpdate: handleUpdateEvent,
                onDelete: handleDeleteEvent,
                onRefresh: handleRefreshAll,
                onClose: ()=>setIsAdminOpen(false),
                gallery: gallery,
                onGalleryAdd: handleAppGalleryAdd,
                onGalleryRemove: handleAppGalleryRemove,
                onGalleryReorder: handleAppGalleryReorder,
                logoUrl: logoUrl,
                onLogoUpload: handleLogoUpload,
                aboutImageUrl: aboutImageUrl,
                onAboutImageUpload: handleAboutImageUpload,
                subscribers: subscribers,
                contactMessages: messages,
                onSubscriberDelete: handleSubscriberDelete,
                onMessageDelete: handleMessageDelete,
                onMessageRead: handleMessageRead,
                onImageUpload: handleEventImageUpload
            }, void 0, false, {
                fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/MainApp.tsx",
                lineNumber: 286,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Bumaye website/Bumaye-party-1/src/components/MainApp.tsx",
        lineNumber: 253,
        columnNumber: 5
    }, this);
}
_s(App, "Rm9hSx7g5023d/AOPHyyWdW4dfQ=");
_c = App;
var _c;
__turbopack_context__.k.register(_c, "App");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_Bumaye%20website_Bumaye-party-1_src_209b2565._.js.map
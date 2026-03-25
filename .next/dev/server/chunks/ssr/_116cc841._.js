module.exports = [
"[project]/node_modules/next/dist/esm/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/node_modules/next/dist/esm/server/route-kind.js [app-rsc] (ecmascript, Next.js server utility)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/route-kind.js [app-rsc] (ecmascript)"));}),
"[project]/node_modules/next/dist/esm/server/instrumentation/utils.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRevalidateReason",
    ()=>getRevalidateReason
]);
function getRevalidateReason(params) {
    if (params.isOnDemandRevalidate) {
        return 'on-demand';
    }
    if (params.isStaticGeneration) {
        return 'stale';
    }
    return undefined;
} //# sourceMappingURL=utils.js.map
}),
"[project]/node_modules/next/dist/esm/server/lib/trace/constants.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Contains predefined constants for the trace span name in next/server.
 *
 * Currently, next/server/tracer is internal implementation only for tracking
 * next.js's implementation only with known span names defined here.
 **/ // eslint typescript has a bug with TS enums
__turbopack_context__.s([
    "AppRenderSpan",
    ()=>AppRenderSpan,
    "AppRouteRouteHandlersSpan",
    ()=>AppRouteRouteHandlersSpan,
    "BaseServerSpan",
    ()=>BaseServerSpan,
    "LoadComponentsSpan",
    ()=>LoadComponentsSpan,
    "LogSpanAllowList",
    ()=>LogSpanAllowList,
    "MiddlewareSpan",
    ()=>MiddlewareSpan,
    "NextNodeServerSpan",
    ()=>NextNodeServerSpan,
    "NextServerSpan",
    ()=>NextServerSpan,
    "NextVanillaSpanAllowlist",
    ()=>NextVanillaSpanAllowlist,
    "NodeSpan",
    ()=>NodeSpan,
    "RenderSpan",
    ()=>RenderSpan,
    "ResolveMetadataSpan",
    ()=>ResolveMetadataSpan,
    "RouterSpan",
    ()=>RouterSpan,
    "StartServerSpan",
    ()=>StartServerSpan
]);
var BaseServerSpan = /*#__PURE__*/ function(BaseServerSpan) {
    BaseServerSpan["handleRequest"] = "BaseServer.handleRequest";
    BaseServerSpan["run"] = "BaseServer.run";
    BaseServerSpan["pipe"] = "BaseServer.pipe";
    BaseServerSpan["getStaticHTML"] = "BaseServer.getStaticHTML";
    BaseServerSpan["render"] = "BaseServer.render";
    BaseServerSpan["renderToResponseWithComponents"] = "BaseServer.renderToResponseWithComponents";
    BaseServerSpan["renderToResponse"] = "BaseServer.renderToResponse";
    BaseServerSpan["renderToHTML"] = "BaseServer.renderToHTML";
    BaseServerSpan["renderError"] = "BaseServer.renderError";
    BaseServerSpan["renderErrorToResponse"] = "BaseServer.renderErrorToResponse";
    BaseServerSpan["renderErrorToHTML"] = "BaseServer.renderErrorToHTML";
    BaseServerSpan["render404"] = "BaseServer.render404";
    return BaseServerSpan;
}(BaseServerSpan || {});
var LoadComponentsSpan = /*#__PURE__*/ function(LoadComponentsSpan) {
    LoadComponentsSpan["loadDefaultErrorComponents"] = "LoadComponents.loadDefaultErrorComponents";
    LoadComponentsSpan["loadComponents"] = "LoadComponents.loadComponents";
    return LoadComponentsSpan;
}(LoadComponentsSpan || {});
var NextServerSpan = /*#__PURE__*/ function(NextServerSpan) {
    NextServerSpan["getRequestHandler"] = "NextServer.getRequestHandler";
    NextServerSpan["getRequestHandlerWithMetadata"] = "NextServer.getRequestHandlerWithMetadata";
    NextServerSpan["getServer"] = "NextServer.getServer";
    NextServerSpan["getServerRequestHandler"] = "NextServer.getServerRequestHandler";
    NextServerSpan["createServer"] = "createServer.createServer";
    return NextServerSpan;
}(NextServerSpan || {});
var NextNodeServerSpan = /*#__PURE__*/ function(NextNodeServerSpan) {
    NextNodeServerSpan["compression"] = "NextNodeServer.compression";
    NextNodeServerSpan["getBuildId"] = "NextNodeServer.getBuildId";
    NextNodeServerSpan["createComponentTree"] = "NextNodeServer.createComponentTree";
    NextNodeServerSpan["clientComponentLoading"] = "NextNodeServer.clientComponentLoading";
    NextNodeServerSpan["getLayoutOrPageModule"] = "NextNodeServer.getLayoutOrPageModule";
    NextNodeServerSpan["generateStaticRoutes"] = "NextNodeServer.generateStaticRoutes";
    NextNodeServerSpan["generateFsStaticRoutes"] = "NextNodeServer.generateFsStaticRoutes";
    NextNodeServerSpan["generatePublicRoutes"] = "NextNodeServer.generatePublicRoutes";
    NextNodeServerSpan["generateImageRoutes"] = "NextNodeServer.generateImageRoutes.route";
    NextNodeServerSpan["sendRenderResult"] = "NextNodeServer.sendRenderResult";
    NextNodeServerSpan["proxyRequest"] = "NextNodeServer.proxyRequest";
    NextNodeServerSpan["runApi"] = "NextNodeServer.runApi";
    NextNodeServerSpan["render"] = "NextNodeServer.render";
    NextNodeServerSpan["renderHTML"] = "NextNodeServer.renderHTML";
    NextNodeServerSpan["imageOptimizer"] = "NextNodeServer.imageOptimizer";
    NextNodeServerSpan["getPagePath"] = "NextNodeServer.getPagePath";
    NextNodeServerSpan["getRoutesManifest"] = "NextNodeServer.getRoutesManifest";
    NextNodeServerSpan["findPageComponents"] = "NextNodeServer.findPageComponents";
    NextNodeServerSpan["getFontManifest"] = "NextNodeServer.getFontManifest";
    NextNodeServerSpan["getServerComponentManifest"] = "NextNodeServer.getServerComponentManifest";
    NextNodeServerSpan["getRequestHandler"] = "NextNodeServer.getRequestHandler";
    NextNodeServerSpan["renderToHTML"] = "NextNodeServer.renderToHTML";
    NextNodeServerSpan["renderError"] = "NextNodeServer.renderError";
    NextNodeServerSpan["renderErrorToHTML"] = "NextNodeServer.renderErrorToHTML";
    NextNodeServerSpan["render404"] = "NextNodeServer.render404";
    NextNodeServerSpan["startResponse"] = "NextNodeServer.startResponse";
    // nested inner span, does not require parent scope name
    NextNodeServerSpan["route"] = "route";
    NextNodeServerSpan["onProxyReq"] = "onProxyReq";
    NextNodeServerSpan["apiResolver"] = "apiResolver";
    NextNodeServerSpan["internalFetch"] = "internalFetch";
    return NextNodeServerSpan;
}(NextNodeServerSpan || {});
var StartServerSpan = /*#__PURE__*/ function(StartServerSpan) {
    StartServerSpan["startServer"] = "startServer.startServer";
    return StartServerSpan;
}(StartServerSpan || {});
var RenderSpan = /*#__PURE__*/ function(RenderSpan) {
    RenderSpan["getServerSideProps"] = "Render.getServerSideProps";
    RenderSpan["getStaticProps"] = "Render.getStaticProps";
    RenderSpan["renderToString"] = "Render.renderToString";
    RenderSpan["renderDocument"] = "Render.renderDocument";
    RenderSpan["createBodyResult"] = "Render.createBodyResult";
    return RenderSpan;
}(RenderSpan || {});
var AppRenderSpan = /*#__PURE__*/ function(AppRenderSpan) {
    AppRenderSpan["renderToString"] = "AppRender.renderToString";
    AppRenderSpan["renderToReadableStream"] = "AppRender.renderToReadableStream";
    AppRenderSpan["getBodyResult"] = "AppRender.getBodyResult";
    AppRenderSpan["fetch"] = "AppRender.fetch";
    return AppRenderSpan;
}(AppRenderSpan || {});
var RouterSpan = /*#__PURE__*/ function(RouterSpan) {
    RouterSpan["executeRoute"] = "Router.executeRoute";
    return RouterSpan;
}(RouterSpan || {});
var NodeSpan = /*#__PURE__*/ function(NodeSpan) {
    NodeSpan["runHandler"] = "Node.runHandler";
    return NodeSpan;
}(NodeSpan || {});
var AppRouteRouteHandlersSpan = /*#__PURE__*/ function(AppRouteRouteHandlersSpan) {
    AppRouteRouteHandlersSpan["runHandler"] = "AppRouteRouteHandlers.runHandler";
    return AppRouteRouteHandlersSpan;
}(AppRouteRouteHandlersSpan || {});
var ResolveMetadataSpan = /*#__PURE__*/ function(ResolveMetadataSpan) {
    ResolveMetadataSpan["generateMetadata"] = "ResolveMetadata.generateMetadata";
    ResolveMetadataSpan["generateViewport"] = "ResolveMetadata.generateViewport";
    return ResolveMetadataSpan;
}(ResolveMetadataSpan || {});
var MiddlewareSpan = /*#__PURE__*/ function(MiddlewareSpan) {
    MiddlewareSpan["execute"] = "Middleware.execute";
    return MiddlewareSpan;
}(MiddlewareSpan || {});
const NextVanillaSpanAllowlist = new Set([
    "Middleware.execute",
    "BaseServer.handleRequest",
    "Render.getServerSideProps",
    "Render.getStaticProps",
    "AppRender.fetch",
    "AppRender.getBodyResult",
    "Render.renderDocument",
    "Node.runHandler",
    "AppRouteRouteHandlers.runHandler",
    "ResolveMetadata.generateMetadata",
    "ResolveMetadata.generateViewport",
    "NextNodeServer.createComponentTree",
    "NextNodeServer.findPageComponents",
    "NextNodeServer.getLayoutOrPageModule",
    "NextNodeServer.startResponse",
    "NextNodeServer.clientComponentLoading"
]);
const LogSpanAllowList = new Set([
    "NextNodeServer.findPageComponents",
    "NextNodeServer.createComponentTree",
    "NextNodeServer.clientComponentLoading"
]);
;
 //# sourceMappingURL=constants.js.map
}),
"[project]/node_modules/next/dist/esm/shared/lib/is-thenable.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Check to see if a value is Thenable.
 *
 * @param promise the maybe-thenable value
 * @returns true if the value is thenable
 */ __turbopack_context__.s([
    "isThenable",
    ()=>isThenable
]);
function isThenable(promise) {
    return promise !== null && typeof promise === 'object' && 'then' in promise && typeof promise.then === 'function';
} //# sourceMappingURL=is-thenable.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/compiled/@opentelemetry/api/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

(()=>{
    "use strict";
    var e = {
        491: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ContextAPI = void 0;
            const n = r(223);
            const a = r(172);
            const o = r(930);
            const i = "context";
            const c = new n.NoopContextManager;
            class ContextAPI {
                constructor(){}
                static getInstance() {
                    if (!this._instance) {
                        this._instance = new ContextAPI;
                    }
                    return this._instance;
                }
                setGlobalContextManager(e) {
                    return (0, a.registerGlobal)(i, e, o.DiagAPI.instance());
                }
                active() {
                    return this._getContextManager().active();
                }
                with(e, t, r, ...n) {
                    return this._getContextManager().with(e, t, r, ...n);
                }
                bind(e, t) {
                    return this._getContextManager().bind(e, t);
                }
                _getContextManager() {
                    return (0, a.getGlobal)(i) || c;
                }
                disable() {
                    this._getContextManager().disable();
                    (0, a.unregisterGlobal)(i, o.DiagAPI.instance());
                }
            }
            t.ContextAPI = ContextAPI;
        },
        930: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.DiagAPI = void 0;
            const n = r(56);
            const a = r(912);
            const o = r(957);
            const i = r(172);
            const c = "diag";
            class DiagAPI {
                constructor(){
                    function _logProxy(e) {
                        return function(...t) {
                            const r = (0, i.getGlobal)("diag");
                            if (!r) return;
                            return r[e](...t);
                        };
                    }
                    const e = this;
                    const setLogger = (t, r = {
                        logLevel: o.DiagLogLevel.INFO
                    })=>{
                        var n, c, s;
                        if (t === e) {
                            const t = new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
                            e.error((n = t.stack) !== null && n !== void 0 ? n : t.message);
                            return false;
                        }
                        if (typeof r === "number") {
                            r = {
                                logLevel: r
                            };
                        }
                        const u = (0, i.getGlobal)("diag");
                        const l = (0, a.createLogLevelDiagLogger)((c = r.logLevel) !== null && c !== void 0 ? c : o.DiagLogLevel.INFO, t);
                        if (u && !r.suppressOverrideMessage) {
                            const e = (s = (new Error).stack) !== null && s !== void 0 ? s : "<failed to generate stacktrace>";
                            u.warn(`Current logger will be overwritten from ${e}`);
                            l.warn(`Current logger will overwrite one already registered from ${e}`);
                        }
                        return (0, i.registerGlobal)("diag", l, e, true);
                    };
                    e.setLogger = setLogger;
                    e.disable = ()=>{
                        (0, i.unregisterGlobal)(c, e);
                    };
                    e.createComponentLogger = (e)=>new n.DiagComponentLogger(e);
                    e.verbose = _logProxy("verbose");
                    e.debug = _logProxy("debug");
                    e.info = _logProxy("info");
                    e.warn = _logProxy("warn");
                    e.error = _logProxy("error");
                }
                static instance() {
                    if (!this._instance) {
                        this._instance = new DiagAPI;
                    }
                    return this._instance;
                }
            }
            t.DiagAPI = DiagAPI;
        },
        653: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.MetricsAPI = void 0;
            const n = r(660);
            const a = r(172);
            const o = r(930);
            const i = "metrics";
            class MetricsAPI {
                constructor(){}
                static getInstance() {
                    if (!this._instance) {
                        this._instance = new MetricsAPI;
                    }
                    return this._instance;
                }
                setGlobalMeterProvider(e) {
                    return (0, a.registerGlobal)(i, e, o.DiagAPI.instance());
                }
                getMeterProvider() {
                    return (0, a.getGlobal)(i) || n.NOOP_METER_PROVIDER;
                }
                getMeter(e, t, r) {
                    return this.getMeterProvider().getMeter(e, t, r);
                }
                disable() {
                    (0, a.unregisterGlobal)(i, o.DiagAPI.instance());
                }
            }
            t.MetricsAPI = MetricsAPI;
        },
        181: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.PropagationAPI = void 0;
            const n = r(172);
            const a = r(874);
            const o = r(194);
            const i = r(277);
            const c = r(369);
            const s = r(930);
            const u = "propagation";
            const l = new a.NoopTextMapPropagator;
            class PropagationAPI {
                constructor(){
                    this.createBaggage = c.createBaggage;
                    this.getBaggage = i.getBaggage;
                    this.getActiveBaggage = i.getActiveBaggage;
                    this.setBaggage = i.setBaggage;
                    this.deleteBaggage = i.deleteBaggage;
                }
                static getInstance() {
                    if (!this._instance) {
                        this._instance = new PropagationAPI;
                    }
                    return this._instance;
                }
                setGlobalPropagator(e) {
                    return (0, n.registerGlobal)(u, e, s.DiagAPI.instance());
                }
                inject(e, t, r = o.defaultTextMapSetter) {
                    return this._getGlobalPropagator().inject(e, t, r);
                }
                extract(e, t, r = o.defaultTextMapGetter) {
                    return this._getGlobalPropagator().extract(e, t, r);
                }
                fields() {
                    return this._getGlobalPropagator().fields();
                }
                disable() {
                    (0, n.unregisterGlobal)(u, s.DiagAPI.instance());
                }
                _getGlobalPropagator() {
                    return (0, n.getGlobal)(u) || l;
                }
            }
            t.PropagationAPI = PropagationAPI;
        },
        997: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.TraceAPI = void 0;
            const n = r(172);
            const a = r(846);
            const o = r(139);
            const i = r(607);
            const c = r(930);
            const s = "trace";
            class TraceAPI {
                constructor(){
                    this._proxyTracerProvider = new a.ProxyTracerProvider;
                    this.wrapSpanContext = o.wrapSpanContext;
                    this.isSpanContextValid = o.isSpanContextValid;
                    this.deleteSpan = i.deleteSpan;
                    this.getSpan = i.getSpan;
                    this.getActiveSpan = i.getActiveSpan;
                    this.getSpanContext = i.getSpanContext;
                    this.setSpan = i.setSpan;
                    this.setSpanContext = i.setSpanContext;
                }
                static getInstance() {
                    if (!this._instance) {
                        this._instance = new TraceAPI;
                    }
                    return this._instance;
                }
                setGlobalTracerProvider(e) {
                    const t = (0, n.registerGlobal)(s, this._proxyTracerProvider, c.DiagAPI.instance());
                    if (t) {
                        this._proxyTracerProvider.setDelegate(e);
                    }
                    return t;
                }
                getTracerProvider() {
                    return (0, n.getGlobal)(s) || this._proxyTracerProvider;
                }
                getTracer(e, t) {
                    return this.getTracerProvider().getTracer(e, t);
                }
                disable() {
                    (0, n.unregisterGlobal)(s, c.DiagAPI.instance());
                    this._proxyTracerProvider = new a.ProxyTracerProvider;
                }
            }
            t.TraceAPI = TraceAPI;
        },
        277: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.deleteBaggage = t.setBaggage = t.getActiveBaggage = t.getBaggage = void 0;
            const n = r(491);
            const a = r(780);
            const o = (0, a.createContextKey)("OpenTelemetry Baggage Key");
            function getBaggage(e) {
                return e.getValue(o) || undefined;
            }
            t.getBaggage = getBaggage;
            function getActiveBaggage() {
                return getBaggage(n.ContextAPI.getInstance().active());
            }
            t.getActiveBaggage = getActiveBaggage;
            function setBaggage(e, t) {
                return e.setValue(o, t);
            }
            t.setBaggage = setBaggage;
            function deleteBaggage(e) {
                return e.deleteValue(o);
            }
            t.deleteBaggage = deleteBaggage;
        },
        993: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.BaggageImpl = void 0;
            class BaggageImpl {
                constructor(e){
                    this._entries = e ? new Map(e) : new Map;
                }
                getEntry(e) {
                    const t = this._entries.get(e);
                    if (!t) {
                        return undefined;
                    }
                    return Object.assign({}, t);
                }
                getAllEntries() {
                    return Array.from(this._entries.entries()).map(([e, t])=>[
                            e,
                            t
                        ]);
                }
                setEntry(e, t) {
                    const r = new BaggageImpl(this._entries);
                    r._entries.set(e, t);
                    return r;
                }
                removeEntry(e) {
                    const t = new BaggageImpl(this._entries);
                    t._entries.delete(e);
                    return t;
                }
                removeEntries(...e) {
                    const t = new BaggageImpl(this._entries);
                    for (const r of e){
                        t._entries.delete(r);
                    }
                    return t;
                }
                clear() {
                    return new BaggageImpl;
                }
            }
            t.BaggageImpl = BaggageImpl;
        },
        830: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.baggageEntryMetadataSymbol = void 0;
            t.baggageEntryMetadataSymbol = Symbol("BaggageEntryMetadata");
        },
        369: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.baggageEntryMetadataFromString = t.createBaggage = void 0;
            const n = r(930);
            const a = r(993);
            const o = r(830);
            const i = n.DiagAPI.instance();
            function createBaggage(e = {}) {
                return new a.BaggageImpl(new Map(Object.entries(e)));
            }
            t.createBaggage = createBaggage;
            function baggageEntryMetadataFromString(e) {
                if (typeof e !== "string") {
                    i.error(`Cannot create baggage metadata from unknown type: ${typeof e}`);
                    e = "";
                }
                return {
                    __TYPE__: o.baggageEntryMetadataSymbol,
                    toString () {
                        return e;
                    }
                };
            }
            t.baggageEntryMetadataFromString = baggageEntryMetadataFromString;
        },
        67: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.context = void 0;
            const n = r(491);
            t.context = n.ContextAPI.getInstance();
        },
        223: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NoopContextManager = void 0;
            const n = r(780);
            class NoopContextManager {
                active() {
                    return n.ROOT_CONTEXT;
                }
                with(e, t, r, ...n) {
                    return t.call(r, ...n);
                }
                bind(e, t) {
                    return t;
                }
                enable() {
                    return this;
                }
                disable() {
                    return this;
                }
            }
            t.NoopContextManager = NoopContextManager;
        },
        780: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ROOT_CONTEXT = t.createContextKey = void 0;
            function createContextKey(e) {
                return Symbol.for(e);
            }
            t.createContextKey = createContextKey;
            class BaseContext {
                constructor(e){
                    const t = this;
                    t._currentContext = e ? new Map(e) : new Map;
                    t.getValue = (e)=>t._currentContext.get(e);
                    t.setValue = (e, r)=>{
                        const n = new BaseContext(t._currentContext);
                        n._currentContext.set(e, r);
                        return n;
                    };
                    t.deleteValue = (e)=>{
                        const r = new BaseContext(t._currentContext);
                        r._currentContext.delete(e);
                        return r;
                    };
                }
            }
            t.ROOT_CONTEXT = new BaseContext;
        },
        506: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.diag = void 0;
            const n = r(930);
            t.diag = n.DiagAPI.instance();
        },
        56: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.DiagComponentLogger = void 0;
            const n = r(172);
            class DiagComponentLogger {
                constructor(e){
                    this._namespace = e.namespace || "DiagComponentLogger";
                }
                debug(...e) {
                    return logProxy("debug", this._namespace, e);
                }
                error(...e) {
                    return logProxy("error", this._namespace, e);
                }
                info(...e) {
                    return logProxy("info", this._namespace, e);
                }
                warn(...e) {
                    return logProxy("warn", this._namespace, e);
                }
                verbose(...e) {
                    return logProxy("verbose", this._namespace, e);
                }
            }
            t.DiagComponentLogger = DiagComponentLogger;
            function logProxy(e, t, r) {
                const a = (0, n.getGlobal)("diag");
                if (!a) {
                    return;
                }
                r.unshift(t);
                return a[e](...r);
            }
        },
        972: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.DiagConsoleLogger = void 0;
            const r = [
                {
                    n: "error",
                    c: "error"
                },
                {
                    n: "warn",
                    c: "warn"
                },
                {
                    n: "info",
                    c: "info"
                },
                {
                    n: "debug",
                    c: "debug"
                },
                {
                    n: "verbose",
                    c: "trace"
                }
            ];
            class DiagConsoleLogger {
                constructor(){
                    function _consoleFunc(e) {
                        return function(...t) {
                            if (console) {
                                let r = console[e];
                                if (typeof r !== "function") {
                                    r = console.log;
                                }
                                if (typeof r === "function") {
                                    return r.apply(console, t);
                                }
                            }
                        };
                    }
                    for(let e = 0; e < r.length; e++){
                        this[r[e].n] = _consoleFunc(r[e].c);
                    }
                }
            }
            t.DiagConsoleLogger = DiagConsoleLogger;
        },
        912: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.createLogLevelDiagLogger = void 0;
            const n = r(957);
            function createLogLevelDiagLogger(e, t) {
                if (e < n.DiagLogLevel.NONE) {
                    e = n.DiagLogLevel.NONE;
                } else if (e > n.DiagLogLevel.ALL) {
                    e = n.DiagLogLevel.ALL;
                }
                t = t || {};
                function _filterFunc(r, n) {
                    const a = t[r];
                    if (typeof a === "function" && e >= n) {
                        return a.bind(t);
                    }
                    return function() {};
                }
                return {
                    error: _filterFunc("error", n.DiagLogLevel.ERROR),
                    warn: _filterFunc("warn", n.DiagLogLevel.WARN),
                    info: _filterFunc("info", n.DiagLogLevel.INFO),
                    debug: _filterFunc("debug", n.DiagLogLevel.DEBUG),
                    verbose: _filterFunc("verbose", n.DiagLogLevel.VERBOSE)
                };
            }
            t.createLogLevelDiagLogger = createLogLevelDiagLogger;
        },
        957: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.DiagLogLevel = void 0;
            var r;
            (function(e) {
                e[e["NONE"] = 0] = "NONE";
                e[e["ERROR"] = 30] = "ERROR";
                e[e["WARN"] = 50] = "WARN";
                e[e["INFO"] = 60] = "INFO";
                e[e["DEBUG"] = 70] = "DEBUG";
                e[e["VERBOSE"] = 80] = "VERBOSE";
                e[e["ALL"] = 9999] = "ALL";
            })(r = t.DiagLogLevel || (t.DiagLogLevel = {}));
        },
        172: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.unregisterGlobal = t.getGlobal = t.registerGlobal = void 0;
            const n = r(200);
            const a = r(521);
            const o = r(130);
            const i = a.VERSION.split(".")[0];
            const c = Symbol.for(`opentelemetry.js.api.${i}`);
            const s = n._globalThis;
            function registerGlobal(e, t, r, n = false) {
                var o;
                const i = s[c] = (o = s[c]) !== null && o !== void 0 ? o : {
                    version: a.VERSION
                };
                if (!n && i[e]) {
                    const t = new Error(`@opentelemetry/api: Attempted duplicate registration of API: ${e}`);
                    r.error(t.stack || t.message);
                    return false;
                }
                if (i.version !== a.VERSION) {
                    const t = new Error(`@opentelemetry/api: Registration of version v${i.version} for ${e} does not match previously registered API v${a.VERSION}`);
                    r.error(t.stack || t.message);
                    return false;
                }
                i[e] = t;
                r.debug(`@opentelemetry/api: Registered a global for ${e} v${a.VERSION}.`);
                return true;
            }
            t.registerGlobal = registerGlobal;
            function getGlobal(e) {
                var t, r;
                const n = (t = s[c]) === null || t === void 0 ? void 0 : t.version;
                if (!n || !(0, o.isCompatible)(n)) {
                    return;
                }
                return (r = s[c]) === null || r === void 0 ? void 0 : r[e];
            }
            t.getGlobal = getGlobal;
            function unregisterGlobal(e, t) {
                t.debug(`@opentelemetry/api: Unregistering a global for ${e} v${a.VERSION}.`);
                const r = s[c];
                if (r) {
                    delete r[e];
                }
            }
            t.unregisterGlobal = unregisterGlobal;
        },
        130: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.isCompatible = t._makeCompatibilityCheck = void 0;
            const n = r(521);
            const a = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
            function _makeCompatibilityCheck(e) {
                const t = new Set([
                    e
                ]);
                const r = new Set;
                const n = e.match(a);
                if (!n) {
                    return ()=>false;
                }
                const o = {
                    major: +n[1],
                    minor: +n[2],
                    patch: +n[3],
                    prerelease: n[4]
                };
                if (o.prerelease != null) {
                    return function isExactmatch(t) {
                        return t === e;
                    };
                }
                function _reject(e) {
                    r.add(e);
                    return false;
                }
                function _accept(e) {
                    t.add(e);
                    return true;
                }
                return function isCompatible(e) {
                    if (t.has(e)) {
                        return true;
                    }
                    if (r.has(e)) {
                        return false;
                    }
                    const n = e.match(a);
                    if (!n) {
                        return _reject(e);
                    }
                    const i = {
                        major: +n[1],
                        minor: +n[2],
                        patch: +n[3],
                        prerelease: n[4]
                    };
                    if (i.prerelease != null) {
                        return _reject(e);
                    }
                    if (o.major !== i.major) {
                        return _reject(e);
                    }
                    if (o.major === 0) {
                        if (o.minor === i.minor && o.patch <= i.patch) {
                            return _accept(e);
                        }
                        return _reject(e);
                    }
                    if (o.minor <= i.minor) {
                        return _accept(e);
                    }
                    return _reject(e);
                };
            }
            t._makeCompatibilityCheck = _makeCompatibilityCheck;
            t.isCompatible = _makeCompatibilityCheck(n.VERSION);
        },
        886: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.metrics = void 0;
            const n = r(653);
            t.metrics = n.MetricsAPI.getInstance();
        },
        901: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ValueType = void 0;
            var r;
            (function(e) {
                e[e["INT"] = 0] = "INT";
                e[e["DOUBLE"] = 1] = "DOUBLE";
            })(r = t.ValueType || (t.ValueType = {}));
        },
        102: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.createNoopMeter = t.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = t.NOOP_OBSERVABLE_GAUGE_METRIC = t.NOOP_OBSERVABLE_COUNTER_METRIC = t.NOOP_UP_DOWN_COUNTER_METRIC = t.NOOP_HISTOGRAM_METRIC = t.NOOP_COUNTER_METRIC = t.NOOP_METER = t.NoopObservableUpDownCounterMetric = t.NoopObservableGaugeMetric = t.NoopObservableCounterMetric = t.NoopObservableMetric = t.NoopHistogramMetric = t.NoopUpDownCounterMetric = t.NoopCounterMetric = t.NoopMetric = t.NoopMeter = void 0;
            class NoopMeter {
                constructor(){}
                createHistogram(e, r) {
                    return t.NOOP_HISTOGRAM_METRIC;
                }
                createCounter(e, r) {
                    return t.NOOP_COUNTER_METRIC;
                }
                createUpDownCounter(e, r) {
                    return t.NOOP_UP_DOWN_COUNTER_METRIC;
                }
                createObservableGauge(e, r) {
                    return t.NOOP_OBSERVABLE_GAUGE_METRIC;
                }
                createObservableCounter(e, r) {
                    return t.NOOP_OBSERVABLE_COUNTER_METRIC;
                }
                createObservableUpDownCounter(e, r) {
                    return t.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC;
                }
                addBatchObservableCallback(e, t) {}
                removeBatchObservableCallback(e) {}
            }
            t.NoopMeter = NoopMeter;
            class NoopMetric {
            }
            t.NoopMetric = NoopMetric;
            class NoopCounterMetric extends NoopMetric {
                add(e, t) {}
            }
            t.NoopCounterMetric = NoopCounterMetric;
            class NoopUpDownCounterMetric extends NoopMetric {
                add(e, t) {}
            }
            t.NoopUpDownCounterMetric = NoopUpDownCounterMetric;
            class NoopHistogramMetric extends NoopMetric {
                record(e, t) {}
            }
            t.NoopHistogramMetric = NoopHistogramMetric;
            class NoopObservableMetric {
                addCallback(e) {}
                removeCallback(e) {}
            }
            t.NoopObservableMetric = NoopObservableMetric;
            class NoopObservableCounterMetric extends NoopObservableMetric {
            }
            t.NoopObservableCounterMetric = NoopObservableCounterMetric;
            class NoopObservableGaugeMetric extends NoopObservableMetric {
            }
            t.NoopObservableGaugeMetric = NoopObservableGaugeMetric;
            class NoopObservableUpDownCounterMetric extends NoopObservableMetric {
            }
            t.NoopObservableUpDownCounterMetric = NoopObservableUpDownCounterMetric;
            t.NOOP_METER = new NoopMeter;
            t.NOOP_COUNTER_METRIC = new NoopCounterMetric;
            t.NOOP_HISTOGRAM_METRIC = new NoopHistogramMetric;
            t.NOOP_UP_DOWN_COUNTER_METRIC = new NoopUpDownCounterMetric;
            t.NOOP_OBSERVABLE_COUNTER_METRIC = new NoopObservableCounterMetric;
            t.NOOP_OBSERVABLE_GAUGE_METRIC = new NoopObservableGaugeMetric;
            t.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = new NoopObservableUpDownCounterMetric;
            function createNoopMeter() {
                return t.NOOP_METER;
            }
            t.createNoopMeter = createNoopMeter;
        },
        660: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NOOP_METER_PROVIDER = t.NoopMeterProvider = void 0;
            const n = r(102);
            class NoopMeterProvider {
                getMeter(e, t, r) {
                    return n.NOOP_METER;
                }
            }
            t.NoopMeterProvider = NoopMeterProvider;
            t.NOOP_METER_PROVIDER = new NoopMeterProvider;
        },
        200: function(e, t, r) {
            var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                if (n === undefined) n = r;
                Object.defineProperty(e, n, {
                    enumerable: true,
                    get: function() {
                        return t[r];
                    }
                });
            } : function(e, t, r, n) {
                if (n === undefined) n = r;
                e[n] = t[r];
            });
            var a = this && this.__exportStar || function(e, t) {
                for(var r in e)if (r !== "default" && !Object.prototype.hasOwnProperty.call(t, r)) n(t, e, r);
            };
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            a(r(46), t);
        },
        651: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t._globalThis = void 0;
            t._globalThis = typeof globalThis === "object" ? globalThis : /*TURBOPACK member replacement*/ __turbopack_context__.g;
        },
        46: function(e, t, r) {
            var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                if (n === undefined) n = r;
                Object.defineProperty(e, n, {
                    enumerable: true,
                    get: function() {
                        return t[r];
                    }
                });
            } : function(e, t, r, n) {
                if (n === undefined) n = r;
                e[n] = t[r];
            });
            var a = this && this.__exportStar || function(e, t) {
                for(var r in e)if (r !== "default" && !Object.prototype.hasOwnProperty.call(t, r)) n(t, e, r);
            };
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            a(r(651), t);
        },
        939: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.propagation = void 0;
            const n = r(181);
            t.propagation = n.PropagationAPI.getInstance();
        },
        874: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NoopTextMapPropagator = void 0;
            class NoopTextMapPropagator {
                inject(e, t) {}
                extract(e, t) {
                    return e;
                }
                fields() {
                    return [];
                }
            }
            t.NoopTextMapPropagator = NoopTextMapPropagator;
        },
        194: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.defaultTextMapSetter = t.defaultTextMapGetter = void 0;
            t.defaultTextMapGetter = {
                get (e, t) {
                    if (e == null) {
                        return undefined;
                    }
                    return e[t];
                },
                keys (e) {
                    if (e == null) {
                        return [];
                    }
                    return Object.keys(e);
                }
            };
            t.defaultTextMapSetter = {
                set (e, t, r) {
                    if (e == null) {
                        return;
                    }
                    e[t] = r;
                }
            };
        },
        845: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.trace = void 0;
            const n = r(997);
            t.trace = n.TraceAPI.getInstance();
        },
        403: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NonRecordingSpan = void 0;
            const n = r(476);
            class NonRecordingSpan {
                constructor(e = n.INVALID_SPAN_CONTEXT){
                    this._spanContext = e;
                }
                spanContext() {
                    return this._spanContext;
                }
                setAttribute(e, t) {
                    return this;
                }
                setAttributes(e) {
                    return this;
                }
                addEvent(e, t) {
                    return this;
                }
                setStatus(e) {
                    return this;
                }
                updateName(e) {
                    return this;
                }
                end(e) {}
                isRecording() {
                    return false;
                }
                recordException(e, t) {}
            }
            t.NonRecordingSpan = NonRecordingSpan;
        },
        614: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NoopTracer = void 0;
            const n = r(491);
            const a = r(607);
            const o = r(403);
            const i = r(139);
            const c = n.ContextAPI.getInstance();
            class NoopTracer {
                startSpan(e, t, r = c.active()) {
                    const n = Boolean(t === null || t === void 0 ? void 0 : t.root);
                    if (n) {
                        return new o.NonRecordingSpan;
                    }
                    const s = r && (0, a.getSpanContext)(r);
                    if (isSpanContext(s) && (0, i.isSpanContextValid)(s)) {
                        return new o.NonRecordingSpan(s);
                    } else {
                        return new o.NonRecordingSpan;
                    }
                }
                startActiveSpan(e, t, r, n) {
                    let o;
                    let i;
                    let s;
                    if (arguments.length < 2) {
                        return;
                    } else if (arguments.length === 2) {
                        s = t;
                    } else if (arguments.length === 3) {
                        o = t;
                        s = r;
                    } else {
                        o = t;
                        i = r;
                        s = n;
                    }
                    const u = i !== null && i !== void 0 ? i : c.active();
                    const l = this.startSpan(e, o, u);
                    const g = (0, a.setSpan)(u, l);
                    return c.with(g, s, undefined, l);
                }
            }
            t.NoopTracer = NoopTracer;
            function isSpanContext(e) {
                return typeof e === "object" && typeof e["spanId"] === "string" && typeof e["traceId"] === "string" && typeof e["traceFlags"] === "number";
            }
        },
        124: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NoopTracerProvider = void 0;
            const n = r(614);
            class NoopTracerProvider {
                getTracer(e, t, r) {
                    return new n.NoopTracer;
                }
            }
            t.NoopTracerProvider = NoopTracerProvider;
        },
        125: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ProxyTracer = void 0;
            const n = r(614);
            const a = new n.NoopTracer;
            class ProxyTracer {
                constructor(e, t, r, n){
                    this._provider = e;
                    this.name = t;
                    this.version = r;
                    this.options = n;
                }
                startSpan(e, t, r) {
                    return this._getTracer().startSpan(e, t, r);
                }
                startActiveSpan(e, t, r, n) {
                    const a = this._getTracer();
                    return Reflect.apply(a.startActiveSpan, a, arguments);
                }
                _getTracer() {
                    if (this._delegate) {
                        return this._delegate;
                    }
                    const e = this._provider.getDelegateTracer(this.name, this.version, this.options);
                    if (!e) {
                        return a;
                    }
                    this._delegate = e;
                    return this._delegate;
                }
            }
            t.ProxyTracer = ProxyTracer;
        },
        846: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ProxyTracerProvider = void 0;
            const n = r(125);
            const a = r(124);
            const o = new a.NoopTracerProvider;
            class ProxyTracerProvider {
                getTracer(e, t, r) {
                    var a;
                    return (a = this.getDelegateTracer(e, t, r)) !== null && a !== void 0 ? a : new n.ProxyTracer(this, e, t, r);
                }
                getDelegate() {
                    var e;
                    return (e = this._delegate) !== null && e !== void 0 ? e : o;
                }
                setDelegate(e) {
                    this._delegate = e;
                }
                getDelegateTracer(e, t, r) {
                    var n;
                    return (n = this._delegate) === null || n === void 0 ? void 0 : n.getTracer(e, t, r);
                }
            }
            t.ProxyTracerProvider = ProxyTracerProvider;
        },
        996: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.SamplingDecision = void 0;
            var r;
            (function(e) {
                e[e["NOT_RECORD"] = 0] = "NOT_RECORD";
                e[e["RECORD"] = 1] = "RECORD";
                e[e["RECORD_AND_SAMPLED"] = 2] = "RECORD_AND_SAMPLED";
            })(r = t.SamplingDecision || (t.SamplingDecision = {}));
        },
        607: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.getSpanContext = t.setSpanContext = t.deleteSpan = t.setSpan = t.getActiveSpan = t.getSpan = void 0;
            const n = r(780);
            const a = r(403);
            const o = r(491);
            const i = (0, n.createContextKey)("OpenTelemetry Context Key SPAN");
            function getSpan(e) {
                return e.getValue(i) || undefined;
            }
            t.getSpan = getSpan;
            function getActiveSpan() {
                return getSpan(o.ContextAPI.getInstance().active());
            }
            t.getActiveSpan = getActiveSpan;
            function setSpan(e, t) {
                return e.setValue(i, t);
            }
            t.setSpan = setSpan;
            function deleteSpan(e) {
                return e.deleteValue(i);
            }
            t.deleteSpan = deleteSpan;
            function setSpanContext(e, t) {
                return setSpan(e, new a.NonRecordingSpan(t));
            }
            t.setSpanContext = setSpanContext;
            function getSpanContext(e) {
                var t;
                return (t = getSpan(e)) === null || t === void 0 ? void 0 : t.spanContext();
            }
            t.getSpanContext = getSpanContext;
        },
        325: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.TraceStateImpl = void 0;
            const n = r(564);
            const a = 32;
            const o = 512;
            const i = ",";
            const c = "=";
            class TraceStateImpl {
                constructor(e){
                    this._internalState = new Map;
                    if (e) this._parse(e);
                }
                set(e, t) {
                    const r = this._clone();
                    if (r._internalState.has(e)) {
                        r._internalState.delete(e);
                    }
                    r._internalState.set(e, t);
                    return r;
                }
                unset(e) {
                    const t = this._clone();
                    t._internalState.delete(e);
                    return t;
                }
                get(e) {
                    return this._internalState.get(e);
                }
                serialize() {
                    return this._keys().reduce((e, t)=>{
                        e.push(t + c + this.get(t));
                        return e;
                    }, []).join(i);
                }
                _parse(e) {
                    if (e.length > o) return;
                    this._internalState = e.split(i).reverse().reduce((e, t)=>{
                        const r = t.trim();
                        const a = r.indexOf(c);
                        if (a !== -1) {
                            const o = r.slice(0, a);
                            const i = r.slice(a + 1, t.length);
                            if ((0, n.validateKey)(o) && (0, n.validateValue)(i)) {
                                e.set(o, i);
                            } else {}
                        }
                        return e;
                    }, new Map);
                    if (this._internalState.size > a) {
                        this._internalState = new Map(Array.from(this._internalState.entries()).reverse().slice(0, a));
                    }
                }
                _keys() {
                    return Array.from(this._internalState.keys()).reverse();
                }
                _clone() {
                    const e = new TraceStateImpl;
                    e._internalState = new Map(this._internalState);
                    return e;
                }
            }
            t.TraceStateImpl = TraceStateImpl;
        },
        564: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.validateValue = t.validateKey = void 0;
            const r = "[_0-9a-z-*/]";
            const n = `[a-z]${r}{0,255}`;
            const a = `[a-z0-9]${r}{0,240}@[a-z]${r}{0,13}`;
            const o = new RegExp(`^(?:${n}|${a})$`);
            const i = /^[ -~]{0,255}[!-~]$/;
            const c = /,|=/;
            function validateKey(e) {
                return o.test(e);
            }
            t.validateKey = validateKey;
            function validateValue(e) {
                return i.test(e) && !c.test(e);
            }
            t.validateValue = validateValue;
        },
        98: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.createTraceState = void 0;
            const n = r(325);
            function createTraceState(e) {
                return new n.TraceStateImpl(e);
            }
            t.createTraceState = createTraceState;
        },
        476: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.INVALID_SPAN_CONTEXT = t.INVALID_TRACEID = t.INVALID_SPANID = void 0;
            const n = r(475);
            t.INVALID_SPANID = "0000000000000000";
            t.INVALID_TRACEID = "00000000000000000000000000000000";
            t.INVALID_SPAN_CONTEXT = {
                traceId: t.INVALID_TRACEID,
                spanId: t.INVALID_SPANID,
                traceFlags: n.TraceFlags.NONE
            };
        },
        357: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.SpanKind = void 0;
            var r;
            (function(e) {
                e[e["INTERNAL"] = 0] = "INTERNAL";
                e[e["SERVER"] = 1] = "SERVER";
                e[e["CLIENT"] = 2] = "CLIENT";
                e[e["PRODUCER"] = 3] = "PRODUCER";
                e[e["CONSUMER"] = 4] = "CONSUMER";
            })(r = t.SpanKind || (t.SpanKind = {}));
        },
        139: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.wrapSpanContext = t.isSpanContextValid = t.isValidSpanId = t.isValidTraceId = void 0;
            const n = r(476);
            const a = r(403);
            const o = /^([0-9a-f]{32})$/i;
            const i = /^[0-9a-f]{16}$/i;
            function isValidTraceId(e) {
                return o.test(e) && e !== n.INVALID_TRACEID;
            }
            t.isValidTraceId = isValidTraceId;
            function isValidSpanId(e) {
                return i.test(e) && e !== n.INVALID_SPANID;
            }
            t.isValidSpanId = isValidSpanId;
            function isSpanContextValid(e) {
                return isValidTraceId(e.traceId) && isValidSpanId(e.spanId);
            }
            t.isSpanContextValid = isSpanContextValid;
            function wrapSpanContext(e) {
                return new a.NonRecordingSpan(e);
            }
            t.wrapSpanContext = wrapSpanContext;
        },
        847: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.SpanStatusCode = void 0;
            var r;
            (function(e) {
                e[e["UNSET"] = 0] = "UNSET";
                e[e["OK"] = 1] = "OK";
                e[e["ERROR"] = 2] = "ERROR";
            })(r = t.SpanStatusCode || (t.SpanStatusCode = {}));
        },
        475: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.TraceFlags = void 0;
            var r;
            (function(e) {
                e[e["NONE"] = 0] = "NONE";
                e[e["SAMPLED"] = 1] = "SAMPLED";
            })(r = t.TraceFlags || (t.TraceFlags = {}));
        },
        521: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.VERSION = void 0;
            t.VERSION = "1.6.0";
        }
    };
    var t = {};
    function __nccwpck_require__(r) {
        var n = t[r];
        if (n !== undefined) {
            return n.exports;
        }
        var a = t[r] = {
            exports: {}
        };
        var o = true;
        try {
            e[r].call(a.exports, a, a.exports, __nccwpck_require__);
            o = false;
        } finally{
            if (o) delete t[r];
        }
        return a.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/Transferências/elos-creative/node_modules/next/dist/compiled/@opentelemetry/api") + "/";
    var r = {};
    (()=>{
        var e = r;
        Object.defineProperty(e, "__esModule", {
            value: true
        });
        e.trace = e.propagation = e.metrics = e.diag = e.context = e.INVALID_SPAN_CONTEXT = e.INVALID_TRACEID = e.INVALID_SPANID = e.isValidSpanId = e.isValidTraceId = e.isSpanContextValid = e.createTraceState = e.TraceFlags = e.SpanStatusCode = e.SpanKind = e.SamplingDecision = e.ProxyTracerProvider = e.ProxyTracer = e.defaultTextMapSetter = e.defaultTextMapGetter = e.ValueType = e.createNoopMeter = e.DiagLogLevel = e.DiagConsoleLogger = e.ROOT_CONTEXT = e.createContextKey = e.baggageEntryMetadataFromString = void 0;
        var t = __nccwpck_require__(369);
        Object.defineProperty(e, "baggageEntryMetadataFromString", {
            enumerable: true,
            get: function() {
                return t.baggageEntryMetadataFromString;
            }
        });
        var n = __nccwpck_require__(780);
        Object.defineProperty(e, "createContextKey", {
            enumerable: true,
            get: function() {
                return n.createContextKey;
            }
        });
        Object.defineProperty(e, "ROOT_CONTEXT", {
            enumerable: true,
            get: function() {
                return n.ROOT_CONTEXT;
            }
        });
        var a = __nccwpck_require__(972);
        Object.defineProperty(e, "DiagConsoleLogger", {
            enumerable: true,
            get: function() {
                return a.DiagConsoleLogger;
            }
        });
        var o = __nccwpck_require__(957);
        Object.defineProperty(e, "DiagLogLevel", {
            enumerable: true,
            get: function() {
                return o.DiagLogLevel;
            }
        });
        var i = __nccwpck_require__(102);
        Object.defineProperty(e, "createNoopMeter", {
            enumerable: true,
            get: function() {
                return i.createNoopMeter;
            }
        });
        var c = __nccwpck_require__(901);
        Object.defineProperty(e, "ValueType", {
            enumerable: true,
            get: function() {
                return c.ValueType;
            }
        });
        var s = __nccwpck_require__(194);
        Object.defineProperty(e, "defaultTextMapGetter", {
            enumerable: true,
            get: function() {
                return s.defaultTextMapGetter;
            }
        });
        Object.defineProperty(e, "defaultTextMapSetter", {
            enumerable: true,
            get: function() {
                return s.defaultTextMapSetter;
            }
        });
        var u = __nccwpck_require__(125);
        Object.defineProperty(e, "ProxyTracer", {
            enumerable: true,
            get: function() {
                return u.ProxyTracer;
            }
        });
        var l = __nccwpck_require__(846);
        Object.defineProperty(e, "ProxyTracerProvider", {
            enumerable: true,
            get: function() {
                return l.ProxyTracerProvider;
            }
        });
        var g = __nccwpck_require__(996);
        Object.defineProperty(e, "SamplingDecision", {
            enumerable: true,
            get: function() {
                return g.SamplingDecision;
            }
        });
        var p = __nccwpck_require__(357);
        Object.defineProperty(e, "SpanKind", {
            enumerable: true,
            get: function() {
                return p.SpanKind;
            }
        });
        var d = __nccwpck_require__(847);
        Object.defineProperty(e, "SpanStatusCode", {
            enumerable: true,
            get: function() {
                return d.SpanStatusCode;
            }
        });
        var _ = __nccwpck_require__(475);
        Object.defineProperty(e, "TraceFlags", {
            enumerable: true,
            get: function() {
                return _.TraceFlags;
            }
        });
        var f = __nccwpck_require__(98);
        Object.defineProperty(e, "createTraceState", {
            enumerable: true,
            get: function() {
                return f.createTraceState;
            }
        });
        var b = __nccwpck_require__(139);
        Object.defineProperty(e, "isSpanContextValid", {
            enumerable: true,
            get: function() {
                return b.isSpanContextValid;
            }
        });
        Object.defineProperty(e, "isValidTraceId", {
            enumerable: true,
            get: function() {
                return b.isValidTraceId;
            }
        });
        Object.defineProperty(e, "isValidSpanId", {
            enumerable: true,
            get: function() {
                return b.isValidSpanId;
            }
        });
        var v = __nccwpck_require__(476);
        Object.defineProperty(e, "INVALID_SPANID", {
            enumerable: true,
            get: function() {
                return v.INVALID_SPANID;
            }
        });
        Object.defineProperty(e, "INVALID_TRACEID", {
            enumerable: true,
            get: function() {
                return v.INVALID_TRACEID;
            }
        });
        Object.defineProperty(e, "INVALID_SPAN_CONTEXT", {
            enumerable: true,
            get: function() {
                return v.INVALID_SPAN_CONTEXT;
            }
        });
        const O = __nccwpck_require__(67);
        Object.defineProperty(e, "context", {
            enumerable: true,
            get: function() {
                return O.context;
            }
        });
        const P = __nccwpck_require__(506);
        Object.defineProperty(e, "diag", {
            enumerable: true,
            get: function() {
                return P.diag;
            }
        });
        const N = __nccwpck_require__(886);
        Object.defineProperty(e, "metrics", {
            enumerable: true,
            get: function() {
                return N.metrics;
            }
        });
        const S = __nccwpck_require__(939);
        Object.defineProperty(e, "propagation", {
            enumerable: true,
            get: function() {
                return S.propagation;
            }
        });
        const C = __nccwpck_require__(845);
        Object.defineProperty(e, "trace", {
            enumerable: true,
            get: function() {
                return C.trace;
            }
        });
        e["default"] = {
            context: O.context,
            diag: P.diag,
            metrics: N.metrics,
            propagation: S.propagation,
            trace: C.trace
        };
    })();
    module.exports = r;
})();
}),
"[project]/node_modules/next/dist/esm/server/lib/trace/tracer.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BubbledError",
    ()=>BubbledError,
    "SpanKind",
    ()=>SpanKind,
    "SpanStatusCode",
    ()=>SpanStatusCode,
    "getTracer",
    ()=>getTracer,
    "isBubbledError",
    ()=>isBubbledError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/lib/trace/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$is$2d$thenable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/is-thenable.js [app-rsc] (ecmascript)");
;
;
const NEXT_OTEL_PERFORMANCE_PREFIX = process.env.NEXT_OTEL_PERFORMANCE_PREFIX;
let api;
// we want to allow users to use their own version of @opentelemetry/api if they
// want to, so we try to require it first, and if it fails we fall back to the
// version that is bundled with Next.js
// this is because @opentelemetry/api has to be synced with the version of
// @opentelemetry/tracing that is used, and we don't want to force users to use
// the version that is bundled with Next.js.
// the API is ~stable, so this should be fine
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    try {
        api = __turbopack_context__.r("[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)");
    } catch (err) {
        api = __turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/compiled/@opentelemetry/api/index.js [app-rsc] (ecmascript)");
    }
}
const { context, propagation, trace, SpanStatusCode, SpanKind, ROOT_CONTEXT } = api;
class BubbledError extends Error {
    constructor(bubble, result){
        super(), this.bubble = bubble, this.result = result;
    }
}
function isBubbledError(error) {
    if (typeof error !== 'object' || error === null) return false;
    return error instanceof BubbledError;
}
const closeSpanWithError = (span, error)=>{
    if (isBubbledError(error) && error.bubble) {
        span.setAttribute('next.bubble', true);
    } else {
        if (error) {
            span.recordException(error);
            span.setAttribute('error.type', error.name);
        }
        span.setStatus({
            code: SpanStatusCode.ERROR,
            message: error == null ? void 0 : error.message
        });
    }
    span.end();
};
/** we use this map to propagate attributes from nested spans to the top span */ const rootSpanAttributesStore = new Map();
const rootSpanIdKey = api.createContextKey('next.rootSpanId');
let lastSpanId = 0;
const getSpanId = ()=>lastSpanId++;
const clientTraceDataSetter = {
    set (carrier, key, value) {
        carrier.push({
            key,
            value
        });
    }
};
class NextTracerImpl {
    /**
   * Returns an instance to the trace with configured name.
   * Since wrap / trace can be defined in any place prior to actual trace subscriber initialization,
   * This should be lazily evaluated.
   */ getTracerInstance() {
        return trace.getTracer('next.js', '0.0.1');
    }
    getContext() {
        return context;
    }
    getTracePropagationData() {
        const activeContext = context.active();
        const entries = [];
        propagation.inject(activeContext, entries, clientTraceDataSetter);
        return entries;
    }
    getActiveScopeSpan() {
        return trace.getSpan(context == null ? void 0 : context.active());
    }
    withPropagatedContext(carrier, fn, getter) {
        const activeContext = context.active();
        if (trace.getSpanContext(activeContext)) {
            // Active span is already set, too late to propagate.
            return fn();
        }
        const remoteContext = propagation.extract(activeContext, carrier, getter);
        return context.with(remoteContext, fn);
    }
    trace(...args) {
        const [type, fnOrOptions, fnOrEmpty] = args;
        // coerce options form overload
        const { fn, options } = typeof fnOrOptions === 'function' ? {
            fn: fnOrOptions,
            options: {}
        } : {
            fn: fnOrEmpty,
            options: {
                ...fnOrOptions
            }
        };
        const spanName = options.spanName ?? type;
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextVanillaSpanAllowlist"].has(type) && process.env.NEXT_OTEL_VERBOSE !== '1' || options.hideSpan) {
            return fn();
        }
        // Trying to get active scoped span to assign parent. If option specifies parent span manually, will try to use it.
        let spanContext = this.getSpanContext((options == null ? void 0 : options.parentSpan) ?? this.getActiveScopeSpan());
        if (!spanContext) {
            spanContext = (context == null ? void 0 : context.active()) ?? ROOT_CONTEXT;
        }
        // Check if there's already a root span in the store for this trace
        // We are intentionally not checking whether there is an active context
        // from outside of nextjs to ensure that we can provide the same level
        // of telemetry when using a custom server
        const existingRootSpanId = spanContext.getValue(rootSpanIdKey);
        const isRootSpan = typeof existingRootSpanId !== 'number' || !rootSpanAttributesStore.has(existingRootSpanId);
        const spanId = getSpanId();
        options.attributes = {
            'next.span_name': spanName,
            'next.span_type': type,
            ...options.attributes
        };
        return context.with(spanContext.setValue(rootSpanIdKey, spanId), ()=>this.getTracerInstance().startActiveSpan(spanName, options, (span)=>{
                let startTime;
                if (NEXT_OTEL_PERFORMANCE_PREFIX && type && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LogSpanAllowList"].has(type)) {
                    startTime = 'performance' in globalThis && 'measure' in performance ? globalThis.performance.now() : undefined;
                }
                let cleanedUp = false;
                const onCleanup = ()=>{
                    if (cleanedUp) return;
                    cleanedUp = true;
                    rootSpanAttributesStore.delete(spanId);
                    if (startTime) {
                        performance.measure(`${NEXT_OTEL_PERFORMANCE_PREFIX}:next-${(type.split('.').pop() || '').replace(/[A-Z]/g, (match)=>'-' + match.toLowerCase())}`, {
                            start: startTime,
                            end: performance.now()
                        });
                    }
                };
                if (isRootSpan) {
                    rootSpanAttributesStore.set(spanId, new Map(Object.entries(options.attributes ?? {})));
                }
                if (fn.length > 1) {
                    try {
                        return fn(span, (err)=>closeSpanWithError(span, err));
                    } catch (err) {
                        closeSpanWithError(span, err);
                        throw err;
                    } finally{
                        onCleanup();
                    }
                }
                try {
                    const result = fn(span);
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$is$2d$thenable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isThenable"])(result)) {
                        // If there's error make sure it throws
                        return result.then((res)=>{
                            span.end();
                            // Need to pass down the promise result,
                            // it could be react stream response with error { error, stream }
                            return res;
                        }).catch((err)=>{
                            closeSpanWithError(span, err);
                            throw err;
                        }).finally(onCleanup);
                    } else {
                        span.end();
                        onCleanup();
                    }
                    return result;
                } catch (err) {
                    closeSpanWithError(span, err);
                    onCleanup();
                    throw err;
                }
            }));
    }
    wrap(...args) {
        const tracer = this;
        const [name, options, fn] = args.length === 3 ? args : [
            args[0],
            {},
            args[1]
        ];
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextVanillaSpanAllowlist"].has(name) && process.env.NEXT_OTEL_VERBOSE !== '1') {
            return fn;
        }
        return function() {
            let optionsObj = options;
            if (typeof optionsObj === 'function' && typeof fn === 'function') {
                optionsObj = optionsObj.apply(this, arguments);
            }
            const lastArgId = arguments.length - 1;
            const cb = arguments[lastArgId];
            if (typeof cb === 'function') {
                const scopeBoundCb = tracer.getContext().bind(context.active(), cb);
                return tracer.trace(name, optionsObj, (_span, done)=>{
                    arguments[lastArgId] = function(err) {
                        done == null ? void 0 : done(err);
                        return scopeBoundCb.apply(this, arguments);
                    };
                    return fn.apply(this, arguments);
                });
            } else {
                return tracer.trace(name, optionsObj, ()=>fn.apply(this, arguments));
            }
        };
    }
    startSpan(...args) {
        const [type, options] = args;
        const spanContext = this.getSpanContext((options == null ? void 0 : options.parentSpan) ?? this.getActiveScopeSpan());
        return this.getTracerInstance().startSpan(type, options, spanContext);
    }
    getSpanContext(parentSpan) {
        const spanContext = parentSpan ? trace.setSpan(context.active(), parentSpan) : undefined;
        return spanContext;
    }
    getRootSpanAttributes() {
        const spanId = context.active().getValue(rootSpanIdKey);
        return rootSpanAttributesStore.get(spanId);
    }
    setRootSpanAttribute(key, value) {
        const spanId = context.active().getValue(rootSpanIdKey);
        const attributes = rootSpanAttributesStore.get(spanId);
        if (attributes && !attributes.has(key)) {
            attributes.set(key, value);
        }
    }
}
const getTracer = (()=>{
    const tracer = new NextTracerImpl();
    return ()=>tracer;
})();
;
 //# sourceMappingURL=tracer.js.map
}),
"[project]/node_modules/next/dist/esm/server/request-meta.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// FIXME: (wyattjoh) this is a temporary solution to allow us to pass data between bundled modules
__turbopack_context__.s([
    "NEXT_REQUEST_META",
    ()=>NEXT_REQUEST_META,
    "addRequestMeta",
    ()=>addRequestMeta,
    "getRequestMeta",
    ()=>getRequestMeta,
    "removeRequestMeta",
    ()=>removeRequestMeta,
    "setRequestMeta",
    ()=>setRequestMeta
]);
const NEXT_REQUEST_META = Symbol.for('NextInternalRequestMeta');
function getRequestMeta(req, key) {
    const meta = req[NEXT_REQUEST_META] || {};
    return typeof key === 'string' ? meta[key] : meta;
}
function setRequestMeta(req, meta) {
    req[NEXT_REQUEST_META] = meta;
    return meta;
}
function addRequestMeta(request, key, value) {
    const meta = getRequestMeta(request);
    meta[key] = value;
    return setRequestMeta(request, meta);
}
function removeRequestMeta(request, key) {
    const meta = getRequestMeta(request);
    delete meta[key];
    return setRequestMeta(request, meta);
} //# sourceMappingURL=request-meta.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/esm/server/app-render/interop-default.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Interop between "export default" and "module.exports".
 */ __turbopack_context__.s([
    "interopDefault",
    ()=>interopDefault
]);
function interopDefault(mod) {
    return mod.default || mod;
} //# sourceMappingURL=interop-default.js.map
}),
"[project]/node_modules/next/dist/esm/client/components/app-router-headers.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ACTION_HEADER",
    ()=>ACTION_HEADER,
    "FLIGHT_HEADERS",
    ()=>FLIGHT_HEADERS,
    "NEXT_ACTION_NOT_FOUND_HEADER",
    ()=>NEXT_ACTION_NOT_FOUND_HEADER,
    "NEXT_DID_POSTPONE_HEADER",
    ()=>NEXT_DID_POSTPONE_HEADER,
    "NEXT_HMR_REFRESH_HASH_COOKIE",
    ()=>NEXT_HMR_REFRESH_HASH_COOKIE,
    "NEXT_HMR_REFRESH_HEADER",
    ()=>NEXT_HMR_REFRESH_HEADER,
    "NEXT_HTML_REQUEST_ID_HEADER",
    ()=>NEXT_HTML_REQUEST_ID_HEADER,
    "NEXT_IS_PRERENDER_HEADER",
    ()=>NEXT_IS_PRERENDER_HEADER,
    "NEXT_REQUEST_ID_HEADER",
    ()=>NEXT_REQUEST_ID_HEADER,
    "NEXT_REWRITTEN_PATH_HEADER",
    ()=>NEXT_REWRITTEN_PATH_HEADER,
    "NEXT_REWRITTEN_QUERY_HEADER",
    ()=>NEXT_REWRITTEN_QUERY_HEADER,
    "NEXT_ROUTER_PREFETCH_HEADER",
    ()=>NEXT_ROUTER_PREFETCH_HEADER,
    "NEXT_ROUTER_SEGMENT_PREFETCH_HEADER",
    ()=>NEXT_ROUTER_SEGMENT_PREFETCH_HEADER,
    "NEXT_ROUTER_STALE_TIME_HEADER",
    ()=>NEXT_ROUTER_STALE_TIME_HEADER,
    "NEXT_ROUTER_STATE_TREE_HEADER",
    ()=>NEXT_ROUTER_STATE_TREE_HEADER,
    "NEXT_RSC_UNION_QUERY",
    ()=>NEXT_RSC_UNION_QUERY,
    "NEXT_URL",
    ()=>NEXT_URL,
    "RSC_CONTENT_TYPE_HEADER",
    ()=>RSC_CONTENT_TYPE_HEADER,
    "RSC_HEADER",
    ()=>RSC_HEADER
]);
const RSC_HEADER = 'rsc';
const ACTION_HEADER = 'next-action';
const NEXT_ROUTER_STATE_TREE_HEADER = 'next-router-state-tree';
const NEXT_ROUTER_PREFETCH_HEADER = 'next-router-prefetch';
const NEXT_ROUTER_SEGMENT_PREFETCH_HEADER = 'next-router-segment-prefetch';
const NEXT_HMR_REFRESH_HEADER = 'next-hmr-refresh';
const NEXT_HMR_REFRESH_HASH_COOKIE = '__next_hmr_refresh_hash__';
const NEXT_URL = 'next-url';
const RSC_CONTENT_TYPE_HEADER = 'text/x-component';
const FLIGHT_HEADERS = [
    RSC_HEADER,
    NEXT_ROUTER_STATE_TREE_HEADER,
    NEXT_ROUTER_PREFETCH_HEADER,
    NEXT_HMR_REFRESH_HEADER,
    NEXT_ROUTER_SEGMENT_PREFETCH_HEADER
];
const NEXT_RSC_UNION_QUERY = '_rsc';
const NEXT_ROUTER_STALE_TIME_HEADER = 'x-nextjs-stale-time';
const NEXT_DID_POSTPONE_HEADER = 'x-nextjs-postponed';
const NEXT_REWRITTEN_PATH_HEADER = 'x-nextjs-rewritten-path';
const NEXT_REWRITTEN_QUERY_HEADER = 'x-nextjs-rewritten-query';
const NEXT_IS_PRERENDER_HEADER = 'x-nextjs-prerender';
const NEXT_ACTION_NOT_FOUND_HEADER = 'x-nextjs-action-not-found';
const NEXT_REQUEST_ID_HEADER = 'x-nextjs-request-id';
const NEXT_HTML_REQUEST_ID_HEADER = 'x-nextjs-html-request-id'; //# sourceMappingURL=app-router-headers.js.map
}),
"[project]/node_modules/next/dist/esm/server/app-render/strip-flight-headers.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "stripFlightHeaders",
    ()=>stripFlightHeaders
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/client/components/app-router-headers.js [app-rsc] (ecmascript)");
;
function stripFlightHeaders(headers) {
    for (const header of __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FLIGHT_HEADERS"]){
        delete headers[header];
    }
} //# sourceMappingURL=strip-flight-headers.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/esm/server/web/spec-extension/adapters/headers.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeadersAdapter",
    ()=>HeadersAdapter,
    "ReadonlyHeadersError",
    ()=>ReadonlyHeadersError
]);
(()=>{
    const e = new Error("Cannot find module './reflect'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
class ReadonlyHeadersError extends Error {
    constructor(){
        super("Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers");
    }
    static callable() {
        throw new ReadonlyHeadersError();
    }
}
class HeadersAdapter extends Headers {
    constructor(headers){
        // We've already overridden the methods that would be called, so we're just
        // calling the super constructor to ensure that the instanceof check works.
        super();
        this.headers = new Proxy(headers, {
            get (target, prop, receiver) {
                // Because this is just an object, we expect that all "get" operations
                // are for properties. If it's a "get" for a symbol, we'll just return
                // the symbol.
                if (typeof prop === "symbol") {
                    return ReflectAdapter.get(target, prop, receiver);
                }
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return undefined.
                if (typeof original === "undefined") return;
                // If the original casing exists, return the value.
                return ReflectAdapter.get(target, original, receiver);
            },
            set (target, prop, value, receiver) {
                if (typeof prop === "symbol") {
                    return ReflectAdapter.set(target, prop, value, receiver);
                }
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, use the prop as the key.
                return ReflectAdapter.set(target, original ?? prop, value, receiver);
            },
            has (target, prop) {
                if (typeof prop === "symbol") return ReflectAdapter.has(target, prop);
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return false.
                if (typeof original === "undefined") return false;
                // If the original casing exists, return true.
                return ReflectAdapter.has(target, original);
            },
            deleteProperty (target, prop) {
                if (typeof prop === "symbol") return ReflectAdapter.deleteProperty(target, prop);
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return true.
                if (typeof original === "undefined") return true;
                // If the original casing exists, delete the property.
                return ReflectAdapter.deleteProperty(target, original);
            }
        });
    }
    /**
   * Seals a Headers instance to prevent modification by throwing an error when
   * any mutating method is called.
   */ static seal(headers) {
        return new Proxy(headers, {
            get (target, prop, receiver) {
                switch(prop){
                    case "append":
                    case "delete":
                    case "set":
                        return ReadonlyHeadersError.callable;
                    default:
                        return ReflectAdapter.get(target, prop, receiver);
                }
            }
        });
    }
    /**
   * Merges a header value into a string. This stores multiple values as an
   * array, so we need to merge them into a string.
   *
   * @param value a header value
   * @returns a merged header value (a string)
   */ merge(value) {
        if (Array.isArray(value)) return value.join(", ");
        return value;
    }
    /**
   * Creates a Headers instance from a plain object or a Headers instance.
   *
   * @param headers a plain object or a Headers instance
   * @returns a headers instance
   */ static from(headers) {
        if (headers instanceof Headers) return headers;
        return new HeadersAdapter(headers);
    }
    append(name, value) {
        const existing = this.headers[name];
        if (typeof existing === "string") {
            this.headers[name] = [
                existing,
                value
            ];
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            this.headers[name] = value;
        }
    }
    delete(name) {
        delete this.headers[name];
    }
    get(name) {
        const value = this.headers[name];
        if (typeof value !== "undefined") return this.merge(value);
        return null;
    }
    has(name) {
        return typeof this.headers[name] !== "undefined";
    }
    set(name, value) {
        this.headers[name] = value;
    }
    forEach(callbackfn, thisArg) {
        for (const [name, value] of this.entries()){
            callbackfn.call(thisArg, value, name, this);
        }
    }
    *entries() {
        for (const key of Object.keys(this.headers)){
            const name = key.toLowerCase();
            // We assert here that this is a string because we got it from the
            // Object.keys() call above.
            const value = this.get(name);
            yield [
                name,
                value
            ];
        }
    }
    *keys() {
        for (const key of Object.keys(this.headers)){
            const name = key.toLowerCase();
            yield name;
        }
    }
    *values() {
        for (const key of Object.keys(this.headers)){
            // We assert here that this is a string because we got it from the
            // Object.keys() call above.
            const value = this.get(key);
            yield value;
        }
    }
    [Symbol.iterator]() {
        return this.entries();
    }
} //# sourceMappingURL=headers.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/compiled/cookie/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

(()=>{
    "use strict";
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/Transferências/elos-creative/node_modules/next/dist/compiled/cookie") + "/";
    var e = {};
    (()=>{
        var r = e;
        /*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */ r.parse = parse;
        r.serialize = serialize;
        var i = decodeURIComponent;
        var t = encodeURIComponent;
        var a = /; */;
        var n = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
        function parse(e, r) {
            if (typeof e !== "string") {
                throw new TypeError("argument str must be a string");
            }
            var t = {};
            var n = r || {};
            var o = e.split(a);
            var s = n.decode || i;
            for(var p = 0; p < o.length; p++){
                var f = o[p];
                var u = f.indexOf("=");
                if (u < 0) {
                    continue;
                }
                var v = f.substr(0, u).trim();
                var c = f.substr(++u, f.length).trim();
                if ('"' == c[0]) {
                    c = c.slice(1, -1);
                }
                if (undefined == t[v]) {
                    t[v] = tryDecode(c, s);
                }
            }
            return t;
        }
        function serialize(e, r, i) {
            var a = i || {};
            var o = a.encode || t;
            if (typeof o !== "function") {
                throw new TypeError("option encode is invalid");
            }
            if (!n.test(e)) {
                throw new TypeError("argument name is invalid");
            }
            var s = o(r);
            if (s && !n.test(s)) {
                throw new TypeError("argument val is invalid");
            }
            var p = e + "=" + s;
            if (null != a.maxAge) {
                var f = a.maxAge - 0;
                if (isNaN(f) || !isFinite(f)) {
                    throw new TypeError("option maxAge is invalid");
                }
                p += "; Max-Age=" + Math.floor(f);
            }
            if (a.domain) {
                if (!n.test(a.domain)) {
                    throw new TypeError("option domain is invalid");
                }
                p += "; Domain=" + a.domain;
            }
            if (a.path) {
                if (!n.test(a.path)) {
                    throw new TypeError("option path is invalid");
                }
                p += "; Path=" + a.path;
            }
            if (a.expires) {
                if (typeof a.expires.toUTCString !== "function") {
                    throw new TypeError("option expires is invalid");
                }
                p += "; Expires=" + a.expires.toUTCString();
            }
            if (a.httpOnly) {
                p += "; HttpOnly";
            }
            if (a.secure) {
                p += "; Secure";
            }
            if (a.sameSite) {
                var u = typeof a.sameSite === "string" ? a.sameSite.toLowerCase() : a.sameSite;
                switch(u){
                    case true:
                        p += "; SameSite=Strict";
                        break;
                    case "lax":
                        p += "; SameSite=Lax";
                        break;
                    case "strict":
                        p += "; SameSite=Strict";
                        break;
                    case "none":
                        p += "; SameSite=None";
                        break;
                    default:
                        throw new TypeError("option sameSite is invalid");
                }
            }
            return p;
        }
        function tryDecode(e, r) {
            try {
                return r(e);
            } catch (r) {
                return e;
            }
        }
    })();
    module.exports = e;
})();
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/esm/server/api-utils/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApiError",
    ()=>ApiError,
    "COOKIE_NAME_PRERENDER_BYPASS",
    ()=>COOKIE_NAME_PRERENDER_BYPASS,
    "COOKIE_NAME_PRERENDER_DATA",
    ()=>COOKIE_NAME_PRERENDER_DATA,
    "RESPONSE_LIMIT_DEFAULT",
    ()=>RESPONSE_LIMIT_DEFAULT,
    "SYMBOL_CLEARED_COOKIES",
    ()=>SYMBOL_CLEARED_COOKIES,
    "SYMBOL_PREVIEW_DATA",
    ()=>SYMBOL_PREVIEW_DATA,
    "checkIsOnDemandRevalidate",
    ()=>checkIsOnDemandRevalidate,
    "clearPreviewData",
    ()=>clearPreviewData,
    "redirect",
    ()=>redirect,
    "sendError",
    ()=>sendError,
    "sendStatusCode",
    ()=>sendStatusCode,
    "setLazyProp",
    ()=>setLazyProp,
    "wrapApiHandler",
    ()=>wrapApiHandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Transferências/elos-creative/node_modules/next/dist/esm/server/web/spec-extension/adapters/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Transferências/elos-creative/node_modules/next/dist/esm/lib/constants.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../lib/trace/tracer'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Transferências/elos-creative/node_modules/next/dist/esm/server/lib/trace/constants.js [app-rsc] (ecmascript)");
;
;
;
;
function wrapApiHandler(page, handler) {
    return (...args)=>{
        var _getTracer_getRootSpanAttributes;
        (_getTracer_getRootSpanAttributes = getTracer().getRootSpanAttributes()) == null ? void 0 : _getTracer_getRootSpanAttributes.set("next.route", page);
        // Call API route method
        return getTracer().trace(__TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NodeSpan"].runHandler, {
            spanName: `executing api route (pages) ${page}`
        }, ()=>handler(...args));
    };
}
function sendStatusCode(res, statusCode) {
    res.statusCode = statusCode;
    return res;
}
function redirect(res, statusOrUrl, url) {
    if (typeof statusOrUrl === "string") {
        url = statusOrUrl;
        statusOrUrl = 307;
    }
    if (typeof statusOrUrl !== "number" || typeof url !== "string") {
        throw new Error(`Invalid redirect arguments. Please use a single argument URL, e.g. res.redirect('/destination') or use a status code and URL, e.g. res.redirect(307, '/destination').`);
    }
    res.writeHead(statusOrUrl, {
        Location: url
    });
    res.write(url);
    res.end();
    return res;
}
function checkIsOnDemandRevalidate(req, previewProps) {
    const headers = __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HeadersAdapter"].from(req.headers);
    const previewModeId = headers.get(__TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PRERENDER_REVALIDATE_HEADER"]);
    const isOnDemandRevalidate = previewModeId === previewProps.previewModeId;
    const revalidateOnlyGenerated = headers.has(__TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER"]);
    return {
        isOnDemandRevalidate,
        revalidateOnlyGenerated
    };
}
const COOKIE_NAME_PRERENDER_BYPASS = `__prerender_bypass`;
const COOKIE_NAME_PRERENDER_DATA = `__next_preview_data`;
const RESPONSE_LIMIT_DEFAULT = 4 * 1024 * 1024;
const SYMBOL_PREVIEW_DATA = Symbol(COOKIE_NAME_PRERENDER_DATA);
const SYMBOL_CLEARED_COOKIES = Symbol(COOKIE_NAME_PRERENDER_BYPASS);
function clearPreviewData(res, options = {}) {
    if (SYMBOL_CLEARED_COOKIES in res) {
        return res;
    }
    const { serialize } = __turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/compiled/cookie/index.js [app-rsc] (ecmascript)");
    const previous = res.getHeader("Set-Cookie");
    res.setHeader(`Set-Cookie`, [
        ...typeof previous === "string" ? [
            previous
        ] : Array.isArray(previous) ? previous : [],
        serialize(COOKIE_NAME_PRERENDER_BYPASS, "", {
            // To delete a cookie, set `expires` to a date in the past:
            // https://tools.ietf.org/html/rfc6265#section-4.1.1
            // `Max-Age: 0` is not valid, thus ignored, and the cookie is persisted.
            expires: new Date(0),
            httpOnly: true,
            sameSite: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "lax",
            secure: ("TURBOPACK compile-time value", "development") !== "development",
            path: "/",
            ...options.path !== undefined ? {
                path: options.path
            } : undefined
        }),
        serialize(COOKIE_NAME_PRERENDER_DATA, "", {
            // To delete a cookie, set `expires` to a date in the past:
            // https://tools.ietf.org/html/rfc6265#section-4.1.1
            // `Max-Age: 0` is not valid, thus ignored, and the cookie is persisted.
            expires: new Date(0),
            httpOnly: true,
            sameSite: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "lax",
            secure: ("TURBOPACK compile-time value", "development") !== "development",
            path: "/",
            ...options.path !== undefined ? {
                path: options.path
            } : undefined
        })
    ]);
    Object.defineProperty(res, SYMBOL_CLEARED_COOKIES, {
        value: true,
        enumerable: false
    });
    return res;
}
class ApiError extends Error {
    constructor(statusCode, message){
        super(message);
        this.statusCode = statusCode;
    }
}
function sendError(res, statusCode, message) {
    res.statusCode = statusCode;
    res.statusMessage = message;
    res.end(message);
}
function setLazyProp({ req }, prop, getter) {
    const opts = {
        configurable: true,
        enumerable: true
    };
    const optsReset = {
        ...opts,
        writable: true
    };
    Object.defineProperty(req, prop, {
        ...opts,
        get: ()=>{
            const value = getter();
            // we set the property on the object to avoid recalculating it
            Object.defineProperty(req, prop, {
                ...optsReset,
                value
            });
            return value;
        },
        set: (value)=>{
            Object.defineProperty(req, prop, {
                ...optsReset,
                value
            });
        }
    });
} //# sourceMappingURL=index.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/esm/server/api-utils/get-cookie-parser.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Parse cookies from the `headers` of request
 * @param req request object
 */ __turbopack_context__.s([
    "getCookieParser",
    ()=>getCookieParser
]);
function getCookieParser(headers) {
    return function parseCookie() {
        const { cookie } = headers;
        if (!cookie) {
            return {};
        }
        const { parse: parseCookieFn } = __turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/compiled/cookie/index.js [app-rsc] (ecmascript)");
        return parseCookieFn(Array.isArray(cookie) ? cookie.join("; ") : cookie);
    };
} //# sourceMappingURL=get-cookie-parser.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/esm/server/base-http/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseNextRequest",
    ()=>BaseNextRequest,
    "BaseNextResponse",
    ()=>BaseNextResponse
]);
(()=>{
    const e = new Error("Cannot find module '../../client/components/redirect-status-code'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$get$2d$cookie$2d$parser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Transferências/elos-creative/node_modules/next/dist/esm/server/api-utils/get-cookie-parser.js [app-rsc] (ecmascript)");
;
;
class BaseNextRequest {
    constructor(method, url, body){
        this.method = method;
        this.url = url;
        this.body = body;
    }
    // Utils implemented using the abstract methods above
    get cookies() {
        if (this._cookies) return this._cookies;
        return this._cookies = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$get$2d$cookie$2d$parser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCookieParser"])(this.headers)();
    }
}
class BaseNextResponse {
    constructor(destination){
        this.destination = destination;
    }
    // Utils implemented using the abstract methods above
    redirect(destination, statusCode) {
        this.setHeader("Location", destination);
        this.statusCode = statusCode;
        // Since IE11 doesn't support the 308 header add backwards
        // compatibility using refresh header
        if (statusCode === RedirectStatusCode.PermanentRedirect) {
            this.setHeader("Refresh", `0;url=${destination}`);
        }
        return this;
    }
} //# sourceMappingURL=index.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/esm/server/base-http/node.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NodeNextRequest",
    ()=>NodeNextRequest,
    "NodeNextResponse",
    ()=>NodeNextResponse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Transferências/elos-creative/node_modules/next/dist/esm/server/api-utils/index.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../request-meta'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Transferências/elos-creative/node_modules/next/dist/esm/server/base-http/index.js [app-rsc] (ecmascript)");
;
;
;
let _NEXT_REQUEST_META = NEXT_REQUEST_META;
class NodeNextRequest extends __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseNextRequest"] {
    get originalRequest() {
        // Need to mimic these changes to the original req object for places where we use it:
        // render.tsx, api/ssg requests
        this._req[NEXT_REQUEST_META] = this[NEXT_REQUEST_META];
        this._req.url = this.url;
        this._req.cookies = this.cookies;
        return this._req;
    }
    set originalRequest(value) {
        this._req = value;
    }
    constructor(_req){
        var _this__req;
        super(_req.method.toUpperCase(), _req.url, _req);
        this._req = _req;
        this.headers = this._req.headers;
        this.fetchMetrics = (_this__req = this._req) == null ? void 0 : _this__req.fetchMetrics;
        this[_NEXT_REQUEST_META] = this._req[NEXT_REQUEST_META] || {};
    }
}
class NodeNextResponse extends __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseNextResponse"] {
    get originalResponse() {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SYMBOL_CLEARED_COOKIES"] in this) {
            this._res[__TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SYMBOL_CLEARED_COOKIES"]] = this[__TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SYMBOL_CLEARED_COOKIES"]];
        }
        return this._res;
    }
    constructor(_res){
        super(_res);
        this._res = _res;
        this.textBody = undefined;
    }
    get sent() {
        return this._res.finished || this._res.headersSent;
    }
    get statusCode() {
        return this._res.statusCode;
    }
    set statusCode(value) {
        this._res.statusCode = value;
    }
    get statusMessage() {
        return this._res.statusMessage;
    }
    set statusMessage(value) {
        this._res.statusMessage = value;
    }
    setHeader(name, value) {
        this._res.setHeader(name, value);
        return this;
    }
    removeHeader(name) {
        this._res.removeHeader(name);
        return this;
    }
    getHeaderValues(name) {
        const values = this._res.getHeader(name);
        if (values === undefined) return undefined;
        return (Array.isArray(values) ? values : [
            values
        ]).map((value)=>value.toString());
    }
    hasHeader(name) {
        return this._res.hasHeader(name);
    }
    getHeader(name) {
        const values = this.getHeaderValues(name);
        return Array.isArray(values) ? values.join(",") : undefined;
    }
    getHeaders() {
        return this._res.getHeaders();
    }
    appendHeader(name, value) {
        const currentValues = this.getHeaderValues(name) ?? [];
        if (!currentValues.includes(value)) {
            this._res.setHeader(name, [
                ...currentValues,
                value
            ]);
        }
        return this;
    }
    body(value) {
        this.textBody = value;
        return this;
    }
    send() {
        this._res.end(this.textBody);
    }
} //# sourceMappingURL=node.js.map
}),
"[project]/node_modules/next/dist/esm/server/lib/experimental/ppr.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * If set to `incremental`, only those leaf pages that export
 * `experimental_ppr = true` will have partial prerendering enabled. If any
 * page exports this value as `false` or does not export it at all will not
 * have partial prerendering enabled. If set to a boolean, the options for
 * `experimental_ppr` will be ignored.
 */ /**
 * Returns true if partial prerendering is enabled for the application. It does
 * not tell you if a given route has PPR enabled, as that requires analysis of
 * the route's configuration.
 *
 * @see {@link checkIsRoutePPREnabled} - for checking if a specific route has PPR enabled.
 */ __turbopack_context__.s([
    "checkIsAppPPREnabled",
    ()=>checkIsAppPPREnabled,
    "checkIsRoutePPREnabled",
    ()=>checkIsRoutePPREnabled
]);
function checkIsAppPPREnabled(config) {
    // If the config is undefined, partial prerendering is disabled.
    if (typeof config === 'undefined') return false;
    // If the config is a boolean, use it directly.
    if (typeof config === 'boolean') return config;
    // If the config is a string, it must be 'incremental' to enable partial
    // prerendering.
    if (config === 'incremental') return true;
    return false;
}
function checkIsRoutePPREnabled(config) {
    // If the config is undefined, partial prerendering is disabled.
    if (typeof config === 'undefined') return false;
    // If the config is a boolean, use it directly.
    if (typeof config === 'boolean') return config;
    return false;
} //# sourceMappingURL=ppr.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/compiled/zod/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

(()=>{
    "use strict";
    var e = {
        815: (e, t, s)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ZodError = t.quotelessJson = t.ZodIssueCode = void 0;
            const r = s(900);
            t.ZodIssueCode = r.util.arrayToEnum([
                "invalid_type",
                "invalid_literal",
                "custom",
                "invalid_union",
                "invalid_union_discriminator",
                "invalid_enum_value",
                "unrecognized_keys",
                "invalid_arguments",
                "invalid_return_type",
                "invalid_date",
                "invalid_string",
                "too_small",
                "too_big",
                "invalid_intersection_types",
                "not_multiple_of",
                "not_finite"
            ]);
            const quotelessJson = (e)=>{
                const t = JSON.stringify(e, null, 2);
                return t.replace(/"([^"]+)":/g, "$1:");
            };
            t.quotelessJson = quotelessJson;
            class ZodError extends Error {
                constructor(e){
                    super();
                    this.issues = [];
                    this.addIssue = (e)=>{
                        this.issues = [
                            ...this.issues,
                            e
                        ];
                    };
                    this.addIssues = (e = [])=>{
                        this.issues = [
                            ...this.issues,
                            ...e
                        ];
                    };
                    const t = new.target.prototype;
                    if (Object.setPrototypeOf) {
                        Object.setPrototypeOf(this, t);
                    } else {
                        this.__proto__ = t;
                    }
                    this.name = "ZodError";
                    this.issues = e;
                }
                get errors() {
                    return this.issues;
                }
                format(e) {
                    const t = e || function(e) {
                        return e.message;
                    };
                    const s = {
                        _errors: []
                    };
                    const processError = (e)=>{
                        for (const r of e.issues){
                            if (r.code === "invalid_union") {
                                r.unionErrors.map(processError);
                            } else if (r.code === "invalid_return_type") {
                                processError(r.returnTypeError);
                            } else if (r.code === "invalid_arguments") {
                                processError(r.argumentsError);
                            } else if (r.path.length === 0) {
                                s._errors.push(t(r));
                            } else {
                                let e = s;
                                let a = 0;
                                while(a < r.path.length){
                                    const s = r.path[a];
                                    const n = a === r.path.length - 1;
                                    if (!n) {
                                        e[s] = e[s] || {
                                            _errors: []
                                        };
                                    } else {
                                        e[s] = e[s] || {
                                            _errors: []
                                        };
                                        e[s]._errors.push(t(r));
                                    }
                                    e = e[s];
                                    a++;
                                }
                            }
                        }
                    };
                    processError(this);
                    return s;
                }
                toString() {
                    return this.message;
                }
                get message() {
                    return JSON.stringify(this.issues, r.util.jsonStringifyReplacer, 2);
                }
                get isEmpty() {
                    return this.issues.length === 0;
                }
                flatten(e = (e)=>e.message) {
                    const t = {};
                    const s = [];
                    for (const r of this.issues){
                        if (r.path.length > 0) {
                            t[r.path[0]] = t[r.path[0]] || [];
                            t[r.path[0]].push(e(r));
                        } else {
                            s.push(e(r));
                        }
                    }
                    return {
                        formErrors: s,
                        fieldErrors: t
                    };
                }
                get formErrors() {
                    return this.flatten();
                }
            }
            t.ZodError = ZodError;
            ZodError.create = (e)=>{
                const t = new ZodError(e);
                return t;
            };
        },
        564: function(e, t, s) {
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            };
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.getErrorMap = t.setErrorMap = t.defaultErrorMap = void 0;
            const a = r(s(209));
            t.defaultErrorMap = a.default;
            let n = a.default;
            function setErrorMap(e) {
                n = e;
            }
            t.setErrorMap = setErrorMap;
            function getErrorMap() {
                return n;
            }
            t.getErrorMap = getErrorMap;
        },
        631: function(e, t, s) {
            var r = this && this.__createBinding || (Object.create ? function(e, t, s, r) {
                if (r === undefined) r = s;
                Object.defineProperty(e, r, {
                    enumerable: true,
                    get: function() {
                        return t[s];
                    }
                });
            } : function(e, t, s, r) {
                if (r === undefined) r = s;
                e[r] = t[s];
            });
            var a = this && this.__exportStar || function(e, t) {
                for(var s in e)if (s !== "default" && !Object.prototype.hasOwnProperty.call(t, s)) r(t, e, s);
            };
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            a(s(564), t);
            a(s(79), t);
            a(s(212), t);
            a(s(900), t);
            a(s(973), t);
            a(s(815), t);
        },
        97: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.errorUtil = void 0;
            var s;
            (function(e) {
                e.errToObj = (e)=>typeof e === "string" ? {
                        message: e
                    } : e || {};
                e.toString = (e)=>typeof e === "string" ? e : e === null || e === void 0 ? void 0 : e.message;
            })(s = t.errorUtil || (t.errorUtil = {}));
        },
        79: function(e, t, s) {
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            };
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.isAsync = t.isValid = t.isDirty = t.isAborted = t.OK = t.DIRTY = t.INVALID = t.ParseStatus = t.addIssueToContext = t.EMPTY_PATH = t.makeIssue = void 0;
            const a = s(564);
            const n = r(s(209));
            const makeIssue = (e)=>{
                const { data: t, path: s, errorMaps: r, issueData: a } = e;
                const n = [
                    ...s,
                    ...a.path || []
                ];
                const o = {
                    ...a,
                    path: n
                };
                let i = "";
                const d = r.filter((e)=>!!e).slice().reverse();
                for (const e of d){
                    i = e(o, {
                        data: t,
                        defaultError: i
                    }).message;
                }
                return {
                    ...a,
                    path: n,
                    message: a.message || i
                };
            };
            t.makeIssue = makeIssue;
            t.EMPTY_PATH = [];
            function addIssueToContext(e, s) {
                const r = (0, t.makeIssue)({
                    issueData: s,
                    data: e.data,
                    path: e.path,
                    errorMaps: [
                        e.common.contextualErrorMap,
                        e.schemaErrorMap,
                        (0, a.getErrorMap)(),
                        n.default
                    ].filter((e)=>!!e)
                });
                e.common.issues.push(r);
            }
            t.addIssueToContext = addIssueToContext;
            class ParseStatus {
                constructor(){
                    this.value = "valid";
                }
                dirty() {
                    if (this.value === "valid") this.value = "dirty";
                }
                abort() {
                    if (this.value !== "aborted") this.value = "aborted";
                }
                static mergeArray(e, s) {
                    const r = [];
                    for (const a of s){
                        if (a.status === "aborted") return t.INVALID;
                        if (a.status === "dirty") e.dirty();
                        r.push(a.value);
                    }
                    return {
                        status: e.value,
                        value: r
                    };
                }
                static async mergeObjectAsync(e, t) {
                    const s = [];
                    for (const e of t){
                        s.push({
                            key: await e.key,
                            value: await e.value
                        });
                    }
                    return ParseStatus.mergeObjectSync(e, s);
                }
                static mergeObjectSync(e, s) {
                    const r = {};
                    for (const a of s){
                        const { key: s, value: n } = a;
                        if (s.status === "aborted") return t.INVALID;
                        if (n.status === "aborted") return t.INVALID;
                        if (s.status === "dirty") e.dirty();
                        if (n.status === "dirty") e.dirty();
                        if (s.value !== "__proto__" && (typeof n.value !== "undefined" || a.alwaysSet)) {
                            r[s.value] = n.value;
                        }
                    }
                    return {
                        status: e.value,
                        value: r
                    };
                }
            }
            t.ParseStatus = ParseStatus;
            t.INVALID = Object.freeze({
                status: "aborted"
            });
            const DIRTY = (e)=>({
                    status: "dirty",
                    value: e
                });
            t.DIRTY = DIRTY;
            const OK = (e)=>({
                    status: "valid",
                    value: e
                });
            t.OK = OK;
            const isAborted = (e)=>e.status === "aborted";
            t.isAborted = isAborted;
            const isDirty = (e)=>e.status === "dirty";
            t.isDirty = isDirty;
            const isValid = (e)=>e.status === "valid";
            t.isValid = isValid;
            const isAsync = (e)=>typeof Promise !== "undefined" && e instanceof Promise;
            t.isAsync = isAsync;
        },
        212: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
        },
        900: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.getParsedType = t.ZodParsedType = t.objectUtil = t.util = void 0;
            var s;
            (function(e) {
                e.assertEqual = (e)=>e;
                function assertIs(e) {}
                e.assertIs = assertIs;
                function assertNever(e) {
                    throw new Error;
                }
                e.assertNever = assertNever;
                e.arrayToEnum = (e)=>{
                    const t = {};
                    for (const s of e){
                        t[s] = s;
                    }
                    return t;
                };
                e.getValidEnumValues = (t)=>{
                    const s = e.objectKeys(t).filter((e)=>typeof t[t[e]] !== "number");
                    const r = {};
                    for (const e of s){
                        r[e] = t[e];
                    }
                    return e.objectValues(r);
                };
                e.objectValues = (t)=>e.objectKeys(t).map(function(e) {
                        return t[e];
                    });
                e.objectKeys = typeof Object.keys === "function" ? (e)=>Object.keys(e) : (e)=>{
                    const t = [];
                    for(const s in e){
                        if (Object.prototype.hasOwnProperty.call(e, s)) {
                            t.push(s);
                        }
                    }
                    return t;
                };
                e.find = (e, t)=>{
                    for (const s of e){
                        if (t(s)) return s;
                    }
                    return undefined;
                };
                e.isInteger = typeof Number.isInteger === "function" ? (e)=>Number.isInteger(e) : (e)=>typeof e === "number" && isFinite(e) && Math.floor(e) === e;
                function joinValues(e, t = " | ") {
                    return e.map((e)=>typeof e === "string" ? `'${e}'` : e).join(t);
                }
                e.joinValues = joinValues;
                e.jsonStringifyReplacer = (e, t)=>{
                    if (typeof t === "bigint") {
                        return t.toString();
                    }
                    return t;
                };
            })(s = t.util || (t.util = {}));
            var r;
            (function(e) {
                e.mergeShapes = (e, t)=>({
                        ...e,
                        ...t
                    });
            })(r = t.objectUtil || (t.objectUtil = {}));
            t.ZodParsedType = s.arrayToEnum([
                "string",
                "nan",
                "number",
                "integer",
                "float",
                "boolean",
                "date",
                "bigint",
                "symbol",
                "function",
                "undefined",
                "null",
                "array",
                "object",
                "unknown",
                "promise",
                "void",
                "never",
                "map",
                "set"
            ]);
            const getParsedType = (e)=>{
                const s = typeof e;
                switch(s){
                    case "undefined":
                        return t.ZodParsedType.undefined;
                    case "string":
                        return t.ZodParsedType.string;
                    case "number":
                        return isNaN(e) ? t.ZodParsedType.nan : t.ZodParsedType.number;
                    case "boolean":
                        return t.ZodParsedType.boolean;
                    case "function":
                        return t.ZodParsedType.function;
                    case "bigint":
                        return t.ZodParsedType.bigint;
                    case "symbol":
                        return t.ZodParsedType.symbol;
                    case "object":
                        if (Array.isArray(e)) {
                            return t.ZodParsedType.array;
                        }
                        if (e === null) {
                            return t.ZodParsedType.null;
                        }
                        if (e.then && typeof e.then === "function" && e.catch && typeof e.catch === "function") {
                            return t.ZodParsedType.promise;
                        }
                        if (typeof Map !== "undefined" && e instanceof Map) {
                            return t.ZodParsedType.map;
                        }
                        if (typeof Set !== "undefined" && e instanceof Set) {
                            return t.ZodParsedType.set;
                        }
                        if (typeof Date !== "undefined" && e instanceof Date) {
                            return t.ZodParsedType.date;
                        }
                        return t.ZodParsedType.object;
                    default:
                        return t.ZodParsedType.unknown;
                }
            };
            t.getParsedType = getParsedType;
        },
        773: function(e, t, s) {
            var r = this && this.__createBinding || (Object.create ? function(e, t, s, r) {
                if (r === undefined) r = s;
                Object.defineProperty(e, r, {
                    enumerable: true,
                    get: function() {
                        return t[s];
                    }
                });
            } : function(e, t, s, r) {
                if (r === undefined) r = s;
                e[r] = t[s];
            });
            var a = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: true,
                    value: t
                });
            } : function(e, t) {
                e["default"] = t;
            });
            var n = this && this.__importStar || function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (e != null) {
                    for(var s in e)if (s !== "default" && Object.prototype.hasOwnProperty.call(e, s)) r(t, e, s);
                }
                a(t, e);
                return t;
            };
            var o = this && this.__exportStar || function(e, t) {
                for(var s in e)if (s !== "default" && !Object.prototype.hasOwnProperty.call(t, s)) r(t, e, s);
            };
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.z = void 0;
            const i = n(s(631));
            t.z = i;
            o(s(631), t);
            t["default"] = i;
        },
        209: (e, t, s)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            const r = s(900);
            const a = s(815);
            const errorMap = (e, t)=>{
                let s;
                switch(e.code){
                    case a.ZodIssueCode.invalid_type:
                        if (e.received === r.ZodParsedType.undefined) {
                            s = "Required";
                        } else {
                            s = `Expected ${e.expected}, received ${e.received}`;
                        }
                        break;
                    case a.ZodIssueCode.invalid_literal:
                        s = `Invalid literal value, expected ${JSON.stringify(e.expected, r.util.jsonStringifyReplacer)}`;
                        break;
                    case a.ZodIssueCode.unrecognized_keys:
                        s = `Unrecognized key(s) in object: ${r.util.joinValues(e.keys, ", ")}`;
                        break;
                    case a.ZodIssueCode.invalid_union:
                        s = `Invalid input`;
                        break;
                    case a.ZodIssueCode.invalid_union_discriminator:
                        s = `Invalid discriminator value. Expected ${r.util.joinValues(e.options)}`;
                        break;
                    case a.ZodIssueCode.invalid_enum_value:
                        s = `Invalid enum value. Expected ${r.util.joinValues(e.options)}, received '${e.received}'`;
                        break;
                    case a.ZodIssueCode.invalid_arguments:
                        s = `Invalid function arguments`;
                        break;
                    case a.ZodIssueCode.invalid_return_type:
                        s = `Invalid function return type`;
                        break;
                    case a.ZodIssueCode.invalid_date:
                        s = `Invalid date`;
                        break;
                    case a.ZodIssueCode.invalid_string:
                        if (typeof e.validation === "object") {
                            if ("includes" in e.validation) {
                                s = `Invalid input: must include "${e.validation.includes}"`;
                                if (typeof e.validation.position === "number") {
                                    s = `${s} at one or more positions greater than or equal to ${e.validation.position}`;
                                }
                            } else if ("startsWith" in e.validation) {
                                s = `Invalid input: must start with "${e.validation.startsWith}"`;
                            } else if ("endsWith" in e.validation) {
                                s = `Invalid input: must end with "${e.validation.endsWith}"`;
                            } else {
                                r.util.assertNever(e.validation);
                            }
                        } else if (e.validation !== "regex") {
                            s = `Invalid ${e.validation}`;
                        } else {
                            s = "Invalid";
                        }
                        break;
                    case a.ZodIssueCode.too_small:
                        if (e.type === "array") s = `Array must contain ${e.exact ? "exactly" : e.inclusive ? `at least` : `more than`} ${e.minimum} element(s)`;
                        else if (e.type === "string") s = `String must contain ${e.exact ? "exactly" : e.inclusive ? `at least` : `over`} ${e.minimum} character(s)`;
                        else if (e.type === "number") s = `Number must be ${e.exact ? `exactly equal to ` : e.inclusive ? `greater than or equal to ` : `greater than `}${e.minimum}`;
                        else if (e.type === "date") s = `Date must be ${e.exact ? `exactly equal to ` : e.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(e.minimum))}`;
                        else s = "Invalid input";
                        break;
                    case a.ZodIssueCode.too_big:
                        if (e.type === "array") s = `Array must contain ${e.exact ? `exactly` : e.inclusive ? `at most` : `less than`} ${e.maximum} element(s)`;
                        else if (e.type === "string") s = `String must contain ${e.exact ? `exactly` : e.inclusive ? `at most` : `under`} ${e.maximum} character(s)`;
                        else if (e.type === "number") s = `Number must be ${e.exact ? `exactly` : e.inclusive ? `less than or equal to` : `less than`} ${e.maximum}`;
                        else if (e.type === "bigint") s = `BigInt must be ${e.exact ? `exactly` : e.inclusive ? `less than or equal to` : `less than`} ${e.maximum}`;
                        else if (e.type === "date") s = `Date must be ${e.exact ? `exactly` : e.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(e.maximum))}`;
                        else s = "Invalid input";
                        break;
                    case a.ZodIssueCode.custom:
                        s = `Invalid input`;
                        break;
                    case a.ZodIssueCode.invalid_intersection_types:
                        s = `Intersection results could not be merged`;
                        break;
                    case a.ZodIssueCode.not_multiple_of:
                        s = `Number must be a multiple of ${e.multipleOf}`;
                        break;
                    case a.ZodIssueCode.not_finite:
                        s = "Number must be finite";
                        break;
                    default:
                        s = t.defaultError;
                        r.util.assertNever(e);
                }
                return {
                    message: s
                };
            };
            t["default"] = errorMap;
        },
        973: (e, t, s)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.date = t.boolean = t.bigint = t.array = t.any = t.coerce = t.ZodFirstPartyTypeKind = t.late = t.ZodSchema = t.Schema = t.custom = t.ZodReadonly = t.ZodPipeline = t.ZodBranded = t.BRAND = t.ZodNaN = t.ZodCatch = t.ZodDefault = t.ZodNullable = t.ZodOptional = t.ZodTransformer = t.ZodEffects = t.ZodPromise = t.ZodNativeEnum = t.ZodEnum = t.ZodLiteral = t.ZodLazy = t.ZodFunction = t.ZodSet = t.ZodMap = t.ZodRecord = t.ZodTuple = t.ZodIntersection = t.ZodDiscriminatedUnion = t.ZodUnion = t.ZodObject = t.ZodArray = t.ZodVoid = t.ZodNever = t.ZodUnknown = t.ZodAny = t.ZodNull = t.ZodUndefined = t.ZodSymbol = t.ZodDate = t.ZodBoolean = t.ZodBigInt = t.ZodNumber = t.ZodString = t.ZodType = void 0;
            t.NEVER = t["void"] = t.unknown = t.union = t.undefined = t.tuple = t.transformer = t.symbol = t.string = t.strictObject = t.set = t.record = t.promise = t.preprocess = t.pipeline = t.ostring = t.optional = t.onumber = t.oboolean = t.object = t.number = t.nullable = t["null"] = t.never = t.nativeEnum = t.nan = t.map = t.literal = t.lazy = t.intersection = t["instanceof"] = t["function"] = t["enum"] = t.effect = t.discriminatedUnion = void 0;
            const r = s(564);
            const a = s(97);
            const n = s(79);
            const o = s(900);
            const i = s(815);
            class ParseInputLazyPath {
                constructor(e, t, s, r){
                    this._cachedPath = [];
                    this.parent = e;
                    this.data = t;
                    this._path = s;
                    this._key = r;
                }
                get path() {
                    if (!this._cachedPath.length) {
                        if (this._key instanceof Array) {
                            this._cachedPath.push(...this._path, ...this._key);
                        } else {
                            this._cachedPath.push(...this._path, this._key);
                        }
                    }
                    return this._cachedPath;
                }
            }
            const handleResult = (e, t)=>{
                if ((0, n.isValid)(t)) {
                    return {
                        success: true,
                        data: t.value
                    };
                } else {
                    if (!e.common.issues.length) {
                        throw new Error("Validation failed but no issues detected.");
                    }
                    return {
                        success: false,
                        get error () {
                            if (this._error) return this._error;
                            const t = new i.ZodError(e.common.issues);
                            this._error = t;
                            return this._error;
                        }
                    };
                }
            };
            function processCreateParams(e) {
                if (!e) return {};
                const { errorMap: t, invalid_type_error: s, required_error: r, description: a } = e;
                if (t && (s || r)) {
                    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
                }
                if (t) return {
                    errorMap: t,
                    description: a
                };
                const customMap = (e, t)=>{
                    if (e.code !== "invalid_type") return {
                        message: t.defaultError
                    };
                    if (typeof t.data === "undefined") {
                        return {
                            message: r !== null && r !== void 0 ? r : t.defaultError
                        };
                    }
                    return {
                        message: s !== null && s !== void 0 ? s : t.defaultError
                    };
                };
                return {
                    errorMap: customMap,
                    description: a
                };
            }
            class ZodType {
                constructor(e){
                    this.spa = this.safeParseAsync;
                    this._def = e;
                    this.parse = this.parse.bind(this);
                    this.safeParse = this.safeParse.bind(this);
                    this.parseAsync = this.parseAsync.bind(this);
                    this.safeParseAsync = this.safeParseAsync.bind(this);
                    this.spa = this.spa.bind(this);
                    this.refine = this.refine.bind(this);
                    this.refinement = this.refinement.bind(this);
                    this.superRefine = this.superRefine.bind(this);
                    this.optional = this.optional.bind(this);
                    this.nullable = this.nullable.bind(this);
                    this.nullish = this.nullish.bind(this);
                    this.array = this.array.bind(this);
                    this.promise = this.promise.bind(this);
                    this.or = this.or.bind(this);
                    this.and = this.and.bind(this);
                    this.transform = this.transform.bind(this);
                    this.brand = this.brand.bind(this);
                    this.default = this.default.bind(this);
                    this.catch = this.catch.bind(this);
                    this.describe = this.describe.bind(this);
                    this.pipe = this.pipe.bind(this);
                    this.readonly = this.readonly.bind(this);
                    this.isNullable = this.isNullable.bind(this);
                    this.isOptional = this.isOptional.bind(this);
                }
                get description() {
                    return this._def.description;
                }
                _getType(e) {
                    return (0, o.getParsedType)(e.data);
                }
                _getOrReturnCtx(e, t) {
                    return t || {
                        common: e.parent.common,
                        data: e.data,
                        parsedType: (0, o.getParsedType)(e.data),
                        schemaErrorMap: this._def.errorMap,
                        path: e.path,
                        parent: e.parent
                    };
                }
                _processInputParams(e) {
                    return {
                        status: new n.ParseStatus,
                        ctx: {
                            common: e.parent.common,
                            data: e.data,
                            parsedType: (0, o.getParsedType)(e.data),
                            schemaErrorMap: this._def.errorMap,
                            path: e.path,
                            parent: e.parent
                        }
                    };
                }
                _parseSync(e) {
                    const t = this._parse(e);
                    if ((0, n.isAsync)(t)) {
                        throw new Error("Synchronous parse encountered promise.");
                    }
                    return t;
                }
                _parseAsync(e) {
                    const t = this._parse(e);
                    return Promise.resolve(t);
                }
                parse(e, t) {
                    const s = this.safeParse(e, t);
                    if (s.success) return s.data;
                    throw s.error;
                }
                safeParse(e, t) {
                    var s;
                    const r = {
                        common: {
                            issues: [],
                            async: (s = t === null || t === void 0 ? void 0 : t.async) !== null && s !== void 0 ? s : false,
                            contextualErrorMap: t === null || t === void 0 ? void 0 : t.errorMap
                        },
                        path: (t === null || t === void 0 ? void 0 : t.path) || [],
                        schemaErrorMap: this._def.errorMap,
                        parent: null,
                        data: e,
                        parsedType: (0, o.getParsedType)(e)
                    };
                    const a = this._parseSync({
                        data: e,
                        path: r.path,
                        parent: r
                    });
                    return handleResult(r, a);
                }
                async parseAsync(e, t) {
                    const s = await this.safeParseAsync(e, t);
                    if (s.success) return s.data;
                    throw s.error;
                }
                async safeParseAsync(e, t) {
                    const s = {
                        common: {
                            issues: [],
                            contextualErrorMap: t === null || t === void 0 ? void 0 : t.errorMap,
                            async: true
                        },
                        path: (t === null || t === void 0 ? void 0 : t.path) || [],
                        schemaErrorMap: this._def.errorMap,
                        parent: null,
                        data: e,
                        parsedType: (0, o.getParsedType)(e)
                    };
                    const r = this._parse({
                        data: e,
                        path: s.path,
                        parent: s
                    });
                    const a = await ((0, n.isAsync)(r) ? r : Promise.resolve(r));
                    return handleResult(s, a);
                }
                refine(e, t) {
                    const getIssueProperties = (e)=>{
                        if (typeof t === "string" || typeof t === "undefined") {
                            return {
                                message: t
                            };
                        } else if (typeof t === "function") {
                            return t(e);
                        } else {
                            return t;
                        }
                    };
                    return this._refinement((t, s)=>{
                        const r = e(t);
                        const setError = ()=>s.addIssue({
                                code: i.ZodIssueCode.custom,
                                ...getIssueProperties(t)
                            });
                        if (typeof Promise !== "undefined" && r instanceof Promise) {
                            return r.then((e)=>{
                                if (!e) {
                                    setError();
                                    return false;
                                } else {
                                    return true;
                                }
                            });
                        }
                        if (!r) {
                            setError();
                            return false;
                        } else {
                            return true;
                        }
                    });
                }
                refinement(e, t) {
                    return this._refinement((s, r)=>{
                        if (!e(s)) {
                            r.addIssue(typeof t === "function" ? t(s, r) : t);
                            return false;
                        } else {
                            return true;
                        }
                    });
                }
                _refinement(e) {
                    return new ZodEffects({
                        schema: this,
                        typeName: y.ZodEffects,
                        effect: {
                            type: "refinement",
                            refinement: e
                        }
                    });
                }
                superRefine(e) {
                    return this._refinement(e);
                }
                optional() {
                    return ZodOptional.create(this, this._def);
                }
                nullable() {
                    return ZodNullable.create(this, this._def);
                }
                nullish() {
                    return this.nullable().optional();
                }
                array() {
                    return ZodArray.create(this, this._def);
                }
                promise() {
                    return ZodPromise.create(this, this._def);
                }
                or(e) {
                    return ZodUnion.create([
                        this,
                        e
                    ], this._def);
                }
                and(e) {
                    return ZodIntersection.create(this, e, this._def);
                }
                transform(e) {
                    return new ZodEffects({
                        ...processCreateParams(this._def),
                        schema: this,
                        typeName: y.ZodEffects,
                        effect: {
                            type: "transform",
                            transform: e
                        }
                    });
                }
                default(e) {
                    const t = typeof e === "function" ? e : ()=>e;
                    return new ZodDefault({
                        ...processCreateParams(this._def),
                        innerType: this,
                        defaultValue: t,
                        typeName: y.ZodDefault
                    });
                }
                brand() {
                    return new ZodBranded({
                        typeName: y.ZodBranded,
                        type: this,
                        ...processCreateParams(this._def)
                    });
                }
                catch(e) {
                    const t = typeof e === "function" ? e : ()=>e;
                    return new ZodCatch({
                        ...processCreateParams(this._def),
                        innerType: this,
                        catchValue: t,
                        typeName: y.ZodCatch
                    });
                }
                describe(e) {
                    const t = this.constructor;
                    return new t({
                        ...this._def,
                        description: e
                    });
                }
                pipe(e) {
                    return ZodPipeline.create(this, e);
                }
                readonly() {
                    return ZodReadonly.create(this);
                }
                isOptional() {
                    return this.safeParse(undefined).success;
                }
                isNullable() {
                    return this.safeParse(null).success;
                }
            }
            t.ZodType = ZodType;
            t.Schema = ZodType;
            t.ZodSchema = ZodType;
            const d = /^c[^\s-]{8,}$/i;
            const u = /^[a-z][a-z0-9]*$/;
            const c = /[0-9A-HJKMNP-TV-Z]{26}/;
            const l = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
            const p = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
            const f = /^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u;
            const h = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/;
            const m = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
            const datetimeRegex = (e)=>{
                if (e.precision) {
                    if (e.offset) {
                        return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`);
                    } else {
                        return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`);
                    }
                } else if (e.precision === 0) {
                    if (e.offset) {
                        return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$`);
                    } else {
                        return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$`);
                    }
                } else {
                    if (e.offset) {
                        return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$`);
                    } else {
                        return new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$`);
                    }
                }
            };
            function isValidIP(e, t) {
                if ((t === "v4" || !t) && h.test(e)) {
                    return true;
                }
                if ((t === "v6" || !t) && m.test(e)) {
                    return true;
                }
                return false;
            }
            class ZodString extends ZodType {
                constructor(){
                    super(...arguments);
                    this._regex = (e, t, s)=>this.refinement((t)=>e.test(t), {
                            validation: t,
                            code: i.ZodIssueCode.invalid_string,
                            ...a.errorUtil.errToObj(s)
                        });
                    this.nonempty = (e)=>this.min(1, a.errorUtil.errToObj(e));
                    this.trim = ()=>new ZodString({
                            ...this._def,
                            checks: [
                                ...this._def.checks,
                                {
                                    kind: "trim"
                                }
                            ]
                        });
                    this.toLowerCase = ()=>new ZodString({
                            ...this._def,
                            checks: [
                                ...this._def.checks,
                                {
                                    kind: "toLowerCase"
                                }
                            ]
                        });
                    this.toUpperCase = ()=>new ZodString({
                            ...this._def,
                            checks: [
                                ...this._def.checks,
                                {
                                    kind: "toUpperCase"
                                }
                            ]
                        });
                }
                _parse(e) {
                    if (this._def.coerce) {
                        e.data = String(e.data);
                    }
                    const t = this._getType(e);
                    if (t !== o.ZodParsedType.string) {
                        const t = this._getOrReturnCtx(e);
                        (0, n.addIssueToContext)(t, {
                            code: i.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.string,
                            received: t.parsedType
                        });
                        return n.INVALID;
                    }
                    const s = new n.ParseStatus;
                    let r = undefined;
                    for (const t of this._def.checks){
                        if (t.kind === "min") {
                            if (e.data.length < t.value) {
                                r = this._getOrReturnCtx(e, r);
                                (0, n.addIssueToContext)(r, {
                                    code: i.ZodIssueCode.too_small,
                                    minimum: t.value,
                                    type: "string",
                                    inclusive: true,
                                    exact: false,
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "max") {
                            if (e.data.length > t.value) {
                                r = this._getOrReturnCtx(e, r);
                                (0, n.addIssueToContext)(r, {
                                    code: i.ZodIssueCode.too_big,
                                    maximum: t.value,
                                    type: "string",
                                    inclusive: true,
                                    exact: false,
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "length") {
                            const a = e.data.length > t.value;
                            const o = e.data.length < t.value;
                            if (a || o) {
                                r = this._getOrReturnCtx(e, r);
                                if (a) {
                                    (0, n.addIssueToContext)(r, {
                                        code: i.ZodIssueCode.too_big,
                                        maximum: t.value,
                                        type: "string",
                                        inclusive: true,
                                        exact: true,
                                        message: t.message
                                    });
                                } else if (o) {
                                    (0, n.addIssueToContext)(r, {
                                        code: i.ZodIssueCode.too_small,
                                        minimum: t.value,
                                        type: "string",
                                        inclusive: true,
                                        exact: true,
                                        message: t.message
                                    });
                                }
                                s.dirty();
                            }
                        } else if (t.kind === "email") {
                            if (!p.test(e.data)) {
                                r = this._getOrReturnCtx(e, r);
                                (0, n.addIssueToContext)(r, {
                                    validation: "email",
                                    code: i.ZodIssueCode.invalid_string,
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "emoji") {
                            if (!f.test(e.data)) {
                                r = this._getOrReturnCtx(e, r);
                                (0, n.addIssueToContext)(r, {
                                    validation: "emoji",
                                    code: i.ZodIssueCode.invalid_string,
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "uuid") {
                            if (!l.test(e.data)) {
                                r = this._getOrReturnCtx(e, r);
                                (0, n.addIssueToContext)(r, {
                                    validation: "uuid",
                                    code: i.ZodIssueCode.invalid_string,
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "cuid") {
                            if (!d.test(e.data)) {
                                r = this._getOrReturnCtx(e, r);
                                (0, n.addIssueToContext)(r, {
                                    validation: "cuid",
                                    code: i.ZodIssueCode.invalid_string,
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "cuid2") {
                            if (!u.test(e.data)) {
                                r = this._getOrReturnCtx(e, r);
                                (0, n.addIssueToContext)(r, {
                                    validation: "cuid2",
                                    code: i.ZodIssueCode.invalid_string,
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "ulid") {
                            if (!c.test(e.data)) {
                                r = this._getOrReturnCtx(e, r);
                                (0, n.addIssueToContext)(r, {
                                    validation: "ulid",
                                    code: i.ZodIssueCode.invalid_string,
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "url") {
                            try {
                                new URL(e.data);
                            } catch (a) {
                                r = this._getOrReturnCtx(e, r);
                                (0, n.addIssueToContext)(r, {
                                    validation: "url",
                                    code: i.ZodIssueCode.invalid_string,
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "regex") {
                            t.regex.lastIndex = 0;
                            const a = t.regex.test(e.data);
                            if (!a) {
                                r = this._getOrReturnCtx(e, r);
                                (0, n.addIssueToContext)(r, {
                                    validation: "regex",
                                    code: i.ZodIssueCode.invalid_string,
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "trim") {
                            e.data = e.data.trim();
                        } else if (t.kind === "includes") {
                            if (!e.data.includes(t.value, t.position)) {
                                r = this._getOrReturnCtx(e, r);
                                (0, n.addIssueToContext)(r, {
                                    code: i.ZodIssueCode.invalid_string,
                                    validation: {
                                        includes: t.value,
                                        position: t.position
                                    },
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "toLowerCase") {
                            e.data = e.data.toLowerCase();
                        } else if (t.kind === "toUpperCase") {
                            e.data = e.data.toUpperCase();
                        } else if (t.kind === "startsWith") {
                            if (!e.data.startsWith(t.value)) {
                                r = this._getOrReturnCtx(e, r);
                                (0, n.addIssueToContext)(r, {
                                    code: i.ZodIssueCode.invalid_string,
                                    validation: {
                                        startsWith: t.value
                                    },
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "endsWith") {
                            if (!e.data.endsWith(t.value)) {
                                r = this._getOrReturnCtx(e, r);
                                (0, n.addIssueToContext)(r, {
                                    code: i.ZodIssueCode.invalid_string,
                                    validation: {
                                        endsWith: t.value
                                    },
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "datetime") {
                            const a = datetimeRegex(t);
                            if (!a.test(e.data)) {
                                r = this._getOrReturnCtx(e, r);
                                (0, n.addIssueToContext)(r, {
                                    code: i.ZodIssueCode.invalid_string,
                                    validation: "datetime",
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "ip") {
                            if (!isValidIP(e.data, t.version)) {
                                r = this._getOrReturnCtx(e, r);
                                (0, n.addIssueToContext)(r, {
                                    validation: "ip",
                                    code: i.ZodIssueCode.invalid_string,
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else {
                            o.util.assertNever(t);
                        }
                    }
                    return {
                        status: s.value,
                        value: e.data
                    };
                }
                _addCheck(e) {
                    return new ZodString({
                        ...this._def,
                        checks: [
                            ...this._def.checks,
                            e
                        ]
                    });
                }
                email(e) {
                    return this._addCheck({
                        kind: "email",
                        ...a.errorUtil.errToObj(e)
                    });
                }
                url(e) {
                    return this._addCheck({
                        kind: "url",
                        ...a.errorUtil.errToObj(e)
                    });
                }
                emoji(e) {
                    return this._addCheck({
                        kind: "emoji",
                        ...a.errorUtil.errToObj(e)
                    });
                }
                uuid(e) {
                    return this._addCheck({
                        kind: "uuid",
                        ...a.errorUtil.errToObj(e)
                    });
                }
                cuid(e) {
                    return this._addCheck({
                        kind: "cuid",
                        ...a.errorUtil.errToObj(e)
                    });
                }
                cuid2(e) {
                    return this._addCheck({
                        kind: "cuid2",
                        ...a.errorUtil.errToObj(e)
                    });
                }
                ulid(e) {
                    return this._addCheck({
                        kind: "ulid",
                        ...a.errorUtil.errToObj(e)
                    });
                }
                ip(e) {
                    return this._addCheck({
                        kind: "ip",
                        ...a.errorUtil.errToObj(e)
                    });
                }
                datetime(e) {
                    var t;
                    if (typeof e === "string") {
                        return this._addCheck({
                            kind: "datetime",
                            precision: null,
                            offset: false,
                            message: e
                        });
                    }
                    return this._addCheck({
                        kind: "datetime",
                        precision: typeof (e === null || e === void 0 ? void 0 : e.precision) === "undefined" ? null : e === null || e === void 0 ? void 0 : e.precision,
                        offset: (t = e === null || e === void 0 ? void 0 : e.offset) !== null && t !== void 0 ? t : false,
                        ...a.errorUtil.errToObj(e === null || e === void 0 ? void 0 : e.message)
                    });
                }
                regex(e, t) {
                    return this._addCheck({
                        kind: "regex",
                        regex: e,
                        ...a.errorUtil.errToObj(t)
                    });
                }
                includes(e, t) {
                    return this._addCheck({
                        kind: "includes",
                        value: e,
                        position: t === null || t === void 0 ? void 0 : t.position,
                        ...a.errorUtil.errToObj(t === null || t === void 0 ? void 0 : t.message)
                    });
                }
                startsWith(e, t) {
                    return this._addCheck({
                        kind: "startsWith",
                        value: e,
                        ...a.errorUtil.errToObj(t)
                    });
                }
                endsWith(e, t) {
                    return this._addCheck({
                        kind: "endsWith",
                        value: e,
                        ...a.errorUtil.errToObj(t)
                    });
                }
                min(e, t) {
                    return this._addCheck({
                        kind: "min",
                        value: e,
                        ...a.errorUtil.errToObj(t)
                    });
                }
                max(e, t) {
                    return this._addCheck({
                        kind: "max",
                        value: e,
                        ...a.errorUtil.errToObj(t)
                    });
                }
                length(e, t) {
                    return this._addCheck({
                        kind: "length",
                        value: e,
                        ...a.errorUtil.errToObj(t)
                    });
                }
                get isDatetime() {
                    return !!this._def.checks.find((e)=>e.kind === "datetime");
                }
                get isEmail() {
                    return !!this._def.checks.find((e)=>e.kind === "email");
                }
                get isURL() {
                    return !!this._def.checks.find((e)=>e.kind === "url");
                }
                get isEmoji() {
                    return !!this._def.checks.find((e)=>e.kind === "emoji");
                }
                get isUUID() {
                    return !!this._def.checks.find((e)=>e.kind === "uuid");
                }
                get isCUID() {
                    return !!this._def.checks.find((e)=>e.kind === "cuid");
                }
                get isCUID2() {
                    return !!this._def.checks.find((e)=>e.kind === "cuid2");
                }
                get isULID() {
                    return !!this._def.checks.find((e)=>e.kind === "ulid");
                }
                get isIP() {
                    return !!this._def.checks.find((e)=>e.kind === "ip");
                }
                get minLength() {
                    let e = null;
                    for (const t of this._def.checks){
                        if (t.kind === "min") {
                            if (e === null || t.value > e) e = t.value;
                        }
                    }
                    return e;
                }
                get maxLength() {
                    let e = null;
                    for (const t of this._def.checks){
                        if (t.kind === "max") {
                            if (e === null || t.value < e) e = t.value;
                        }
                    }
                    return e;
                }
            }
            t.ZodString = ZodString;
            ZodString.create = (e)=>{
                var t;
                return new ZodString({
                    checks: [],
                    typeName: y.ZodString,
                    coerce: (t = e === null || e === void 0 ? void 0 : e.coerce) !== null && t !== void 0 ? t : false,
                    ...processCreateParams(e)
                });
            };
            function floatSafeRemainder(e, t) {
                const s = (e.toString().split(".")[1] || "").length;
                const r = (t.toString().split(".")[1] || "").length;
                const a = s > r ? s : r;
                const n = parseInt(e.toFixed(a).replace(".", ""));
                const o = parseInt(t.toFixed(a).replace(".", ""));
                return n % o / Math.pow(10, a);
            }
            class ZodNumber extends ZodType {
                constructor(){
                    super(...arguments);
                    this.min = this.gte;
                    this.max = this.lte;
                    this.step = this.multipleOf;
                }
                _parse(e) {
                    if (this._def.coerce) {
                        e.data = Number(e.data);
                    }
                    const t = this._getType(e);
                    if (t !== o.ZodParsedType.number) {
                        const t = this._getOrReturnCtx(e);
                        (0, n.addIssueToContext)(t, {
                            code: i.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.number,
                            received: t.parsedType
                        });
                        return n.INVALID;
                    }
                    let s = undefined;
                    const r = new n.ParseStatus;
                    for (const t of this._def.checks){
                        if (t.kind === "int") {
                            if (!o.util.isInteger(e.data)) {
                                s = this._getOrReturnCtx(e, s);
                                (0, n.addIssueToContext)(s, {
                                    code: i.ZodIssueCode.invalid_type,
                                    expected: "integer",
                                    received: "float",
                                    message: t.message
                                });
                                r.dirty();
                            }
                        } else if (t.kind === "min") {
                            const a = t.inclusive ? e.data < t.value : e.data <= t.value;
                            if (a) {
                                s = this._getOrReturnCtx(e, s);
                                (0, n.addIssueToContext)(s, {
                                    code: i.ZodIssueCode.too_small,
                                    minimum: t.value,
                                    type: "number",
                                    inclusive: t.inclusive,
                                    exact: false,
                                    message: t.message
                                });
                                r.dirty();
                            }
                        } else if (t.kind === "max") {
                            const a = t.inclusive ? e.data > t.value : e.data >= t.value;
                            if (a) {
                                s = this._getOrReturnCtx(e, s);
                                (0, n.addIssueToContext)(s, {
                                    code: i.ZodIssueCode.too_big,
                                    maximum: t.value,
                                    type: "number",
                                    inclusive: t.inclusive,
                                    exact: false,
                                    message: t.message
                                });
                                r.dirty();
                            }
                        } else if (t.kind === "multipleOf") {
                            if (floatSafeRemainder(e.data, t.value) !== 0) {
                                s = this._getOrReturnCtx(e, s);
                                (0, n.addIssueToContext)(s, {
                                    code: i.ZodIssueCode.not_multiple_of,
                                    multipleOf: t.value,
                                    message: t.message
                                });
                                r.dirty();
                            }
                        } else if (t.kind === "finite") {
                            if (!Number.isFinite(e.data)) {
                                s = this._getOrReturnCtx(e, s);
                                (0, n.addIssueToContext)(s, {
                                    code: i.ZodIssueCode.not_finite,
                                    message: t.message
                                });
                                r.dirty();
                            }
                        } else {
                            o.util.assertNever(t);
                        }
                    }
                    return {
                        status: r.value,
                        value: e.data
                    };
                }
                gte(e, t) {
                    return this.setLimit("min", e, true, a.errorUtil.toString(t));
                }
                gt(e, t) {
                    return this.setLimit("min", e, false, a.errorUtil.toString(t));
                }
                lte(e, t) {
                    return this.setLimit("max", e, true, a.errorUtil.toString(t));
                }
                lt(e, t) {
                    return this.setLimit("max", e, false, a.errorUtil.toString(t));
                }
                setLimit(e, t, s, r) {
                    return new ZodNumber({
                        ...this._def,
                        checks: [
                            ...this._def.checks,
                            {
                                kind: e,
                                value: t,
                                inclusive: s,
                                message: a.errorUtil.toString(r)
                            }
                        ]
                    });
                }
                _addCheck(e) {
                    return new ZodNumber({
                        ...this._def,
                        checks: [
                            ...this._def.checks,
                            e
                        ]
                    });
                }
                int(e) {
                    return this._addCheck({
                        kind: "int",
                        message: a.errorUtil.toString(e)
                    });
                }
                positive(e) {
                    return this._addCheck({
                        kind: "min",
                        value: 0,
                        inclusive: false,
                        message: a.errorUtil.toString(e)
                    });
                }
                negative(e) {
                    return this._addCheck({
                        kind: "max",
                        value: 0,
                        inclusive: false,
                        message: a.errorUtil.toString(e)
                    });
                }
                nonpositive(e) {
                    return this._addCheck({
                        kind: "max",
                        value: 0,
                        inclusive: true,
                        message: a.errorUtil.toString(e)
                    });
                }
                nonnegative(e) {
                    return this._addCheck({
                        kind: "min",
                        value: 0,
                        inclusive: true,
                        message: a.errorUtil.toString(e)
                    });
                }
                multipleOf(e, t) {
                    return this._addCheck({
                        kind: "multipleOf",
                        value: e,
                        message: a.errorUtil.toString(t)
                    });
                }
                finite(e) {
                    return this._addCheck({
                        kind: "finite",
                        message: a.errorUtil.toString(e)
                    });
                }
                safe(e) {
                    return this._addCheck({
                        kind: "min",
                        inclusive: true,
                        value: Number.MIN_SAFE_INTEGER,
                        message: a.errorUtil.toString(e)
                    })._addCheck({
                        kind: "max",
                        inclusive: true,
                        value: Number.MAX_SAFE_INTEGER,
                        message: a.errorUtil.toString(e)
                    });
                }
                get minValue() {
                    let e = null;
                    for (const t of this._def.checks){
                        if (t.kind === "min") {
                            if (e === null || t.value > e) e = t.value;
                        }
                    }
                    return e;
                }
                get maxValue() {
                    let e = null;
                    for (const t of this._def.checks){
                        if (t.kind === "max") {
                            if (e === null || t.value < e) e = t.value;
                        }
                    }
                    return e;
                }
                get isInt() {
                    return !!this._def.checks.find((e)=>e.kind === "int" || e.kind === "multipleOf" && o.util.isInteger(e.value));
                }
                get isFinite() {
                    let e = null, t = null;
                    for (const s of this._def.checks){
                        if (s.kind === "finite" || s.kind === "int" || s.kind === "multipleOf") {
                            return true;
                        } else if (s.kind === "min") {
                            if (t === null || s.value > t) t = s.value;
                        } else if (s.kind === "max") {
                            if (e === null || s.value < e) e = s.value;
                        }
                    }
                    return Number.isFinite(t) && Number.isFinite(e);
                }
            }
            t.ZodNumber = ZodNumber;
            ZodNumber.create = (e)=>new ZodNumber({
                    checks: [],
                    typeName: y.ZodNumber,
                    coerce: (e === null || e === void 0 ? void 0 : e.coerce) || false,
                    ...processCreateParams(e)
                });
            class ZodBigInt extends ZodType {
                constructor(){
                    super(...arguments);
                    this.min = this.gte;
                    this.max = this.lte;
                }
                _parse(e) {
                    if (this._def.coerce) {
                        e.data = BigInt(e.data);
                    }
                    const t = this._getType(e);
                    if (t !== o.ZodParsedType.bigint) {
                        const t = this._getOrReturnCtx(e);
                        (0, n.addIssueToContext)(t, {
                            code: i.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.bigint,
                            received: t.parsedType
                        });
                        return n.INVALID;
                    }
                    let s = undefined;
                    const r = new n.ParseStatus;
                    for (const t of this._def.checks){
                        if (t.kind === "min") {
                            const a = t.inclusive ? e.data < t.value : e.data <= t.value;
                            if (a) {
                                s = this._getOrReturnCtx(e, s);
                                (0, n.addIssueToContext)(s, {
                                    code: i.ZodIssueCode.too_small,
                                    type: "bigint",
                                    minimum: t.value,
                                    inclusive: t.inclusive,
                                    message: t.message
                                });
                                r.dirty();
                            }
                        } else if (t.kind === "max") {
                            const a = t.inclusive ? e.data > t.value : e.data >= t.value;
                            if (a) {
                                s = this._getOrReturnCtx(e, s);
                                (0, n.addIssueToContext)(s, {
                                    code: i.ZodIssueCode.too_big,
                                    type: "bigint",
                                    maximum: t.value,
                                    inclusive: t.inclusive,
                                    message: t.message
                                });
                                r.dirty();
                            }
                        } else if (t.kind === "multipleOf") {
                            if (e.data % t.value !== BigInt(0)) {
                                s = this._getOrReturnCtx(e, s);
                                (0, n.addIssueToContext)(s, {
                                    code: i.ZodIssueCode.not_multiple_of,
                                    multipleOf: t.value,
                                    message: t.message
                                });
                                r.dirty();
                            }
                        } else {
                            o.util.assertNever(t);
                        }
                    }
                    return {
                        status: r.value,
                        value: e.data
                    };
                }
                gte(e, t) {
                    return this.setLimit("min", e, true, a.errorUtil.toString(t));
                }
                gt(e, t) {
                    return this.setLimit("min", e, false, a.errorUtil.toString(t));
                }
                lte(e, t) {
                    return this.setLimit("max", e, true, a.errorUtil.toString(t));
                }
                lt(e, t) {
                    return this.setLimit("max", e, false, a.errorUtil.toString(t));
                }
                setLimit(e, t, s, r) {
                    return new ZodBigInt({
                        ...this._def,
                        checks: [
                            ...this._def.checks,
                            {
                                kind: e,
                                value: t,
                                inclusive: s,
                                message: a.errorUtil.toString(r)
                            }
                        ]
                    });
                }
                _addCheck(e) {
                    return new ZodBigInt({
                        ...this._def,
                        checks: [
                            ...this._def.checks,
                            e
                        ]
                    });
                }
                positive(e) {
                    return this._addCheck({
                        kind: "min",
                        value: BigInt(0),
                        inclusive: false,
                        message: a.errorUtil.toString(e)
                    });
                }
                negative(e) {
                    return this._addCheck({
                        kind: "max",
                        value: BigInt(0),
                        inclusive: false,
                        message: a.errorUtil.toString(e)
                    });
                }
                nonpositive(e) {
                    return this._addCheck({
                        kind: "max",
                        value: BigInt(0),
                        inclusive: true,
                        message: a.errorUtil.toString(e)
                    });
                }
                nonnegative(e) {
                    return this._addCheck({
                        kind: "min",
                        value: BigInt(0),
                        inclusive: true,
                        message: a.errorUtil.toString(e)
                    });
                }
                multipleOf(e, t) {
                    return this._addCheck({
                        kind: "multipleOf",
                        value: e,
                        message: a.errorUtil.toString(t)
                    });
                }
                get minValue() {
                    let e = null;
                    for (const t of this._def.checks){
                        if (t.kind === "min") {
                            if (e === null || t.value > e) e = t.value;
                        }
                    }
                    return e;
                }
                get maxValue() {
                    let e = null;
                    for (const t of this._def.checks){
                        if (t.kind === "max") {
                            if (e === null || t.value < e) e = t.value;
                        }
                    }
                    return e;
                }
            }
            t.ZodBigInt = ZodBigInt;
            ZodBigInt.create = (e)=>{
                var t;
                return new ZodBigInt({
                    checks: [],
                    typeName: y.ZodBigInt,
                    coerce: (t = e === null || e === void 0 ? void 0 : e.coerce) !== null && t !== void 0 ? t : false,
                    ...processCreateParams(e)
                });
            };
            class ZodBoolean extends ZodType {
                _parse(e) {
                    if (this._def.coerce) {
                        e.data = Boolean(e.data);
                    }
                    const t = this._getType(e);
                    if (t !== o.ZodParsedType.boolean) {
                        const t = this._getOrReturnCtx(e);
                        (0, n.addIssueToContext)(t, {
                            code: i.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.boolean,
                            received: t.parsedType
                        });
                        return n.INVALID;
                    }
                    return (0, n.OK)(e.data);
                }
            }
            t.ZodBoolean = ZodBoolean;
            ZodBoolean.create = (e)=>new ZodBoolean({
                    typeName: y.ZodBoolean,
                    coerce: (e === null || e === void 0 ? void 0 : e.coerce) || false,
                    ...processCreateParams(e)
                });
            class ZodDate extends ZodType {
                _parse(e) {
                    if (this._def.coerce) {
                        e.data = new Date(e.data);
                    }
                    const t = this._getType(e);
                    if (t !== o.ZodParsedType.date) {
                        const t = this._getOrReturnCtx(e);
                        (0, n.addIssueToContext)(t, {
                            code: i.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.date,
                            received: t.parsedType
                        });
                        return n.INVALID;
                    }
                    if (isNaN(e.data.getTime())) {
                        const t = this._getOrReturnCtx(e);
                        (0, n.addIssueToContext)(t, {
                            code: i.ZodIssueCode.invalid_date
                        });
                        return n.INVALID;
                    }
                    const s = new n.ParseStatus;
                    let r = undefined;
                    for (const t of this._def.checks){
                        if (t.kind === "min") {
                            if (e.data.getTime() < t.value) {
                                r = this._getOrReturnCtx(e, r);
                                (0, n.addIssueToContext)(r, {
                                    code: i.ZodIssueCode.too_small,
                                    message: t.message,
                                    inclusive: true,
                                    exact: false,
                                    minimum: t.value,
                                    type: "date"
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "max") {
                            if (e.data.getTime() > t.value) {
                                r = this._getOrReturnCtx(e, r);
                                (0, n.addIssueToContext)(r, {
                                    code: i.ZodIssueCode.too_big,
                                    message: t.message,
                                    inclusive: true,
                                    exact: false,
                                    maximum: t.value,
                                    type: "date"
                                });
                                s.dirty();
                            }
                        } else {
                            o.util.assertNever(t);
                        }
                    }
                    return {
                        status: s.value,
                        value: new Date(e.data.getTime())
                    };
                }
                _addCheck(e) {
                    return new ZodDate({
                        ...this._def,
                        checks: [
                            ...this._def.checks,
                            e
                        ]
                    });
                }
                min(e, t) {
                    return this._addCheck({
                        kind: "min",
                        value: e.getTime(),
                        message: a.errorUtil.toString(t)
                    });
                }
                max(e, t) {
                    return this._addCheck({
                        kind: "max",
                        value: e.getTime(),
                        message: a.errorUtil.toString(t)
                    });
                }
                get minDate() {
                    let e = null;
                    for (const t of this._def.checks){
                        if (t.kind === "min") {
                            if (e === null || t.value > e) e = t.value;
                        }
                    }
                    return e != null ? new Date(e) : null;
                }
                get maxDate() {
                    let e = null;
                    for (const t of this._def.checks){
                        if (t.kind === "max") {
                            if (e === null || t.value < e) e = t.value;
                        }
                    }
                    return e != null ? new Date(e) : null;
                }
            }
            t.ZodDate = ZodDate;
            ZodDate.create = (e)=>new ZodDate({
                    checks: [],
                    coerce: (e === null || e === void 0 ? void 0 : e.coerce) || false,
                    typeName: y.ZodDate,
                    ...processCreateParams(e)
                });
            class ZodSymbol extends ZodType {
                _parse(e) {
                    const t = this._getType(e);
                    if (t !== o.ZodParsedType.symbol) {
                        const t = this._getOrReturnCtx(e);
                        (0, n.addIssueToContext)(t, {
                            code: i.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.symbol,
                            received: t.parsedType
                        });
                        return n.INVALID;
                    }
                    return (0, n.OK)(e.data);
                }
            }
            t.ZodSymbol = ZodSymbol;
            ZodSymbol.create = (e)=>new ZodSymbol({
                    typeName: y.ZodSymbol,
                    ...processCreateParams(e)
                });
            class ZodUndefined extends ZodType {
                _parse(e) {
                    const t = this._getType(e);
                    if (t !== o.ZodParsedType.undefined) {
                        const t = this._getOrReturnCtx(e);
                        (0, n.addIssueToContext)(t, {
                            code: i.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.undefined,
                            received: t.parsedType
                        });
                        return n.INVALID;
                    }
                    return (0, n.OK)(e.data);
                }
            }
            t.ZodUndefined = ZodUndefined;
            ZodUndefined.create = (e)=>new ZodUndefined({
                    typeName: y.ZodUndefined,
                    ...processCreateParams(e)
                });
            class ZodNull extends ZodType {
                _parse(e) {
                    const t = this._getType(e);
                    if (t !== o.ZodParsedType.null) {
                        const t = this._getOrReturnCtx(e);
                        (0, n.addIssueToContext)(t, {
                            code: i.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.null,
                            received: t.parsedType
                        });
                        return n.INVALID;
                    }
                    return (0, n.OK)(e.data);
                }
            }
            t.ZodNull = ZodNull;
            ZodNull.create = (e)=>new ZodNull({
                    typeName: y.ZodNull,
                    ...processCreateParams(e)
                });
            class ZodAny extends ZodType {
                constructor(){
                    super(...arguments);
                    this._any = true;
                }
                _parse(e) {
                    return (0, n.OK)(e.data);
                }
            }
            t.ZodAny = ZodAny;
            ZodAny.create = (e)=>new ZodAny({
                    typeName: y.ZodAny,
                    ...processCreateParams(e)
                });
            class ZodUnknown extends ZodType {
                constructor(){
                    super(...arguments);
                    this._unknown = true;
                }
                _parse(e) {
                    return (0, n.OK)(e.data);
                }
            }
            t.ZodUnknown = ZodUnknown;
            ZodUnknown.create = (e)=>new ZodUnknown({
                    typeName: y.ZodUnknown,
                    ...processCreateParams(e)
                });
            class ZodNever extends ZodType {
                _parse(e) {
                    const t = this._getOrReturnCtx(e);
                    (0, n.addIssueToContext)(t, {
                        code: i.ZodIssueCode.invalid_type,
                        expected: o.ZodParsedType.never,
                        received: t.parsedType
                    });
                    return n.INVALID;
                }
            }
            t.ZodNever = ZodNever;
            ZodNever.create = (e)=>new ZodNever({
                    typeName: y.ZodNever,
                    ...processCreateParams(e)
                });
            class ZodVoid extends ZodType {
                _parse(e) {
                    const t = this._getType(e);
                    if (t !== o.ZodParsedType.undefined) {
                        const t = this._getOrReturnCtx(e);
                        (0, n.addIssueToContext)(t, {
                            code: i.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.void,
                            received: t.parsedType
                        });
                        return n.INVALID;
                    }
                    return (0, n.OK)(e.data);
                }
            }
            t.ZodVoid = ZodVoid;
            ZodVoid.create = (e)=>new ZodVoid({
                    typeName: y.ZodVoid,
                    ...processCreateParams(e)
                });
            class ZodArray extends ZodType {
                _parse(e) {
                    const { ctx: t, status: s } = this._processInputParams(e);
                    const r = this._def;
                    if (t.parsedType !== o.ZodParsedType.array) {
                        (0, n.addIssueToContext)(t, {
                            code: i.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.array,
                            received: t.parsedType
                        });
                        return n.INVALID;
                    }
                    if (r.exactLength !== null) {
                        const e = t.data.length > r.exactLength.value;
                        const a = t.data.length < r.exactLength.value;
                        if (e || a) {
                            (0, n.addIssueToContext)(t, {
                                code: e ? i.ZodIssueCode.too_big : i.ZodIssueCode.too_small,
                                minimum: a ? r.exactLength.value : undefined,
                                maximum: e ? r.exactLength.value : undefined,
                                type: "array",
                                inclusive: true,
                                exact: true,
                                message: r.exactLength.message
                            });
                            s.dirty();
                        }
                    }
                    if (r.minLength !== null) {
                        if (t.data.length < r.minLength.value) {
                            (0, n.addIssueToContext)(t, {
                                code: i.ZodIssueCode.too_small,
                                minimum: r.minLength.value,
                                type: "array",
                                inclusive: true,
                                exact: false,
                                message: r.minLength.message
                            });
                            s.dirty();
                        }
                    }
                    if (r.maxLength !== null) {
                        if (t.data.length > r.maxLength.value) {
                            (0, n.addIssueToContext)(t, {
                                code: i.ZodIssueCode.too_big,
                                maximum: r.maxLength.value,
                                type: "array",
                                inclusive: true,
                                exact: false,
                                message: r.maxLength.message
                            });
                            s.dirty();
                        }
                    }
                    if (t.common.async) {
                        return Promise.all([
                            ...t.data
                        ].map((e, s)=>r.type._parseAsync(new ParseInputLazyPath(t, e, t.path, s)))).then((e)=>n.ParseStatus.mergeArray(s, e));
                    }
                    const a = [
                        ...t.data
                    ].map((e, s)=>r.type._parseSync(new ParseInputLazyPath(t, e, t.path, s)));
                    return n.ParseStatus.mergeArray(s, a);
                }
                get element() {
                    return this._def.type;
                }
                min(e, t) {
                    return new ZodArray({
                        ...this._def,
                        minLength: {
                            value: e,
                            message: a.errorUtil.toString(t)
                        }
                    });
                }
                max(e, t) {
                    return new ZodArray({
                        ...this._def,
                        maxLength: {
                            value: e,
                            message: a.errorUtil.toString(t)
                        }
                    });
                }
                length(e, t) {
                    return new ZodArray({
                        ...this._def,
                        exactLength: {
                            value: e,
                            message: a.errorUtil.toString(t)
                        }
                    });
                }
                nonempty(e) {
                    return this.min(1, e);
                }
            }
            t.ZodArray = ZodArray;
            ZodArray.create = (e, t)=>new ZodArray({
                    type: e,
                    minLength: null,
                    maxLength: null,
                    exactLength: null,
                    typeName: y.ZodArray,
                    ...processCreateParams(t)
                });
            function deepPartialify(e) {
                if (e instanceof ZodObject) {
                    const t = {};
                    for(const s in e.shape){
                        const r = e.shape[s];
                        t[s] = ZodOptional.create(deepPartialify(r));
                    }
                    return new ZodObject({
                        ...e._def,
                        shape: ()=>t
                    });
                } else if (e instanceof ZodArray) {
                    return new ZodArray({
                        ...e._def,
                        type: deepPartialify(e.element)
                    });
                } else if (e instanceof ZodOptional) {
                    return ZodOptional.create(deepPartialify(e.unwrap()));
                } else if (e instanceof ZodNullable) {
                    return ZodNullable.create(deepPartialify(e.unwrap()));
                } else if (e instanceof ZodTuple) {
                    return ZodTuple.create(e.items.map((e)=>deepPartialify(e)));
                } else {
                    return e;
                }
            }
            class ZodObject extends ZodType {
                constructor(){
                    super(...arguments);
                    this._cached = null;
                    this.nonstrict = this.passthrough;
                    this.augment = this.extend;
                }
                _getCached() {
                    if (this._cached !== null) return this._cached;
                    const e = this._def.shape();
                    const t = o.util.objectKeys(e);
                    return this._cached = {
                        shape: e,
                        keys: t
                    };
                }
                _parse(e) {
                    const t = this._getType(e);
                    if (t !== o.ZodParsedType.object) {
                        const t = this._getOrReturnCtx(e);
                        (0, n.addIssueToContext)(t, {
                            code: i.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.object,
                            received: t.parsedType
                        });
                        return n.INVALID;
                    }
                    const { status: s, ctx: r } = this._processInputParams(e);
                    const { shape: a, keys: d } = this._getCached();
                    const u = [];
                    if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
                        for(const e in r.data){
                            if (!d.includes(e)) {
                                u.push(e);
                            }
                        }
                    }
                    const c = [];
                    for (const e of d){
                        const t = a[e];
                        const s = r.data[e];
                        c.push({
                            key: {
                                status: "valid",
                                value: e
                            },
                            value: t._parse(new ParseInputLazyPath(r, s, r.path, e)),
                            alwaysSet: e in r.data
                        });
                    }
                    if (this._def.catchall instanceof ZodNever) {
                        const e = this._def.unknownKeys;
                        if (e === "passthrough") {
                            for (const e of u){
                                c.push({
                                    key: {
                                        status: "valid",
                                        value: e
                                    },
                                    value: {
                                        status: "valid",
                                        value: r.data[e]
                                    }
                                });
                            }
                        } else if (e === "strict") {
                            if (u.length > 0) {
                                (0, n.addIssueToContext)(r, {
                                    code: i.ZodIssueCode.unrecognized_keys,
                                    keys: u
                                });
                                s.dirty();
                            }
                        } else if (e === "strip") {} else {
                            throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
                        }
                    } else {
                        const e = this._def.catchall;
                        for (const t of u){
                            const s = r.data[t];
                            c.push({
                                key: {
                                    status: "valid",
                                    value: t
                                },
                                value: e._parse(new ParseInputLazyPath(r, s, r.path, t)),
                                alwaysSet: t in r.data
                            });
                        }
                    }
                    if (r.common.async) {
                        return Promise.resolve().then(async ()=>{
                            const e = [];
                            for (const t of c){
                                const s = await t.key;
                                e.push({
                                    key: s,
                                    value: await t.value,
                                    alwaysSet: t.alwaysSet
                                });
                            }
                            return e;
                        }).then((e)=>n.ParseStatus.mergeObjectSync(s, e));
                    } else {
                        return n.ParseStatus.mergeObjectSync(s, c);
                    }
                }
                get shape() {
                    return this._def.shape();
                }
                strict(e) {
                    a.errorUtil.errToObj;
                    return new ZodObject({
                        ...this._def,
                        unknownKeys: "strict",
                        ...e !== undefined ? {
                            errorMap: (t, s)=>{
                                var r, n, o, i;
                                const d = (o = (n = (r = this._def).errorMap) === null || n === void 0 ? void 0 : n.call(r, t, s).message) !== null && o !== void 0 ? o : s.defaultError;
                                if (t.code === "unrecognized_keys") return {
                                    message: (i = a.errorUtil.errToObj(e).message) !== null && i !== void 0 ? i : d
                                };
                                return {
                                    message: d
                                };
                            }
                        } : {}
                    });
                }
                strip() {
                    return new ZodObject({
                        ...this._def,
                        unknownKeys: "strip"
                    });
                }
                passthrough() {
                    return new ZodObject({
                        ...this._def,
                        unknownKeys: "passthrough"
                    });
                }
                extend(e) {
                    return new ZodObject({
                        ...this._def,
                        shape: ()=>({
                                ...this._def.shape(),
                                ...e
                            })
                    });
                }
                merge(e) {
                    const t = new ZodObject({
                        unknownKeys: e._def.unknownKeys,
                        catchall: e._def.catchall,
                        shape: ()=>({
                                ...this._def.shape(),
                                ...e._def.shape()
                            }),
                        typeName: y.ZodObject
                    });
                    return t;
                }
                setKey(e, t) {
                    return this.augment({
                        [e]: t
                    });
                }
                catchall(e) {
                    return new ZodObject({
                        ...this._def,
                        catchall: e
                    });
                }
                pick(e) {
                    const t = {};
                    o.util.objectKeys(e).forEach((s)=>{
                        if (e[s] && this.shape[s]) {
                            t[s] = this.shape[s];
                        }
                    });
                    return new ZodObject({
                        ...this._def,
                        shape: ()=>t
                    });
                }
                omit(e) {
                    const t = {};
                    o.util.objectKeys(this.shape).forEach((s)=>{
                        if (!e[s]) {
                            t[s] = this.shape[s];
                        }
                    });
                    return new ZodObject({
                        ...this._def,
                        shape: ()=>t
                    });
                }
                deepPartial() {
                    return deepPartialify(this);
                }
                partial(e) {
                    const t = {};
                    o.util.objectKeys(this.shape).forEach((s)=>{
                        const r = this.shape[s];
                        if (e && !e[s]) {
                            t[s] = r;
                        } else {
                            t[s] = r.optional();
                        }
                    });
                    return new ZodObject({
                        ...this._def,
                        shape: ()=>t
                    });
                }
                required(e) {
                    const t = {};
                    o.util.objectKeys(this.shape).forEach((s)=>{
                        if (e && !e[s]) {
                            t[s] = this.shape[s];
                        } else {
                            const e = this.shape[s];
                            let r = e;
                            while(r instanceof ZodOptional){
                                r = r._def.innerType;
                            }
                            t[s] = r;
                        }
                    });
                    return new ZodObject({
                        ...this._def,
                        shape: ()=>t
                    });
                }
                keyof() {
                    return createZodEnum(o.util.objectKeys(this.shape));
                }
            }
            t.ZodObject = ZodObject;
            ZodObject.create = (e, t)=>new ZodObject({
                    shape: ()=>e,
                    unknownKeys: "strip",
                    catchall: ZodNever.create(),
                    typeName: y.ZodObject,
                    ...processCreateParams(t)
                });
            ZodObject.strictCreate = (e, t)=>new ZodObject({
                    shape: ()=>e,
                    unknownKeys: "strict",
                    catchall: ZodNever.create(),
                    typeName: y.ZodObject,
                    ...processCreateParams(t)
                });
            ZodObject.lazycreate = (e, t)=>new ZodObject({
                    shape: e,
                    unknownKeys: "strip",
                    catchall: ZodNever.create(),
                    typeName: y.ZodObject,
                    ...processCreateParams(t)
                });
            class ZodUnion extends ZodType {
                _parse(e) {
                    const { ctx: t } = this._processInputParams(e);
                    const s = this._def.options;
                    function handleResults(e) {
                        for (const t of e){
                            if (t.result.status === "valid") {
                                return t.result;
                            }
                        }
                        for (const s of e){
                            if (s.result.status === "dirty") {
                                t.common.issues.push(...s.ctx.common.issues);
                                return s.result;
                            }
                        }
                        const s = e.map((e)=>new i.ZodError(e.ctx.common.issues));
                        (0, n.addIssueToContext)(t, {
                            code: i.ZodIssueCode.invalid_union,
                            unionErrors: s
                        });
                        return n.INVALID;
                    }
                    if (t.common.async) {
                        return Promise.all(s.map(async (e)=>{
                            const s = {
                                ...t,
                                common: {
                                    ...t.common,
                                    issues: []
                                },
                                parent: null
                            };
                            return {
                                result: await e._parseAsync({
                                    data: t.data,
                                    path: t.path,
                                    parent: s
                                }),
                                ctx: s
                            };
                        })).then(handleResults);
                    } else {
                        let e = undefined;
                        const r = [];
                        for (const a of s){
                            const s = {
                                ...t,
                                common: {
                                    ...t.common,
                                    issues: []
                                },
                                parent: null
                            };
                            const n = a._parseSync({
                                data: t.data,
                                path: t.path,
                                parent: s
                            });
                            if (n.status === "valid") {
                                return n;
                            } else if (n.status === "dirty" && !e) {
                                e = {
                                    result: n,
                                    ctx: s
                                };
                            }
                            if (s.common.issues.length) {
                                r.push(s.common.issues);
                            }
                        }
                        if (e) {
                            t.common.issues.push(...e.ctx.common.issues);
                            return e.result;
                        }
                        const a = r.map((e)=>new i.ZodError(e));
                        (0, n.addIssueToContext)(t, {
                            code: i.ZodIssueCode.invalid_union,
                            unionErrors: a
                        });
                        return n.INVALID;
                    }
                }
                get options() {
                    return this._def.options;
                }
            }
            t.ZodUnion = ZodUnion;
            ZodUnion.create = (e, t)=>new ZodUnion({
                    options: e,
                    typeName: y.ZodUnion,
                    ...processCreateParams(t)
                });
            const getDiscriminator = (e)=>{
                if (e instanceof ZodLazy) {
                    return getDiscriminator(e.schema);
                } else if (e instanceof ZodEffects) {
                    return getDiscriminator(e.innerType());
                } else if (e instanceof ZodLiteral) {
                    return [
                        e.value
                    ];
                } else if (e instanceof ZodEnum) {
                    return e.options;
                } else if (e instanceof ZodNativeEnum) {
                    return Object.keys(e.enum);
                } else if (e instanceof ZodDefault) {
                    return getDiscriminator(e._def.innerType);
                } else if (e instanceof ZodUndefined) {
                    return [
                        undefined
                    ];
                } else if (e instanceof ZodNull) {
                    return [
                        null
                    ];
                } else {
                    return null;
                }
            };
            class ZodDiscriminatedUnion extends ZodType {
                _parse(e) {
                    const { ctx: t } = this._processInputParams(e);
                    if (t.parsedType !== o.ZodParsedType.object) {
                        (0, n.addIssueToContext)(t, {
                            code: i.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.object,
                            received: t.parsedType
                        });
                        return n.INVALID;
                    }
                    const s = this.discriminator;
                    const r = t.data[s];
                    const a = this.optionsMap.get(r);
                    if (!a) {
                        (0, n.addIssueToContext)(t, {
                            code: i.ZodIssueCode.invalid_union_discriminator,
                            options: Array.from(this.optionsMap.keys()),
                            path: [
                                s
                            ]
                        });
                        return n.INVALID;
                    }
                    if (t.common.async) {
                        return a._parseAsync({
                            data: t.data,
                            path: t.path,
                            parent: t
                        });
                    } else {
                        return a._parseSync({
                            data: t.data,
                            path: t.path,
                            parent: t
                        });
                    }
                }
                get discriminator() {
                    return this._def.discriminator;
                }
                get options() {
                    return this._def.options;
                }
                get optionsMap() {
                    return this._def.optionsMap;
                }
                static create(e, t, s) {
                    const r = new Map;
                    for (const s of t){
                        const t = getDiscriminator(s.shape[e]);
                        if (!t) {
                            throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
                        }
                        for (const a of t){
                            if (r.has(a)) {
                                throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(a)}`);
                            }
                            r.set(a, s);
                        }
                    }
                    return new ZodDiscriminatedUnion({
                        typeName: y.ZodDiscriminatedUnion,
                        discriminator: e,
                        options: t,
                        optionsMap: r,
                        ...processCreateParams(s)
                    });
                }
            }
            t.ZodDiscriminatedUnion = ZodDiscriminatedUnion;
            function mergeValues(e, t) {
                const s = (0, o.getParsedType)(e);
                const r = (0, o.getParsedType)(t);
                if (e === t) {
                    return {
                        valid: true,
                        data: e
                    };
                } else if (s === o.ZodParsedType.object && r === o.ZodParsedType.object) {
                    const s = o.util.objectKeys(t);
                    const r = o.util.objectKeys(e).filter((e)=>s.indexOf(e) !== -1);
                    const a = {
                        ...e,
                        ...t
                    };
                    for (const s of r){
                        const r = mergeValues(e[s], t[s]);
                        if (!r.valid) {
                            return {
                                valid: false
                            };
                        }
                        a[s] = r.data;
                    }
                    return {
                        valid: true,
                        data: a
                    };
                } else if (s === o.ZodParsedType.array && r === o.ZodParsedType.array) {
                    if (e.length !== t.length) {
                        return {
                            valid: false
                        };
                    }
                    const s = [];
                    for(let r = 0; r < e.length; r++){
                        const a = e[r];
                        const n = t[r];
                        const o = mergeValues(a, n);
                        if (!o.valid) {
                            return {
                                valid: false
                            };
                        }
                        s.push(o.data);
                    }
                    return {
                        valid: true,
                        data: s
                    };
                } else if (s === o.ZodParsedType.date && r === o.ZodParsedType.date && +e === +t) {
                    return {
                        valid: true,
                        data: e
                    };
                } else {
                    return {
                        valid: false
                    };
                }
            }
            class ZodIntersection extends ZodType {
                _parse(e) {
                    const { status: t, ctx: s } = this._processInputParams(e);
                    const handleParsed = (e, r)=>{
                        if ((0, n.isAborted)(e) || (0, n.isAborted)(r)) {
                            return n.INVALID;
                        }
                        const a = mergeValues(e.value, r.value);
                        if (!a.valid) {
                            (0, n.addIssueToContext)(s, {
                                code: i.ZodIssueCode.invalid_intersection_types
                            });
                            return n.INVALID;
                        }
                        if ((0, n.isDirty)(e) || (0, n.isDirty)(r)) {
                            t.dirty();
                        }
                        return {
                            status: t.value,
                            value: a.data
                        };
                    };
                    if (s.common.async) {
                        return Promise.all([
                            this._def.left._parseAsync({
                                data: s.data,
                                path: s.path,
                                parent: s
                            }),
                            this._def.right._parseAsync({
                                data: s.data,
                                path: s.path,
                                parent: s
                            })
                        ]).then(([e, t])=>handleParsed(e, t));
                    } else {
                        return handleParsed(this._def.left._parseSync({
                            data: s.data,
                            path: s.path,
                            parent: s
                        }), this._def.right._parseSync({
                            data: s.data,
                            path: s.path,
                            parent: s
                        }));
                    }
                }
            }
            t.ZodIntersection = ZodIntersection;
            ZodIntersection.create = (e, t, s)=>new ZodIntersection({
                    left: e,
                    right: t,
                    typeName: y.ZodIntersection,
                    ...processCreateParams(s)
                });
            class ZodTuple extends ZodType {
                _parse(e) {
                    const { status: t, ctx: s } = this._processInputParams(e);
                    if (s.parsedType !== o.ZodParsedType.array) {
                        (0, n.addIssueToContext)(s, {
                            code: i.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.array,
                            received: s.parsedType
                        });
                        return n.INVALID;
                    }
                    if (s.data.length < this._def.items.length) {
                        (0, n.addIssueToContext)(s, {
                            code: i.ZodIssueCode.too_small,
                            minimum: this._def.items.length,
                            inclusive: true,
                            exact: false,
                            type: "array"
                        });
                        return n.INVALID;
                    }
                    const r = this._def.rest;
                    if (!r && s.data.length > this._def.items.length) {
                        (0, n.addIssueToContext)(s, {
                            code: i.ZodIssueCode.too_big,
                            maximum: this._def.items.length,
                            inclusive: true,
                            exact: false,
                            type: "array"
                        });
                        t.dirty();
                    }
                    const a = [
                        ...s.data
                    ].map((e, t)=>{
                        const r = this._def.items[t] || this._def.rest;
                        if (!r) return null;
                        return r._parse(new ParseInputLazyPath(s, e, s.path, t));
                    }).filter((e)=>!!e);
                    if (s.common.async) {
                        return Promise.all(a).then((e)=>n.ParseStatus.mergeArray(t, e));
                    } else {
                        return n.ParseStatus.mergeArray(t, a);
                    }
                }
                get items() {
                    return this._def.items;
                }
                rest(e) {
                    return new ZodTuple({
                        ...this._def,
                        rest: e
                    });
                }
            }
            t.ZodTuple = ZodTuple;
            ZodTuple.create = (e, t)=>{
                if (!Array.isArray(e)) {
                    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
                }
                return new ZodTuple({
                    items: e,
                    typeName: y.ZodTuple,
                    rest: null,
                    ...processCreateParams(t)
                });
            };
            class ZodRecord extends ZodType {
                get keySchema() {
                    return this._def.keyType;
                }
                get valueSchema() {
                    return this._def.valueType;
                }
                _parse(e) {
                    const { status: t, ctx: s } = this._processInputParams(e);
                    if (s.parsedType !== o.ZodParsedType.object) {
                        (0, n.addIssueToContext)(s, {
                            code: i.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.object,
                            received: s.parsedType
                        });
                        return n.INVALID;
                    }
                    const r = [];
                    const a = this._def.keyType;
                    const d = this._def.valueType;
                    for(const e in s.data){
                        r.push({
                            key: a._parse(new ParseInputLazyPath(s, e, s.path, e)),
                            value: d._parse(new ParseInputLazyPath(s, s.data[e], s.path, e))
                        });
                    }
                    if (s.common.async) {
                        return n.ParseStatus.mergeObjectAsync(t, r);
                    } else {
                        return n.ParseStatus.mergeObjectSync(t, r);
                    }
                }
                get element() {
                    return this._def.valueType;
                }
                static create(e, t, s) {
                    if (t instanceof ZodType) {
                        return new ZodRecord({
                            keyType: e,
                            valueType: t,
                            typeName: y.ZodRecord,
                            ...processCreateParams(s)
                        });
                    }
                    return new ZodRecord({
                        keyType: ZodString.create(),
                        valueType: e,
                        typeName: y.ZodRecord,
                        ...processCreateParams(t)
                    });
                }
            }
            t.ZodRecord = ZodRecord;
            class ZodMap extends ZodType {
                get keySchema() {
                    return this._def.keyType;
                }
                get valueSchema() {
                    return this._def.valueType;
                }
                _parse(e) {
                    const { status: t, ctx: s } = this._processInputParams(e);
                    if (s.parsedType !== o.ZodParsedType.map) {
                        (0, n.addIssueToContext)(s, {
                            code: i.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.map,
                            received: s.parsedType
                        });
                        return n.INVALID;
                    }
                    const r = this._def.keyType;
                    const a = this._def.valueType;
                    const d = [
                        ...s.data.entries()
                    ].map(([e, t], n)=>({
                            key: r._parse(new ParseInputLazyPath(s, e, s.path, [
                                n,
                                "key"
                            ])),
                            value: a._parse(new ParseInputLazyPath(s, t, s.path, [
                                n,
                                "value"
                            ]))
                        }));
                    if (s.common.async) {
                        const e = new Map;
                        return Promise.resolve().then(async ()=>{
                            for (const s of d){
                                const r = await s.key;
                                const a = await s.value;
                                if (r.status === "aborted" || a.status === "aborted") {
                                    return n.INVALID;
                                }
                                if (r.status === "dirty" || a.status === "dirty") {
                                    t.dirty();
                                }
                                e.set(r.value, a.value);
                            }
                            return {
                                status: t.value,
                                value: e
                            };
                        });
                    } else {
                        const e = new Map;
                        for (const s of d){
                            const r = s.key;
                            const a = s.value;
                            if (r.status === "aborted" || a.status === "aborted") {
                                return n.INVALID;
                            }
                            if (r.status === "dirty" || a.status === "dirty") {
                                t.dirty();
                            }
                            e.set(r.value, a.value);
                        }
                        return {
                            status: t.value,
                            value: e
                        };
                    }
                }
            }
            t.ZodMap = ZodMap;
            ZodMap.create = (e, t, s)=>new ZodMap({
                    valueType: t,
                    keyType: e,
                    typeName: y.ZodMap,
                    ...processCreateParams(s)
                });
            class ZodSet extends ZodType {
                _parse(e) {
                    const { status: t, ctx: s } = this._processInputParams(e);
                    if (s.parsedType !== o.ZodParsedType.set) {
                        (0, n.addIssueToContext)(s, {
                            code: i.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.set,
                            received: s.parsedType
                        });
                        return n.INVALID;
                    }
                    const r = this._def;
                    if (r.minSize !== null) {
                        if (s.data.size < r.minSize.value) {
                            (0, n.addIssueToContext)(s, {
                                code: i.ZodIssueCode.too_small,
                                minimum: r.minSize.value,
                                type: "set",
                                inclusive: true,
                                exact: false,
                                message: r.minSize.message
                            });
                            t.dirty();
                        }
                    }
                    if (r.maxSize !== null) {
                        if (s.data.size > r.maxSize.value) {
                            (0, n.addIssueToContext)(s, {
                                code: i.ZodIssueCode.too_big,
                                maximum: r.maxSize.value,
                                type: "set",
                                inclusive: true,
                                exact: false,
                                message: r.maxSize.message
                            });
                            t.dirty();
                        }
                    }
                    const a = this._def.valueType;
                    function finalizeSet(e) {
                        const s = new Set;
                        for (const r of e){
                            if (r.status === "aborted") return n.INVALID;
                            if (r.status === "dirty") t.dirty();
                            s.add(r.value);
                        }
                        return {
                            status: t.value,
                            value: s
                        };
                    }
                    const d = [
                        ...s.data.values()
                    ].map((e, t)=>a._parse(new ParseInputLazyPath(s, e, s.path, t)));
                    if (s.common.async) {
                        return Promise.all(d).then((e)=>finalizeSet(e));
                    } else {
                        return finalizeSet(d);
                    }
                }
                min(e, t) {
                    return new ZodSet({
                        ...this._def,
                        minSize: {
                            value: e,
                            message: a.errorUtil.toString(t)
                        }
                    });
                }
                max(e, t) {
                    return new ZodSet({
                        ...this._def,
                        maxSize: {
                            value: e,
                            message: a.errorUtil.toString(t)
                        }
                    });
                }
                size(e, t) {
                    return this.min(e, t).max(e, t);
                }
                nonempty(e) {
                    return this.min(1, e);
                }
            }
            t.ZodSet = ZodSet;
            ZodSet.create = (e, t)=>new ZodSet({
                    valueType: e,
                    minSize: null,
                    maxSize: null,
                    typeName: y.ZodSet,
                    ...processCreateParams(t)
                });
            class ZodFunction extends ZodType {
                constructor(){
                    super(...arguments);
                    this.validate = this.implement;
                }
                _parse(e) {
                    const { ctx: t } = this._processInputParams(e);
                    if (t.parsedType !== o.ZodParsedType.function) {
                        (0, n.addIssueToContext)(t, {
                            code: i.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.function,
                            received: t.parsedType
                        });
                        return n.INVALID;
                    }
                    function makeArgsIssue(e, s) {
                        return (0, n.makeIssue)({
                            data: e,
                            path: t.path,
                            errorMaps: [
                                t.common.contextualErrorMap,
                                t.schemaErrorMap,
                                (0, r.getErrorMap)(),
                                r.defaultErrorMap
                            ].filter((e)=>!!e),
                            issueData: {
                                code: i.ZodIssueCode.invalid_arguments,
                                argumentsError: s
                            }
                        });
                    }
                    function makeReturnsIssue(e, s) {
                        return (0, n.makeIssue)({
                            data: e,
                            path: t.path,
                            errorMaps: [
                                t.common.contextualErrorMap,
                                t.schemaErrorMap,
                                (0, r.getErrorMap)(),
                                r.defaultErrorMap
                            ].filter((e)=>!!e),
                            issueData: {
                                code: i.ZodIssueCode.invalid_return_type,
                                returnTypeError: s
                            }
                        });
                    }
                    const s = {
                        errorMap: t.common.contextualErrorMap
                    };
                    const a = t.data;
                    if (this._def.returns instanceof ZodPromise) {
                        const e = this;
                        return (0, n.OK)(async function(...t) {
                            const r = new i.ZodError([]);
                            const n = await e._def.args.parseAsync(t, s).catch((e)=>{
                                r.addIssue(makeArgsIssue(t, e));
                                throw r;
                            });
                            const o = await Reflect.apply(a, this, n);
                            const d = await e._def.returns._def.type.parseAsync(o, s).catch((e)=>{
                                r.addIssue(makeReturnsIssue(o, e));
                                throw r;
                            });
                            return d;
                        });
                    } else {
                        const e = this;
                        return (0, n.OK)(function(...t) {
                            const r = e._def.args.safeParse(t, s);
                            if (!r.success) {
                                throw new i.ZodError([
                                    makeArgsIssue(t, r.error)
                                ]);
                            }
                            const n = Reflect.apply(a, this, r.data);
                            const o = e._def.returns.safeParse(n, s);
                            if (!o.success) {
                                throw new i.ZodError([
                                    makeReturnsIssue(n, o.error)
                                ]);
                            }
                            return o.data;
                        });
                    }
                }
                parameters() {
                    return this._def.args;
                }
                returnType() {
                    return this._def.returns;
                }
                args(...e) {
                    return new ZodFunction({
                        ...this._def,
                        args: ZodTuple.create(e).rest(ZodUnknown.create())
                    });
                }
                returns(e) {
                    return new ZodFunction({
                        ...this._def,
                        returns: e
                    });
                }
                implement(e) {
                    const t = this.parse(e);
                    return t;
                }
                strictImplement(e) {
                    const t = this.parse(e);
                    return t;
                }
                static create(e, t, s) {
                    return new ZodFunction({
                        args: e ? e : ZodTuple.create([]).rest(ZodUnknown.create()),
                        returns: t || ZodUnknown.create(),
                        typeName: y.ZodFunction,
                        ...processCreateParams(s)
                    });
                }
            }
            t.ZodFunction = ZodFunction;
            class ZodLazy extends ZodType {
                get schema() {
                    return this._def.getter();
                }
                _parse(e) {
                    const { ctx: t } = this._processInputParams(e);
                    const s = this._def.getter();
                    return s._parse({
                        data: t.data,
                        path: t.path,
                        parent: t
                    });
                }
            }
            t.ZodLazy = ZodLazy;
            ZodLazy.create = (e, t)=>new ZodLazy({
                    getter: e,
                    typeName: y.ZodLazy,
                    ...processCreateParams(t)
                });
            class ZodLiteral extends ZodType {
                _parse(e) {
                    if (e.data !== this._def.value) {
                        const t = this._getOrReturnCtx(e);
                        (0, n.addIssueToContext)(t, {
                            received: t.data,
                            code: i.ZodIssueCode.invalid_literal,
                            expected: this._def.value
                        });
                        return n.INVALID;
                    }
                    return {
                        status: "valid",
                        value: e.data
                    };
                }
                get value() {
                    return this._def.value;
                }
            }
            t.ZodLiteral = ZodLiteral;
            ZodLiteral.create = (e, t)=>new ZodLiteral({
                    value: e,
                    typeName: y.ZodLiteral,
                    ...processCreateParams(t)
                });
            function createZodEnum(e, t) {
                return new ZodEnum({
                    values: e,
                    typeName: y.ZodEnum,
                    ...processCreateParams(t)
                });
            }
            class ZodEnum extends ZodType {
                _parse(e) {
                    if (typeof e.data !== "string") {
                        const t = this._getOrReturnCtx(e);
                        const s = this._def.values;
                        (0, n.addIssueToContext)(t, {
                            expected: o.util.joinValues(s),
                            received: t.parsedType,
                            code: i.ZodIssueCode.invalid_type
                        });
                        return n.INVALID;
                    }
                    if (this._def.values.indexOf(e.data) === -1) {
                        const t = this._getOrReturnCtx(e);
                        const s = this._def.values;
                        (0, n.addIssueToContext)(t, {
                            received: t.data,
                            code: i.ZodIssueCode.invalid_enum_value,
                            options: s
                        });
                        return n.INVALID;
                    }
                    return (0, n.OK)(e.data);
                }
                get options() {
                    return this._def.values;
                }
                get enum() {
                    const e = {};
                    for (const t of this._def.values){
                        e[t] = t;
                    }
                    return e;
                }
                get Values() {
                    const e = {};
                    for (const t of this._def.values){
                        e[t] = t;
                    }
                    return e;
                }
                get Enum() {
                    const e = {};
                    for (const t of this._def.values){
                        e[t] = t;
                    }
                    return e;
                }
                extract(e) {
                    return ZodEnum.create(e);
                }
                exclude(e) {
                    return ZodEnum.create(this.options.filter((t)=>!e.includes(t)));
                }
            }
            t.ZodEnum = ZodEnum;
            ZodEnum.create = createZodEnum;
            class ZodNativeEnum extends ZodType {
                _parse(e) {
                    const t = o.util.getValidEnumValues(this._def.values);
                    const s = this._getOrReturnCtx(e);
                    if (s.parsedType !== o.ZodParsedType.string && s.parsedType !== o.ZodParsedType.number) {
                        const e = o.util.objectValues(t);
                        (0, n.addIssueToContext)(s, {
                            expected: o.util.joinValues(e),
                            received: s.parsedType,
                            code: i.ZodIssueCode.invalid_type
                        });
                        return n.INVALID;
                    }
                    if (t.indexOf(e.data) === -1) {
                        const e = o.util.objectValues(t);
                        (0, n.addIssueToContext)(s, {
                            received: s.data,
                            code: i.ZodIssueCode.invalid_enum_value,
                            options: e
                        });
                        return n.INVALID;
                    }
                    return (0, n.OK)(e.data);
                }
                get enum() {
                    return this._def.values;
                }
            }
            t.ZodNativeEnum = ZodNativeEnum;
            ZodNativeEnum.create = (e, t)=>new ZodNativeEnum({
                    values: e,
                    typeName: y.ZodNativeEnum,
                    ...processCreateParams(t)
                });
            class ZodPromise extends ZodType {
                unwrap() {
                    return this._def.type;
                }
                _parse(e) {
                    const { ctx: t } = this._processInputParams(e);
                    if (t.parsedType !== o.ZodParsedType.promise && t.common.async === false) {
                        (0, n.addIssueToContext)(t, {
                            code: i.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.promise,
                            received: t.parsedType
                        });
                        return n.INVALID;
                    }
                    const s = t.parsedType === o.ZodParsedType.promise ? t.data : Promise.resolve(t.data);
                    return (0, n.OK)(s.then((e)=>this._def.type.parseAsync(e, {
                            path: t.path,
                            errorMap: t.common.contextualErrorMap
                        })));
                }
            }
            t.ZodPromise = ZodPromise;
            ZodPromise.create = (e, t)=>new ZodPromise({
                    type: e,
                    typeName: y.ZodPromise,
                    ...processCreateParams(t)
                });
            class ZodEffects extends ZodType {
                innerType() {
                    return this._def.schema;
                }
                sourceType() {
                    return this._def.schema._def.typeName === y.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
                }
                _parse(e) {
                    const { status: t, ctx: s } = this._processInputParams(e);
                    const r = this._def.effect || null;
                    const a = {
                        addIssue: (e)=>{
                            (0, n.addIssueToContext)(s, e);
                            if (e.fatal) {
                                t.abort();
                            } else {
                                t.dirty();
                            }
                        },
                        get path () {
                            return s.path;
                        }
                    };
                    a.addIssue = a.addIssue.bind(a);
                    if (r.type === "preprocess") {
                        const e = r.transform(s.data, a);
                        if (s.common.issues.length) {
                            return {
                                status: "dirty",
                                value: s.data
                            };
                        }
                        if (s.common.async) {
                            return Promise.resolve(e).then((e)=>this._def.schema._parseAsync({
                                    data: e,
                                    path: s.path,
                                    parent: s
                                }));
                        } else {
                            return this._def.schema._parseSync({
                                data: e,
                                path: s.path,
                                parent: s
                            });
                        }
                    }
                    if (r.type === "refinement") {
                        const executeRefinement = (e)=>{
                            const t = r.refinement(e, a);
                            if (s.common.async) {
                                return Promise.resolve(t);
                            }
                            if (t instanceof Promise) {
                                throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
                            }
                            return e;
                        };
                        if (s.common.async === false) {
                            const e = this._def.schema._parseSync({
                                data: s.data,
                                path: s.path,
                                parent: s
                            });
                            if (e.status === "aborted") return n.INVALID;
                            if (e.status === "dirty") t.dirty();
                            executeRefinement(e.value);
                            return {
                                status: t.value,
                                value: e.value
                            };
                        } else {
                            return this._def.schema._parseAsync({
                                data: s.data,
                                path: s.path,
                                parent: s
                            }).then((e)=>{
                                if (e.status === "aborted") return n.INVALID;
                                if (e.status === "dirty") t.dirty();
                                return executeRefinement(e.value).then(()=>({
                                        status: t.value,
                                        value: e.value
                                    }));
                            });
                        }
                    }
                    if (r.type === "transform") {
                        if (s.common.async === false) {
                            const e = this._def.schema._parseSync({
                                data: s.data,
                                path: s.path,
                                parent: s
                            });
                            if (!(0, n.isValid)(e)) return e;
                            const o = r.transform(e.value, a);
                            if (o instanceof Promise) {
                                throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
                            }
                            return {
                                status: t.value,
                                value: o
                            };
                        } else {
                            return this._def.schema._parseAsync({
                                data: s.data,
                                path: s.path,
                                parent: s
                            }).then((e)=>{
                                if (!(0, n.isValid)(e)) return e;
                                return Promise.resolve(r.transform(e.value, a)).then((e)=>({
                                        status: t.value,
                                        value: e
                                    }));
                            });
                        }
                    }
                    o.util.assertNever(r);
                }
            }
            t.ZodEffects = ZodEffects;
            t.ZodTransformer = ZodEffects;
            ZodEffects.create = (e, t, s)=>new ZodEffects({
                    schema: e,
                    typeName: y.ZodEffects,
                    effect: t,
                    ...processCreateParams(s)
                });
            ZodEffects.createWithPreprocess = (e, t, s)=>new ZodEffects({
                    schema: t,
                    effect: {
                        type: "preprocess",
                        transform: e
                    },
                    typeName: y.ZodEffects,
                    ...processCreateParams(s)
                });
            class ZodOptional extends ZodType {
                _parse(e) {
                    const t = this._getType(e);
                    if (t === o.ZodParsedType.undefined) {
                        return (0, n.OK)(undefined);
                    }
                    return this._def.innerType._parse(e);
                }
                unwrap() {
                    return this._def.innerType;
                }
            }
            t.ZodOptional = ZodOptional;
            ZodOptional.create = (e, t)=>new ZodOptional({
                    innerType: e,
                    typeName: y.ZodOptional,
                    ...processCreateParams(t)
                });
            class ZodNullable extends ZodType {
                _parse(e) {
                    const t = this._getType(e);
                    if (t === o.ZodParsedType.null) {
                        return (0, n.OK)(null);
                    }
                    return this._def.innerType._parse(e);
                }
                unwrap() {
                    return this._def.innerType;
                }
            }
            t.ZodNullable = ZodNullable;
            ZodNullable.create = (e, t)=>new ZodNullable({
                    innerType: e,
                    typeName: y.ZodNullable,
                    ...processCreateParams(t)
                });
            class ZodDefault extends ZodType {
                _parse(e) {
                    const { ctx: t } = this._processInputParams(e);
                    let s = t.data;
                    if (t.parsedType === o.ZodParsedType.undefined) {
                        s = this._def.defaultValue();
                    }
                    return this._def.innerType._parse({
                        data: s,
                        path: t.path,
                        parent: t
                    });
                }
                removeDefault() {
                    return this._def.innerType;
                }
            }
            t.ZodDefault = ZodDefault;
            ZodDefault.create = (e, t)=>new ZodDefault({
                    innerType: e,
                    typeName: y.ZodDefault,
                    defaultValue: typeof t.default === "function" ? t.default : ()=>t.default,
                    ...processCreateParams(t)
                });
            class ZodCatch extends ZodType {
                _parse(e) {
                    const { ctx: t } = this._processInputParams(e);
                    const s = {
                        ...t,
                        common: {
                            ...t.common,
                            issues: []
                        }
                    };
                    const r = this._def.innerType._parse({
                        data: s.data,
                        path: s.path,
                        parent: {
                            ...s
                        }
                    });
                    if ((0, n.isAsync)(r)) {
                        return r.then((e)=>({
                                status: "valid",
                                value: e.status === "valid" ? e.value : this._def.catchValue({
                                    get error () {
                                        return new i.ZodError(s.common.issues);
                                    },
                                    input: s.data
                                })
                            }));
                    } else {
                        return {
                            status: "valid",
                            value: r.status === "valid" ? r.value : this._def.catchValue({
                                get error () {
                                    return new i.ZodError(s.common.issues);
                                },
                                input: s.data
                            })
                        };
                    }
                }
                removeCatch() {
                    return this._def.innerType;
                }
            }
            t.ZodCatch = ZodCatch;
            ZodCatch.create = (e, t)=>new ZodCatch({
                    innerType: e,
                    typeName: y.ZodCatch,
                    catchValue: typeof t.catch === "function" ? t.catch : ()=>t.catch,
                    ...processCreateParams(t)
                });
            class ZodNaN extends ZodType {
                _parse(e) {
                    const t = this._getType(e);
                    if (t !== o.ZodParsedType.nan) {
                        const t = this._getOrReturnCtx(e);
                        (0, n.addIssueToContext)(t, {
                            code: i.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.nan,
                            received: t.parsedType
                        });
                        return n.INVALID;
                    }
                    return {
                        status: "valid",
                        value: e.data
                    };
                }
            }
            t.ZodNaN = ZodNaN;
            ZodNaN.create = (e)=>new ZodNaN({
                    typeName: y.ZodNaN,
                    ...processCreateParams(e)
                });
            t.BRAND = Symbol("zod_brand");
            class ZodBranded extends ZodType {
                _parse(e) {
                    const { ctx: t } = this._processInputParams(e);
                    const s = t.data;
                    return this._def.type._parse({
                        data: s,
                        path: t.path,
                        parent: t
                    });
                }
                unwrap() {
                    return this._def.type;
                }
            }
            t.ZodBranded = ZodBranded;
            class ZodPipeline extends ZodType {
                _parse(e) {
                    const { status: t, ctx: s } = this._processInputParams(e);
                    if (s.common.async) {
                        const handleAsync = async ()=>{
                            const e = await this._def.in._parseAsync({
                                data: s.data,
                                path: s.path,
                                parent: s
                            });
                            if (e.status === "aborted") return n.INVALID;
                            if (e.status === "dirty") {
                                t.dirty();
                                return (0, n.DIRTY)(e.value);
                            } else {
                                return this._def.out._parseAsync({
                                    data: e.value,
                                    path: s.path,
                                    parent: s
                                });
                            }
                        };
                        return handleAsync();
                    } else {
                        const e = this._def.in._parseSync({
                            data: s.data,
                            path: s.path,
                            parent: s
                        });
                        if (e.status === "aborted") return n.INVALID;
                        if (e.status === "dirty") {
                            t.dirty();
                            return {
                                status: "dirty",
                                value: e.value
                            };
                        } else {
                            return this._def.out._parseSync({
                                data: e.value,
                                path: s.path,
                                parent: s
                            });
                        }
                    }
                }
                static create(e, t) {
                    return new ZodPipeline({
                        in: e,
                        out: t,
                        typeName: y.ZodPipeline
                    });
                }
            }
            t.ZodPipeline = ZodPipeline;
            class ZodReadonly extends ZodType {
                _parse(e) {
                    const t = this._def.innerType._parse(e);
                    if ((0, n.isValid)(t)) {
                        t.value = Object.freeze(t.value);
                    }
                    return t;
                }
            }
            t.ZodReadonly = ZodReadonly;
            ZodReadonly.create = (e, t)=>new ZodReadonly({
                    innerType: e,
                    typeName: y.ZodReadonly,
                    ...processCreateParams(t)
                });
            const custom = (e, t = {}, s)=>{
                if (e) return ZodAny.create().superRefine((r, a)=>{
                    var n, o;
                    if (!e(r)) {
                        const e = typeof t === "function" ? t(r) : typeof t === "string" ? {
                            message: t
                        } : t;
                        const i = (o = (n = e.fatal) !== null && n !== void 0 ? n : s) !== null && o !== void 0 ? o : true;
                        const d = typeof e === "string" ? {
                            message: e
                        } : e;
                        a.addIssue({
                            code: "custom",
                            ...d,
                            fatal: i
                        });
                    }
                });
                return ZodAny.create();
            };
            t.custom = custom;
            t.late = {
                object: ZodObject.lazycreate
            };
            var y;
            (function(e) {
                e["ZodString"] = "ZodString";
                e["ZodNumber"] = "ZodNumber";
                e["ZodNaN"] = "ZodNaN";
                e["ZodBigInt"] = "ZodBigInt";
                e["ZodBoolean"] = "ZodBoolean";
                e["ZodDate"] = "ZodDate";
                e["ZodSymbol"] = "ZodSymbol";
                e["ZodUndefined"] = "ZodUndefined";
                e["ZodNull"] = "ZodNull";
                e["ZodAny"] = "ZodAny";
                e["ZodUnknown"] = "ZodUnknown";
                e["ZodNever"] = "ZodNever";
                e["ZodVoid"] = "ZodVoid";
                e["ZodArray"] = "ZodArray";
                e["ZodObject"] = "ZodObject";
                e["ZodUnion"] = "ZodUnion";
                e["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
                e["ZodIntersection"] = "ZodIntersection";
                e["ZodTuple"] = "ZodTuple";
                e["ZodRecord"] = "ZodRecord";
                e["ZodMap"] = "ZodMap";
                e["ZodSet"] = "ZodSet";
                e["ZodFunction"] = "ZodFunction";
                e["ZodLazy"] = "ZodLazy";
                e["ZodLiteral"] = "ZodLiteral";
                e["ZodEnum"] = "ZodEnum";
                e["ZodEffects"] = "ZodEffects";
                e["ZodNativeEnum"] = "ZodNativeEnum";
                e["ZodOptional"] = "ZodOptional";
                e["ZodNullable"] = "ZodNullable";
                e["ZodDefault"] = "ZodDefault";
                e["ZodCatch"] = "ZodCatch";
                e["ZodPromise"] = "ZodPromise";
                e["ZodBranded"] = "ZodBranded";
                e["ZodPipeline"] = "ZodPipeline";
                e["ZodReadonly"] = "ZodReadonly";
            })(y = t.ZodFirstPartyTypeKind || (t.ZodFirstPartyTypeKind = {}));
            class Class {
                constructor(...e){}
            }
            const instanceOfType = (e, s = {
                message: `Input not instance of ${e.name}`
            })=>(0, t.custom)((t)=>t instanceof e, s);
            t["instanceof"] = instanceOfType;
            const Z = ZodString.create;
            t.string = Z;
            const _ = ZodNumber.create;
            t.number = _;
            const v = ZodNaN.create;
            t.nan = v;
            const g = ZodBigInt.create;
            t.bigint = g;
            const I = ZodBoolean.create;
            t.boolean = I;
            const T = ZodDate.create;
            t.date = T;
            const x = ZodSymbol.create;
            t.symbol = x;
            const b = ZodUndefined.create;
            t.undefined = b;
            const C = ZodNull.create;
            t["null"] = C;
            const P = ZodAny.create;
            t.any = P;
            const k = ZodUnknown.create;
            t.unknown = k;
            const w = ZodNever.create;
            t.never = w;
            const N = ZodVoid.create;
            t["void"] = N;
            const O = ZodArray.create;
            t.array = O;
            const S = ZodObject.create;
            t.object = S;
            const E = ZodObject.strictCreate;
            t.strictObject = E;
            const A = ZodUnion.create;
            t.union = A;
            const j = ZodDiscriminatedUnion.create;
            t.discriminatedUnion = j;
            const L = ZodIntersection.create;
            t.intersection = L;
            const U = ZodTuple.create;
            t.tuple = U;
            const D = ZodRecord.create;
            t.record = D;
            const R = ZodMap.create;
            t.map = R;
            const V = ZodSet.create;
            t.set = V;
            const M = ZodFunction.create;
            t["function"] = M;
            const z = ZodLazy.create;
            t.lazy = z;
            const $ = ZodLiteral.create;
            t.literal = $;
            const B = ZodEnum.create;
            t["enum"] = B;
            const K = ZodNativeEnum.create;
            t.nativeEnum = K;
            const F = ZodPromise.create;
            t.promise = F;
            const q = ZodEffects.create;
            t.effect = q;
            t.transformer = q;
            const W = ZodOptional.create;
            t.optional = W;
            const J = ZodNullable.create;
            t.nullable = J;
            const Y = ZodEffects.createWithPreprocess;
            t.preprocess = Y;
            const H = ZodPipeline.create;
            t.pipeline = H;
            const ostring = ()=>Z().optional();
            t.ostring = ostring;
            const onumber = ()=>_().optional();
            t.onumber = onumber;
            const oboolean = ()=>I().optional();
            t.oboolean = oboolean;
            t.coerce = {
                string: (e)=>ZodString.create({
                        ...e,
                        coerce: true
                    }),
                number: (e)=>ZodNumber.create({
                        ...e,
                        coerce: true
                    }),
                boolean: (e)=>ZodBoolean.create({
                        ...e,
                        coerce: true
                    }),
                bigint: (e)=>ZodBigInt.create({
                        ...e,
                        coerce: true
                    }),
                date: (e)=>ZodDate.create({
                        ...e,
                        coerce: true
                    })
            };
            t.NEVER = n.INVALID;
        }
    };
    var t = {};
    function __nccwpck_require__(s) {
        var r = t[s];
        if (r !== undefined) {
            return r.exports;
        }
        var a = t[s] = {
            exports: {}
        };
        var n = true;
        try {
            e[s].call(a.exports, a, a.exports, __nccwpck_require__);
            n = false;
        } finally{
            if (n) delete t[s];
        }
        return a.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/Transferências/elos-creative/node_modules/next/dist/compiled/zod") + "/";
    var s = __nccwpck_require__(773);
    module.exports = s;
})();
}),
"[project]/node_modules/next/dist/compiled/zod-validation-error/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

(()=>{
    "use strict";
    var r = {
        452: (r, e, o)=>{
            var t = Object.create;
            var s = Object.defineProperty;
            var n = Object.getOwnPropertyDescriptor;
            var i = Object.getOwnPropertyNames;
            var a = Object.getPrototypeOf;
            var u = Object.prototype.hasOwnProperty;
            var __export = (r, e)=>{
                for(var o in e)s(r, o, {
                    get: e[o],
                    enumerable: true
                });
            };
            var __copyProps = (r, e, o, t)=>{
                if (e && typeof e === "object" || typeof e === "function") {
                    for (let a of i(e))if (!u.call(r, a) && a !== o) s(r, a, {
                        get: ()=>e[a],
                        enumerable: !(t = n(e, a)) || t.enumerable
                    });
                }
                return r;
            };
            var __toESM = (r, e, o)=>(o = r != null ? t(a(r)) : {}, __copyProps(e || !r || !r.__esModule ? s(o, "default", {
                    value: r,
                    enumerable: true
                }) : o, r));
            var __toCommonJS = (r)=>__copyProps(s({}, "__esModule", {
                    value: true
                }), r);
            var d = {};
            __export(d, {
                ValidationError: ()=>c,
                createMessageBuilder: ()=>createMessageBuilder,
                errorMap: ()=>errorMap,
                fromError: ()=>fromError,
                fromZodError: ()=>fromZodError,
                fromZodIssue: ()=>fromZodIssue,
                isValidationError: ()=>isValidationError,
                isValidationErrorLike: ()=>isValidationErrorLike,
                isZodErrorLike: ()=>isZodErrorLike,
                toValidationError: ()=>toValidationError
            });
            r.exports = __toCommonJS(d);
            function isZodErrorLike(r) {
                return r instanceof Error && r.name === "ZodError" && "issues" in r && Array.isArray(r.issues);
            }
            var c = class extends Error {
                name;
                details;
                constructor(r, e){
                    super(r, e);
                    this.name = "ZodValidationError";
                    this.details = getIssuesFromErrorOptions(e);
                }
                toString() {
                    return this.message;
                }
            };
            function getIssuesFromErrorOptions(r) {
                if (r) {
                    const e = r.cause;
                    if (isZodErrorLike(e)) {
                        return e.issues;
                    }
                }
                return [];
            }
            function isValidationError(r) {
                return r instanceof c;
            }
            function isValidationErrorLike(r) {
                return r instanceof Error && r.name === "ZodValidationError";
            }
            var f = __toESM(o(788));
            var p = __toESM(o(788));
            function isNonEmptyArray(r) {
                return r.length !== 0;
            }
            var l = /[$_\p{ID_Start}][$\u200c\u200d\p{ID_Continue}]*/u;
            function joinPath(r) {
                if (r.length === 1) {
                    return r[0].toString();
                }
                return r.reduce((r, e)=>{
                    if (typeof e === "number") {
                        return r + "[" + e.toString() + "]";
                    }
                    if (e.includes('"')) {
                        return r + '["' + escapeQuotes(e) + '"]';
                    }
                    if (!l.test(e)) {
                        return r + '["' + e + '"]';
                    }
                    const o = r.length === 0 ? "" : ".";
                    return r + o + e;
                }, "");
            }
            function escapeQuotes(r) {
                return r.replace(/"/g, '\\"');
            }
            var m = "; ";
            var g = 99;
            var E = "Validation error";
            var _ = ": ";
            var v = ", or ";
            function createMessageBuilder(r = {}) {
                const { issueSeparator: e = m, unionSeparator: o = v, prefixSeparator: t = _, prefix: s = E, includePath: n = true, maxIssuesInMessage: i = g } = r;
                return (r)=>{
                    const a = r.slice(0, i).map((r)=>getMessageFromZodIssue({
                            issue: r,
                            issueSeparator: e,
                            unionSeparator: o,
                            includePath: n
                        })).join(e);
                    return prefixMessage(a, s, t);
                };
            }
            function getMessageFromZodIssue(r) {
                const { issue: e, issueSeparator: o, unionSeparator: t, includePath: s } = r;
                if (e.code === p.ZodIssueCode.invalid_union) {
                    return e.unionErrors.reduce((r, e)=>{
                        const n = e.issues.map((r)=>getMessageFromZodIssue({
                                issue: r,
                                issueSeparator: o,
                                unionSeparator: t,
                                includePath: s
                            })).join(o);
                        if (!r.includes(n)) {
                            r.push(n);
                        }
                        return r;
                    }, []).join(t);
                }
                if (e.code === p.ZodIssueCode.invalid_arguments) {
                    return [
                        e.message,
                        ...e.argumentsError.issues.map((r)=>getMessageFromZodIssue({
                                issue: r,
                                issueSeparator: o,
                                unionSeparator: t,
                                includePath: s
                            }))
                    ].join(o);
                }
                if (e.code === p.ZodIssueCode.invalid_return_type) {
                    return [
                        e.message,
                        ...e.returnTypeError.issues.map((r)=>getMessageFromZodIssue({
                                issue: r,
                                issueSeparator: o,
                                unionSeparator: t,
                                includePath: s
                            }))
                    ].join(o);
                }
                if (s && isNonEmptyArray(e.path)) {
                    if (e.path.length === 1) {
                        const r = e.path[0];
                        if (typeof r === "number") {
                            return `${e.message} at index ${r}`;
                        }
                    }
                    return `${e.message} at "${joinPath(e.path)}"`;
                }
                return e.message;
            }
            function prefixMessage(r, e, o) {
                if (e !== null) {
                    if (r.length > 0) {
                        return [
                            e,
                            r
                        ].join(o);
                    }
                    return e;
                }
                if (r.length > 0) {
                    return r;
                }
                return E;
            }
            function fromZodIssue(r, e = {}) {
                const o = createMessageBuilderFromOptions(e);
                const t = o([
                    r
                ]);
                return new c(t, {
                    cause: new f.ZodError([
                        r
                    ])
                });
            }
            function createMessageBuilderFromOptions(r) {
                if ("messageBuilder" in r) {
                    return r.messageBuilder;
                }
                return createMessageBuilder(r);
            }
            var errorMap = (r, e)=>{
                const o = fromZodIssue({
                    ...r,
                    message: r.message ?? e.defaultError
                });
                return {
                    message: o.message
                };
            };
            function fromZodError(r, e = {}) {
                if (!isZodErrorLike(r)) {
                    throw new TypeError(`Invalid zodError param; expected instance of ZodError. Did you mean to use the "${fromError.name}" method instead?`);
                }
                return fromZodErrorWithoutRuntimeCheck(r, e);
            }
            function fromZodErrorWithoutRuntimeCheck(r, e = {}) {
                const o = r.errors;
                let t;
                if (isNonEmptyArray(o)) {
                    const r = createMessageBuilderFromOptions2(e);
                    t = r(o);
                } else {
                    t = r.message;
                }
                return new c(t, {
                    cause: r
                });
            }
            function createMessageBuilderFromOptions2(r) {
                if ("messageBuilder" in r) {
                    return r.messageBuilder;
                }
                return createMessageBuilder(r);
            }
            var toValidationError = (r = {})=>(e)=>{
                    if (isZodErrorLike(e)) {
                        return fromZodErrorWithoutRuntimeCheck(e, r);
                    }
                    if (e instanceof Error) {
                        return new c(e.message, {
                            cause: e
                        });
                    }
                    return new c("Unknown error");
                };
            function fromError(r, e = {}) {
                return toValidationError(e)(r);
            }
            0 && 0;
        },
        788: (r)=>{
            r.exports = __turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/compiled/zod/index.js [app-rsc] (ecmascript)");
        }
    };
    var e = {};
    function __nccwpck_require__(o) {
        var t = e[o];
        if (t !== undefined) {
            return t.exports;
        }
        var s = e[o] = {
            exports: {}
        };
        var n = true;
        try {
            r[o](s, s.exports, __nccwpck_require__);
            n = false;
        } finally{
            if (n) delete e[o];
        }
        return s.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/node_modules/next/dist/compiled/zod-validation-error") + "/";
    var o = __nccwpck_require__(452);
    module.exports = o;
})();
}),
"[project]/node_modules/next/dist/esm/lib/picocolors.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ISC License
// Copyright (c) 2021 Alexey Raspopov, Kostiantyn Denysov, Anton Verinov
// Permission to use, copy, modify, and/or distribute this software for any
// purpose with or without fee is hereby granted, provided that the above
// copyright notice and this permission notice appear in all copies.
// THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
// WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
// ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
// WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
// ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
// OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
//
// https://github.com/alexeyraspopov/picocolors/blob/b6261487e7b81aaab2440e397a356732cad9e342/picocolors.js#L1
__turbopack_context__.s([
    "bgBlack",
    ()=>bgBlack,
    "bgBlue",
    ()=>bgBlue,
    "bgCyan",
    ()=>bgCyan,
    "bgGreen",
    ()=>bgGreen,
    "bgMagenta",
    ()=>bgMagenta,
    "bgRed",
    ()=>bgRed,
    "bgWhite",
    ()=>bgWhite,
    "bgYellow",
    ()=>bgYellow,
    "black",
    ()=>black,
    "blue",
    ()=>blue,
    "bold",
    ()=>bold,
    "cyan",
    ()=>cyan,
    "dim",
    ()=>dim,
    "gray",
    ()=>gray,
    "green",
    ()=>green,
    "hidden",
    ()=>hidden,
    "inverse",
    ()=>inverse,
    "italic",
    ()=>italic,
    "magenta",
    ()=>magenta,
    "purple",
    ()=>purple,
    "red",
    ()=>red,
    "reset",
    ()=>reset,
    "strikethrough",
    ()=>strikethrough,
    "underline",
    ()=>underline,
    "white",
    ()=>white,
    "yellow",
    ()=>yellow
]);
var _globalThis;
const { env, stdout } = ((_globalThis = globalThis) == null ? void 0 : _globalThis.process) ?? {};
const enabled = env && !env.NO_COLOR && (env.FORCE_COLOR || (stdout == null ? void 0 : stdout.isTTY) && !env.CI && env.TERM !== 'dumb');
const replaceClose = (str, close, replace, index)=>{
    const start = str.substring(0, index) + replace;
    const end = str.substring(index + close.length);
    const nextIndex = end.indexOf(close);
    return ~nextIndex ? start + replaceClose(end, close, replace, nextIndex) : start + end;
};
const formatter = (open, close, replace = open)=>{
    if (!enabled) return String;
    return (input)=>{
        const string = '' + input;
        const index = string.indexOf(close, open.length);
        return ~index ? open + replaceClose(string, close, replace, index) + close : open + string + close;
    };
};
const reset = enabled ? (s)=>`\x1b[0m${s}\x1b[0m` : String;
const bold = formatter('\x1b[1m', '\x1b[22m', '\x1b[22m\x1b[1m');
const dim = formatter('\x1b[2m', '\x1b[22m', '\x1b[22m\x1b[2m');
const italic = formatter('\x1b[3m', '\x1b[23m');
const underline = formatter('\x1b[4m', '\x1b[24m');
const inverse = formatter('\x1b[7m', '\x1b[27m');
const hidden = formatter('\x1b[8m', '\x1b[28m');
const strikethrough = formatter('\x1b[9m', '\x1b[29m');
const black = formatter('\x1b[30m', '\x1b[39m');
const red = formatter('\x1b[31m', '\x1b[39m');
const green = formatter('\x1b[32m', '\x1b[39m');
const yellow = formatter('\x1b[33m', '\x1b[39m');
const blue = formatter('\x1b[34m', '\x1b[39m');
const magenta = formatter('\x1b[35m', '\x1b[39m');
const purple = formatter('\x1b[38;2;173;127;168m', '\x1b[39m');
const cyan = formatter('\x1b[36m', '\x1b[39m');
const white = formatter('\x1b[37m', '\x1b[39m');
const gray = formatter('\x1b[90m', '\x1b[39m');
const bgBlack = formatter('\x1b[40m', '\x1b[49m');
const bgRed = formatter('\x1b[41m', '\x1b[49m');
const bgGreen = formatter('\x1b[42m', '\x1b[49m');
const bgYellow = formatter('\x1b[43m', '\x1b[49m');
const bgBlue = formatter('\x1b[44m', '\x1b[49m');
const bgMagenta = formatter('\x1b[45m', '\x1b[49m');
const bgCyan = formatter('\x1b[46m', '\x1b[49m');
const bgWhite = formatter('\x1b[47m', '\x1b[49m'); //# sourceMappingURL=picocolors.js.map
}),
"[project]/node_modules/next/dist/esm/server/lib/lru-cache.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Node in the doubly-linked list used for LRU tracking.
 * Each node represents a cache entry with bidirectional pointers.
 */ __turbopack_context__.s([
    "LRUCache",
    ()=>LRUCache
]);
class LRUNode {
    constructor(key, data, size){
        this.prev = null;
        this.next = null;
        this.key = key;
        this.data = data;
        this.size = size;
    }
}
/**
 * Sentinel node used for head/tail boundaries.
 * These nodes don't contain actual cache data but simplify list operations.
 */ class SentinelNode {
    constructor(){
        this.prev = null;
        this.next = null;
    }
}
class LRUCache {
    constructor(maxSize, calculateSize){
        this.cache = new Map();
        this.totalSize = 0;
        this.maxSize = maxSize;
        this.calculateSize = calculateSize;
        // Create sentinel nodes to simplify doubly-linked list operations
        // HEAD <-> TAIL (empty list)
        this.head = new SentinelNode();
        this.tail = new SentinelNode();
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }
    /**
   * Adds a node immediately after the head (marks as most recently used).
   * Used when inserting new items or when an item is accessed.
   * PRECONDITION: node must be disconnected (prev/next should be null)
   */ addToHead(node) {
        node.prev = this.head;
        node.next = this.head.next;
        // head.next is always non-null (points to tail or another node)
        this.head.next.prev = node;
        this.head.next = node;
    }
    /**
   * Removes a node from its current position in the doubly-linked list.
   * Updates the prev/next pointers of adjacent nodes to maintain list integrity.
   * PRECONDITION: node must be connected (prev/next are non-null)
   */ removeNode(node) {
        // Connected nodes always have non-null prev/next
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }
    /**
   * Moves an existing node to the head position (marks as most recently used).
   * This is the core LRU operation - accessed items become most recent.
   */ moveToHead(node) {
        this.removeNode(node);
        this.addToHead(node);
    }
    /**
   * Removes and returns the least recently used node (the one before tail).
   * This is called during eviction when the cache exceeds capacity.
   * PRECONDITION: cache is not empty (ensured by caller)
   */ removeTail() {
        const lastNode = this.tail.prev;
        // tail.prev is always non-null and always LRUNode when cache is not empty
        this.removeNode(lastNode);
        return lastNode;
    }
    /**
   * Sets a key-value pair in the cache.
   * If the key exists, updates the value and moves to head.
   * If new, adds at head and evicts from tail if necessary.
   *
   * Time Complexity:
   * - O(1) for uniform item sizes
   * - O(k) where k is the number of items evicted (can be O(N) for variable sizes)
   */ set(key, value) {
        const size = (this.calculateSize == null ? void 0 : this.calculateSize.call(this, value)) ?? 1;
        if (size > this.maxSize) {
            console.warn('Single item size exceeds maxSize');
            return;
        }
        const existing = this.cache.get(key);
        if (existing) {
            // Update existing node: adjust size and move to head (most recent)
            existing.data = value;
            this.totalSize = this.totalSize - existing.size + size;
            existing.size = size;
            this.moveToHead(existing);
        } else {
            // Add new node at head (most recent position)
            const newNode = new LRUNode(key, value, size);
            this.cache.set(key, newNode);
            this.addToHead(newNode);
            this.totalSize += size;
        }
        // Evict least recently used items until under capacity
        while(this.totalSize > this.maxSize && this.cache.size > 0){
            const tail = this.removeTail();
            this.cache.delete(tail.key);
            this.totalSize -= tail.size;
        }
    }
    /**
   * Checks if a key exists in the cache.
   * This is a pure query operation - does NOT update LRU order.
   *
   * Time Complexity: O(1)
   */ has(key) {
        return this.cache.has(key);
    }
    /**
   * Retrieves a value by key and marks it as most recently used.
   * Moving to head maintains the LRU property for future evictions.
   *
   * Time Complexity: O(1)
   */ get(key) {
        const node = this.cache.get(key);
        if (!node) return undefined;
        // Mark as most recently used by moving to head
        this.moveToHead(node);
        return node.data;
    }
    /**
   * Returns an iterator over the cache entries. The order is outputted in the
   * order of most recently used to least recently used.
   */ *[Symbol.iterator]() {
        let current = this.head.next;
        while(current && current !== this.tail){
            // Between head and tail, current is always LRUNode
            const node = current;
            yield [
                node.key,
                node.data
            ];
            current = current.next;
        }
    }
    /**
   * Removes a specific key from the cache.
   * Updates both the hash map and doubly-linked list.
   *
   * Time Complexity: O(1)
   */ remove(key) {
        const node = this.cache.get(key);
        if (!node) return;
        this.removeNode(node);
        this.cache.delete(key);
        this.totalSize -= node.size;
    }
    /**
   * Returns the number of items in the cache.
   */ get size() {
        return this.cache.size;
    }
    /**
   * Returns the current total size of all cached items.
   * This uses the custom size calculation if provided.
   */ get currentSize() {
        return this.totalSize;
    }
} //# sourceMappingURL=lru-cache.js.map
}),
"[project]/node_modules/next/dist/esm/build/output/log.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "bootstrap",
    ()=>bootstrap,
    "error",
    ()=>error,
    "errorOnce",
    ()=>errorOnce,
    "event",
    ()=>event,
    "info",
    ()=>info,
    "prefixes",
    ()=>prefixes,
    "ready",
    ()=>ready,
    "trace",
    ()=>trace,
    "wait",
    ()=>wait,
    "warn",
    ()=>warn,
    "warnOnce",
    ()=>warnOnce
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$picocolors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/lib/picocolors.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$lru$2d$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/lib/lru-cache.js [app-rsc] (ecmascript)");
;
;
const prefixes = {
    wait: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$picocolors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["white"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$picocolors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bold"])('○')),
    error: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$picocolors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["red"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$picocolors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bold"])('⨯')),
    warn: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$picocolors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["yellow"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$picocolors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bold"])('⚠')),
    ready: '▲',
    info: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$picocolors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["white"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$picocolors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bold"])(' ')),
    event: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$picocolors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["green"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$picocolors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bold"])('✓')),
    trace: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$picocolors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["magenta"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$picocolors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bold"])('»'))
};
const LOGGING_METHOD = {
    log: 'log',
    warn: 'warn',
    error: 'error'
};
function prefixedLog(prefixType, ...message) {
    if ((message[0] === '' || message[0] === undefined) && message.length === 1) {
        message.shift();
    }
    const consoleMethod = prefixType in LOGGING_METHOD ? LOGGING_METHOD[prefixType] : 'log';
    const prefix = prefixes[prefixType];
    // If there's no message, don't print the prefix but a new line
    if (message.length === 0) {
        console[consoleMethod]('');
    } else {
        // Ensure if there's ANSI escape codes it's concatenated into one string.
        // Chrome DevTool can only handle color if it's in one string.
        if (message.length === 1 && typeof message[0] === 'string') {
            console[consoleMethod](' ' + prefix + ' ' + message[0]);
        } else {
            console[consoleMethod](' ' + prefix, ...message);
        }
    }
}
function bootstrap(...message) {
    // logging format: ' <prefix> <message>'
    // e.g. ' ✓ Compiled successfully'
    // Add spaces to align with the indent of other logs
    console.log('   ' + message.join(' '));
}
function wait(...message) {
    prefixedLog('wait', ...message);
}
function error(...message) {
    prefixedLog('error', ...message);
}
function warn(...message) {
    prefixedLog('warn', ...message);
}
function ready(...message) {
    prefixedLog('ready', ...message);
}
function info(...message) {
    prefixedLog('info', ...message);
}
function event(...message) {
    prefixedLog('event', ...message);
}
function trace(...message) {
    prefixedLog('trace', ...message);
}
const warnOnceCache = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$lru$2d$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LRUCache"](10000, (value)=>value.length);
function warnOnce(...message) {
    const key = message.join(' ');
    if (!warnOnceCache.has(key)) {
        warnOnceCache.set(key, key);
        warn(...message);
    }
}
const errorOnceCache = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$lru$2d$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LRUCache"](10000, (value)=>value.length);
function errorOnce(...message) {
    const key = message.join(' ');
    if (!errorOnceCache.has(key)) {
        errorOnceCache.set(key, key);
        error(...message);
    }
} //# sourceMappingURL=log.js.map
}),
"[project]/node_modules/next/dist/esm/shared/lib/zod.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatZodError",
    ()=>formatZodError,
    "normalizeZodErrors",
    ()=>normalizeZodErrors,
    "reportZodError",
    ()=>reportZodError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Transferências/elos-creative/node_modules/next/dist/compiled/zod/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2d$validation$2d$error$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/zod-validation-error/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$output$2f$log$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/build/output/log.js [app-rsc] (ecmascript)");
;
;
;
function processZodErrorMessage(issue) {
    let message = issue.message;
    let path;
    if (issue.path.length > 0) {
        if (issue.path.length === 1) {
            const identifier = issue.path[0];
            if (typeof identifier === 'number') {
                // The first identifier inside path is a number
                path = `index ${identifier}`;
            } else {
                path = `"${identifier}"`;
            }
        } else {
            // joined path to be shown in the error message
            path = `"${issue.path.reduce((acc, cur)=>{
                if (typeof cur === 'number') {
                    // array index
                    return `${acc}[${cur}]`;
                }
                if (cur.includes('"')) {
                    // escape quotes
                    return `${acc}["${cur.replaceAll('"', '\\"')}"]`;
                }
                // dot notation
                const separator = acc.length === 0 ? '' : '.';
                return acc + separator + cur;
            }, '')}"`;
        }
    } else {
        path = '';
    }
    if (issue.code === 'invalid_type' && issue.received === __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].undefined) {
        // Missing key in object.
        return `${path} is missing, expected ${issue.expected}`;
    }
    if (issue.code === 'invalid_enum_value') {
        // Remove "Invalid enum value" prefix from zod default error message
        return `Expected ${__TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["util"].joinValues(issue.options)}, received '${issue.received}' at ${path}`;
    }
    return message + (path ? ` at ${path}` : '');
}
function normalizeZodErrors(error) {
    return error.issues.flatMap((issue)=>{
        const issues = [
            {
                issue,
                message: processZodErrorMessage(issue)
            }
        ];
        if ('unionErrors' in issue) {
            for (const unionError of issue.unionErrors){
                issues.push(...normalizeZodErrors(unionError));
            }
        }
        return issues;
    });
}
function formatZodError(prefix, error) {
    return Object.defineProperty(new Error((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2d$validation$2d$error$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fromZodError"])(error, {
        prefix: prefix
    }).toString()), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
}
function reportZodError(prefix, error) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$output$2f$log$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["error"](formatZodError(prefix, error).message);
} //# sourceMappingURL=zod.js.map
}),
"[project]/node_modules/next/dist/esm/build/segment-config/app/app-segment-config.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppSegmentConfigSchemaKeys",
    ()=>AppSegmentConfigSchemaKeys,
    "parseAppSegmentConfig",
    ()=>parseAppSegmentConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Transferências/elos-creative/node_modules/next/dist/compiled/zod/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$zod$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/zod.js [app-rsc] (ecmascript)");
;
;
const CookieSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string(),
    value: __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string(),
    httpOnly: __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].boolean().optional(),
    path: __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().optional()
}).strict();
const RuntimeSampleSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    cookies: __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].array(CookieSchema).optional(),
    headers: __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].tuple([
        __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string(),
        __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string()
    ])).optional(),
    params: __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].union([
        __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string(),
        __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string())
    ])).optional(),
    searchParams: __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].union([
        __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string(),
        __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string()),
        __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].undefined()
    ])).optional()
}).strict();
const StaticPrefetchSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    mode: __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].literal('static'),
    from: __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string()).optional(),
    expectUnableToVerify: __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].boolean().optional()
}).strict();
const RuntimePrefetchSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    mode: __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].literal('runtime'),
    samples: __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].array(RuntimeSampleSchema).min(1),
    from: __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string()).optional(),
    expectUnableToVerify: __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].boolean().optional()
}).strict();
const PrefetchSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].discriminatedUnion('mode', [
    StaticPrefetchSchema,
    RuntimePrefetchSchema
]);
/**
 * The schema for configuration for a page.
 */ const AppSegmentConfigSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    /**
   * The number of seconds to revalidate the page or false to disable revalidation.
   */ revalidate: __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].union([
        __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].number().int().nonnegative(),
        __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].literal(false)
    ]).optional(),
    /**
   * Whether the page supports dynamic parameters.
   */ dynamicParams: __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].boolean().optional(),
    /**
   * The dynamic behavior of the page.
   */ dynamic: __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].enum([
        'auto',
        'error',
        'force-static',
        'force-dynamic'
    ]).optional(),
    /**
   * The caching behavior of the page.
   */ fetchCache: __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].enum([
        'auto',
        'default-cache',
        'only-cache',
        'force-cache',
        'force-no-store',
        'default-no-store',
        'only-no-store'
    ]).optional(),
    /**
   * How this segment should be prefetched.
   */ unstable_prefetch: PrefetchSchema.optional(),
    /**
   * The preferred region for the page.
   */ preferredRegion: __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].union([
        __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string(),
        __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string())
    ]).optional(),
    /**
   * The runtime to use for the page.
   */ runtime: __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].enum([
        'edge',
        'nodejs'
    ]).optional(),
    /**
   * The maximum duration for the page in seconds.
   */ maxDuration: __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].number().int().nonnegative().optional()
});
function parseAppSegmentConfig(data, route) {
    const parsed = AppSegmentConfigSchema.safeParse(data, {
        errorMap: (issue, ctx)=>{
            if (issue.path.length === 1) {
                switch(issue.path[0]){
                    case 'revalidate':
                        {
                            return {
                                message: `Invalid revalidate value ${JSON.stringify(ctx.data)} on "${route}", must be a non-negative number or false`
                            };
                        }
                    case 'unstable_prefetch':
                        {
                            return {
                                // @TODO replace this link with a link to the docs when they are written
                                message: `Invalid unstable_prefetch value ${JSON.stringify(ctx.data)} on "${route}", must be an object with a mode of "static" or "runtime". Read more at https://nextjs.org/docs/messages/invalid-prefetch-configuration`
                            };
                        }
                    default:
                }
            }
            return {
                message: ctx.defaultError
            };
        }
    });
    if (!parsed.success) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$zod$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatZodError"])(`Invalid segment configuration options detected for "${route}". Read more at https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config`, parsed.error);
    }
    return parsed.data;
}
const AppSegmentConfigSchemaKeys = AppSegmentConfigSchema.keyof().options; //# sourceMappingURL=app-segment-config.js.map
}),
"[project]/node_modules/next/dist/esm/shared/lib/invariant-error.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InvariantError",
    ()=>InvariantError
]);
class InvariantError extends Error {
    constructor(message, options){
        super(`Invariant: ${message.endsWith('.') ? message : message + '.'} This is a bug in Next.js.`, options);
        this.name = 'InvariantError';
    }
} //# sourceMappingURL=invariant-error.js.map
}),
"[project]/node_modules/next/dist/esm/server/route-modules/checks.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isAppPageRouteModule",
    ()=>isAppPageRouteModule,
    "isAppRouteRouteModule",
    ()=>isAppRouteRouteModule,
    "isPagesAPIRouteModule",
    ()=>isPagesAPIRouteModule,
    "isPagesRouteModule",
    ()=>isPagesRouteModule
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/route-kind.js [app-rsc] (ecmascript)");
;
function isAppRouteRouteModule(routeModule) {
    return routeModule.definition.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RouteKind"].APP_ROUTE;
}
function isAppPageRouteModule(routeModule) {
    return routeModule.definition.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RouteKind"].APP_PAGE;
}
function isPagesRouteModule(routeModule) {
    return routeModule.definition.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RouteKind"].PAGES;
}
function isPagesAPIRouteModule(routeModule) {
    return routeModule.definition.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RouteKind"].PAGES_API;
} //# sourceMappingURL=checks.js.map
}),
"[project]/node_modules/next/dist/esm/shared/lib/server-reference-info.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Extracts info about the server reference for the given server reference ID by
 * parsing the first byte of the hex-encoded ID.
 *
 * ```
 * Bit positions: [7]      [6] [5] [4] [3] [2] [1]  [0]
 * Bits:          typeBit  argMask                  restArgs
 * ```
 *
 * If the `typeBit` is `1` the server reference represents a `"use cache"`
 * function, otherwise a server action.
 *
 * The `argMask` encodes whether the function uses the argument at the
 * respective position.
 *
 * The `restArgs` bit indicates whether the function uses a rest parameter. It's
 * also set to 1 if the function has more than 6 args.
 *
 * @param id hex-encoded server reference ID
 */ __turbopack_context__.s([
    "extractInfoFromServerReferenceId",
    ()=>extractInfoFromServerReferenceId,
    "omitUnusedArgs",
    ()=>omitUnusedArgs
]);
function extractInfoFromServerReferenceId(id) {
    const infoByte = parseInt(id.slice(0, 2), 16);
    const typeBit = infoByte >> 7 & 0x1;
    const argMask = infoByte >> 1 & 0x3f;
    const restArgs = infoByte & 0x1;
    const usedArgs = Array(6);
    for(let index = 0; index < 6; index++){
        const bitPosition = 5 - index;
        const bit = argMask >> bitPosition & 0x1;
        usedArgs[index] = bit === 1;
    }
    return {
        type: typeBit === 1 ? 'use-cache' : 'server-action',
        usedArgs: usedArgs,
        hasRestArgs: restArgs === 1
    };
}
function omitUnusedArgs(args, info) {
    const filteredArgs = new Array(args.length);
    for(let index = 0; index < args.length; index++){
        if (index < 6 && info.usedArgs[index] || // This assumes that the server reference info byte has the restArgs bit
        // set to 1 if there are more than 6 args.
        index >= 6 && info.hasRestArgs) {
            filteredArgs[index] = args[index];
        }
    }
    return filteredArgs;
} //# sourceMappingURL=server-reference-info.js.map
}),
"[project]/node_modules/next/dist/esm/lib/client-and-server-references.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getUseCacheFunctionInfo",
    ()=>getUseCacheFunctionInfo,
    "isClientReference",
    ()=>isClientReference,
    "isServerReference",
    ()=>isServerReference,
    "isUseCacheFunction",
    ()=>isUseCacheFunction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$server$2d$reference$2d$info$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/server-reference-info.js [app-rsc] (ecmascript)");
;
function isServerReference(value) {
    return value.$$typeof === Symbol.for('react.server.reference');
}
function isUseCacheFunction(value) {
    if (!isServerReference(value)) {
        return false;
    }
    const { type } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$server$2d$reference$2d$info$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["extractInfoFromServerReferenceId"])(value.$$id);
    return type === 'use-cache';
}
function getUseCacheFunctionInfo(value) {
    if (!isServerReference(value)) {
        return null;
    }
    const info = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$server$2d$reference$2d$info$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["extractInfoFromServerReferenceId"])(value.$$id);
    return info.type === 'use-cache' ? info : null;
}
function isClientReference(mod) {
    const defaultExport = (mod == null ? void 0 : mod.default) || mod;
    return (defaultExport == null ? void 0 : defaultExport.$$typeof) === Symbol.for('react.client.reference');
} //# sourceMappingURL=client-and-server-references.js.map
}),
"[project]/node_modules/next/dist/esm/shared/lib/page-path/ensure-leading-slash.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * For a given page path, this function ensures that there is a leading slash.
 * If there is not a leading slash, one is added, otherwise it is noop.
 */ __turbopack_context__.s([
    "ensureLeadingSlash",
    ()=>ensureLeadingSlash
]);
function ensureLeadingSlash(path) {
    return path.startsWith('/') ? path : `/${path}`;
} //# sourceMappingURL=ensure-leading-slash.js.map
}),
"[project]/node_modules/next/dist/esm/shared/lib/segment.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_SEGMENT_KEY",
    ()=>DEFAULT_SEGMENT_KEY,
    "PAGE_SEGMENT_KEY",
    ()=>PAGE_SEGMENT_KEY,
    "addSearchParamsIfPageSegment",
    ()=>addSearchParamsIfPageSegment,
    "computeSelectedLayoutSegment",
    ()=>computeSelectedLayoutSegment,
    "getSegmentValue",
    ()=>getSegmentValue,
    "getSelectedLayoutSegmentPath",
    ()=>getSelectedLayoutSegmentPath,
    "isGroupSegment",
    ()=>isGroupSegment,
    "isParallelRouteSegment",
    ()=>isParallelRouteSegment
]);
function getSegmentValue(segment) {
    return Array.isArray(segment) ? segment[1] : segment;
}
function isGroupSegment(segment) {
    // Use array[0] for performant purpose
    return segment[0] === '(' && segment.endsWith(')');
}
function isParallelRouteSegment(segment) {
    return segment.startsWith('@') && segment !== '@children';
}
function addSearchParamsIfPageSegment(segment, searchParams) {
    const isPageSegment = segment.includes(PAGE_SEGMENT_KEY);
    if (isPageSegment) {
        const stringifiedQuery = JSON.stringify(searchParams);
        return stringifiedQuery !== '{}' ? PAGE_SEGMENT_KEY + '?' + stringifiedQuery : PAGE_SEGMENT_KEY;
    }
    return segment;
}
function computeSelectedLayoutSegment(segments, parallelRouteKey) {
    if (!segments || segments.length === 0) {
        return null;
    }
    // For 'children', use first segment; for other parallel routes, use last segment
    const rawSegment = parallelRouteKey === 'children' ? segments[0] : segments[segments.length - 1];
    // If the default slot is showing, return null since it's not technically "selected" (it's a fallback)
    // Returning an internal value like `__DEFAULT__` would be confusing
    return rawSegment === DEFAULT_SEGMENT_KEY ? null : rawSegment;
}
function getSelectedLayoutSegmentPath(tree, parallelRouteKey, first = true, segmentPath = []) {
    let node;
    if (first) {
        // Use the provided parallel route key on the first parallel route
        node = tree[1][parallelRouteKey];
    } else {
        // After first parallel route prefer children, if there's no children pick the first parallel route.
        const parallelRoutes = tree[1];
        node = parallelRoutes.children ?? Object.values(parallelRoutes)[0];
    }
    if (!node) return segmentPath;
    const segment = node[0];
    let segmentValue = getSegmentValue(segment);
    if (!segmentValue || segmentValue.startsWith(PAGE_SEGMENT_KEY)) {
        return segmentPath;
    }
    segmentPath.push(segmentValue);
    return getSelectedLayoutSegmentPath(node, parallelRouteKey, false, segmentPath);
}
const PAGE_SEGMENT_KEY = '__PAGE__';
const DEFAULT_SEGMENT_KEY = '__DEFAULT__'; //# sourceMappingURL=segment.js.map
}),
"[project]/node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalizeAppPath",
    ()=>normalizeAppPath,
    "normalizeRscURL",
    ()=>normalizeRscURL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$page$2d$path$2f$ensure$2d$leading$2d$slash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/page-path/ensure-leading-slash.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$segment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/segment.js [app-rsc] (ecmascript)");
;
;
function normalizeAppPath(route) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$page$2d$path$2f$ensure$2d$leading$2d$slash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureLeadingSlash"])(route.split('/').reduce((pathname, segment, index, segments)=>{
        // Empty segments are ignored.
        if (!segment) {
            return pathname;
        }
        // Groups are ignored.
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$segment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isGroupSegment"])(segment)) {
            return pathname;
        }
        // Parallel segments are ignored.
        if (segment[0] === '@') {
            return pathname;
        }
        // The last segment (if it's a leaf) should be ignored.
        if ((segment === 'page' || segment === 'route') && index === segments.length - 1) {
            return pathname;
        }
        return `${pathname}/${segment}`;
    }, ''));
}
function normalizeRscURL(url) {
    return url.replace(/\.rsc($|\?)/, '$1');
} //# sourceMappingURL=app-paths.js.map
}),
"[project]/node_modules/next/dist/esm/shared/lib/router/utils/interception-routes.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "INTERCEPTION_ROUTE_MARKERS",
    ()=>INTERCEPTION_ROUTE_MARKERS,
    "extractInterceptionRouteInformation",
    ()=>extractInterceptionRouteInformation,
    "isInterceptionRouteAppPath",
    ()=>isInterceptionRouteAppPath
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js [app-rsc] (ecmascript)");
;
const INTERCEPTION_ROUTE_MARKERS = [
    '(..)(..)',
    '(.)',
    '(..)',
    '(...)'
];
function isInterceptionRouteAppPath(path) {
    // TODO-APP: add more serious validation
    return path.split('/').find((segment)=>INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m))) !== undefined;
}
function extractInterceptionRouteInformation(path) {
    let interceptingRoute;
    let marker;
    let interceptedRoute;
    for (const segment of path.split('/')){
        marker = INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m));
        if (marker) {
            ;
            [interceptingRoute, interceptedRoute] = path.split(marker, 2);
            break;
        }
    }
    if (!interceptingRoute || !marker || !interceptedRoute) {
        throw Object.defineProperty(new Error(`Invalid interception route: ${path}. Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>`), "__NEXT_ERROR_CODE", {
            value: "E269",
            enumerable: false,
            configurable: true
        });
    }
    interceptingRoute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeAppPath"])(interceptingRoute) // normalize the path, e.g. /(blog)/feed -> /feed
    ;
    switch(marker){
        case '(.)':
            // (.) indicates that we should match with sibling routes, so we just need to append the intercepted route to the intercepting route
            if (interceptingRoute === '/') {
                interceptedRoute = `/${interceptedRoute}`;
            } else {
                interceptedRoute = interceptingRoute + '/' + interceptedRoute;
            }
            break;
        case '(..)':
            // (..) indicates that we should match at one level up, so we need to remove the last segment of the intercepting route
            if (interceptingRoute === '/') {
                throw Object.defineProperty(new Error(`Invalid interception route: ${path}. Cannot use (..) marker at the root level, use (.) instead.`), "__NEXT_ERROR_CODE", {
                    value: "E207",
                    enumerable: false,
                    configurable: true
                });
            }
            interceptedRoute = interceptingRoute.split('/').slice(0, -1).concat(interceptedRoute).join('/');
            break;
        case '(...)':
            // (...) will match the route segment in the root directory, so we need to use the root directory to prepend the intercepted route
            interceptedRoute = '/' + interceptedRoute;
            break;
        case '(..)(..)':
            // (..)(..) indicates that we should match at two levels up, so we need to remove the last two segments of the intercepting route
            const splitInterceptingRoute = interceptingRoute.split('/');
            if (splitInterceptingRoute.length <= 2) {
                throw Object.defineProperty(new Error(`Invalid interception route: ${path}. Cannot use (..)(..) marker at the root level or one level up.`), "__NEXT_ERROR_CODE", {
                    value: "E486",
                    enumerable: false,
                    configurable: true
                });
            }
            interceptedRoute = splitInterceptingRoute.slice(0, -2).concat(interceptedRoute).join('/');
            break;
        default:
            throw Object.defineProperty(new Error('Invariant: unexpected marker'), "__NEXT_ERROR_CODE", {
                value: "E112",
                enumerable: false,
                configurable: true
            });
    }
    return {
        interceptingRoute,
        interceptedRoute
    };
} //# sourceMappingURL=interception-routes.js.map
}),
"[project]/node_modules/next/dist/esm/shared/lib/router/utils/get-segment-param.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getParamProperties",
    ()=>getParamProperties,
    "getSegmentParam",
    ()=>getSegmentParam,
    "isCatchAll",
    ()=>isCatchAll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$routes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/router/utils/interception-routes.js [app-rsc] (ecmascript)");
;
function getSegmentParam(segment) {
    const interceptionMarker = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$routes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INTERCEPTION_ROUTE_MARKERS"].find((marker)=>segment.startsWith(marker));
    // if an interception marker is part of the path segment, we need to jump ahead
    // to the relevant portion for param parsing
    if (interceptionMarker) {
        segment = segment.slice(interceptionMarker.length);
    }
    if (segment.startsWith('[[...') && segment.endsWith(']]')) {
        return {
            // TODO-APP: Optional catchall does not currently work with parallel routes,
            // so for now aren't handling a potential interception marker.
            type: 'optional-catchall',
            param: segment.slice(5, -2)
        };
    }
    if (segment.startsWith('[...') && segment.endsWith(']')) {
        return {
            type: interceptionMarker ? `catchall-intercepted-${interceptionMarker}` : 'catchall',
            param: segment.slice(4, -1)
        };
    }
    if (segment.startsWith('[') && segment.endsWith(']')) {
        return {
            type: interceptionMarker ? `dynamic-intercepted-${interceptionMarker}` : 'dynamic',
            param: segment.slice(1, -1)
        };
    }
    return null;
}
function isCatchAll(type) {
    return type === 'catchall' || type === 'catchall-intercepted-(..)(..)' || type === 'catchall-intercepted-(.)' || type === 'catchall-intercepted-(..)' || type === 'catchall-intercepted-(...)' || type === 'optional-catchall';
}
function getParamProperties(paramType) {
    let repeat = false;
    let optional = false;
    switch(paramType){
        case 'catchall':
        case 'catchall-intercepted-(..)(..)':
        case 'catchall-intercepted-(.)':
        case 'catchall-intercepted-(..)':
        case 'catchall-intercepted-(...)':
            repeat = true;
            break;
        case 'optional-catchall':
            repeat = true;
            optional = true;
            break;
        case 'dynamic':
        case 'dynamic-intercepted-(..)(..)':
        case 'dynamic-intercepted-(.)':
        case 'dynamic-intercepted-(..)':
        case 'dynamic-intercepted-(...)':
            break;
        default:
            paramType;
    }
    return {
        repeat,
        optional
    };
} //# sourceMappingURL=get-segment-param.js.map
}),
"[project]/node_modules/next/dist/esm/server/lib/app-dir-module.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getComponentTypeModule",
    ()=>getComponentTypeModule,
    "getLayoutOrPageModule",
    ()=>getLayoutOrPageModule
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$segment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/segment.js [app-rsc] (ecmascript)");
;
async function getLayoutOrPageModule(loaderTree) {
    const { layout, page, defaultPage } = loaderTree[2];
    const isLayout = typeof layout !== 'undefined';
    const isPage = typeof page !== 'undefined';
    const isDefaultPage = typeof defaultPage !== 'undefined' && loaderTree[0] === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$segment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DEFAULT_SEGMENT_KEY"];
    let mod = undefined;
    let modType = undefined;
    let filePath = undefined;
    if (isLayout) {
        mod = await layout[0]();
        modType = 'layout';
        filePath = layout[1];
    } else if (isPage) {
        mod = await page[0]();
        modType = 'page';
        filePath = page[1];
    } else if (isDefaultPage) {
        mod = await defaultPage[0]();
        modType = 'page';
        filePath = defaultPage[1];
    }
    return {
        mod,
        modType,
        filePath
    };
}
async function getComponentTypeModule(loaderTree, moduleType) {
    const { [moduleType]: module } = loaderTree[2];
    if (typeof module !== 'undefined') {
        return await module[0]();
    }
    return undefined;
} //# sourceMappingURL=app-dir-module.js.map
}),
"[project]/node_modules/next/dist/esm/build/static-paths/utils.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Encodes a parameter value using the provided encoder.
 *
 * @param value - The value to encode.
 * @param encoder - The encoder to use.
 * @returns The encoded value.
 */ __turbopack_context__.s([
    "createFallbackRouteParam",
    ()=>createFallbackRouteParam,
    "encodeParam",
    ()=>encodeParam,
    "normalizePathname",
    ()=>normalizePathname
]);
function encodeParam(value, encoder) {
    let replaceValue;
    if (Array.isArray(value)) {
        replaceValue = value.map(encoder).join('/');
    } else {
        replaceValue = encoder(value);
    }
    return replaceValue;
}
function normalizePathname(pathname) {
    return pathname.replace(/\\/g, '/').replace(/(?!^)\/$/, '');
}
function createFallbackRouteParam(paramName, paramType, isParallelRouteParam) {
    return {
        paramName,
        paramType,
        isParallelRouteParam
    };
} //# sourceMappingURL=utils.js.map
}),
"[project]/node_modules/next/dist/esm/build/segment-config/app/app-segments.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "collectFallbackRouteParams",
    ()=>collectFallbackRouteParams,
    "collectSegments",
    ()=>collectSegments
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$segment$2d$config$2f$app$2f$app$2d$segment$2d$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/build/segment-config/app/app-segment-config.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/invariant-error.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$checks$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/route-modules/checks.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$client$2d$and$2d$server$2d$references$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/lib/client-and-server-references.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$segment$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/router/utils/get-segment-param.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$app$2d$dir$2d$module$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/lib/app-dir-module.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$segment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/segment.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$static$2d$paths$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/build/static-paths/utils.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
/**
 * Parses the app config and attaches it to the segment.
 */ function attach(segment, userland, route) {
    // If the userland is not an object, then we can't do anything with it.
    if (typeof userland !== 'object' || userland === null) {
        return;
    }
    // Try to parse the application configuration.
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$segment$2d$config$2f$app$2f$app$2d$segment$2d$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseAppSegmentConfig"])(userland, route);
    // If there was any keys on the config, then attach it to the segment.
    if (Object.keys(config).length > 0) {
        segment.config = config;
    }
    if ('generateStaticParams' in userland && typeof userland.generateStaticParams === 'function') {
        var _segment_config;
        segment.generateStaticParams = userland.generateStaticParams;
        // Validate that `generateStaticParams` makes sense in this context.
        if (((_segment_config = segment.config) == null ? void 0 : _segment_config.runtime) === 'edge') {
            throw Object.defineProperty(new Error('Edge runtime is not supported with `generateStaticParams`.'), "__NEXT_ERROR_CODE", {
                value: "E502",
                enumerable: false,
                configurable: true
            });
        }
    }
}
/**
 * Walks the loader tree and collects the generate parameters for each segment.
 *
 * @param routeModule the app page route module
 * @returns the segments for the app page route module
 */ async function collectAppPageSegments(routeModule) {
    // We keep track of unique segments, since with parallel routes, it's possible
    // to see the same segment multiple times.
    const uniqueSegments = new Map();
    const queue = [
        [
            routeModule.userland.loaderTree,
            [],
            false
        ]
    ];
    while(queue.length > 0){
        const [loaderTree, currentSegments, isParallelRouteSegment] = queue.shift();
        const [name, parallelRoutes] = loaderTree;
        // Process current node
        const { mod: userland, filePath } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$app$2d$dir$2d$module$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLayoutOrPageModule"])(loaderTree);
        const isClientComponent = userland && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$client$2d$and$2d$server$2d$references$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isClientReference"])(userland);
        const { param: paramName, type: paramType } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$segment$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSegmentParam"])(name) ?? {};
        const segment = {
            name,
            paramName,
            paramType,
            filePath,
            config: undefined,
            isDynamicSegment: !!paramName,
            generateStaticParams: undefined,
            isParallelRouteSegment
        };
        // Only server components can have app segment configurations
        if (!isClientComponent) {
            attach(segment, userland, routeModule.definition.pathname);
        }
        // Create a unique key for the segment
        const segmentKey = getSegmentKey(segment);
        if (!uniqueSegments.has(segmentKey)) {
            uniqueSegments.set(segmentKey, segment);
        }
        const updatedSegments = [
            ...currentSegments,
            segment
        ];
        // If this is a page segment, we've reached a leaf node
        if (name === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$segment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PAGE_SEGMENT_KEY"]) {
            // Add all segments in the current path, preferring non-parallel segments
            updatedSegments.forEach((seg)=>{
                const key = getSegmentKey(seg);
                if (!uniqueSegments.has(key)) {
                    uniqueSegments.set(key, seg);
                }
            });
        }
        // Add all parallel routes to the queue
        for(const parallelRouteKey in parallelRoutes){
            const parallelRoute = parallelRoutes[parallelRouteKey];
            queue.push([
                parallelRoute,
                updatedSegments,
                // A parallel route segment is one that descends from a segment that is
                // not children or descends from a parallel route segment.
                isParallelRouteSegment || parallelRouteKey !== 'children'
            ]);
        }
    }
    return Array.from(uniqueSegments.values());
}
function getSegmentKey(segment) {
    return `${segment.name}-${segment.filePath ?? ''}-${segment.paramName ?? ''}-${segment.isParallelRouteSegment ? 'pr' : 'np'}`;
}
/**
 * Collects the segments for a given app route module.
 *
 * @param routeModule the app route module
 * @returns the segments for the app route module
 */ function collectAppRouteSegments(routeModule) {
    // Get the pathname parts, slice off the first element (which is empty).
    const parts = routeModule.definition.pathname.split('/').slice(1);
    if (parts.length === 0) {
        throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"]('Expected at least one segment'), "__NEXT_ERROR_CODE", {
            value: "E580",
            enumerable: false,
            configurable: true
        });
    }
    // Generate all the segments.
    const segments = parts.map((name)=>{
        const { param: paramName, type: paramType } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$segment$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSegmentParam"])(name) ?? {};
        return {
            name,
            paramName,
            paramType,
            filePath: undefined,
            isDynamicSegment: !!paramName,
            config: undefined,
            generateStaticParams: undefined,
            isParallelRouteSegment: undefined
        };
    });
    // We know we have at least one, we verified this above. We should get the
    // last segment which represents the root route module.
    const segment = segments[segments.length - 1];
    segment.filePath = routeModule.definition.filename;
    // Extract the segment config from the userland module.
    attach(segment, routeModule.userland, routeModule.definition.pathname);
    return segments;
}
function collectSegments(routeModule) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$checks$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAppRouteRouteModule"])(routeModule)) {
        return collectAppRouteSegments(routeModule);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$checks$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAppPageRouteModule"])(routeModule)) {
        return collectAppPageSegments(routeModule);
    }
    throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"]('Expected a route module to be one of app route or page'), "__NEXT_ERROR_CODE", {
        value: "E568",
        enumerable: false,
        configurable: true
    });
}
function collectFallbackRouteParams(routeModule) {
    const uniqueSegments = new Map();
    const queue = [
        [
            routeModule.userland.loaderTree,
            false
        ]
    ];
    while(queue.length > 0){
        const [loaderTree, isParallelRouteSegment] = queue.shift();
        const [name, parallelRoutes] = loaderTree;
        // Handle this segment (if it's a dynamic segment param).
        const segmentParam = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$segment$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSegmentParam"])(name);
        if (segmentParam) {
            const key = `${name}-${segmentParam.param}-${isParallelRouteSegment ? 'pr' : 'np'}`;
            if (!uniqueSegments.has(key)) {
                uniqueSegments.set(key, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$static$2d$paths$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createFallbackRouteParam"])(segmentParam.param, segmentParam.type, isParallelRouteSegment));
            }
        }
        // Add all of this segment's parallel routes to the queue.
        for(const parallelRouteKey in parallelRoutes){
            const parallelRoute = parallelRoutes[parallelRouteKey];
            queue.push([
                parallelRoute,
                // A parallel route segment is one that descends from a segment that is
                // not children or descends from a parallel route segment.
                isParallelRouteSegment || parallelRouteKey !== 'children'
            ]);
        }
    }
    return Array.from(uniqueSegments.values());
} //# sourceMappingURL=app-segments.js.map
}),
"[project]/node_modules/next/dist/esm/shared/lib/utils.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Web vitals provided to _app.reportWebVitals by Core Web Vitals plugin developed by Google Chrome team.
 * https://nextjs.org/blog/next-9-4#integrated-web-vitals-reporting
 */ __turbopack_context__.s([
    "DecodeError",
    ()=>DecodeError,
    "MiddlewareNotFoundError",
    ()=>MiddlewareNotFoundError,
    "MissingStaticPage",
    ()=>MissingStaticPage,
    "NormalizeError",
    ()=>NormalizeError,
    "PageNotFoundError",
    ()=>PageNotFoundError,
    "SP",
    ()=>SP,
    "ST",
    ()=>ST,
    "WEB_VITALS",
    ()=>WEB_VITALS,
    "execOnce",
    ()=>execOnce,
    "getDisplayName",
    ()=>getDisplayName,
    "getLocationOrigin",
    ()=>getLocationOrigin,
    "getURL",
    ()=>getURL,
    "isAbsoluteUrl",
    ()=>isAbsoluteUrl,
    "isResSent",
    ()=>isResSent,
    "loadGetInitialProps",
    ()=>loadGetInitialProps,
    "normalizeRepeatedSlashes",
    ()=>normalizeRepeatedSlashes,
    "stringifyError",
    ()=>stringifyError
]);
const WEB_VITALS = [
    'CLS',
    'FCP',
    'FID',
    'INP',
    'LCP',
    'TTFB'
];
function execOnce(fn) {
    let used = false;
    let result;
    return (...args)=>{
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
function getLocationOrigin() {
    const { protocol, hostname, port } = window.location;
    return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}
function getURL() {
    const { href } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split('?');
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, '/').replace(/\/\/+/g, '/') + (urlParts[1] ? `?${urlParts.slice(1).join('?')}` : '');
}
async function loadGetInitialProps(App, ctx) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (App.prototype?.getInitialProps) {
            const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
            throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
                value: "E394",
                enumerable: false,
                configurable: true
            });
        }
    }
    // when called from _app `ctx` is nested in `ctx`
    const res = ctx.res || ctx.ctx && ctx.ctx.res;
    if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
        }
        return {};
    }
    const props = await App.getInitialProps(ctx);
    if (res && isResSent(res)) {
        return props;
    }
    if (!props) {
        const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
        throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (Object.keys(props).length === 0 && !ctx.ctx) {
            console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
        }
    }
    return props;
}
const SP = typeof performance !== 'undefined';
const ST = SP && [
    'mark',
    'measure',
    'getEntriesByName'
].every((method)=>typeof performance[method] === 'function');
class DecodeError extends Error {
}
class NormalizeError extends Error {
}
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = 'ENOENT';
        this.name = 'PageNotFoundError';
        this.message = `Cannot find module for page: ${page}`;
    }
}
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = `Failed to load static file for page: ${page} ${message}`;
    }
}
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = 'ENOENT';
        this.message = `Cannot find the middleware module`;
    }
}
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
} //# sourceMappingURL=utils.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/compiled/path-to-regexp/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Tokenize input string.
 */ function lexer(str) {
    var tokens = [];
    var i = 0;
    while(i < str.length){
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({
                type: "MODIFIER",
                index: i,
                value: str[i++]
            });
            continue;
        }
        if (char === "\\") {
            tokens.push({
                type: "ESCAPED_CHAR",
                index: i++,
                value: str[i++]
            });
            continue;
        }
        if (char === "{") {
            tokens.push({
                type: "OPEN",
                index: i,
                value: str[i++]
            });
            continue;
        }
        if (char === "}") {
            tokens.push({
                type: "CLOSE",
                index: i,
                value: str[i++]
            });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while(j < str.length){
                var code = str.charCodeAt(j);
                if (// `0-9`
                code >= 48 && code <= 57 || code >= 65 && code <= 90 || code >= 97 && code <= 122 || // `_`
                code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name) throw new TypeError("Missing parameter name at " + i);
            tokens.push({
                type: "NAME",
                index: i,
                value: name
            });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while(j < str.length){
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                } else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count) throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern) throw new TypeError("Missing pattern at " + i);
            tokens.push({
                type: "PATTERN",
                index: i,
                value: pattern
            });
            i = j;
            continue;
        }
        tokens.push({
            type: "CHAR",
            index: i,
            value: str[i++]
        });
    }
    tokens.push({
        type: "END",
        index: i,
        value: ""
    });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */ function parse(str, options) {
    if (options === void 0) {
        options = {};
    }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function(type) {
        if (i < tokens.length && tokens[i].type === type) return tokens[i++].value;
    };
    var mustConsume = function(type) {
        var value = tryConsume(type);
        if (value !== undefined) return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function() {
        var result = "";
        var value;
        // tslint:disable-next-line
        while(value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")){
            result += value;
        }
        return result;
    };
    while(i < tokens.length){
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */ function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */ function tokensToFunction(tokens, options) {
    if (options === void 0) {
        options = {};
    }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function(x) {
        return x;
    } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function(token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function(data) {
        var path = "";
        for(var i = 0; i < tokens.length; i++){
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional) continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for(var j = 0; j < value.length; j++){
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional) continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */ function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */ function regexpToFunction(re, keys, options) {
    if (options === void 0) {
        options = {};
    }
    var _a = options.decode, decode = _a === void 0 ? function(x) {
        return x;
    } : _a;
    return function(pathname) {
        var m = re.exec(pathname);
        if (!m) return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function(i) {
            // tslint:disable-next-line
            if (m[i] === undefined) return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function(value) {
                    return decode(value, key);
                });
            } else {
                params[key.name] = decode(m[i], key);
            }
        };
        for(var i = 1; i < m.length; i++){
            _loop_1(i);
        }
        return {
            path: path,
            index: index,
            params: params
        };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */ function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */ function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */ function regexpToRegexp(path, keys) {
    if (!keys) return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for(var i = 0; i < groups.length; i++){
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */ function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function(path) {
        return pathToRegexp(path, keys, options).source;
    });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */ function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */ function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) {
        options = {};
    }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function(x) {
        return x;
    } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for(var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++){
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        } else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys) keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    } else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                } else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            } else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict) route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    } else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string" ? delimiter.indexOf(endToken[endToken.length - 1]) > -1 : endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */ function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp) return regexpToRegexp(path, keys);
    if (Array.isArray(path)) return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp; //# sourceMappingURL=index.js.map
}),
"[project]/node_modules/next/dist/esm/lib/route-pattern-normalizer.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Route pattern normalization utilities for path-to-regexp compatibility.
 *
 * path-to-regexp 6.3.0+ introduced stricter validation that rejects certain
 * patterns commonly used in Next.js interception routes. This module provides
 * normalization functions to make Next.js route patterns compatible with the
 * updated library while preserving all functionality.
 */ /**
 * Internal separator used to normalize adjacent parameter patterns.
 * This unique marker is inserted between adjacent parameters and stripped out
 * during parameter extraction to avoid conflicts with real URL content.
 */ __turbopack_context__.s([
    "PARAM_SEPARATOR",
    ()=>PARAM_SEPARATOR,
    "hasAdjacentParameterIssues",
    ()=>hasAdjacentParameterIssues,
    "normalizeAdjacentParameters",
    ()=>normalizeAdjacentParameters,
    "normalizeTokensForRegexp",
    ()=>normalizeTokensForRegexp,
    "stripNormalizedSeparators",
    ()=>stripNormalizedSeparators,
    "stripParameterSeparators",
    ()=>stripParameterSeparators
]);
const PARAM_SEPARATOR = '_NEXTSEP_';
function hasAdjacentParameterIssues(route) {
    if (typeof route !== 'string') return false;
    // Check for interception route markers followed immediately by parameters
    // Pattern: /(.):param, /(..):param, /(...):param, /(.)(.):param etc.
    // These patterns cause "Must have text between two parameters" errors
    if (/\/\(\.{1,3}\):[^/\s]+/.test(route)) {
        return true;
    }
    // Check for basic adjacent parameters without separators
    // Pattern: :param1:param2 (but not :param* or other URL patterns)
    if (/:[a-zA-Z_][a-zA-Z0-9_]*:[a-zA-Z_][a-zA-Z0-9_]*/.test(route)) {
        return true;
    }
    return false;
}
function normalizeAdjacentParameters(route) {
    let normalized = route;
    // Handle interception route patterns: (.):param -> (.)_NEXTSEP_:param
    normalized = normalized.replace(/(\([^)]*\)):([^/\s]+)/g, `$1${PARAM_SEPARATOR}:$2`);
    // Handle other adjacent parameter patterns: :param1:param2 -> :param1_NEXTSEP_:param2
    normalized = normalized.replace(/:([^:/\s)]+)(?=:)/g, `:$1${PARAM_SEPARATOR}`);
    return normalized;
}
function normalizeTokensForRegexp(tokens) {
    return tokens.map((token)=>{
        // Token union type: Token = string | TokenObject
        // Literal path segments are strings, parameters/wildcards are objects
        if (typeof token === 'object' && token !== null && // Not all token objects have 'modifier' property (e.g., simple text tokens)
        'modifier' in token && // Only repeating modifiers (* or +) cause the validation error
        // Other modifiers like '?' (optional) are fine
        (token.modifier === '*' || token.modifier === '+') && // Token objects can have different shapes depending on route pattern
        'prefix' in token && 'suffix' in token && // Both prefix and suffix must be empty strings
        // This is what causes the validation error in path-to-regexp
        token.prefix === '' && token.suffix === '') {
            // Add minimal prefix to satisfy path-to-regexp validation
            // We use '/' as it's the most common path delimiter and won't break route matching
            // The prefix gets used in regex generation but doesn't affect parameter extraction
            return {
                ...token,
                prefix: '/'
            };
        }
        return token;
    });
}
function stripNormalizedSeparators(pathname) {
    // Remove separator after interception route markers
    // Pattern: (.)_NEXTSEP_ -> (.), (..)_NEXTSEP_ -> (..), etc.
    // The separator appears after the closing paren of interception markers
    return pathname.replace(new RegExp(`\\)${PARAM_SEPARATOR}`, 'g'), ')');
}
function stripParameterSeparators(params) {
    const cleaned = {};
    for (const [key, value] of Object.entries(params)){
        if (typeof value === 'string') {
            // Remove the separator if it appears at the start of parameter values
            cleaned[key] = value.replace(new RegExp(`^${PARAM_SEPARATOR}`), '');
        } else if (Array.isArray(value)) {
            // Handle array parameters (from repeated route segments)
            cleaned[key] = value.map((item)=>typeof item === 'string' ? item.replace(new RegExp(`^${PARAM_SEPARATOR}`), '') : item);
        } else {
            cleaned[key] = value;
        }
    }
    return cleaned;
} //# sourceMappingURL=route-pattern-normalizer.js.map
}),
"[project]/node_modules/next/dist/esm/shared/lib/router/utils/route-match-utils.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Client-safe utilities for route matching that don't import server-side
 * utilities to avoid bundling issues with Turbopack
 */ __turbopack_context__.s([
    "safeCompile",
    ()=>safeCompile,
    "safePathToRegexp",
    ()=>safePathToRegexp,
    "safeRegexpToFunction",
    ()=>safeRegexpToFunction,
    "safeRouteMatcher",
    ()=>safeRouteMatcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$path$2d$to$2d$regexp$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Transferências/elos-creative/node_modules/next/dist/compiled/path-to-regexp/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$route$2d$pattern$2d$normalizer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/lib/route-pattern-normalizer.js [app-rsc] (ecmascript)");
;
;
function safePathToRegexp(route, keys, options) {
    if (typeof route !== 'string') {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$path$2d$to$2d$regexp$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pathToRegexp"])(route, keys, options);
    }
    // Check if normalization is needed and cache the result
    const needsNormalization = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$route$2d$pattern$2d$normalizer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasAdjacentParameterIssues"])(route);
    const routeToUse = needsNormalization ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$route$2d$pattern$2d$normalizer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeAdjacentParameters"])(route) : route;
    try {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$path$2d$to$2d$regexp$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pathToRegexp"])(routeToUse, keys, options);
    } catch (error) {
        // Only try normalization if we haven't already normalized
        if (!needsNormalization) {
            try {
                const normalizedRoute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$route$2d$pattern$2d$normalizer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeAdjacentParameters"])(route);
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$path$2d$to$2d$regexp$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pathToRegexp"])(normalizedRoute, keys, options);
            } catch (retryError) {
                // If that doesn't work, fall back to original error
                throw error;
            }
        }
        throw error;
    }
}
function safeCompile(route, options) {
    // Check if normalization is needed and cache the result
    const needsNormalization = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$route$2d$pattern$2d$normalizer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasAdjacentParameterIssues"])(route);
    const routeToUse = needsNormalization ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$route$2d$pattern$2d$normalizer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeAdjacentParameters"])(route) : route;
    try {
        const compiler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$path$2d$to$2d$regexp$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["compile"])(routeToUse, options);
        // If we normalized the route, wrap the compiler to strip separators from output
        // The normalization inserts _NEXTSEP_ as a literal string in the pattern to satisfy
        // path-to-regexp validation, but we don't want it in the final compiled URL
        if (needsNormalization) {
            return (params)=>{
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$route$2d$pattern$2d$normalizer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stripNormalizedSeparators"])(compiler(params));
            };
        }
        return compiler;
    } catch (error) {
        // Only try normalization if we haven't already normalized
        if (!needsNormalization) {
            try {
                const normalizedRoute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$route$2d$pattern$2d$normalizer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeAdjacentParameters"])(route);
                const compiler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$path$2d$to$2d$regexp$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["compile"])(normalizedRoute, options);
                // Wrap the compiler to strip separators from output
                return (params)=>{
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$route$2d$pattern$2d$normalizer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stripNormalizedSeparators"])(compiler(params));
                };
            } catch (retryError) {
                // If that doesn't work, fall back to original error
                throw error;
            }
        }
        throw error;
    }
}
function safeRegexpToFunction(regexp, keys) {
    const originalMatcher = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$path$2d$to$2d$regexp$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["regexpToFunction"])(regexp, keys || []);
    return (pathname)=>{
        const result = originalMatcher(pathname);
        if (!result) return false;
        // Clean parameters before returning
        return {
            ...result,
            params: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$route$2d$pattern$2d$normalizer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stripParameterSeparators"])(result.params)
        };
    };
}
function safeRouteMatcher(matcherFn) {
    return (pathname)=>{
        const result = matcherFn(pathname);
        if (!result) return false;
        // Clean parameters before returning
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$route$2d$pattern$2d$normalizer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stripParameterSeparators"])(result);
    };
} //# sourceMappingURL=route-match-utils.js.map
}),
"[project]/node_modules/next/dist/esm/shared/lib/router/utils/route-matcher.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRouteMatcher",
    ()=>getRouteMatcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$route$2d$match$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/router/utils/route-match-utils.js [app-rsc] (ecmascript)");
;
;
function getRouteMatcher({ re, groups }) {
    const rawMatcher = (pathname)=>{
        const routeMatch = re.exec(pathname);
        if (!routeMatch) return false;
        const decode = (param)=>{
            try {
                return decodeURIComponent(param);
            } catch  {
                throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DecodeError"]('failed to decode param'), "__NEXT_ERROR_CODE", {
                    value: "E528",
                    enumerable: false,
                    configurable: true
                });
            }
        };
        const params = {};
        for (const [key, group] of Object.entries(groups)){
            const match = routeMatch[group.pos];
            if (match !== undefined) {
                if (group.repeat) {
                    params[key] = match.split('/').map((entry)=>decode(entry));
                } else {
                    params[key] = decode(match);
                }
            }
        }
        return params;
    };
    // Wrap with safe matcher to handle parameter cleaning
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$route$2d$match$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["safeRouteMatcher"])(rawMatcher);
} //# sourceMappingURL=route-matcher.js.map
}),
"[project]/node_modules/next/dist/esm/lib/constants.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ACTION_SUFFIX",
    ()=>ACTION_SUFFIX,
    "APP_DIR_ALIAS",
    ()=>APP_DIR_ALIAS,
    "CACHE_ONE_YEAR",
    ()=>CACHE_ONE_YEAR,
    "DOT_NEXT_ALIAS",
    ()=>DOT_NEXT_ALIAS,
    "ESLINT_DEFAULT_DIRS",
    ()=>ESLINT_DEFAULT_DIRS,
    "GSP_NO_RETURNED_VALUE",
    ()=>GSP_NO_RETURNED_VALUE,
    "GSSP_COMPONENT_MEMBER_ERROR",
    ()=>GSSP_COMPONENT_MEMBER_ERROR,
    "GSSP_NO_RETURNED_VALUE",
    ()=>GSSP_NO_RETURNED_VALUE,
    "HTML_CONTENT_TYPE_HEADER",
    ()=>HTML_CONTENT_TYPE_HEADER,
    "INFINITE_CACHE",
    ()=>INFINITE_CACHE,
    "INSTRUMENTATION_HOOK_FILENAME",
    ()=>INSTRUMENTATION_HOOK_FILENAME,
    "JSON_CONTENT_TYPE_HEADER",
    ()=>JSON_CONTENT_TYPE_HEADER,
    "MATCHED_PATH_HEADER",
    ()=>MATCHED_PATH_HEADER,
    "MIDDLEWARE_FILENAME",
    ()=>MIDDLEWARE_FILENAME,
    "MIDDLEWARE_LOCATION_REGEXP",
    ()=>MIDDLEWARE_LOCATION_REGEXP,
    "NEXT_BODY_SUFFIX",
    ()=>NEXT_BODY_SUFFIX,
    "NEXT_CACHE_IMPLICIT_TAG_ID",
    ()=>NEXT_CACHE_IMPLICIT_TAG_ID,
    "NEXT_CACHE_REVALIDATED_TAGS_HEADER",
    ()=>NEXT_CACHE_REVALIDATED_TAGS_HEADER,
    "NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER",
    ()=>NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER,
    "NEXT_CACHE_SOFT_TAG_MAX_LENGTH",
    ()=>NEXT_CACHE_SOFT_TAG_MAX_LENGTH,
    "NEXT_CACHE_TAGS_HEADER",
    ()=>NEXT_CACHE_TAGS_HEADER,
    "NEXT_CACHE_TAG_MAX_ITEMS",
    ()=>NEXT_CACHE_TAG_MAX_ITEMS,
    "NEXT_CACHE_TAG_MAX_LENGTH",
    ()=>NEXT_CACHE_TAG_MAX_LENGTH,
    "NEXT_DATA_SUFFIX",
    ()=>NEXT_DATA_SUFFIX,
    "NEXT_INTERCEPTION_MARKER_PREFIX",
    ()=>NEXT_INTERCEPTION_MARKER_PREFIX,
    "NEXT_META_SUFFIX",
    ()=>NEXT_META_SUFFIX,
    "NEXT_QUERY_PARAM_PREFIX",
    ()=>NEXT_QUERY_PARAM_PREFIX,
    "NEXT_RESUME_HEADER",
    ()=>NEXT_RESUME_HEADER,
    "NON_STANDARD_NODE_ENV",
    ()=>NON_STANDARD_NODE_ENV,
    "PAGES_DIR_ALIAS",
    ()=>PAGES_DIR_ALIAS,
    "PRERENDER_REVALIDATE_HEADER",
    ()=>PRERENDER_REVALIDATE_HEADER,
    "PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER",
    ()=>PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER,
    "PROXY_FILENAME",
    ()=>PROXY_FILENAME,
    "PROXY_LOCATION_REGEXP",
    ()=>PROXY_LOCATION_REGEXP,
    "PUBLIC_DIR_MIDDLEWARE_CONFLICT",
    ()=>PUBLIC_DIR_MIDDLEWARE_CONFLICT,
    "ROOT_DIR_ALIAS",
    ()=>ROOT_DIR_ALIAS,
    "RSC_ACTION_CLIENT_WRAPPER_ALIAS",
    ()=>RSC_ACTION_CLIENT_WRAPPER_ALIAS,
    "RSC_ACTION_ENCRYPTION_ALIAS",
    ()=>RSC_ACTION_ENCRYPTION_ALIAS,
    "RSC_ACTION_PROXY_ALIAS",
    ()=>RSC_ACTION_PROXY_ALIAS,
    "RSC_ACTION_VALIDATE_ALIAS",
    ()=>RSC_ACTION_VALIDATE_ALIAS,
    "RSC_CACHE_WRAPPER_ALIAS",
    ()=>RSC_CACHE_WRAPPER_ALIAS,
    "RSC_DYNAMIC_IMPORT_WRAPPER_ALIAS",
    ()=>RSC_DYNAMIC_IMPORT_WRAPPER_ALIAS,
    "RSC_MOD_REF_PROXY_ALIAS",
    ()=>RSC_MOD_REF_PROXY_ALIAS,
    "RSC_PREFETCH_SUFFIX",
    ()=>RSC_PREFETCH_SUFFIX,
    "RSC_SEGMENTS_DIR_SUFFIX",
    ()=>RSC_SEGMENTS_DIR_SUFFIX,
    "RSC_SEGMENT_SUFFIX",
    ()=>RSC_SEGMENT_SUFFIX,
    "RSC_SUFFIX",
    ()=>RSC_SUFFIX,
    "SERVER_PROPS_EXPORT_ERROR",
    ()=>SERVER_PROPS_EXPORT_ERROR,
    "SERVER_PROPS_GET_INIT_PROPS_CONFLICT",
    ()=>SERVER_PROPS_GET_INIT_PROPS_CONFLICT,
    "SERVER_PROPS_SSG_CONFLICT",
    ()=>SERVER_PROPS_SSG_CONFLICT,
    "SERVER_RUNTIME",
    ()=>SERVER_RUNTIME,
    "SSG_FALLBACK_EXPORT_ERROR",
    ()=>SSG_FALLBACK_EXPORT_ERROR,
    "SSG_GET_INITIAL_PROPS_CONFLICT",
    ()=>SSG_GET_INITIAL_PROPS_CONFLICT,
    "STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR",
    ()=>STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR,
    "TEXT_PLAIN_CONTENT_TYPE_HEADER",
    ()=>TEXT_PLAIN_CONTENT_TYPE_HEADER,
    "UNSTABLE_REVALIDATE_RENAME_ERROR",
    ()=>UNSTABLE_REVALIDATE_RENAME_ERROR,
    "WEBPACK_LAYERS",
    ()=>WEBPACK_LAYERS,
    "WEBPACK_RESOURCE_QUERIES",
    ()=>WEBPACK_RESOURCE_QUERIES,
    "WEB_SOCKET_MAX_RECONNECTIONS",
    ()=>WEB_SOCKET_MAX_RECONNECTIONS
]);
const TEXT_PLAIN_CONTENT_TYPE_HEADER = 'text/plain';
const HTML_CONTENT_TYPE_HEADER = 'text/html; charset=utf-8';
const JSON_CONTENT_TYPE_HEADER = 'application/json; charset=utf-8';
const NEXT_QUERY_PARAM_PREFIX = 'nxtP';
const NEXT_INTERCEPTION_MARKER_PREFIX = 'nxtI';
const MATCHED_PATH_HEADER = 'x-matched-path';
const PRERENDER_REVALIDATE_HEADER = 'x-prerender-revalidate';
const PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER = 'x-prerender-revalidate-if-generated';
const RSC_PREFETCH_SUFFIX = '.prefetch.rsc';
const RSC_SEGMENTS_DIR_SUFFIX = '.segments';
const RSC_SEGMENT_SUFFIX = '.segment.rsc';
const RSC_SUFFIX = '.rsc';
const ACTION_SUFFIX = '.action';
const NEXT_DATA_SUFFIX = '.json';
const NEXT_META_SUFFIX = '.meta';
const NEXT_BODY_SUFFIX = '.body';
const NEXT_CACHE_TAGS_HEADER = 'x-next-cache-tags';
const NEXT_CACHE_REVALIDATED_TAGS_HEADER = 'x-next-revalidated-tags';
const NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER = 'x-next-revalidate-tag-token';
const NEXT_RESUME_HEADER = 'next-resume';
const NEXT_CACHE_TAG_MAX_ITEMS = 128;
const NEXT_CACHE_TAG_MAX_LENGTH = 256;
const NEXT_CACHE_SOFT_TAG_MAX_LENGTH = 1024;
const NEXT_CACHE_IMPLICIT_TAG_ID = '_N_T_';
const CACHE_ONE_YEAR = 31536000;
const INFINITE_CACHE = 0xfffffffe;
const MIDDLEWARE_FILENAME = 'middleware';
const MIDDLEWARE_LOCATION_REGEXP = `(?:src/)?${MIDDLEWARE_FILENAME}`;
const PROXY_FILENAME = 'proxy';
const PROXY_LOCATION_REGEXP = `(?:src/)?${PROXY_FILENAME}`;
const INSTRUMENTATION_HOOK_FILENAME = 'instrumentation';
const PAGES_DIR_ALIAS = 'private-next-pages';
const DOT_NEXT_ALIAS = 'private-dot-next';
const ROOT_DIR_ALIAS = 'private-next-root-dir';
const APP_DIR_ALIAS = 'private-next-app-dir';
const RSC_MOD_REF_PROXY_ALIAS = 'private-next-rsc-mod-ref-proxy';
const RSC_ACTION_VALIDATE_ALIAS = 'private-next-rsc-action-validate';
const RSC_ACTION_PROXY_ALIAS = 'private-next-rsc-server-reference';
const RSC_CACHE_WRAPPER_ALIAS = 'private-next-rsc-cache-wrapper';
const RSC_DYNAMIC_IMPORT_WRAPPER_ALIAS = 'private-next-rsc-track-dynamic-import';
const RSC_ACTION_ENCRYPTION_ALIAS = 'private-next-rsc-action-encryption';
const RSC_ACTION_CLIENT_WRAPPER_ALIAS = 'private-next-rsc-action-client-wrapper';
const PUBLIC_DIR_MIDDLEWARE_CONFLICT = `You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict`;
const SSG_GET_INITIAL_PROPS_CONFLICT = `You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps`;
const SERVER_PROPS_GET_INIT_PROPS_CONFLICT = `You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.`;
const SERVER_PROPS_SSG_CONFLICT = `You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps`;
const STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR = `can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props`;
const SERVER_PROPS_EXPORT_ERROR = `pages with \`getServerSideProps\` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export`;
const GSP_NO_RETURNED_VALUE = 'Your `getStaticProps` function did not return an object. Did you forget to add a `return`?';
const GSSP_NO_RETURNED_VALUE = 'Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?';
const UNSTABLE_REVALIDATE_RENAME_ERROR = 'The `unstable_revalidate` property is available for general use.\n' + 'Please use `revalidate` instead.';
const GSSP_COMPONENT_MEMBER_ERROR = `can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member`;
const NON_STANDARD_NODE_ENV = `You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env`;
const SSG_FALLBACK_EXPORT_ERROR = `Pages with \`fallback\` enabled in \`getStaticPaths\` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export`;
const ESLINT_DEFAULT_DIRS = [
    'app',
    'pages',
    'components',
    'lib',
    'src'
];
const SERVER_RUNTIME = {
    edge: 'edge',
    experimentalEdge: 'experimental-edge',
    nodejs: 'nodejs'
};
const WEB_SOCKET_MAX_RECONNECTIONS = 12;
/**
 * The names of the webpack layers. These layers are the primitives for the
 * webpack chunks.
 */ const WEBPACK_LAYERS_NAMES = {
    /**
   * The layer for the shared code between the client and server bundles.
   */ shared: 'shared',
    /**
   * The layer for server-only runtime and picking up `react-server` export conditions.
   * Including app router RSC pages and app router custom routes and metadata routes.
   */ reactServerComponents: 'rsc',
    /**
   * Server Side Rendering layer for app (ssr).
   */ serverSideRendering: 'ssr',
    /**
   * The browser client bundle layer for actions.
   */ actionBrowser: 'action-browser',
    /**
   * The Node.js bundle layer for the API routes.
   */ apiNode: 'api-node',
    /**
   * The Edge Lite bundle layer for the API routes.
   */ apiEdge: 'api-edge',
    /**
   * The layer for the middleware code.
   */ middleware: 'middleware',
    /**
   * The layer for the instrumentation hooks.
   */ instrument: 'instrument',
    /**
   * The layer for assets on the edge.
   */ edgeAsset: 'edge-asset',
    /**
   * The browser client bundle layer for App directory.
   */ appPagesBrowser: 'app-pages-browser',
    /**
   * The browser client bundle layer for Pages directory.
   */ pagesDirBrowser: 'pages-dir-browser',
    /**
   * The Edge Lite bundle layer for Pages directory.
   */ pagesDirEdge: 'pages-dir-edge',
    /**
   * The Node.js bundle layer for Pages directory.
   */ pagesDirNode: 'pages-dir-node'
};
const WEBPACK_LAYERS = {
    ...WEBPACK_LAYERS_NAMES,
    GROUP: {
        builtinReact: [
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.actionBrowser
        ],
        serverOnly: [
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.actionBrowser,
            WEBPACK_LAYERS_NAMES.instrument,
            WEBPACK_LAYERS_NAMES.middleware
        ],
        neutralTarget: [
            // pages api
            WEBPACK_LAYERS_NAMES.apiNode,
            WEBPACK_LAYERS_NAMES.apiEdge
        ],
        clientOnly: [
            WEBPACK_LAYERS_NAMES.serverSideRendering,
            WEBPACK_LAYERS_NAMES.appPagesBrowser
        ],
        bundled: [
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.actionBrowser,
            WEBPACK_LAYERS_NAMES.serverSideRendering,
            WEBPACK_LAYERS_NAMES.appPagesBrowser,
            WEBPACK_LAYERS_NAMES.shared,
            WEBPACK_LAYERS_NAMES.instrument,
            WEBPACK_LAYERS_NAMES.middleware
        ],
        appPages: [
            // app router pages and layouts
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.serverSideRendering,
            WEBPACK_LAYERS_NAMES.appPagesBrowser,
            WEBPACK_LAYERS_NAMES.actionBrowser
        ]
    }
};
const WEBPACK_RESOURCE_QUERIES = {
    edgeSSREntry: '__next_edge_ssr_entry__',
    metadata: '__next_metadata__',
    metadataRoute: '__next_metadata_route__',
    metadataImageMeta: '__next_metadata_image_meta__'
};
;
 //# sourceMappingURL=constants.js.map
}),
"[project]/node_modules/next/dist/esm/shared/lib/escape-regexp.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// regexp is based on https://github.com/sindresorhus/escape-string-regexp
__turbopack_context__.s([
    "escapeStringRegexp",
    ()=>escapeStringRegexp
]);
const reHasRegExp = /[|\\{}()[\]^$+*?.-]/;
const reReplaceRegExp = /[|\\{}()[\]^$+*?.-]/g;
function escapeStringRegexp(str) {
    // see also: https://github.com/lodash/lodash/blob/2da024c3b4f9947a48517639de7560457cd4ec6c/escapeRegExp.js#L23
    if (reHasRegExp.test(str)) {
        return str.replace(reReplaceRegExp, '\\$&');
    }
    return str;
} //# sourceMappingURL=escape-regexp.js.map
}),
"[project]/node_modules/next/dist/esm/shared/lib/router/utils/remove-trailing-slash.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Removes the trailing slash for a given route or page path. Preserves the
 * root page. Examples:
 *   - `/foo/bar/` -> `/foo/bar`
 *   - `/foo/bar` -> `/foo/bar`
 *   - `/` -> `/`
 */ __turbopack_context__.s([
    "removeTrailingSlash",
    ()=>removeTrailingSlash
]);
function removeTrailingSlash(route) {
    return route.replace(/\/$/, '') || '/';
} //# sourceMappingURL=remove-trailing-slash.js.map
}),
"[project]/node_modules/next/dist/esm/shared/lib/router/utils/parse-loader-tree.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseLoaderTree",
    ()=>parseLoaderTree
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$segment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/segment.js [app-rsc] (ecmascript)");
;
function parseLoaderTree(tree) {
    const [segment, parallelRoutes, modules] = tree;
    const { layout, template } = modules;
    let { page } = modules;
    // a __DEFAULT__ segment means that this route didn't match any of the
    // segments in the route, so we should use the default page
    page = segment === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$segment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DEFAULT_SEGMENT_KEY"] ? modules.defaultPage : page;
    const conventionPath = layout?.[1] || template?.[1] || page?.[1];
    return {
        page,
        segment,
        modules,
        /* it can be either layout / template / page */ conventionPath,
        parallelRoutes
    };
} //# sourceMappingURL=parse-loader-tree.js.map
}),
"[project]/node_modules/next/dist/esm/shared/lib/router/utils/get-dynamic-param.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PARAMETER_PATTERN",
    ()=>PARAMETER_PATTERN,
    "getDynamicParam",
    ()=>getDynamicParam,
    "interpolateParallelRouteParams",
    ()=>interpolateParallelRouteParams,
    "parseMatchedParameter",
    ()=>parseMatchedParameter,
    "parseParameter",
    ()=>parseParameter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/invariant-error.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$loader$2d$tree$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/router/utils/parse-loader-tree.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$segment$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/router/utils/get-segment-param.js [app-rsc] (ecmascript)");
;
;
;
/**
 * Gets the value of a param from the params object. This correctly handles the
 * case where the param is a fallback route param and encodes the resulting
 * value.
 *
 * @param interpolatedParams - The params object.
 * @param segmentKey - The key of the segment.
 * @param fallbackRouteParams - The fallback route params.
 * @returns The value of the param.
 */ function getParamValue(interpolatedParams, segmentKey, fallbackRouteParams) {
    let value = interpolatedParams[segmentKey];
    if (fallbackRouteParams?.has(segmentKey)) {
        // We know that the fallback route params has the segment key because we
        // checked that above.
        const [searchValue] = fallbackRouteParams.get(segmentKey);
        value = searchValue;
    } else if (Array.isArray(value)) {
        value = value.map((i)=>encodeURIComponent(i));
    } else if (typeof value === 'string') {
        value = encodeURIComponent(value);
    }
    return value;
}
function interpolateParallelRouteParams(loaderTree, params, pagePath, fallbackRouteParams) {
    const interpolated = structuredClone(params);
    // Stack-based traversal with depth tracking
    const stack = [
        {
            tree: loaderTree,
            depth: 0
        }
    ];
    // Derive value from pagePath based on depth and parameter type
    const pathSegments = pagePath.split('/').slice(1) // Remove first empty string
    ;
    while(stack.length > 0){
        const { tree, depth } = stack.pop();
        const { segment, parallelRoutes } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$loader$2d$tree$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseLoaderTree"])(tree);
        // Check if current segment contains a parameter
        const segmentParam = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$segment$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSegmentParam"])(segment);
        if (segmentParam && !interpolated.hasOwnProperty(segmentParam.param) && // If the param is in the fallback route params, we don't need to
        // interpolate it because it's already marked as being unknown.
        !fallbackRouteParams?.has(segmentParam.param)) {
            switch(segmentParam.type){
                case 'catchall':
                case 'optional-catchall':
                case 'catchall-intercepted-(..)(..)':
                case 'catchall-intercepted-(.)':
                case 'catchall-intercepted-(..)':
                case 'catchall-intercepted-(...)':
                    // For catchall parameters, take all remaining segments from this depth
                    const remainingSegments = pathSegments.slice(depth);
                    // Process each segment to handle any dynamic params
                    const processedSegments = remainingSegments.flatMap((pathSegment)=>{
                        const param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$segment$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSegmentParam"])(pathSegment);
                        // If the segment matches a param, return the param value otherwise,
                        // it's a static segment, so just return that. We don't use the
                        // `getParamValue` function here because we don't want the values to
                        // be encoded, that's handled on get by the `getDynamicParam`
                        // function.
                        return param ? interpolated[param.param] : pathSegment;
                    }).filter((s)=>s !== undefined);
                    if (processedSegments.length > 0) {
                        interpolated[segmentParam.param] = processedSegments;
                    }
                    break;
                case 'dynamic':
                case 'dynamic-intercepted-(..)(..)':
                case 'dynamic-intercepted-(.)':
                case 'dynamic-intercepted-(..)':
                case 'dynamic-intercepted-(...)':
                    // For regular dynamic parameters, take the segment at this depth
                    if (depth < pathSegments.length) {
                        const pathSegment = pathSegments[depth];
                        const param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$segment$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSegmentParam"])(pathSegment);
                        interpolated[segmentParam.param] = param ? interpolated[param.param] : pathSegment;
                    }
                    break;
                default:
                    segmentParam.type;
            }
        }
        // Calculate next depth - increment if this is not a route group and not empty
        let nextDepth = depth;
        const isRouteGroup = segment.startsWith('(') && segment.endsWith(')');
        if (!isRouteGroup && segment !== '') {
            nextDepth++;
        }
        // Add all parallel routes to the stack for processing
        for (const route of Object.values(parallelRoutes)){
            stack.push({
                tree: route,
                depth: nextDepth
            });
        }
    }
    return interpolated;
}
function getDynamicParam(interpolatedParams, segmentKey, dynamicParamType, fallbackRouteParams) {
    let value = getParamValue(interpolatedParams, segmentKey, fallbackRouteParams);
    // handle the case where an optional catchall does not have a value,
    // e.g. `/dashboard/[[...slug]]` when requesting `/dashboard`
    if (!value || value.length === 0) {
        if (dynamicParamType === 'oc') {
            return {
                param: segmentKey,
                value: null,
                type: dynamicParamType,
                treeSegment: [
                    segmentKey,
                    '',
                    dynamicParamType
                ]
            };
        }
        throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"](`Missing value for segment key: "${segmentKey}" with dynamic param type: ${dynamicParamType}`), "__NEXT_ERROR_CODE", {
            value: "E864",
            enumerable: false,
            configurable: true
        });
    }
    return {
        param: segmentKey,
        // The value that is passed to user code.
        value,
        // The value that is rendered in the router tree.
        treeSegment: [
            segmentKey,
            Array.isArray(value) ? value.join('/') : value,
            dynamicParamType
        ],
        type: dynamicParamType
    };
}
const PARAMETER_PATTERN = /^([^[]*)\[((?:\[[^\]]*\])|[^\]]+)\](.*)$/;
function parseParameter(param) {
    const match = param.match(PARAMETER_PATTERN);
    if (!match) {
        return parseMatchedParameter(param);
    }
    return parseMatchedParameter(match[2]);
}
function parseMatchedParameter(param) {
    const optional = param.startsWith('[') && param.endsWith(']');
    if (optional) {
        param = param.slice(1, -1);
    }
    const repeat = param.startsWith('...');
    if (repeat) {
        param = param.slice(3);
    }
    return {
        key: param,
        repeat,
        optional
    };
} //# sourceMappingURL=get-dynamic-param.js.map
}),
"[project]/node_modules/next/dist/esm/shared/lib/router/utils/route-regex.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getNamedMiddlewareRegex",
    ()=>getNamedMiddlewareRegex,
    "getNamedRouteRegex",
    ()=>getNamedRouteRegex,
    "getRouteRegex",
    ()=>getRouteRegex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/lib/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$routes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/router/utils/interception-routes.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$escape$2d$regexp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/escape-regexp.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$trailing$2d$slash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/router/utils/remove-trailing-slash.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$dynamic$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/router/utils/get-dynamic-param.js [app-rsc] (ecmascript)");
;
;
;
;
;
function getParametrizedRoute(route, includeSuffix, includePrefix) {
    const groups = {};
    let groupIndex = 1;
    const segments = [];
    for (const segment of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$trailing$2d$slash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["removeTrailingSlash"])(route).slice(1).split('/')){
        const markerMatch = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$routes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INTERCEPTION_ROUTE_MARKERS"].find((m)=>segment.startsWith(m));
        const paramMatches = segment.match(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$dynamic$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PARAMETER_PATTERN"]) // Check for parameters
        ;
        if (markerMatch && paramMatches && paramMatches[2]) {
            const { key, optional, repeat } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$dynamic$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseMatchedParameter"])(paramMatches[2]);
            groups[key] = {
                pos: groupIndex++,
                repeat,
                optional
            };
            segments.push(`/${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$escape$2d$regexp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["escapeStringRegexp"])(markerMatch)}([^/]+?)`);
        } else if (paramMatches && paramMatches[2]) {
            const { key, repeat, optional } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$dynamic$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseMatchedParameter"])(paramMatches[2]);
            groups[key] = {
                pos: groupIndex++,
                repeat,
                optional
            };
            if (includePrefix && paramMatches[1]) {
                segments.push(`/${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$escape$2d$regexp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["escapeStringRegexp"])(paramMatches[1])}`);
            }
            let s = repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
            // Remove the leading slash if includePrefix already added it.
            if (includePrefix && paramMatches[1]) {
                s = s.substring(1);
            }
            segments.push(s);
        } else {
            segments.push(`/${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$escape$2d$regexp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["escapeStringRegexp"])(segment)}`);
        }
        // If there's a suffix, add it to the segments if it's enabled.
        if (includeSuffix && paramMatches && paramMatches[3]) {
            segments.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$escape$2d$regexp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["escapeStringRegexp"])(paramMatches[3]));
        }
    }
    return {
        parameterizedRoute: segments.join(''),
        groups
    };
}
function getRouteRegex(normalizedRoute, { includeSuffix = false, includePrefix = false, excludeOptionalTrailingSlash = false } = {}) {
    const { parameterizedRoute, groups } = getParametrizedRoute(normalizedRoute, includeSuffix, includePrefix);
    let re = parameterizedRoute;
    if (!excludeOptionalTrailingSlash) {
        re += '(?:/)?';
    }
    return {
        re: new RegExp(`^${re}$`),
        groups: groups
    };
}
/**
 * Builds a function to generate a minimal routeKey using only a-z and minimal
 * number of characters.
 */ function buildGetSafeRouteKey() {
    let i = 0;
    return ()=>{
        let routeKey = '';
        let j = ++i;
        while(j > 0){
            routeKey += String.fromCharCode(97 + (j - 1) % 26);
            j = Math.floor((j - 1) / 26);
        }
        return routeKey;
    };
}
function getSafeKeyFromSegment({ interceptionMarker, getSafeRouteKey, segment, routeKeys, keyPrefix, backreferenceDuplicateKeys }) {
    const { key, optional, repeat } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$dynamic$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseMatchedParameter"])(segment);
    // replace any non-word characters since they can break
    // the named regex
    let cleanedKey = key.replace(/\W/g, '');
    if (keyPrefix) {
        cleanedKey = `${keyPrefix}${cleanedKey}`;
    }
    let invalidKey = false;
    // check if the key is still invalid and fallback to using a known
    // safe key
    if (cleanedKey.length === 0 || cleanedKey.length > 30) {
        invalidKey = true;
    }
    if (!isNaN(parseInt(cleanedKey.slice(0, 1)))) {
        invalidKey = true;
    }
    if (invalidKey) {
        cleanedKey = getSafeRouteKey();
    }
    const duplicateKey = cleanedKey in routeKeys;
    if (keyPrefix) {
        routeKeys[cleanedKey] = `${keyPrefix}${key}`;
    } else {
        routeKeys[cleanedKey] = key;
    }
    // if the segment has an interception marker, make sure that's part of the regex pattern
    // this is to ensure that the route with the interception marker doesn't incorrectly match
    // the non-intercepted route (ie /app/(.)[username] should not match /app/[username])
    const interceptionPrefix = interceptionMarker ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$escape$2d$regexp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["escapeStringRegexp"])(interceptionMarker) : '';
    let pattern;
    if (duplicateKey && backreferenceDuplicateKeys) {
        // Use a backreference to the key to ensure that the key is the same value
        // in each of the placeholders.
        pattern = `\\k<${cleanedKey}>`;
    } else if (repeat) {
        pattern = `(?<${cleanedKey}>.+?)`;
    } else {
        pattern = `(?<${cleanedKey}>[^/]+?)`;
    }
    return {
        key,
        pattern: optional ? `(?:/${interceptionPrefix}${pattern})?` : `/${interceptionPrefix}${pattern}`,
        cleanedKey: cleanedKey,
        optional,
        repeat
    };
}
function getNamedParametrizedRoute(route, prefixRouteKeys, includeSuffix, includePrefix, backreferenceDuplicateKeys, reference = {
    names: {},
    intercepted: {}
}) {
    const getSafeRouteKey = buildGetSafeRouteKey();
    const routeKeys = {};
    const segments = [];
    const inverseParts = [];
    // Ensure we don't mutate the original reference object.
    reference = structuredClone(reference);
    for (const segment of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$trailing$2d$slash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["removeTrailingSlash"])(route).slice(1).split('/')){
        const hasInterceptionMarker = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$routes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INTERCEPTION_ROUTE_MARKERS"].some((m)=>segment.startsWith(m));
        const paramMatches = segment.match(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$dynamic$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PARAMETER_PATTERN"]) // Check for parameters
        ;
        const interceptionMarker = hasInterceptionMarker ? paramMatches?.[1] : undefined;
        let keyPrefix;
        if (interceptionMarker && paramMatches?.[2]) {
            keyPrefix = prefixRouteKeys ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_INTERCEPTION_MARKER_PREFIX"] : undefined;
            reference.intercepted[paramMatches[2]] = interceptionMarker;
        } else if (paramMatches?.[2] && reference.intercepted[paramMatches[2]]) {
            keyPrefix = prefixRouteKeys ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_INTERCEPTION_MARKER_PREFIX"] : undefined;
        } else {
            keyPrefix = prefixRouteKeys ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_QUERY_PARAM_PREFIX"] : undefined;
        }
        if (interceptionMarker && paramMatches && paramMatches[2]) {
            // If there's an interception marker, add it to the segments.
            const { key, pattern, cleanedKey, repeat, optional } = getSafeKeyFromSegment({
                getSafeRouteKey,
                interceptionMarker,
                segment: paramMatches[2],
                routeKeys,
                keyPrefix,
                backreferenceDuplicateKeys
            });
            segments.push(pattern);
            inverseParts.push(`/${paramMatches[1]}:${reference.names[key] ?? cleanedKey}${repeat ? optional ? '*' : '+' : ''}`);
            reference.names[key] ??= cleanedKey;
        } else if (paramMatches && paramMatches[2]) {
            // If there's a prefix, add it to the segments if it's enabled.
            if (includePrefix && paramMatches[1]) {
                segments.push(`/${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$escape$2d$regexp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["escapeStringRegexp"])(paramMatches[1])}`);
                inverseParts.push(`/${paramMatches[1]}`);
            }
            const { key, pattern, cleanedKey, repeat, optional } = getSafeKeyFromSegment({
                getSafeRouteKey,
                segment: paramMatches[2],
                routeKeys,
                keyPrefix,
                backreferenceDuplicateKeys
            });
            // Remove the leading slash if includePrefix already added it.
            let s = pattern;
            if (includePrefix && paramMatches[1]) {
                s = s.substring(1);
            }
            segments.push(s);
            inverseParts.push(`/:${reference.names[key] ?? cleanedKey}${repeat ? optional ? '*' : '+' : ''}`);
            reference.names[key] ??= cleanedKey;
        } else {
            segments.push(`/${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$escape$2d$regexp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["escapeStringRegexp"])(segment)}`);
            inverseParts.push(`/${segment}`);
        }
        // If there's a suffix, add it to the segments if it's enabled.
        if (includeSuffix && paramMatches && paramMatches[3]) {
            segments.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$escape$2d$regexp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["escapeStringRegexp"])(paramMatches[3]));
            inverseParts.push(paramMatches[3]);
        }
    }
    return {
        namedParameterizedRoute: segments.join(''),
        routeKeys,
        pathToRegexpPattern: inverseParts.join(''),
        reference
    };
}
function getNamedRouteRegex(normalizedRoute, options) {
    const result = getNamedParametrizedRoute(normalizedRoute, options.prefixRouteKeys, options.includeSuffix ?? false, options.includePrefix ?? false, options.backreferenceDuplicateKeys ?? false, options.reference);
    let namedRegex = result.namedParameterizedRoute;
    if (!options.excludeOptionalTrailingSlash) {
        namedRegex += '(?:/)?';
    }
    return {
        ...getRouteRegex(normalizedRoute, options),
        namedRegex: `^${namedRegex}$`,
        routeKeys: result.routeKeys,
        pathToRegexpPattern: result.pathToRegexpPattern,
        reference: result.reference
    };
}
function getNamedMiddlewareRegex(normalizedRoute, options) {
    const { parameterizedRoute } = getParametrizedRoute(normalizedRoute, false, false);
    const { catchAll = true } = options;
    if (parameterizedRoute === '/') {
        let catchAllRegex = catchAll ? '.*' : '';
        return {
            namedRegex: `^/${catchAllRegex}$`
        };
    }
    const { namedParameterizedRoute } = getNamedParametrizedRoute(normalizedRoute, false, false, false, false, undefined);
    let catchAllGroupedRegex = catchAll ? '(?:(/.*)?)' : '';
    return {
        namedRegex: `^${namedParameterizedRoute}${catchAllGroupedRegex}$`
    };
} //# sourceMappingURL=route-regex.js.map
}),
"[project]/node_modules/next/dist/esm/server/app-render/get-short-dynamic-param-type.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dynamicParamTypes",
    ()=>dynamicParamTypes
]);
const dynamicParamTypes = {
    catchall: 'c',
    'catchall-intercepted-(..)(..)': 'ci(..)(..)',
    'catchall-intercepted-(.)': 'ci(.)',
    'catchall-intercepted-(..)': 'ci(..)',
    'catchall-intercepted-(...)': 'ci(...)',
    'optional-catchall': 'oc',
    dynamic: 'd',
    'dynamic-intercepted-(..)(..)': 'di(..)(..)',
    'dynamic-intercepted-(.)': 'di(.)',
    'dynamic-intercepted-(..)': 'di(..)',
    'dynamic-intercepted-(...)': 'di(...)'
}; //# sourceMappingURL=get-short-dynamic-param-type.js.map
}),
"[project]/node_modules/next/dist/esm/server/request/fallback-params.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createOpaqueFallbackRouteParams",
    ()=>createOpaqueFallbackRouteParams,
    "getFallbackRouteParams",
    ()=>getFallbackRouteParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$segment$2d$config$2f$app$2f$app$2d$segments$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/build/segment-config/app/app-segments.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/invariant-error.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$route$2d$matcher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/router/utils/route-matcher.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$route$2d$regex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/router/utils/route-regex.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$get$2d$short$2d$dynamic$2d$param$2d$type$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/app-render/get-short-dynamic-param-type.js [app-rsc] (ecmascript)");
;
;
;
;
;
function getParamKeys(page) {
    const pattern = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$route$2d$regex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRouteRegex"])(page);
    const matcher = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$route$2d$matcher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRouteMatcher"])(pattern);
    // Get the default list of allowed params.
    return Object.keys(matcher(page));
}
function createOpaqueFallbackRouteParams(fallbackRouteParams) {
    // If there are no fallback route params, we can return early.
    if (fallbackRouteParams.length === 0) return null;
    // As we're creating unique keys for each of the dynamic route params, we only
    // need to generate a unique ID once per request because each of the keys will
    // be also be unique.
    const uniqueID = Math.random().toString(16).slice(2);
    const keys = new Map();
    // Generate a unique key for the fallback route param, if this key is found
    // in the static output, it represents a bug in cache components.
    for (const { paramName, paramType } of fallbackRouteParams){
        keys.set(paramName, [
            `%%drp:${paramName}:${uniqueID}%%`,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$get$2d$short$2d$dynamic$2d$param$2d$type$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dynamicParamTypes"][paramType]
        ]);
    }
    return keys;
}
function getFallbackRouteParams(page, routeModule) {
    // First, get the fallback route params based on the provided page.
    const unknownParamKeys = new Set(getParamKeys(page));
    // Needed when processing fallback route params for catchall routes in
    // parallel segments, derive from pathname. This is similar to
    // getDynamicParam's pagePath parsing logic.
    const pathSegments = page.split('/').filter(Boolean);
    const collected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$segment$2d$config$2f$app$2f$app$2d$segments$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["collectFallbackRouteParams"])(routeModule);
    // Then, we have to get the fallback route params from the segments that are
    // associated with parallel route segments.
    const fallbackRouteParams = [];
    for (const fallbackRouteParam of collected){
        if (fallbackRouteParam.isParallelRouteParam) {
            // Try to see if we can resolve this parameter from the page that was
            // passed in.
            if (unknownParamKeys.has(fallbackRouteParam.paramName)) {
                continue;
            }
            if (fallbackRouteParam.paramType === 'optional-catchall' || fallbackRouteParam.paramType === 'catchall') {
                // If there are any fallback route segments then we can't use the
                // pathname to derive the value because it's not complete. We can
                // make this assumption because the routes are always resolved left
                // to right and the catchall is always the last segment, so any
                // route parameters that are unknown will always contribute to the
                // pathname and therefore the catchall param too.
                if (collected.some((param)=>!param.isParallelRouteParam && unknownParamKeys.has(param.paramName))) {
                    fallbackRouteParams.push(fallbackRouteParam);
                    continue;
                }
                if (pathSegments.length === 0 && fallbackRouteParam.paramType !== 'optional-catchall') {
                    // We shouldn't be able to match a catchall segment without any path
                    // segments if it's not an optional catchall.
                    throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"](`Unexpected empty path segments match for a pathname "${page}" with param "${fallbackRouteParam.paramName}" of type "${fallbackRouteParam.paramType}"`), "__NEXT_ERROR_CODE", {
                        value: "E792",
                        enumerable: false,
                        configurable: true
                    });
                }
            // The path segments are not empty, and the segments didn't contain any
            // unknown params, so we know that this particular fallback route param
            // route param is not actually unknown, and is known. We can skip adding
            // it to the fallback route params.
            } else {
                // This is some other type of route param that shouldn't get resolved
                // statically.
                throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"](`Unexpected match for a pathname "${page}" with a param "${fallbackRouteParam.paramName}" of type "${fallbackRouteParam.paramType}"`), "__NEXT_ERROR_CODE", {
                    value: "E791",
                    enumerable: false,
                    configurable: true
                });
            }
        } else if (unknownParamKeys.has(fallbackRouteParam.paramName)) {
            // As this is a non-parallel route segment, and it exists in the unknown
            // param keys, we know it's a fallback route param.
            fallbackRouteParams.push(fallbackRouteParam);
        }
    }
    return createOpaqueFallbackRouteParams(fallbackRouteParams);
} //# sourceMappingURL=fallback-params.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/esm/server/app-render/encryption-utils.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Keep the key in memory as it should never change during the lifetime of the server in
// both development and production.
__turbopack_context__.s([
    "arrayBufferToString",
    ()=>arrayBufferToString,
    "decrypt",
    ()=>decrypt,
    "encrypt",
    ()=>encrypt,
    "generateEncryptionKeyBase64",
    ()=>generateEncryptionKeyBase64,
    "getActionEncryptionKey",
    ()=>getActionEncryptionKey,
    "getClientReferenceManifestSingleton",
    ()=>getClientReferenceManifestSingleton,
    "getServerModuleMap",
    ()=>getServerModuleMap,
    "setReferenceManifestsSingleton",
    ()=>setReferenceManifestsSingleton,
    "stringToUint8Array",
    ()=>stringToUint8Array
]);
let __next_encryption_key_generation_promise = null;
let __next_loaded_action_key;
let __next_internal_development_raw_action_key;
function arrayBufferToString(buffer) {
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    // @anonrig: V8 has a limit of 65535 arguments in a function.
    // For len < 65535, this is faster.
    // https://github.com/vercel/next.js/pull/56377#pullrequestreview-1656181623
    if (len < 65535) {
        return String.fromCharCode.apply(null, bytes);
    }
    let binary = "";
    for(let i = 0; i < len; i++){
        binary += String.fromCharCode(bytes[i]);
    }
    return binary;
}
function stringToUint8Array(binary) {
    const len = binary.length;
    const arr = new Uint8Array(len);
    for(let i = 0; i < len; i++){
        arr[i] = binary.charCodeAt(i);
    }
    return arr;
}
function encrypt(key, iv, data) {
    return crypto.subtle.encrypt({
        name: "AES-GCM",
        iv
    }, key, data);
}
function decrypt(key, iv, data) {
    return crypto.subtle.decrypt({
        name: "AES-GCM",
        iv
    }, key, data);
}
async function generateEncryptionKeyBase64(dev) {
    // For development, we just keep one key in memory for all actions.
    // This makes things faster.
    if (dev) {
        if (typeof __next_internal_development_raw_action_key !== "undefined") {
            return __next_internal_development_raw_action_key;
        }
    }
    // This avoids it being generated multiple times in parallel.
    if (!__next_encryption_key_generation_promise) {
        __next_encryption_key_generation_promise = new Promise(async (resolve, reject)=>{
            try {
                const key = await crypto.subtle.generateKey({
                    name: "AES-GCM",
                    length: 256
                }, true, [
                    "encrypt",
                    "decrypt"
                ]);
                const exported = await crypto.subtle.exportKey("raw", key);
                const b64 = btoa(arrayBufferToString(exported));
                resolve([
                    key,
                    b64
                ]);
            } catch (error) {
                reject(error);
            }
        });
    }
    const [key, b64] = await __next_encryption_key_generation_promise;
    __next_loaded_action_key = key;
    if (dev) {
        __next_internal_development_raw_action_key = b64;
    }
    return b64;
}
// This is a global singleton that is used to encode/decode the action bound args from
// the closure. This can't be using a AsyncLocalStorage as it might happen on the module
// level. Since the client reference manifest won't be mutated, let's use a global singleton
// to keep it.
const SERVER_ACTION_MANIFESTS_SINGLETON = Symbol.for("next.server.action-manifests");
function setReferenceManifestsSingleton({ clientReferenceManifest, serverActionsManifest, serverModuleMap }) {
    // @ts-ignore
    globalThis[SERVER_ACTION_MANIFESTS_SINGLETON] = {
        clientReferenceManifest,
        serverActionsManifest,
        serverModuleMap
    };
}
function getServerModuleMap() {
    const serverActionsManifestSingleton = globalThis[SERVER_ACTION_MANIFESTS_SINGLETON];
    if (!serverActionsManifestSingleton) {
        throw new Error("Missing manifest for Server Actions. This is a bug in Next.js");
    }
    return serverActionsManifestSingleton.serverModuleMap;
}
function getClientReferenceManifestSingleton() {
    const serverActionsManifestSingleton = globalThis[SERVER_ACTION_MANIFESTS_SINGLETON];
    if (!serverActionsManifestSingleton) {
        throw new Error("Missing manifest for Server Actions. This is a bug in Next.js");
    }
    return serverActionsManifestSingleton.clientReferenceManifest;
}
async function getActionEncryptionKey() {
    if (__next_loaded_action_key) {
        return __next_loaded_action_key;
    }
    const serverActionsManifestSingleton = globalThis[SERVER_ACTION_MANIFESTS_SINGLETON];
    if (!serverActionsManifestSingleton) {
        throw new Error("Missing manifest for Server Actions. This is a bug in Next.js");
    }
    const rawKey = process.env.NEXT_SERVER_ACTIONS_ENCRYPTION_KEY || serverActionsManifestSingleton.serverActionsManifest.encryptionKey;
    if (rawKey === undefined) {
        throw new Error("Missing encryption key for Server Actions");
    }
    __next_loaded_action_key = await crypto.subtle.importKey("raw", stringToUint8Array(atob(rawKey)), "AES-GCM", true, [
        "encrypt",
        "decrypt"
    ]);
    return __next_loaded_action_key;
} //# sourceMappingURL=encryption-utils.js.map
}),
"[project]/node_modules/next/dist/esm/shared/lib/router/utils/html-bots.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This regex contains the bots that we need to do a blocking render for and can't safely stream the response
// due to how they parse the DOM. For example, they might explicitly check for metadata in the `head` tag, so we can't stream metadata tags after the `head` was sent.
// Note: The pattern [\w-]+-Google captures all Google crawlers with "-Google" suffix (e.g., Mediapartners-Google, AdsBot-Google, Storebot-Google)
// as well as crawlers starting with "Google-" (e.g., Google-PageRenderer, Google-InspectionTool)
__turbopack_context__.s([
    "HTML_LIMITED_BOT_UA_RE",
    ()=>HTML_LIMITED_BOT_UA_RE
]);
const HTML_LIMITED_BOT_UA_RE = /[\w-]+-Google|Google-[\w-]+|Chrome-Lighthouse|Slurp|DuckDuckBot|baiduspider|yandex|sogou|bitlybot|tumblr|vkShare|quora link preview|redditbot|ia_archiver|Bingbot|BingPreview|applebot|facebookexternalhit|facebookcatalog|Twitterbot|LinkedInBot|Slackbot|Discordbot|WhatsApp|SkypeUriPreview|Yeti|googleweblight/i; //# sourceMappingURL=html-bots.js.map
}),
"[project]/node_modules/next/dist/esm/shared/lib/router/utils/is-bot.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HTML_LIMITED_BOT_UA_RE_STRING",
    ()=>HTML_LIMITED_BOT_UA_RE_STRING,
    "getBotType",
    ()=>getBotType,
    "isBot",
    ()=>isBot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$html$2d$bots$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/router/utils/html-bots.js [app-rsc] (ecmascript)");
;
// Bot crawler that will spin up a headless browser and execute JS.
// Only the main Googlebot search crawler executes JavaScript, not other Google crawlers.
// x-ref: https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers
// This regex specifically matches "Googlebot" but NOT "Mediapartners-Google", "AdsBot-Google", etc.
const HEADLESS_BROWSER_BOT_UA_RE = /Googlebot(?!-)|Googlebot$/i;
const HTML_LIMITED_BOT_UA_RE_STRING = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$html$2d$bots$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HTML_LIMITED_BOT_UA_RE"].source;
;
function isDomBotUA(userAgent) {
    return HEADLESS_BROWSER_BOT_UA_RE.test(userAgent);
}
function isHtmlLimitedBotUA(userAgent) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$html$2d$bots$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HTML_LIMITED_BOT_UA_RE"].test(userAgent);
}
function isBot(userAgent) {
    return isDomBotUA(userAgent) || isHtmlLimitedBotUA(userAgent);
}
function getBotType(userAgent) {
    if (isDomBotUA(userAgent)) {
        return 'dom';
    }
    if (isHtmlLimitedBotUA(userAgent)) {
        return 'html';
    }
    return undefined;
} //# sourceMappingURL=is-bot.js.map
}),
"[project]/node_modules/next/dist/esm/server/lib/streaming-metadata.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isHtmlBotRequest",
    ()=>isHtmlBotRequest,
    "shouldServeStreamingMetadata",
    ()=>shouldServeStreamingMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$is$2d$bot$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/router/utils/is-bot.js [app-rsc] (ecmascript) <locals>");
;
function shouldServeStreamingMetadata(userAgent, htmlLimitedBots) {
    const blockingMetadataUARegex = new RegExp(htmlLimitedBots || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$is$2d$bot$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HTML_LIMITED_BOT_UA_RE_STRING"], 'i');
    // Only block metadata for HTML-limited bots
    if (userAgent && blockingMetadataUARegex.test(userAgent)) {
        return false;
    }
    return true;
}
function isHtmlBotRequest(req) {
    const ua = req.headers['user-agent'] || '';
    const botType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$is$2d$bot$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getBotType"])(ua);
    return botType === 'html';
} //# sourceMappingURL=streaming-metadata.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/esm/shared/lib/page-path/ensure-leading-slash.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * For a given page path, this function ensures that there is a leading slash.
 * If there is not a leading slash, one is added, otherwise it is noop.
 */ __turbopack_context__.s([
    "ensureLeadingSlash",
    ()=>ensureLeadingSlash
]);
function ensureLeadingSlash(path) {
    return path.startsWith("/") ? path : "/" + path;
} //# sourceMappingURL=ensure-leading-slash.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalizeAppPath",
    ()=>normalizeAppPath,
    "normalizeRscURL",
    ()=>normalizeRscURL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$page$2d$path$2f$ensure$2d$leading$2d$slash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Transferências/elos-creative/node_modules/next/dist/esm/shared/lib/page-path/ensure-leading-slash.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../segment'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
function normalizeAppPath(route) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$page$2d$path$2f$ensure$2d$leading$2d$slash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureLeadingSlash"])(route.split("/").reduce((pathname, segment, index, segments)=>{
        // Empty segments are ignored.
        if (!segment) {
            return pathname;
        }
        // Groups are ignored.
        if (isGroupSegment(segment)) {
            return pathname;
        }
        // Parallel segments are ignored.
        if (segment[0] === "@") {
            return pathname;
        }
        // The last segment (if it's a leaf) should be ignored.
        if ((segment === "page" || segment === "route") && index === segments.length - 1) {
            return pathname;
        }
        return pathname + "/" + segment;
    }, ""));
}
function normalizeRscURL(url) {
    return url.replace(/\.rsc($|\?)/, "$1");
} //# sourceMappingURL=app-paths.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/esm/shared/lib/router/utils/parse-path.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Given a path this function will find the pathname, query and hash and return
 * them. This is useful to parse full paths on the client side.
 * @param path A path to parse e.g. /foo/bar?id=1#hash
 */ __turbopack_context__.s([
    "parsePath",
    ()=>parsePath
]);
function parsePath(path) {
    const hashIndex = path.indexOf("#");
    const queryIndex = path.indexOf("?");
    const hasQuery = queryIndex > -1 && (hashIndex < 0 || queryIndex < hashIndex);
    if (hasQuery || hashIndex > -1) {
        return {
            pathname: path.substring(0, hasQuery ? queryIndex : hashIndex),
            query: hasQuery ? path.substring(queryIndex, hashIndex > -1 ? hashIndex : undefined) : "",
            hash: hashIndex > -1 ? path.slice(hashIndex) : ""
        };
    }
    return {
        pathname: path,
        query: "",
        hash: ""
    };
} //# sourceMappingURL=parse-path.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/esm/shared/lib/router/utils/path-has-prefix.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "pathHasPrefix",
    ()=>pathHasPrefix
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$path$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Transferências/elos-creative/node_modules/next/dist/esm/shared/lib/router/utils/parse-path.js [app-rsc] (ecmascript)");
;
function pathHasPrefix(path, prefix) {
    if (typeof path !== "string") {
        return false;
    }
    const { pathname } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$path$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parsePath"])(path);
    return pathname === prefix || pathname.startsWith(prefix + "/");
} //# sourceMappingURL=path-has-prefix.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/esm/server/app-render/action-utils.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createServerModuleMap",
    ()=>createServerModuleMap,
    "selectWorkerForForwarding",
    ()=>selectWorkerForForwarding
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Transferências/elos-creative/node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Transferências/elos-creative/node_modules/next/dist/esm/shared/lib/router/utils/path-has-prefix.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../shared/lib/router/utils/remove-path-prefix'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
function createServerModuleMap({ serverActionsManifest, pageName }) {
    return new Proxy({}, {
        get: (_, id)=>{
            return {
                id: serverActionsManifest[("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "node"][id].workers[normalizeWorkerPageName(pageName)],
                name: id,
                chunks: []
            };
        }
    });
}
function selectWorkerForForwarding(actionId, pageName, serverActionsManifest) {
    var _serverActionsManifest__actionId;
    const workers = (_serverActionsManifest__actionId = serverActionsManifest[("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "node"][actionId]) == null ? void 0 : _serverActionsManifest__actionId.workers;
    const workerName = normalizeWorkerPageName(pageName);
    // no workers, nothing to forward to
    if (!workers) return;
    // if there is a worker for this page, no need to forward it.
    if (workers[workerName]) {
        return;
    }
    // otherwise, grab the first worker that has a handler for this action id
    return denormalizeWorkerPageName(Object.keys(workers)[0]);
}
/**
 * The flight entry loader keys actions by bundlePath.
 * bundlePath corresponds with the relative path (including 'app') to the page entrypoint.
 */ function normalizeWorkerPageName(pageName) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pathHasPrefix"])(pageName, "app")) {
        return pageName;
    }
    return "app" + pageName;
}
/**
 * Converts a bundlePath (relative path to the entrypoint) to a routable page name
 */ function denormalizeWorkerPageName(bundlePath) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeAppPath"])(removePathPrefix(bundlePath, "app"));
} //# sourceMappingURL=action-utils.js.map
}),
"[project]/node_modules/next/dist/esm/server/lib/server-action-request-meta.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getIsPossibleServerAction",
    ()=>getIsPossibleServerAction,
    "getServerActionRequestMetadata",
    ()=>getServerActionRequestMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/client/components/app-router-headers.js [app-rsc] (ecmascript)");
;
function getServerActionRequestMetadata(req) {
    let actionId;
    let contentType;
    if (req.headers instanceof Headers) {
        actionId = req.headers.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ACTION_HEADER"]) ?? null;
        contentType = req.headers.get('content-type');
    } else {
        actionId = req.headers[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ACTION_HEADER"]] ?? null;
        contentType = req.headers['content-type'] ?? null;
    }
    const isURLEncodedAction = Boolean(req.method === 'POST' && contentType === 'application/x-www-form-urlencoded');
    const isMultipartAction = Boolean(req.method === 'POST' && (contentType == null ? void 0 : contentType.startsWith('multipart/form-data')));
    const isFetchAction = Boolean(actionId !== undefined && typeof actionId === 'string' && req.method === 'POST');
    const isPossibleServerAction = Boolean(isFetchAction || isURLEncodedAction || isMultipartAction);
    return {
        actionId,
        isURLEncodedAction,
        isMultipartAction,
        isFetchAction,
        isPossibleServerAction
    };
}
function getIsPossibleServerAction(req) {
    return getServerActionRequestMetadata(req).isPossibleServerAction;
} //# sourceMappingURL=server-action-request-meta.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/esm/client/components/app-router-headers.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ACTION",
    ()=>ACTION,
    "FLIGHT_PARAMETERS",
    ()=>FLIGHT_PARAMETERS,
    "NEXT_DID_POSTPONE_HEADER",
    ()=>NEXT_DID_POSTPONE_HEADER,
    "NEXT_ROUTER_PREFETCH_HEADER",
    ()=>NEXT_ROUTER_PREFETCH_HEADER,
    "NEXT_ROUTER_STATE_TREE",
    ()=>NEXT_ROUTER_STATE_TREE,
    "NEXT_RSC_UNION_QUERY",
    ()=>NEXT_RSC_UNION_QUERY,
    "NEXT_URL",
    ()=>NEXT_URL,
    "RSC_CONTENT_TYPE_HEADER",
    ()=>RSC_CONTENT_TYPE_HEADER,
    "RSC_HEADER",
    ()=>RSC_HEADER
]);
const RSC_HEADER = "RSC";
const ACTION = "Next-Action";
const NEXT_ROUTER_STATE_TREE = "Next-Router-State-Tree";
const NEXT_ROUTER_PREFETCH_HEADER = "Next-Router-Prefetch";
const NEXT_URL = "Next-Url";
const RSC_CONTENT_TYPE_HEADER = "text/x-component";
const FLIGHT_PARAMETERS = [
    [
        RSC_HEADER
    ],
    [
        NEXT_ROUTER_STATE_TREE
    ],
    [
        NEXT_ROUTER_PREFETCH_HEADER
    ]
];
const NEXT_RSC_UNION_QUERY = "_rsc";
const NEXT_DID_POSTPONE_HEADER = "x-nextjs-postponed"; //# sourceMappingURL=app-router-headers.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/esm/shared/lib/router/utils/is-bot.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isBot",
    ()=>isBot
]);
function isBot(userAgent) {
    return /Googlebot|Mediapartners-Google|AdsBot-Google|googleweblight|Storebot-Google|Google-PageRenderer|Bingbot|BingPreview|Slurp|DuckDuckBot|baiduspider|yandex|sogou|LinkedInBot|bitlybot|tumblr|vkShare|quora link preview|facebookexternalhit|facebookcatalog|Twitterbot|applebot|redditbot|Slackbot|Discordbot|WhatsApp|SkypeUriPreview|ia_archiver/i.test(userAgent);
} //# sourceMappingURL=is-bot.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/esm/lib/detached-promise.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * A `Promise.withResolvers` implementation that exposes the `resolve` and
 * `reject` functions on a `Promise`.
 *
 * @see https://tc39.es/proposal-promise-with-resolvers/
 */ __turbopack_context__.s([
    "DetachedPromise",
    ()=>DetachedPromise
]);
class DetachedPromise {
    constructor(){
        let resolve;
        let reject;
        // Create the promise and assign the resolvers to the object.
        this.promise = new Promise((res, rej)=>{
            resolve = res;
            reject = rej;
        });
        // We know that resolvers is defined because the Promise constructor runs
        // synchronously.
        this.resolve = resolve;
        this.reject = reject;
    }
} //# sourceMappingURL=detached-promise.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/esm/lib/batcher.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Batcher",
    ()=>Batcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$detached$2d$promise$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Transferências/elos-creative/node_modules/next/dist/esm/lib/detached-promise.js [app-rsc] (ecmascript)");
;
class Batcher {
    constructor(cacheKeyFn, /**
     * A function that will be called to schedule the wrapped function to be
     * executed. This defaults to a function that will execute the function
     * immediately.
     */ schedulerFn = (fn)=>fn()){
        this.cacheKeyFn = cacheKeyFn;
        this.schedulerFn = schedulerFn;
        this.pending = new Map();
    }
    static create(options) {
        return new Batcher(options == null ? void 0 : options.cacheKeyFn, options == null ? void 0 : options.schedulerFn);
    }
    /**
   * Wraps a function in a promise that will be resolved or rejected only once
   * for a given key. This will allow multiple calls to the function to be
   * made, but only one will be executed at a time. The result of the first
   * call will be returned to all callers.
   *
   * @param key the key to use for the cache
   * @param fn the function to wrap
   * @returns a promise that resolves to the result of the function
   */ async batch(key, fn) {
        const cacheKey = this.cacheKeyFn ? await this.cacheKeyFn(key) : key;
        if (cacheKey === null) {
            return fn(cacheKey, Promise.resolve);
        }
        const pending = this.pending.get(cacheKey);
        if (pending) return pending;
        const { promise, resolve, reject } = new __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$detached$2d$promise$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DetachedPromise"]();
        this.pending.set(cacheKey, promise);
        this.schedulerFn(async ()=>{
            try {
                const result = await fn(cacheKey, resolve);
                // Resolving a promise multiple times is a no-op, so we can safely
                // resolve all pending promises with the same result.
                resolve(result);
            } catch (err) {
                reject(err);
            } finally{
                this.pending.delete(cacheKey);
            }
        });
        return promise;
    }
} //# sourceMappingURL=batcher.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/esm/server/response-cache/index.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ResponseCache
]);
(()=>{
    const e = new Error("Cannot find module '../future/route-kind'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$batcher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Transferências/elos-creative/node_modules/next/dist/esm/lib/batcher.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../lib/scheduler'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './utils'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './types'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
;
class ResponseCache {
    constructor(minimalMode){
        this.batcher = __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$batcher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Batcher"].create({
            // Ensure on-demand revalidate doesn't block normal requests, it should be
            // safe to run an on-demand revalidate for the same key as a normal request.
            cacheKeyFn: ({ key, isOnDemandRevalidate })=>`${key}-${isOnDemandRevalidate ? "1" : "0"}`,
            // We wait to do any async work until after we've added our promise to
            // `pendingResponses` to ensure that any any other calls will reuse the
            // same promise until we've fully finished our work.
            schedulerFn: scheduleOnNextTick
        });
        // this is a hack to avoid Webpack knowing this is equal to this.minimalMode
        // because we replace this.minimalMode to true in production bundles.
        const minimalModeKey = "minimalMode";
        this[minimalModeKey] = minimalMode;
    }
    async get(key, responseGenerator, context) {
        // If there is no key for the cache, we can't possibly look this up in the
        // cache so just return the result of the response generator.
        if (!key) return responseGenerator(false, null);
        const { incrementalCache, isOnDemandRevalidate = false } = context;
        const response = await this.batcher.batch({
            key,
            isOnDemandRevalidate
        }, async (cacheKey, resolve)=>{
            var _this_previousCacheItem;
            // We keep the previous cache entry around to leverage when the
            // incremental cache is disabled in minimal mode.
            if (this.minimalMode && ((_this_previousCacheItem = this.previousCacheItem) == null ? void 0 : _this_previousCacheItem.key) === cacheKey && this.previousCacheItem.expiresAt > Date.now()) {
                return this.previousCacheItem.entry;
            }
            // Coerce the kindHint into a given kind for the incremental cache.
            let kindHint;
            if (context.routeKind === RouteKind.APP_PAGE || context.routeKind === RouteKind.APP_ROUTE) {
                kindHint = "app";
            } else if (context.routeKind === RouteKind.PAGES) {
                kindHint = "pages";
            }
            let resolved = false;
            let cachedResponse = null;
            try {
                cachedResponse = !this.minimalMode ? await incrementalCache.get(key, {
                    kindHint
                }) : null;
                if (cachedResponse && !isOnDemandRevalidate) {
                    var _cachedResponse_value;
                    if (((_cachedResponse_value = cachedResponse.value) == null ? void 0 : _cachedResponse_value.kind) === "FETCH") {
                        throw new Error(`invariant: unexpected cachedResponse of kind fetch in response cache`);
                    }
                    resolve({
                        ...cachedResponse,
                        revalidate: cachedResponse.curRevalidate
                    });
                    resolved = true;
                    if (!cachedResponse.isStale || context.isPrefetch) {
                        // The cached value is still valid, so we don't need
                        // to update it yet.
                        return null;
                    }
                }
                const cacheEntry = await responseGenerator(resolved, cachedResponse, true);
                // If the cache entry couldn't be generated, we don't want to cache
                // the result.
                if (!cacheEntry) {
                    // Unset the previous cache item if it was set.
                    if (this.minimalMode) this.previousCacheItem = undefined;
                    return null;
                }
                const resolveValue = await fromResponseCacheEntry({
                    ...cacheEntry,
                    isMiss: !cachedResponse
                });
                if (!resolveValue) {
                    // Unset the previous cache item if it was set.
                    if (this.minimalMode) this.previousCacheItem = undefined;
                    return null;
                }
                // For on-demand revalidate wait to resolve until cache is set.
                // Otherwise resolve now.
                if (!isOnDemandRevalidate && !resolved) {
                    resolve(resolveValue);
                    resolved = true;
                }
                if (typeof resolveValue.revalidate !== "undefined") {
                    if (this.minimalMode) {
                        this.previousCacheItem = {
                            key: cacheKey,
                            entry: resolveValue,
                            expiresAt: Date.now() + 1000
                        };
                    } else {
                        await incrementalCache.set(key, resolveValue.value, {
                            revalidate: resolveValue.revalidate
                        });
                    }
                }
                return resolveValue;
            } catch (err) {
                // When a getStaticProps path is erroring we automatically re-set the
                // existing cache under a new expiration to prevent non-stop retrying.
                if (cachedResponse) {
                    await incrementalCache.set(key, cachedResponse.value, {
                        revalidate: Math.min(Math.max(cachedResponse.revalidate || 3, 3), 30)
                    });
                }
                // While revalidating in the background we can't reject as we already
                // resolved the cache entry so log the error here.
                if (resolved) {
                    console.error(err);
                    return null;
                }
                // We haven't resolved yet, so let's throw to indicate an error.
                throw err;
            }
        });
        return toResponseCacheEntry(response);
    }
} //# sourceMappingURL=index.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/esm/server/response-cache/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Transferências/elos-creative/node_modules/next/dist/esm/server/response-cache/index.js [app-rsc] (ecmascript) <locals>");
(()=>{
    const e = new Error("Cannot find module './types'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
}),
"[project]/node_modules/next/dist/esm/lib/fallback.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Describes the different fallback modes that a given page can have.
 */ __turbopack_context__.s([
    "FallbackMode",
    ()=>FallbackMode,
    "fallbackModeToFallbackField",
    ()=>fallbackModeToFallbackField,
    "parseFallbackField",
    ()=>parseFallbackField,
    "parseStaticPathsResult",
    ()=>parseStaticPathsResult
]);
var FallbackMode = /*#__PURE__*/ function(FallbackMode) {
    /**
   * A BLOCKING_STATIC_RENDER fallback will block the request until the page is
   * generated. No fallback page will be rendered, and users will have to wait
   * to render the page.
   */ FallbackMode["BLOCKING_STATIC_RENDER"] = "BLOCKING_STATIC_RENDER";
    /**
   * When set to PRERENDER, a fallback page will be sent to users in place of
   * forcing them to wait for the page to be generated. This allows the user to
   * see a rendered page earlier.
   */ FallbackMode["PRERENDER"] = "PRERENDER";
    /**
   * When set to NOT_FOUND, pages that are not already prerendered will result
   * in a not found response.
   */ FallbackMode["NOT_FOUND"] = "NOT_FOUND";
    return FallbackMode;
}({});
function parseFallbackField(fallbackField) {
    if (typeof fallbackField === 'string') {
        return "PRERENDER";
    } else if (fallbackField === null) {
        return "BLOCKING_STATIC_RENDER";
    } else if (fallbackField === false) {
        return "NOT_FOUND";
    } else if (fallbackField === undefined) {
        return undefined;
    } else {
        throw Object.defineProperty(new Error(`Invalid fallback option: ${fallbackField}. Fallback option must be a string, null, undefined, or false.`), "__NEXT_ERROR_CODE", {
            value: "E285",
            enumerable: false,
            configurable: true
        });
    }
}
function fallbackModeToFallbackField(fallback, page) {
    switch(fallback){
        case "BLOCKING_STATIC_RENDER":
            return null;
        case "NOT_FOUND":
            return false;
        case "PRERENDER":
            if (!page) {
                throw Object.defineProperty(new Error(`Invariant: expected a page to be provided when fallback mode is "${fallback}"`), "__NEXT_ERROR_CODE", {
                    value: "E422",
                    enumerable: false,
                    configurable: true
                });
            }
            return page;
        default:
            throw Object.defineProperty(new Error(`Invalid fallback mode: ${fallback}`), "__NEXT_ERROR_CODE", {
                value: "E254",
                enumerable: false,
                configurable: true
            });
    }
}
function parseStaticPathsResult(result) {
    if (result === true) {
        return "PRERENDER";
    } else if (result === 'blocking') {
        return "BLOCKING_STATIC_RENDER";
    } else {
        return "NOT_FOUND";
    }
} //# sourceMappingURL=fallback.js.map
}),
"[project]/node_modules/next/dist/esm/lib/detached-promise.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * A `Promise.withResolvers` implementation that exposes the `resolve` and
 * `reject` functions on a `Promise`.
 *
 * @see https://tc39.es/proposal-promise-with-resolvers/
 */ __turbopack_context__.s([
    "DetachedPromise",
    ()=>DetachedPromise
]);
class DetachedPromise {
    constructor(){
        let resolve;
        let reject;
        // Create the promise and assign the resolvers to the object.
        this.promise = new Promise((res, rej)=>{
            resolve = res;
            reject = rej;
        });
        // We know that resolvers is defined because the Promise constructor runs
        // synchronously.
        this.resolve = resolve;
        this.reject = reject;
    }
} //# sourceMappingURL=detached-promise.js.map
}),
"[project]/node_modules/next/dist/esm/lib/scheduler.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Schedules a function to be called on the next tick after the other promises
 * have been resolved.
 *
 * @param cb the function to schedule
 */ __turbopack_context__.s([
    "atLeastOneTask",
    ()=>atLeastOneTask,
    "scheduleImmediate",
    ()=>scheduleImmediate,
    "scheduleOnNextTick",
    ()=>scheduleOnNextTick,
    "waitAtLeastOneReactRenderTask",
    ()=>waitAtLeastOneReactRenderTask
]);
const scheduleOnNextTick = (cb)=>{
    // We use Promise.resolve().then() here so that the operation is scheduled at
    // the end of the promise job queue, we then add it to the next process tick
    // to ensure it's evaluated afterwards.
    //
    // This was inspired by the implementation of the DataLoader interface: https://github.com/graphql/dataloader/blob/d336bd15282664e0be4b4a657cb796f09bafbc6b/src/index.js#L213-L255
    //
    Promise.resolve().then(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        else {
            process.nextTick(cb);
        }
    });
};
const scheduleImmediate = (cb)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        setImmediate(cb);
    }
};
function atLeastOneTask() {
    return new Promise((resolve)=>scheduleImmediate(resolve));
}
function waitAtLeastOneReactRenderTask() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        return new Promise((r)=>setImmediate(r));
    }
} //# sourceMappingURL=scheduler.js.map
}),
"[project]/node_modules/next/dist/esm/server/stream-utils/encoded-tags.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ENCODED_TAGS",
    ()=>ENCODED_TAGS
]);
const ENCODED_TAGS = {
    // opening tags do not have the closing `>` since they can contain other attributes such as `<body className=''>`
    OPENING: {
        // <html
        HTML: new Uint8Array([
            60,
            104,
            116,
            109,
            108
        ]),
        // <body
        BODY: new Uint8Array([
            60,
            98,
            111,
            100,
            121
        ])
    },
    CLOSED: {
        // </head>
        HEAD: new Uint8Array([
            60,
            47,
            104,
            101,
            97,
            100,
            62
        ]),
        // </body>
        BODY: new Uint8Array([
            60,
            47,
            98,
            111,
            100,
            121,
            62
        ]),
        // </html>
        HTML: new Uint8Array([
            60,
            47,
            104,
            116,
            109,
            108,
            62
        ]),
        // </body></html>
        BODY_AND_HTML: new Uint8Array([
            60,
            47,
            98,
            111,
            100,
            121,
            62,
            60,
            47,
            104,
            116,
            109,
            108,
            62
        ])
    },
    META: {
        // Only the match the prefix cause the suffix can be different wether it's xml compatible or not ">" or "/>"
        // <meta name="«nxt-icon»"
        // This is a special mark that will be replaced by the icon insertion script tag.
        ICON_MARK: new Uint8Array([
            60,
            109,
            101,
            116,
            97,
            32,
            110,
            97,
            109,
            101,
            61,
            34,
            194,
            171,
            110,
            120,
            116,
            45,
            105,
            99,
            111,
            110,
            194,
            187,
            34
        ])
    }
}; //# sourceMappingURL=encoded-tags.js.map
}),
"[project]/node_modules/next/dist/esm/server/stream-utils/uint8array-helpers.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Find the starting index of Uint8Array `b` within Uint8Array `a`.
 */ __turbopack_context__.s([
    "indexOfUint8Array",
    ()=>indexOfUint8Array,
    "isEquivalentUint8Arrays",
    ()=>isEquivalentUint8Arrays,
    "removeFromUint8Array",
    ()=>removeFromUint8Array
]);
function indexOfUint8Array(a, b) {
    if (b.length === 0) return 0;
    if (a.length === 0 || b.length > a.length) return -1;
    // start iterating through `a`
    for(let i = 0; i <= a.length - b.length; i++){
        let completeMatch = true;
        // from index `i`, iterate through `b` and check for mismatch
        for(let j = 0; j < b.length; j++){
            // if the values do not match, then this isn't a complete match, exit `b` iteration early and iterate to next index of `a`.
            if (a[i + j] !== b[j]) {
                completeMatch = false;
                break;
            }
        }
        if (completeMatch) {
            return i;
        }
    }
    return -1;
}
function isEquivalentUint8Arrays(a, b) {
    if (a.length !== b.length) return false;
    for(let i = 0; i < a.length; i++){
        if (a[i] !== b[i]) return false;
    }
    return true;
}
function removeFromUint8Array(a, b) {
    const tagIndex = indexOfUint8Array(a, b);
    if (tagIndex === 0) return a.subarray(b.length);
    if (tagIndex > -1) {
        const removed = new Uint8Array(a.length - b.length);
        removed.set(a.slice(0, tagIndex));
        removed.set(a.slice(tagIndex + b.length), tagIndex);
        return removed;
    } else {
        return a;
    }
} //# sourceMappingURL=uint8array-helpers.js.map
}),
"[project]/node_modules/next/dist/esm/shared/lib/errors/constants.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MISSING_ROOT_TAGS_ERROR",
    ()=>MISSING_ROOT_TAGS_ERROR
]);
const MISSING_ROOT_TAGS_ERROR = 'NEXT_MISSING_ROOT_TAGS'; //# sourceMappingURL=constants.js.map
}),
"[project]/node_modules/next/dist/esm/shared/lib/segment-cache/output-export-prefetch-encoding.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// In output: export mode, the build id is added to the start of the HTML
// document, directly after the doctype declaration. During a prefetch, the
// client performs a range request to get the build id, so it can check whether
// the target page belongs to the same build.
//
// The first 64 bytes of the document are requested. The exact number isn't
// too important; it must be larger than the build id + doctype + closing and
// ending comment markers, but it doesn't need to match the end of the
// comment exactly.
//
// Build ids are 21 bytes long in the default implementation, though this
// can be overridden in the Next.js config. For the purposes of this check,
// it's OK to only match the start of the id, so we'll truncate it if exceeds
// a certain length.
__turbopack_context__.s([
    "DOC_PREFETCH_RANGE_HEADER_VALUE",
    ()=>DOC_PREFETCH_RANGE_HEADER_VALUE,
    "doesExportedHtmlMatchBuildId",
    ()=>doesExportedHtmlMatchBuildId,
    "insertBuildIdComment",
    ()=>insertBuildIdComment
]);
const DOCTYPE_PREFIX = '<!DOCTYPE html>' // 15 bytes
;
const MAX_BUILD_ID_LENGTH = 24;
const DOC_PREFETCH_RANGE_HEADER_VALUE = 'bytes=0-63';
function escapeBuildId(buildId) {
    // If the build id is longer than the given limit, it's OK for our purposes
    // to only match the beginning.
    const truncated = buildId.slice(0, MAX_BUILD_ID_LENGTH);
    // Replace hyphens with underscores so it doesn't break the HTML comment.
    // (Unlikely, but if this did happen it would break the whole document.)
    return truncated.replace(/-/g, '_');
}
function insertBuildIdComment(originalHtml, buildId) {
    if (buildId.includes('-->') || // React always inserts a doctype at the start of the document. Skip if it
    // isn't present. Shouldn't happen; suggests an issue elsewhere.
    !originalHtml.startsWith(DOCTYPE_PREFIX)) {
        // Return the original HTML unchanged. This means the document will not
        // be prefetched.
        // TODO: The build id comment is currently only used during prefetches, but
        // if we eventually use this mechanism for regular navigations, we may need
        // to error during build if we fail to insert it for some reason.
        return originalHtml;
    }
    // The comment must be inserted after the doctype.
    return originalHtml.replace(DOCTYPE_PREFIX, DOCTYPE_PREFIX + '<!--' + escapeBuildId(buildId) + '-->');
}
function doesExportedHtmlMatchBuildId(partialHtmlDocument, buildId) {
    // Check whether the document starts with the expected buildId.
    return partialHtmlDocument.startsWith(DOCTYPE_PREFIX + '<!--' + escapeBuildId(buildId) + '-->');
} //# sourceMappingURL=output-export-prefetch-encoding.js.map
}),
"[project]/node_modules/next/dist/esm/shared/lib/hash.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// http://www.cse.yorku.ca/~oz/hash.html
// More specifically, 32-bit hash via djbxor
// (ref: https://gist.github.com/eplawless/52813b1d8ad9af510d85?permalink_comment_id=3367765#gistcomment-3367765)
// This is due to number type differences between rust for turbopack to js number types,
// where rust does not have easy way to repreesnt js's 53-bit float number type for the matching
// overflow behavior. This is more `correct` in terms of having canonical hash across different runtime / implementation
// as can gaurantee determinstic output from 32bit hash.
__turbopack_context__.s([
    "djb2Hash",
    ()=>djb2Hash,
    "hexHash",
    ()=>hexHash
]);
function djb2Hash(str) {
    let hash = 5381;
    for(let i = 0; i < str.length; i++){
        const char = str.charCodeAt(i);
        hash = (hash << 5) + hash + char & 0xffffffff;
    }
    return hash >>> 0;
}
function hexHash(str) {
    return djb2Hash(str).toString(36).slice(0, 5);
} //# sourceMappingURL=hash.js.map
}),
"[project]/node_modules/next/dist/esm/shared/lib/router/utils/cache-busting-search-param.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "computeCacheBustingSearchParam",
    ()=>computeCacheBustingSearchParam
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$hash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/hash.js [app-rsc] (ecmascript)");
;
function computeCacheBustingSearchParam(prefetchHeader, segmentPrefetchHeader, stateTreeHeader, nextUrlHeader) {
    if ((prefetchHeader === undefined || prefetchHeader === '0') && segmentPrefetchHeader === undefined && stateTreeHeader === undefined && nextUrlHeader === undefined) {
        return '';
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$hash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hexHash"])([
        prefetchHeader || '0',
        segmentPrefetchHeader || '0',
        stateTreeHeader || '0',
        nextUrlHeader || '0'
    ].join(','));
} //# sourceMappingURL=cache-busting-search-param.js.map
}),
"[project]/node_modules/next/dist/esm/server/stream-utils/node-web-streams-helper.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "chainStreams",
    ()=>chainStreams,
    "continueDynamicHTMLResume",
    ()=>continueDynamicHTMLResume,
    "continueDynamicPrerender",
    ()=>continueDynamicPrerender,
    "continueFizzStream",
    ()=>continueFizzStream,
    "continueStaticFallbackPrerender",
    ()=>continueStaticFallbackPrerender,
    "continueStaticPrerender",
    ()=>continueStaticPrerender,
    "createBufferedTransformStream",
    ()=>createBufferedTransformStream,
    "createDocumentClosingStream",
    ()=>createDocumentClosingStream,
    "createRootLayoutValidatorStream",
    ()=>createRootLayoutValidatorStream,
    "renderToInitialFizzStream",
    ()=>renderToInitialFizzStream,
    "streamFromBuffer",
    ()=>streamFromBuffer,
    "streamFromString",
    ()=>streamFromString,
    "streamToBuffer",
    ()=>streamToBuffer,
    "streamToString",
    ()=>streamToString
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/lib/trace/tracer.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/lib/trace/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$detached$2d$promise$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/lib/detached-promise.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/lib/scheduler.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/stream-utils/encoded-tags.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$uint8array$2d$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/stream-utils/uint8array-helpers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$errors$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/errors/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$segment$2d$cache$2f$output$2d$export$2d$prefetch$2d$encoding$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/segment-cache/output-export-prefetch-encoding.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/client/components/app-router-headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$cache$2d$busting$2d$search$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/router/utils/cache-busting-search-param.js [app-rsc] (ecmascript)");
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
function voidCatch() {
// this catcher is designed to be used with pipeTo where we expect the underlying
// pipe implementation to forward errors but we don't want the pipeTo promise to reject
// and be unhandled
}
// We can share the same encoder instance everywhere
// Notably we cannot do the same for TextDecoder because it is stateful
// when handling streaming data
const encoder = new TextEncoder();
function chainStreams(...streams) {
    // If we have no streams, return an empty stream. This behavior is
    // intentional as we're now providing the `RenderResult.EMPTY` value.
    if (streams.length === 0) {
        return new ReadableStream({
            start (controller) {
                controller.close();
            }
        });
    }
    // If we only have 1 stream we fast path it by returning just this stream
    if (streams.length === 1) {
        return streams[0];
    }
    const { readable, writable } = new TransformStream();
    // We always initiate pipeTo immediately. We know we have at least 2 streams
    // so we need to avoid closing the writable when this one finishes.
    let promise = streams[0].pipeTo(writable, {
        preventClose: true
    });
    let i = 1;
    for(; i < streams.length - 1; i++){
        const nextStream = streams[i];
        promise = promise.then(()=>nextStream.pipeTo(writable, {
                preventClose: true
            }));
    }
    // We can omit the length check because we halted before the last stream and there
    // is at least two streams so the lastStream here will always be defined
    const lastStream = streams[i];
    promise = promise.then(()=>lastStream.pipeTo(writable));
    // Catch any errors from the streams and ignore them, they will be handled
    // by whatever is consuming the readable stream.
    promise.catch(voidCatch);
    return readable;
}
function streamFromString(str) {
    return new ReadableStream({
        start (controller) {
            controller.enqueue(encoder.encode(str));
            controller.close();
        }
    });
}
function streamFromBuffer(chunk) {
    return new ReadableStream({
        start (controller) {
            controller.enqueue(chunk);
            controller.close();
        }
    });
}
async function streamToBuffer(stream) {
    const reader = stream.getReader();
    const chunks = [];
    while(true){
        const { done, value } = await reader.read();
        if (done) {
            break;
        }
        chunks.push(value);
    }
    return Buffer.concat(chunks);
}
async function streamToString(stream, signal) {
    const decoder = new TextDecoder('utf-8', {
        fatal: true
    });
    let string = '';
    for await (const chunk of stream){
        if (signal == null ? void 0 : signal.aborted) {
            return string;
        }
        string += decoder.decode(chunk, {
            stream: true
        });
    }
    string += decoder.decode();
    return string;
}
function createBufferedTransformStream(options = {}) {
    const { maxBufferByteLength = Infinity } = options;
    let bufferedChunks = [];
    let bufferByteLength = 0;
    let pending;
    const flush = (controller)=>{
        try {
            if (bufferedChunks.length === 0) {
                return;
            }
            const chunk = new Uint8Array(bufferByteLength);
            let copiedBytes = 0;
            for(let i = 0; i < bufferedChunks.length; i++){
                const bufferedChunk = bufferedChunks[i];
                chunk.set(bufferedChunk, copiedBytes);
                copiedBytes += bufferedChunk.byteLength;
            }
            // We just wrote all the buffered chunks so we need to reset the bufferedChunks array
            // and our bufferByteLength to prepare for the next round of buffered chunks
            bufferedChunks.length = 0;
            bufferByteLength = 0;
            controller.enqueue(chunk);
        } catch  {
        // If an error occurs while enqueuing, it can't be due to this
        // transformer. It's most likely caused by the controller having been
        // errored (for example, if the stream was cancelled).
        }
    };
    const scheduleFlush = (controller)=>{
        if (pending) {
            return;
        }
        const detached = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$detached$2d$promise$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DetachedPromise"]();
        pending = detached;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["scheduleImmediate"])(()=>{
            try {
                flush(controller);
            } finally{
                pending = undefined;
                detached.resolve();
            }
        });
    };
    return new TransformStream({
        transform (chunk, controller) {
            // Combine the previous buffer with the new chunk.
            bufferedChunks.push(chunk);
            bufferByteLength += chunk.byteLength;
            if (bufferByteLength >= maxBufferByteLength) {
                flush(controller);
            } else {
                scheduleFlush(controller);
            }
        },
        flush () {
            return pending == null ? void 0 : pending.promise;
        }
    });
}
function createPrefetchCommentStream(isBuildTimePrerendering, buildId) {
    // Insert an extra comment at the beginning of the HTML document. This must
    // come after the DOCTYPE, which is inserted by React.
    //
    // The first chunk sent by React will contain the doctype. After that, we can
    // pass through the rest of the chunks as-is.
    let didTransformFirstChunk = false;
    return new TransformStream({
        transform (chunk, controller) {
            if (isBuildTimePrerendering && !didTransformFirstChunk) {
                didTransformFirstChunk = true;
                const decoder = new TextDecoder('utf-8', {
                    fatal: true
                });
                const chunkStr = decoder.decode(chunk, {
                    stream: true
                });
                const updatedChunkStr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$segment$2d$cache$2f$output$2d$export$2d$prefetch$2d$encoding$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["insertBuildIdComment"])(chunkStr, buildId);
                controller.enqueue(encoder.encode(updatedChunkStr));
                return;
            }
            controller.enqueue(chunk);
        }
    });
}
function renderToInitialFizzStream({ ReactDOMServer, element, streamOptions }) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTracer"])().trace(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppRenderSpan"].renderToReadableStream, async ()=>ReactDOMServer.renderToReadableStream(element, streamOptions));
}
function createMetadataTransformStream(insert) {
    let chunkIndex = -1;
    let isMarkRemoved = false;
    return new TransformStream({
        async transform (chunk, controller) {
            let iconMarkIndex = -1;
            let closedHeadIndex = -1;
            chunkIndex++;
            if (isMarkRemoved) {
                controller.enqueue(chunk);
                return;
            }
            let iconMarkLength = 0;
            // Only search for the closed head tag once
            if (iconMarkIndex === -1) {
                iconMarkIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$uint8array$2d$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["indexOfUint8Array"])(chunk, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].META.ICON_MARK);
                if (iconMarkIndex === -1) {
                    controller.enqueue(chunk);
                    return;
                } else {
                    // When we found the `<meta name="«nxt-icon»"` tag prefix, we will remove it from the chunk.
                    // Its close tag could either be `/>` or `>`, checking the next char to ensure we cover both cases.
                    iconMarkLength = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].META.ICON_MARK.length;
                    // Check if next char is /, this is for xml mode.
                    if (chunk[iconMarkIndex + iconMarkLength] === 47) {
                        iconMarkLength += 2;
                    } else {
                        // The last char is `>`
                        iconMarkLength++;
                    }
                }
            }
            // Check if icon mark is inside <head> tag in the first chunk.
            if (chunkIndex === 0) {
                closedHeadIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$uint8array$2d$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["indexOfUint8Array"])(chunk, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].CLOSED.HEAD);
                if (iconMarkIndex !== -1) {
                    // The mark icon is located in the 1st chunk before the head tag.
                    // We do not need to insert the script tag in this case because it's in the head.
                    // Just remove the icon mark from the chunk.
                    if (iconMarkIndex < closedHeadIndex) {
                        const replaced = new Uint8Array(chunk.length - iconMarkLength);
                        // Remove the icon mark from the chunk.
                        replaced.set(chunk.subarray(0, iconMarkIndex));
                        replaced.set(chunk.subarray(iconMarkIndex + iconMarkLength), iconMarkIndex);
                        chunk = replaced;
                    } else {
                        // The icon mark is after the head tag, replace and insert the script tag at that position.
                        const insertion = await insert();
                        const encodedInsertion = encoder.encode(insertion);
                        const insertionLength = encodedInsertion.length;
                        const replaced = new Uint8Array(chunk.length - iconMarkLength + insertionLength);
                        replaced.set(chunk.subarray(0, iconMarkIndex));
                        replaced.set(encodedInsertion, iconMarkIndex);
                        replaced.set(chunk.subarray(iconMarkIndex + iconMarkLength), iconMarkIndex + insertionLength);
                        chunk = replaced;
                    }
                    isMarkRemoved = true;
                }
            // If there's no icon mark located, it will be handled later when if present in the following chunks.
            } else {
                // When it's appeared in the following chunks, we'll need to
                // remove the mark and then insert the script tag at that position.
                const insertion = await insert();
                const encodedInsertion = encoder.encode(insertion);
                const insertionLength = encodedInsertion.length;
                // Replace the icon mark with the hoist script or empty string.
                const replaced = new Uint8Array(chunk.length - iconMarkLength + insertionLength);
                // Set the first part of the chunk, before the icon mark.
                replaced.set(chunk.subarray(0, iconMarkIndex));
                // Set the insertion after the icon mark.
                replaced.set(encodedInsertion, iconMarkIndex);
                // Set the rest of the chunk after the icon mark.
                replaced.set(chunk.subarray(iconMarkIndex + iconMarkLength), iconMarkIndex + insertionLength);
                chunk = replaced;
                isMarkRemoved = true;
            }
            controller.enqueue(chunk);
        }
    });
}
function createHeadInsertionTransformStream(insert) {
    let inserted = false;
    // We need to track if this transform saw any bytes because if it didn't
    // we won't want to insert any server HTML at all
    let hasBytes = false;
    return new TransformStream({
        async transform (chunk, controller) {
            hasBytes = true;
            const insertion = await insert();
            if (inserted) {
                if (insertion) {
                    const encodedInsertion = encoder.encode(insertion);
                    controller.enqueue(encodedInsertion);
                }
                controller.enqueue(chunk);
            } else {
                // TODO (@Ethan-Arrowood): Replace the generic `indexOfUint8Array` method with something finely tuned for the subset of things actually being checked for.
                const index = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$uint8array$2d$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["indexOfUint8Array"])(chunk, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].CLOSED.HEAD);
                // In fully static rendering or non PPR rendering cases:
                // `/head>` will always be found in the chunk in first chunk rendering.
                if (index !== -1) {
                    if (insertion) {
                        const encodedInsertion = encoder.encode(insertion);
                        // Get the total count of the bytes in the chunk and the insertion
                        // e.g.
                        // chunk = <head><meta charset="utf-8"></head>
                        // insertion = <script>...</script>
                        // output = <head><meta charset="utf-8"> [ <script>...</script> ] </head>
                        const insertedHeadContent = new Uint8Array(chunk.length + encodedInsertion.length);
                        // Append the first part of the chunk, before the head tag
                        insertedHeadContent.set(chunk.slice(0, index));
                        // Append the server inserted content
                        insertedHeadContent.set(encodedInsertion, index);
                        // Append the rest of the chunk
                        insertedHeadContent.set(chunk.slice(index), index + encodedInsertion.length);
                        controller.enqueue(insertedHeadContent);
                    } else {
                        controller.enqueue(chunk);
                    }
                    inserted = true;
                } else {
                    // This will happens in PPR rendering during next start, when the page is partially rendered.
                    // When the page resumes, the head tag will be found in the middle of the chunk.
                    // Where we just need to append the insertion and chunk to the current stream.
                    // e.g.
                    // PPR-static: <head>...</head><body> [ resume content ] </body>
                    // PPR-resume: [ insertion ] [ rest content ]
                    if (insertion) {
                        controller.enqueue(encoder.encode(insertion));
                    }
                    controller.enqueue(chunk);
                    inserted = true;
                }
            }
        },
        async flush (controller) {
            // Check before closing if there's anything remaining to insert.
            if (hasBytes) {
                const insertion = await insert();
                if (insertion) {
                    controller.enqueue(encoder.encode(insertion));
                }
            }
        }
    });
}
function createClientResumeScriptInsertionTransformStream() {
    const segmentPath = '/_full';
    const cacheBustingHeader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$cache$2d$busting$2d$search$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["computeCacheBustingSearchParam"])('1', '/_full', undefined, undefined //       headers[NEXT_URL]
    );
    const searchStr = `${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_RSC_UNION_QUERY"]}=${cacheBustingHeader}`;
    const NEXT_CLIENT_RESUME_SCRIPT = `<script>__NEXT_CLIENT_RESUME=fetch(location.pathname+'?${searchStr}',{credentials:'same-origin',headers:{'${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RSC_HEADER"]}': '1','${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_ROUTER_PREFETCH_HEADER"]}': '1','${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_ROUTER_SEGMENT_PREFETCH_HEADER"]}': '${segmentPath}'}})</script>`;
    let didAlreadyInsert = false;
    return new TransformStream({
        transform (chunk, controller) {
            if (didAlreadyInsert) {
                // Already inserted the script into the head. Pass through.
                controller.enqueue(chunk);
                return;
            }
            // TODO (@Ethan-Arrowood): Replace the generic `indexOfUint8Array` method with something finely tuned for the subset of things actually being checked for.
            const headClosingTagIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$uint8array$2d$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["indexOfUint8Array"])(chunk, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].CLOSED.HEAD);
            if (headClosingTagIndex === -1) {
                // In fully static rendering or non PPR rendering cases:
                // `/head>` will always be found in the chunk in first chunk rendering.
                controller.enqueue(chunk);
                return;
            }
            const encodedInsertion = encoder.encode(NEXT_CLIENT_RESUME_SCRIPT);
            // Get the total count of the bytes in the chunk and the insertion
            // e.g.
            // chunk = <head><meta charset="utf-8"></head>
            // insertion = <script>...</script>
            // output = <head><meta charset="utf-8"> [ <script>...</script> ] </head>
            const insertedHeadContent = new Uint8Array(chunk.length + encodedInsertion.length);
            // Append the first part of the chunk, before the head tag
            insertedHeadContent.set(chunk.slice(0, headClosingTagIndex));
            // Append the server inserted content
            insertedHeadContent.set(encodedInsertion, headClosingTagIndex);
            // Append the rest of the chunk
            insertedHeadContent.set(chunk.slice(headClosingTagIndex), headClosingTagIndex + encodedInsertion.length);
            controller.enqueue(insertedHeadContent);
            didAlreadyInsert = true;
        }
    });
}
// Suffix after main body content - scripts before </body>,
// but wait for the major chunks to be enqueued.
function createDeferredSuffixStream(suffix) {
    let flushed = false;
    let pending;
    const flush = (controller)=>{
        const detached = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$detached$2d$promise$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DetachedPromise"]();
        pending = detached;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["scheduleImmediate"])(()=>{
            try {
                controller.enqueue(encoder.encode(suffix));
            } catch  {
            // If an error occurs while enqueuing it can't be due to this
            // transformers fault. It's likely due to the controller being
            // errored due to the stream being cancelled.
            } finally{
                pending = undefined;
                detached.resolve();
            }
        });
    };
    return new TransformStream({
        transform (chunk, controller) {
            controller.enqueue(chunk);
            // If we've already flushed, we're done.
            if (flushed) return;
            // Schedule the flush to happen.
            flushed = true;
            flush(controller);
        },
        flush (controller) {
            if (pending) return pending.promise;
            if (flushed) return;
            // Flush now.
            controller.enqueue(encoder.encode(suffix));
        }
    });
}
function createFlightDataInjectionTransformStream(stream, delayDataUntilFirstHtmlChunk) {
    let htmlStreamFinished = false;
    let pull = null;
    let donePulling = false;
    function startOrContinuePulling(controller) {
        if (!pull) {
            pull = startPulling(controller);
        }
        return pull;
    }
    async function startPulling(controller) {
        const reader = stream.getReader();
        if (delayDataUntilFirstHtmlChunk) {
            // NOTE: streaming flush
            // We are buffering here for the inlined data stream because the
            // "shell" stream might be chunkenized again by the underlying stream
            // implementation, e.g. with a specific high-water mark. To ensure it's
            // the safe timing to pipe the data stream, this extra tick is
            // necessary.
            // We don't start reading until we've left the current Task to ensure
            // that it's inserted after flushing the shell. Note that this implementation
            // might get stale if impl details of Fizz change in the future.
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["atLeastOneTask"])();
        }
        try {
            while(true){
                const { done, value } = await reader.read();
                if (done) {
                    donePulling = true;
                    return;
                }
                // We want to prioritize HTML over RSC data.
                // The SSR render is based on the same RSC stream, so when we get a new RSC chunk,
                // we're likely to produce an HTML chunk as well, so give it a chance to flush first.
                if (!delayDataUntilFirstHtmlChunk && !htmlStreamFinished) {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["atLeastOneTask"])();
                }
                controller.enqueue(value);
            }
        } catch (err) {
            controller.error(err);
        }
    }
    return new TransformStream({
        start (controller) {
            if (!delayDataUntilFirstHtmlChunk) {
                startOrContinuePulling(controller);
            }
        },
        transform (chunk, controller) {
            controller.enqueue(chunk);
            // Start the streaming if it hasn't already been started yet.
            if (delayDataUntilFirstHtmlChunk) {
                startOrContinuePulling(controller);
            }
        },
        flush (controller) {
            htmlStreamFinished = true;
            if (donePulling) {
                return;
            }
            return startOrContinuePulling(controller);
        }
    });
}
const CLOSE_TAG = '</body></html>';
/**
 * This transform stream moves the suffix to the end of the stream, so results
 * like `</body></html><script>...</script>` will be transformed to
 * `<script>...</script></body></html>`.
 */ function createMoveSuffixStream() {
    let foundSuffix = false;
    return new TransformStream({
        transform (chunk, controller) {
            if (foundSuffix) {
                return controller.enqueue(chunk);
            }
            const index = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$uint8array$2d$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["indexOfUint8Array"])(chunk, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].CLOSED.BODY_AND_HTML);
            if (index > -1) {
                foundSuffix = true;
                // If the whole chunk is the suffix, then don't write anything, it will
                // be written in the flush.
                if (chunk.length === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].CLOSED.BODY_AND_HTML.length) {
                    return;
                }
                // Write out the part before the suffix.
                const before = chunk.slice(0, index);
                controller.enqueue(before);
                // In the case where the suffix is in the middle of the chunk, we need
                // to split the chunk into two parts.
                if (chunk.length > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].CLOSED.BODY_AND_HTML.length + index) {
                    // Write out the part after the suffix.
                    const after = chunk.slice(index + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].CLOSED.BODY_AND_HTML.length);
                    controller.enqueue(after);
                }
            } else {
                controller.enqueue(chunk);
            }
        },
        flush (controller) {
            // Even if we didn't find the suffix, the HTML is not valid if we don't
            // add it, so insert it at the end.
            controller.enqueue(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].CLOSED.BODY_AND_HTML);
        }
    });
}
function createStripDocumentClosingTagsTransform() {
    return new TransformStream({
        transform (chunk, controller) {
            // We rely on the assumption that chunks will never break across a code unit.
            // This is reasonable because we currently concat all of React's output from a single
            // flush into one chunk before streaming it forward which means the chunk will represent
            // a single coherent utf-8 string. This is not safe to use if we change our streaming to no
            // longer do this large buffered chunk
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$uint8array$2d$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isEquivalentUint8Arrays"])(chunk, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].CLOSED.BODY_AND_HTML) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$uint8array$2d$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isEquivalentUint8Arrays"])(chunk, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].CLOSED.BODY) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$uint8array$2d$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isEquivalentUint8Arrays"])(chunk, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].CLOSED.HTML)) {
                // the entire chunk is the closing tags; return without enqueueing anything.
                return;
            }
            // We assume these tags will go at together at the end of the document and that
            // they won't appear anywhere else in the document. This is not really a safe assumption
            // but until we revamp our streaming infra this is a performant way to string the tags
            chunk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$uint8array$2d$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["removeFromUint8Array"])(chunk, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].CLOSED.BODY);
            chunk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$uint8array$2d$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["removeFromUint8Array"])(chunk, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].CLOSED.HTML);
            controller.enqueue(chunk);
        }
    });
}
function createRootLayoutValidatorStream() {
    let foundHtml = false;
    let foundBody = false;
    return new TransformStream({
        async transform (chunk, controller) {
            // Peek into the streamed chunk to see if the tags are present.
            if (!foundHtml && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$uint8array$2d$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["indexOfUint8Array"])(chunk, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].OPENING.HTML) > -1) {
                foundHtml = true;
            }
            if (!foundBody && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$uint8array$2d$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["indexOfUint8Array"])(chunk, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].OPENING.BODY) > -1) {
                foundBody = true;
            }
            controller.enqueue(chunk);
        },
        flush (controller) {
            const missingTags = [];
            if (!foundHtml) missingTags.push('html');
            if (!foundBody) missingTags.push('body');
            if (!missingTags.length) return;
            controller.enqueue(encoder.encode(`<html id="__next_error__">
            <template
              data-next-error-message="Missing ${missingTags.map((c)=>`<${c}>`).join(missingTags.length > 1 ? ' and ' : '')} tags in the root layout.\nRead more at https://nextjs.org/docs/messages/missing-root-layout-tags"
              data-next-error-digest="${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$errors$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MISSING_ROOT_TAGS_ERROR"]}"
              data-next-error-stack=""
            ></template>
          `));
        }
    });
}
function chainTransformers(readable, transformers) {
    let stream = readable;
    for (const transformer of transformers){
        if (!transformer) continue;
        stream = stream.pipeThrough(transformer);
    }
    return stream;
}
async function continueFizzStream(renderStream, { suffix, inlinedDataStream, isStaticGeneration, isBuildTimePrerendering, buildId, getServerInsertedHTML, getServerInsertedMetadata, validateRootLayout }) {
    // Suffix itself might contain close tags at the end, so we need to split it.
    const suffixUnclosed = suffix ? suffix.split(CLOSE_TAG, 1)[0] : null;
    // If we're generating static HTML we need to wait for it to resolve before continuing.
    if (isStaticGeneration) {
        await renderStream.allReady;
    }
    return chainTransformers(renderStream, [
        // Buffer everything to avoid flushing too frequently
        createBufferedTransformStream(),
        // Add build id comment to start of the HTML document (in export mode)
        createPrefetchCommentStream(isBuildTimePrerendering, buildId),
        // Transform metadata
        createMetadataTransformStream(getServerInsertedMetadata),
        // Insert suffix content
        suffixUnclosed != null && suffixUnclosed.length > 0 ? createDeferredSuffixStream(suffixUnclosed) : null,
        // Insert the inlined data (Flight data, form state, etc.) stream into the HTML
        inlinedDataStream ? createFlightDataInjectionTransformStream(inlinedDataStream, true) : null,
        // Validate the root layout for missing html or body tags
        validateRootLayout ? createRootLayoutValidatorStream() : null,
        // Close tags should always be deferred to the end
        createMoveSuffixStream(),
        // Special head insertions
        // TODO-APP: Insert server side html to end of head in app layout rendering, to avoid
        // hydration errors. Remove this once it's ready to be handled by react itself.
        createHeadInsertionTransformStream(getServerInsertedHTML)
    ]);
}
async function continueDynamicPrerender(prerenderStream, { getServerInsertedHTML, getServerInsertedMetadata }) {
    return prerenderStream // Buffer everything to avoid flushing too frequently
    .pipeThrough(createBufferedTransformStream()).pipeThrough(createStripDocumentClosingTagsTransform()) // Insert generated tags to head
    .pipeThrough(createHeadInsertionTransformStream(getServerInsertedHTML)) // Transform metadata
    .pipeThrough(createMetadataTransformStream(getServerInsertedMetadata));
}
async function continueStaticPrerender(prerenderStream, { inlinedDataStream, getServerInsertedHTML, getServerInsertedMetadata, isBuildTimePrerendering, buildId }) {
    return prerenderStream // Buffer everything to avoid flushing too frequently
    .pipeThrough(createBufferedTransformStream()) // Add build id comment to start of the HTML document (in export mode)
    .pipeThrough(createPrefetchCommentStream(isBuildTimePrerendering, buildId)) // Insert generated tags to head
    .pipeThrough(createHeadInsertionTransformStream(getServerInsertedHTML)) // Transform metadata
    .pipeThrough(createMetadataTransformStream(getServerInsertedMetadata)) // Insert the inlined data (Flight data, form state, etc.) stream into the HTML
    .pipeThrough(createFlightDataInjectionTransformStream(inlinedDataStream, true)) // Close tags should always be deferred to the end
    .pipeThrough(createMoveSuffixStream());
}
async function continueStaticFallbackPrerender(prerenderStream, { inlinedDataStream, getServerInsertedHTML, getServerInsertedMetadata, isBuildTimePrerendering, buildId }) {
    // Same as `continueStaticPrerender`, but also inserts an additional script
    // to instruct the client to start fetching the hydration data as early
    // as possible.
    return prerenderStream // Buffer everything to avoid flushing too frequently
    .pipeThrough(createBufferedTransformStream()) // Add build id comment to start of the HTML document (in export mode)
    .pipeThrough(createPrefetchCommentStream(isBuildTimePrerendering, buildId)) // Insert generated tags to head
    .pipeThrough(createHeadInsertionTransformStream(getServerInsertedHTML)) // Insert the client resume script into the head
    .pipeThrough(createClientResumeScriptInsertionTransformStream()) // Transform metadata
    .pipeThrough(createMetadataTransformStream(getServerInsertedMetadata)) // Insert the inlined data (Flight data, form state, etc.) stream into the HTML
    .pipeThrough(createFlightDataInjectionTransformStream(inlinedDataStream, true)) // Close tags should always be deferred to the end
    .pipeThrough(createMoveSuffixStream());
}
async function continueDynamicHTMLResume(renderStream, { delayDataUntilFirstHtmlChunk, inlinedDataStream, getServerInsertedHTML, getServerInsertedMetadata }) {
    return renderStream // Buffer everything to avoid flushing too frequently
    .pipeThrough(createBufferedTransformStream()) // Insert generated tags to head
    .pipeThrough(createHeadInsertionTransformStream(getServerInsertedHTML)) // Transform metadata
    .pipeThrough(createMetadataTransformStream(getServerInsertedMetadata)) // Insert the inlined data (Flight data, form state, etc.) stream into the HTML
    .pipeThrough(createFlightDataInjectionTransformStream(inlinedDataStream, delayDataUntilFirstHtmlChunk)) // Close tags should always be deferred to the end
    .pipeThrough(createMoveSuffixStream());
}
function createDocumentClosingStream() {
    return streamFromString(CLOSE_TAG);
} //# sourceMappingURL=node-web-streams-helper.js.map
}),
"[project]/node_modules/next/dist/esm/server/web/utils.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fromNodeOutgoingHttpHeaders",
    ()=>fromNodeOutgoingHttpHeaders,
    "normalizeNextQueryParam",
    ()=>normalizeNextQueryParam,
    "splitCookiesString",
    ()=>splitCookiesString,
    "toNodeOutgoingHttpHeaders",
    ()=>toNodeOutgoingHttpHeaders,
    "validateURL",
    ()=>validateURL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/lib/constants.js [app-rsc] (ecmascript)");
;
function fromNodeOutgoingHttpHeaders(nodeHeaders) {
    const headers = new Headers();
    for (let [key, value] of Object.entries(nodeHeaders)){
        const values = Array.isArray(value) ? value : [
            value
        ];
        for (let v of values){
            if (typeof v === 'undefined') continue;
            if (typeof v === 'number') {
                v = v.toString();
            }
            headers.append(key, v);
        }
    }
    return headers;
}
function splitCookiesString(cookiesString) {
    var cookiesStrings = [];
    var pos = 0;
    var start;
    var ch;
    var lastComma;
    var nextStart;
    var cookiesSeparatorFound;
    function skipWhitespace() {
        while(pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))){
            pos += 1;
        }
        return pos < cookiesString.length;
    }
    function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== '=' && ch !== ';' && ch !== ',';
    }
    while(pos < cookiesString.length){
        start = pos;
        cookiesSeparatorFound = false;
        while(skipWhitespace()){
            ch = cookiesString.charAt(pos);
            if (ch === ',') {
                // ',' is a cookie separator if we have later first '=', not ';' or ','
                lastComma = pos;
                pos += 1;
                skipWhitespace();
                nextStart = pos;
                while(pos < cookiesString.length && notSpecialChar()){
                    pos += 1;
                }
                // currently special character
                if (pos < cookiesString.length && cookiesString.charAt(pos) === '=') {
                    // we found cookies separator
                    cookiesSeparatorFound = true;
                    // pos is inside the next cookie, so back up and return it.
                    pos = nextStart;
                    cookiesStrings.push(cookiesString.substring(start, lastComma));
                    start = pos;
                } else {
                    // in param ',' or param separator ';',
                    // we continue from that comma
                    pos = lastComma + 1;
                }
            } else {
                pos += 1;
            }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
            cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
    }
    return cookiesStrings;
}
function toNodeOutgoingHttpHeaders(headers) {
    const nodeHeaders = {};
    const cookies = [];
    if (headers) {
        for (const [key, value] of headers.entries()){
            if (key.toLowerCase() === 'set-cookie') {
                // We may have gotten a comma joined string of cookies, or multiple
                // set-cookie headers. We need to merge them into one header array
                // to represent all the cookies.
                cookies.push(...splitCookiesString(value));
                nodeHeaders[key] = cookies.length === 1 ? cookies[0] : cookies;
            } else {
                nodeHeaders[key] = value;
            }
        }
    }
    return nodeHeaders;
}
function validateURL(url) {
    try {
        return String(new URL(String(url)));
    } catch (error) {
        throw Object.defineProperty(new Error(`URL is malformed "${String(url)}". Please use only absolute URLs - https://nextjs.org/docs/messages/middleware-relative-urls`, {
            cause: error
        }), "__NEXT_ERROR_CODE", {
            value: "E61",
            enumerable: false,
            configurable: true
        });
    }
}
function normalizeNextQueryParam(key) {
    const prefixes = [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_QUERY_PARAM_PREFIX"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_INTERCEPTION_MARKER_PREFIX"]
    ];
    for (const prefix of prefixes){
        if (key !== prefix && key.startsWith(prefix)) {
            return key.substring(prefix.length);
        }
    }
    return null;
} //# sourceMappingURL=utils.js.map
}),
"[project]/node_modules/next/dist/esm/shared/lib/i18n/detect-domain-locale.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "detectDomainLocale",
    ()=>detectDomainLocale
]);
function detectDomainLocale(domainItems, hostname, detectedLocale) {
    if (!domainItems) return;
    if (detectedLocale) {
        detectedLocale = detectedLocale.toLowerCase();
    }
    for (const item of domainItems){
        // remove port if present
        const domainHostname = item.domain?.split(':', 1)[0].toLowerCase();
        if (hostname === domainHostname || detectedLocale === item.defaultLocale.toLowerCase() || item.locales?.some((locale)=>locale.toLowerCase() === detectedLocale)) {
            return item;
        }
    }
} //# sourceMappingURL=detect-domain-locale.js.map
}),
"[project]/node_modules/next/dist/esm/shared/lib/router/utils/parse-path.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Given a path this function will find the pathname, query and hash and return
 * them. This is useful to parse full paths on the client side.
 * @param path A path to parse e.g. /foo/bar?id=1#hash
 */ __turbopack_context__.s([
    "parsePath",
    ()=>parsePath
]);
function parsePath(path) {
    const hashIndex = path.indexOf('#');
    const queryIndex = path.indexOf('?');
    const hasQuery = queryIndex > -1 && (hashIndex < 0 || queryIndex < hashIndex);
    if (hasQuery || hashIndex > -1) {
        return {
            pathname: path.substring(0, hasQuery ? queryIndex : hashIndex),
            query: hasQuery ? path.substring(queryIndex, hashIndex > -1 ? hashIndex : undefined) : '',
            hash: hashIndex > -1 ? path.slice(hashIndex) : ''
        };
    }
    return {
        pathname: path,
        query: '',
        hash: ''
    };
} //# sourceMappingURL=parse-path.js.map
}),
"[project]/node_modules/next/dist/esm/shared/lib/router/utils/add-path-prefix.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addPathPrefix",
    ()=>addPathPrefix
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$path$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/router/utils/parse-path.js [app-rsc] (ecmascript)");
;
function addPathPrefix(path, prefix) {
    if (!path.startsWith('/') || !prefix) {
        return path;
    }
    const { pathname, query, hash } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$path$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parsePath"])(path);
    return `${prefix}${pathname}${query}${hash}`;
} //# sourceMappingURL=add-path-prefix.js.map
}),
"[project]/node_modules/next/dist/esm/shared/lib/router/utils/add-path-suffix.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addPathSuffix",
    ()=>addPathSuffix
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$path$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/router/utils/parse-path.js [app-rsc] (ecmascript)");
;
function addPathSuffix(path, suffix) {
    if (!path.startsWith('/') || !suffix) {
        return path;
    }
    const { pathname, query, hash } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$path$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parsePath"])(path);
    return `${pathname}${suffix}${query}${hash}`;
} //# sourceMappingURL=add-path-suffix.js.map
}),
"[project]/node_modules/next/dist/esm/shared/lib/router/utils/path-has-prefix.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "pathHasPrefix",
    ()=>pathHasPrefix
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$path$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/router/utils/parse-path.js [app-rsc] (ecmascript)");
;
function pathHasPrefix(path, prefix) {
    if (typeof path !== 'string') {
        return false;
    }
    const { pathname } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$path$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parsePath"])(path);
    return pathname === prefix || pathname.startsWith(prefix + '/');
} //# sourceMappingURL=path-has-prefix.js.map
}),
"[project]/node_modules/next/dist/esm/shared/lib/router/utils/add-locale.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addLocale",
    ()=>addLocale
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$path$2d$prefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/router/utils/add-path-prefix.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/router/utils/path-has-prefix.js [app-rsc] (ecmascript)");
;
;
function addLocale(path, locale, defaultLocale, ignorePrefix) {
    // If no locale was given or the locale is the default locale, we don't need
    // to prefix the path.
    if (!locale || locale === defaultLocale) return path;
    const lower = path.toLowerCase();
    // If the path is an API path or the path already has the locale prefix, we
    // don't need to prefix the path.
    if (!ignorePrefix) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pathHasPrefix"])(lower, '/api')) return path;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pathHasPrefix"])(lower, `/${locale.toLowerCase()}`)) return path;
    }
    // Add the locale prefix to the path.
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$path$2d$prefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addPathPrefix"])(path, `/${locale}`);
} //# sourceMappingURL=add-locale.js.map
}),
"[project]/node_modules/next/dist/esm/shared/lib/router/utils/format-next-pathname-info.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatNextPathnameInfo",
    ()=>formatNextPathnameInfo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$trailing$2d$slash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/router/utils/remove-trailing-slash.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$path$2d$prefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/router/utils/add-path-prefix.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$path$2d$suffix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/router/utils/add-path-suffix.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$locale$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/router/utils/add-locale.js [app-rsc] (ecmascript)");
;
;
;
;
function formatNextPathnameInfo(info) {
    let pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$locale$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addLocale"])(info.pathname, info.locale, info.buildId ? undefined : info.defaultLocale, info.ignorePrefix);
    if (info.buildId || !info.trailingSlash) {
        pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$trailing$2d$slash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["removeTrailingSlash"])(pathname);
    }
    if (info.buildId) {
        pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$path$2d$suffix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addPathSuffix"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$path$2d$prefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addPathPrefix"])(pathname, `/_next/data/${info.buildId}`), info.pathname === '/' ? 'index.json' : '.json');
    }
    pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$path$2d$prefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addPathPrefix"])(pathname, info.basePath);
    return !info.buildId && info.trailingSlash ? !pathname.endsWith('/') ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$path$2d$suffix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addPathSuffix"])(pathname, '/') : pathname : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$trailing$2d$slash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["removeTrailingSlash"])(pathname);
} //# sourceMappingURL=format-next-pathname-info.js.map
}),
"[project]/node_modules/next/dist/esm/shared/lib/get-hostname.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Takes an object with a hostname property (like a parsed URL) and some
 * headers that may contain Host and returns the preferred hostname.
 * @param parsed An object containing a hostname property.
 * @param headers A dictionary with headers containing a `host`.
 */ __turbopack_context__.s([
    "getHostname",
    ()=>getHostname
]);
function getHostname(parsed, headers) {
    // Get the hostname from the headers if it exists, otherwise use the parsed
    // hostname.
    let hostname;
    if (headers?.host && !Array.isArray(headers.host)) {
        hostname = headers.host.toString().split(':', 1)[0];
    } else if (parsed.hostname) {
        hostname = parsed.hostname;
    } else return;
    return hostname.toLowerCase();
} //# sourceMappingURL=get-hostname.js.map
}),
"[project]/node_modules/next/dist/esm/shared/lib/i18n/normalize-locale-path.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * A cache of lowercased locales for each list of locales. This is stored as a
 * WeakMap so if the locales are garbage collected, the cache entry will be
 * removed as well.
 */ __turbopack_context__.s([
    "normalizeLocalePath",
    ()=>normalizeLocalePath
]);
const cache = new WeakMap();
function normalizeLocalePath(pathname, locales) {
    // If locales is undefined, return the pathname as is.
    if (!locales) return {
        pathname
    };
    // Get the cached lowercased locales or create a new cache entry.
    let lowercasedLocales = cache.get(locales);
    if (!lowercasedLocales) {
        lowercasedLocales = locales.map((locale)=>locale.toLowerCase());
        cache.set(locales, lowercasedLocales);
    }
    let detectedLocale;
    // The first segment will be empty, because it has a leading `/`. If
    // there is no further segment, there is no locale (or it's the default).
    const segments = pathname.split('/', 2);
    // If there's no second segment (ie, the pathname is just `/`), there's no
    // locale.
    if (!segments[1]) return {
        pathname
    };
    // The second segment will contain the locale part if any.
    const segment = segments[1].toLowerCase();
    // See if the segment matches one of the locales. If it doesn't, there is
    // no locale (or it's the default).
    const index = lowercasedLocales.indexOf(segment);
    if (index < 0) return {
        pathname
    };
    // Return the case-sensitive locale.
    detectedLocale = locales[index];
    // Remove the `/${locale}` part of the pathname.
    pathname = pathname.slice(detectedLocale.length + 1) || '/';
    return {
        pathname,
        detectedLocale
    };
} //# sourceMappingURL=normalize-locale-path.js.map
}),
"[project]/node_modules/next/dist/esm/shared/lib/router/utils/remove-path-prefix.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "removePathPrefix",
    ()=>removePathPrefix
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/router/utils/path-has-prefix.js [app-rsc] (ecmascript)");
;
function removePathPrefix(path, prefix) {
    // If the path doesn't start with the prefix we can return it as is. This
    // protects us from situations where the prefix is a substring of the path
    // prefix such as:
    //
    // For prefix: /blog
    //
    //   /blog -> true
    //   /blog/ -> true
    //   /blog/1 -> true
    //   /blogging -> false
    //   /blogging/ -> false
    //   /blogging/1 -> false
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pathHasPrefix"])(path, prefix)) {
        return path;
    }
    // Remove the prefix from the path via slicing.
    const withoutPrefix = path.slice(prefix.length);
    // If the path without the prefix starts with a `/` we can return it as is.
    if (withoutPrefix.startsWith('/')) {
        return withoutPrefix;
    }
    // If the path without the prefix doesn't start with a `/` we need to add it
    // back to the path to make sure it's a valid path.
    return `/${withoutPrefix}`;
} //# sourceMappingURL=remove-path-prefix.js.map
}),
"[project]/node_modules/next/dist/esm/shared/lib/router/utils/get-next-pathname-info.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getNextPathnameInfo",
    ()=>getNextPathnameInfo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$i18n$2f$normalize$2d$locale$2d$path$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/i18n/normalize-locale-path.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$path$2d$prefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/router/utils/remove-path-prefix.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/router/utils/path-has-prefix.js [app-rsc] (ecmascript)");
;
;
;
function getNextPathnameInfo(pathname, options) {
    const { basePath, i18n, trailingSlash } = options.nextConfig ?? {};
    const info = {
        pathname,
        trailingSlash: pathname !== '/' ? pathname.endsWith('/') : trailingSlash
    };
    if (basePath && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pathHasPrefix"])(info.pathname, basePath)) {
        info.pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$path$2d$prefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["removePathPrefix"])(info.pathname, basePath);
        info.basePath = basePath;
    }
    let pathnameNoDataPrefix = info.pathname;
    if (info.pathname.startsWith('/_next/data/') && info.pathname.endsWith('.json')) {
        const paths = info.pathname.replace(/^\/_next\/data\//, '').replace(/\.json$/, '').split('/');
        const buildId = paths[0];
        info.buildId = buildId;
        pathnameNoDataPrefix = paths[1] !== 'index' ? `/${paths.slice(1).join('/')}` : '/';
        // update pathname with normalized if enabled although
        // we use normalized to populate locale info still
        if (options.parseData === true) {
            info.pathname = pathnameNoDataPrefix;
        }
    }
    // If provided, use the locale route normalizer to detect the locale instead
    // of the function below.
    if (i18n) {
        let result = options.i18nProvider ? options.i18nProvider.analyze(info.pathname) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$i18n$2f$normalize$2d$locale$2d$path$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeLocalePath"])(info.pathname, i18n.locales);
        info.locale = result.detectedLocale;
        info.pathname = result.pathname ?? info.pathname;
        if (!result.detectedLocale && info.buildId) {
            result = options.i18nProvider ? options.i18nProvider.analyze(pathnameNoDataPrefix) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$i18n$2f$normalize$2d$locale$2d$path$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeLocalePath"])(pathnameNoDataPrefix, i18n.locales);
            if (result.detectedLocale) {
                info.locale = result.detectedLocale;
            }
        }
    }
    return info;
} //# sourceMappingURL=get-next-pathname-info.js.map
}),
"[project]/node_modules/next/dist/esm/server/web/next-url.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NextURL",
    ()=>NextURL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$i18n$2f$detect$2d$domain$2d$locale$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/i18n/detect-domain-locale.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$format$2d$next$2d$pathname$2d$info$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/router/utils/format-next-pathname-info.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$get$2d$hostname$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/get-hostname.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$next$2d$pathname$2d$info$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/router/utils/get-next-pathname-info.js [app-rsc] (ecmascript)");
;
;
;
;
const REGEX_LOCALHOST_HOSTNAME = /(?!^https?:\/\/)(127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}|\[::1\]|localhost)/;
function parseURL(url, base) {
    return new URL(String(url).replace(REGEX_LOCALHOST_HOSTNAME, 'localhost'), base && String(base).replace(REGEX_LOCALHOST_HOSTNAME, 'localhost'));
}
const Internal = Symbol('NextURLInternal');
class NextURL {
    constructor(input, baseOrOpts, opts){
        let base;
        let options;
        if (typeof baseOrOpts === 'object' && 'pathname' in baseOrOpts || typeof baseOrOpts === 'string') {
            base = baseOrOpts;
            options = opts || {};
        } else {
            options = opts || baseOrOpts || {};
        }
        this[Internal] = {
            url: parseURL(input, base ?? options.base),
            options: options,
            basePath: ''
        };
        this.analyze();
    }
    analyze() {
        var _this_Internal_options_nextConfig_i18n, _this_Internal_options_nextConfig, _this_Internal_domainLocale, _this_Internal_options_nextConfig_i18n1, _this_Internal_options_nextConfig1;
        const info = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$next$2d$pathname$2d$info$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getNextPathnameInfo"])(this[Internal].url.pathname, {
            nextConfig: this[Internal].options.nextConfig,
            parseData: !("TURBOPACK compile-time value", void 0),
            i18nProvider: this[Internal].options.i18nProvider
        });
        const hostname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$get$2d$hostname$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getHostname"])(this[Internal].url, this[Internal].options.headers);
        this[Internal].domainLocale = this[Internal].options.i18nProvider ? this[Internal].options.i18nProvider.detectDomainLocale(hostname) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$i18n$2f$detect$2d$domain$2d$locale$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["detectDomainLocale"])((_this_Internal_options_nextConfig = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n = _this_Internal_options_nextConfig.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n.domains, hostname);
        const defaultLocale = ((_this_Internal_domainLocale = this[Internal].domainLocale) == null ? void 0 : _this_Internal_domainLocale.defaultLocale) || ((_this_Internal_options_nextConfig1 = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n1 = _this_Internal_options_nextConfig1.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n1.defaultLocale);
        this[Internal].url.pathname = info.pathname;
        this[Internal].defaultLocale = defaultLocale;
        this[Internal].basePath = info.basePath ?? '';
        this[Internal].buildId = info.buildId;
        this[Internal].locale = info.locale ?? defaultLocale;
        this[Internal].trailingSlash = info.trailingSlash;
    }
    formatPathname() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$format$2d$next$2d$pathname$2d$info$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatNextPathnameInfo"])({
            basePath: this[Internal].basePath,
            buildId: this[Internal].buildId,
            defaultLocale: !this[Internal].options.forceLocale ? this[Internal].defaultLocale : undefined,
            locale: this[Internal].locale,
            pathname: this[Internal].url.pathname,
            trailingSlash: this[Internal].trailingSlash
        });
    }
    formatSearch() {
        return this[Internal].url.search;
    }
    get buildId() {
        return this[Internal].buildId;
    }
    set buildId(buildId) {
        this[Internal].buildId = buildId;
    }
    get locale() {
        return this[Internal].locale ?? '';
    }
    set locale(locale) {
        var _this_Internal_options_nextConfig_i18n, _this_Internal_options_nextConfig;
        if (!this[Internal].locale || !((_this_Internal_options_nextConfig = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n = _this_Internal_options_nextConfig.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n.locales.includes(locale))) {
            throw Object.defineProperty(new TypeError(`The NextURL configuration includes no locale "${locale}"`), "__NEXT_ERROR_CODE", {
                value: "E597",
                enumerable: false,
                configurable: true
            });
        }
        this[Internal].locale = locale;
    }
    get defaultLocale() {
        return this[Internal].defaultLocale;
    }
    get domainLocale() {
        return this[Internal].domainLocale;
    }
    get searchParams() {
        return this[Internal].url.searchParams;
    }
    get host() {
        return this[Internal].url.host;
    }
    set host(value) {
        this[Internal].url.host = value;
    }
    get hostname() {
        return this[Internal].url.hostname;
    }
    set hostname(value) {
        this[Internal].url.hostname = value;
    }
    get port() {
        return this[Internal].url.port;
    }
    set port(value) {
        this[Internal].url.port = value;
    }
    get protocol() {
        return this[Internal].url.protocol;
    }
    set protocol(value) {
        this[Internal].url.protocol = value;
    }
    get href() {
        const pathname = this.formatPathname();
        const search = this.formatSearch();
        return `${this.protocol}//${this.host}${pathname}${search}${this.hash}`;
    }
    set href(url) {
        this[Internal].url = parseURL(url);
        this.analyze();
    }
    get origin() {
        return this[Internal].url.origin;
    }
    get pathname() {
        return this[Internal].url.pathname;
    }
    set pathname(value) {
        this[Internal].url.pathname = value;
    }
    get hash() {
        return this[Internal].url.hash;
    }
    set hash(value) {
        this[Internal].url.hash = value;
    }
    get search() {
        return this[Internal].url.search;
    }
    set search(value) {
        this[Internal].url.search = value;
    }
    get password() {
        return this[Internal].url.password;
    }
    set password(value) {
        this[Internal].url.password = value;
    }
    get username() {
        return this[Internal].url.username;
    }
    set username(value) {
        this[Internal].url.username = value;
    }
    get basePath() {
        return this[Internal].basePath;
    }
    set basePath(value) {
        this[Internal].basePath = value.startsWith('/') ? value : `/${value}`;
    }
    toString() {
        return this.href;
    }
    toJSON() {
        return this.href;
    }
    [Symbol.for('edge-runtime.inspect.custom')]() {
        return {
            href: this.href,
            origin: this.origin,
            protocol: this.protocol,
            username: this.username,
            password: this.password,
            host: this.host,
            hostname: this.hostname,
            port: this.port,
            pathname: this.pathname,
            search: this.search,
            searchParams: this.searchParams,
            hash: this.hash
        };
    }
    clone() {
        return new NextURL(String(this), this[Internal].options);
    }
} //# sourceMappingURL=next-url.js.map
}),
"[project]/node_modules/next/dist/esm/server/web/error.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PageSignatureError",
    ()=>PageSignatureError,
    "RemovedPageError",
    ()=>RemovedPageError,
    "RemovedUAError",
    ()=>RemovedUAError
]);
class PageSignatureError extends Error {
    constructor({ page }){
        super(`The middleware "${page}" accepts an async API directly with the form:
  
  export function middleware(request, event) {
    return NextResponse.redirect('/new-location')
  }
  
  Read more: https://nextjs.org/docs/messages/middleware-new-signature
  `);
    }
}
class RemovedPageError extends Error {
    constructor(){
        super(`The request.page has been deprecated in favour of \`URLPattern\`.
  Read more: https://nextjs.org/docs/messages/middleware-request-page
  `);
    }
}
class RemovedUAError extends Error {
    constructor(){
        super(`The request.ua has been removed in favour of \`userAgent\` function.
  Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
  `);
    }
} //# sourceMappingURL=error.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/compiled/@edge-runtime/cookies/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __toCommonJS = (mod)=>__copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
// src/index.ts
var src_exports = {};
__export(src_exports, {
    RequestCookies: ()=>RequestCookies,
    ResponseCookies: ()=>ResponseCookies,
    parseCookie: ()=>parseCookie,
    parseSetCookie: ()=>parseSetCookie,
    stringifyCookie: ()=>stringifyCookie
});
module.exports = __toCommonJS(src_exports);
// src/serialize.ts
function stringifyCookie(c) {
    var _a;
    const attrs = [
        "path" in c && c.path && `Path=${c.path}`,
        "expires" in c && (c.expires || c.expires === 0) && `Expires=${(typeof c.expires === "number" ? new Date(c.expires) : c.expires).toUTCString()}`,
        "maxAge" in c && typeof c.maxAge === "number" && `Max-Age=${c.maxAge}`,
        "domain" in c && c.domain && `Domain=${c.domain}`,
        "secure" in c && c.secure && "Secure",
        "httpOnly" in c && c.httpOnly && "HttpOnly",
        "sameSite" in c && c.sameSite && `SameSite=${c.sameSite}`,
        "partitioned" in c && c.partitioned && "Partitioned",
        "priority" in c && c.priority && `Priority=${c.priority}`
    ].filter(Boolean);
    const stringified = `${c.name}=${encodeURIComponent((_a = c.value) != null ? _a : "")}`;
    return attrs.length === 0 ? stringified : `${stringified}; ${attrs.join("; ")}`;
}
function parseCookie(cookie) {
    const map = /* @__PURE__ */ new Map();
    for (const pair of cookie.split(/; */)){
        if (!pair) continue;
        const splitAt = pair.indexOf("=");
        if (splitAt === -1) {
            map.set(pair, "true");
            continue;
        }
        const [key, value] = [
            pair.slice(0, splitAt),
            pair.slice(splitAt + 1)
        ];
        try {
            map.set(key, decodeURIComponent(value != null ? value : "true"));
        } catch  {}
    }
    return map;
}
function parseSetCookie(setCookie) {
    if (!setCookie) {
        return void 0;
    }
    const [[name, value], ...attributes] = parseCookie(setCookie);
    const { domain, expires, httponly, maxage, path, samesite, secure, partitioned, priority } = Object.fromEntries(attributes.map(([key, value2])=>[
            key.toLowerCase(),
            value2
        ]));
    const cookie = {
        name,
        value: decodeURIComponent(value),
        domain,
        ...expires && {
            expires: new Date(expires)
        },
        ...httponly && {
            httpOnly: true
        },
        ...typeof maxage === "string" && {
            maxAge: Number(maxage)
        },
        path,
        ...samesite && {
            sameSite: parseSameSite(samesite)
        },
        ...secure && {
            secure: true
        },
        ...priority && {
            priority: parsePriority(priority)
        },
        ...partitioned && {
            partitioned: true
        }
    };
    return compact(cookie);
}
function compact(t) {
    const newT = {};
    for(const key in t){
        if (t[key]) {
            newT[key] = t[key];
        }
    }
    return newT;
}
var SAME_SITE = [
    "strict",
    "lax",
    "none"
];
function parseSameSite(string) {
    string = string.toLowerCase();
    return SAME_SITE.includes(string) ? string : void 0;
}
var PRIORITY = [
    "low",
    "medium",
    "high"
];
function parsePriority(string) {
    string = string.toLowerCase();
    return PRIORITY.includes(string) ? string : void 0;
}
function splitCookiesString(cookiesString) {
    if (!cookiesString) return [];
    var cookiesStrings = [];
    var pos = 0;
    var start;
    var ch;
    var lastComma;
    var nextStart;
    var cookiesSeparatorFound;
    function skipWhitespace() {
        while(pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))){
            pos += 1;
        }
        return pos < cookiesString.length;
    }
    function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
    }
    while(pos < cookiesString.length){
        start = pos;
        cookiesSeparatorFound = false;
        while(skipWhitespace()){
            ch = cookiesString.charAt(pos);
            if (ch === ",") {
                lastComma = pos;
                pos += 1;
                skipWhitespace();
                nextStart = pos;
                while(pos < cookiesString.length && notSpecialChar()){
                    pos += 1;
                }
                if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
                    cookiesSeparatorFound = true;
                    pos = nextStart;
                    cookiesStrings.push(cookiesString.substring(start, lastComma));
                    start = pos;
                } else {
                    pos = lastComma + 1;
                }
            } else {
                pos += 1;
            }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
            cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
    }
    return cookiesStrings;
}
// src/request-cookies.ts
var RequestCookies = class {
    constructor(requestHeaders){
        /** @internal */ this._parsed = /* @__PURE__ */ new Map();
        this._headers = requestHeaders;
        const header = requestHeaders.get("cookie");
        if (header) {
            const parsed = parseCookie(header);
            for (const [name, value] of parsed){
                this._parsed.set(name, {
                    name,
                    value
                });
            }
        }
    }
    [Symbol.iterator]() {
        return this._parsed[Symbol.iterator]();
    }
    /**
   * The amount of cookies received from the client
   */ get size() {
        return this._parsed.size;
    }
    get(...args) {
        const name = typeof args[0] === "string" ? args[0] : args[0].name;
        return this._parsed.get(name);
    }
    getAll(...args) {
        var _a;
        const all = Array.from(this._parsed);
        if (!args.length) {
            return all.map(([_, value])=>value);
        }
        const name = typeof args[0] === "string" ? args[0] : (_a = args[0]) == null ? void 0 : _a.name;
        return all.filter(([n])=>n === name).map(([_, value])=>value);
    }
    has(name) {
        return this._parsed.has(name);
    }
    set(...args) {
        const [name, value] = args.length === 1 ? [
            args[0].name,
            args[0].value
        ] : args;
        const map = this._parsed;
        map.set(name, {
            name,
            value
        });
        this._headers.set("cookie", Array.from(map).map(([_, value2])=>stringifyCookie(value2)).join("; "));
        return this;
    }
    /**
   * Delete the cookies matching the passed name or names in the request.
   */ delete(names) {
        const map = this._parsed;
        const result = !Array.isArray(names) ? map.delete(names) : names.map((name)=>map.delete(name));
        this._headers.set("cookie", Array.from(map).map(([_, value])=>stringifyCookie(value)).join("; "));
        return result;
    }
    /**
   * Delete all the cookies in the cookies in the request.
   */ clear() {
        this.delete(Array.from(this._parsed.keys()));
        return this;
    }
    /**
   * Format the cookies in the request as a string for logging
   */ [Symbol.for("edge-runtime.inspect.custom")]() {
        return `RequestCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
    }
    toString() {
        return [
            ...this._parsed.values()
        ].map((v)=>`${v.name}=${encodeURIComponent(v.value)}`).join("; ");
    }
};
// src/response-cookies.ts
var ResponseCookies = class {
    constructor(responseHeaders){
        /** @internal */ this._parsed = /* @__PURE__ */ new Map();
        var _a, _b, _c;
        this._headers = responseHeaders;
        const setCookie = (_c = (_b = (_a = responseHeaders.getSetCookie) == null ? void 0 : _a.call(responseHeaders)) != null ? _b : responseHeaders.get("set-cookie")) != null ? _c : [];
        const cookieStrings = Array.isArray(setCookie) ? setCookie : splitCookiesString(setCookie);
        for (const cookieString of cookieStrings){
            const parsed = parseSetCookie(cookieString);
            if (parsed) this._parsed.set(parsed.name, parsed);
        }
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-get CookieStore#get} without the Promise.
   */ get(...args) {
        const key = typeof args[0] === "string" ? args[0] : args[0].name;
        return this._parsed.get(key);
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-getAll CookieStore#getAll} without the Promise.
   */ getAll(...args) {
        var _a;
        const all = Array.from(this._parsed.values());
        if (!args.length) {
            return all;
        }
        const key = typeof args[0] === "string" ? args[0] : (_a = args[0]) == null ? void 0 : _a.name;
        return all.filter((c)=>c.name === key);
    }
    has(name) {
        return this._parsed.has(name);
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-set CookieStore#set} without the Promise.
   */ set(...args) {
        const [name, value, cookie] = args.length === 1 ? [
            args[0].name,
            args[0].value,
            args[0]
        ] : args;
        const map = this._parsed;
        map.set(name, normalizeCookie({
            name,
            value,
            ...cookie
        }));
        replace(map, this._headers);
        return this;
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-delete CookieStore#delete} without the Promise.
   */ delete(...args) {
        const [name, path, domain] = typeof args[0] === "string" ? [
            args[0]
        ] : [
            args[0].name,
            args[0].path,
            args[0].domain
        ];
        return this.set({
            name,
            path,
            domain,
            value: "",
            expires: /* @__PURE__ */ new Date(0)
        });
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return `ResponseCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
    }
    toString() {
        return [
            ...this._parsed.values()
        ].map(stringifyCookie).join("; ");
    }
};
function replace(bag, headers) {
    headers.delete("set-cookie");
    for (const [, value] of bag){
        const serialized = stringifyCookie(value);
        headers.append("set-cookie", serialized);
    }
}
function normalizeCookie(cookie = {
    name: "",
    value: ""
}) {
    if (typeof cookie.expires === "number") {
        cookie.expires = new Date(cookie.expires);
    }
    if (cookie.maxAge) {
        cookie.expires = new Date(Date.now() + cookie.maxAge * 1e3);
    }
    if (cookie.path === null || cookie.path === void 0) {
        cookie.path = "/";
    }
    return cookie;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    RequestCookies,
    ResponseCookies,
    parseCookie,
    parseSetCookie,
    stringifyCookie
});
}),
"[project]/node_modules/next/dist/esm/server/web/spec-extension/cookies.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Transferências/elos-creative/node_modules/next/dist/compiled/@edge-runtime/cookies/index.js [app-rsc] (ecmascript)"); //# sourceMappingURL=cookies.js.map
;
}),
"[project]/node_modules/next/dist/esm/server/web/spec-extension/request.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "INTERNALS",
    ()=>INTERNALS,
    "NextRequest",
    ()=>NextRequest
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$next$2d$url$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/next-url.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/error.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$cookies$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/spec-extension/cookies.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Transferências/elos-creative/node_modules/next/dist/compiled/@edge-runtime/cookies/index.js [app-rsc] (ecmascript)");
;
;
;
;
const INTERNALS = Symbol('internal request');
class NextRequest extends Request {
    constructor(input, init = {}){
        const url = typeof input !== 'string' && 'url' in input ? input.url : String(input);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["validateURL"])(url);
        // node Request instance requires duplex option when a body
        // is present or it errors, we don't handle this for
        // Request being passed in since it would have already
        // errored if this wasn't configured
        if ("TURBOPACK compile-time truthy", 1) {
            if (init.body && init.duplex !== 'half') {
                init.duplex = 'half';
            }
        }
        if (input instanceof Request) super(input, init);
        else super(url, init);
        const nextUrl = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$next$2d$url$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextURL"](url, {
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toNodeOutgoingHttpHeaders"])(this.headers),
            nextConfig: init.nextConfig
        });
        this[INTERNALS] = {
            cookies: new __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RequestCookies"](this.headers),
            nextUrl,
            url: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : nextUrl.toString()
        };
    }
    [Symbol.for('edge-runtime.inspect.custom')]() {
        return {
            cookies: this.cookies,
            nextUrl: this.nextUrl,
            url: this.url,
            // rest of props come from Request
            bodyUsed: this.bodyUsed,
            cache: this.cache,
            credentials: this.credentials,
            destination: this.destination,
            headers: Object.fromEntries(this.headers),
            integrity: this.integrity,
            keepalive: this.keepalive,
            method: this.method,
            mode: this.mode,
            redirect: this.redirect,
            referrer: this.referrer,
            referrerPolicy: this.referrerPolicy,
            signal: this.signal
        };
    }
    get cookies() {
        return this[INTERNALS].cookies;
    }
    get nextUrl() {
        return this[INTERNALS].nextUrl;
    }
    /**
   * @deprecated
   * `page` has been deprecated in favour of `URLPattern`.
   * Read more: https://nextjs.org/docs/messages/middleware-request-page
   */ get page() {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RemovedPageError"]();
    }
    /**
   * @deprecated
   * `ua` has been removed in favour of \`userAgent\` function.
   * Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
   */ get ua() {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RemovedUAError"]();
    }
    get url() {
        return this[INTERNALS].url;
    }
} //# sourceMappingURL=request.js.map
}),
"[project]/node_modules/next/dist/esm/server/base-http/helpers.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * This file provides some helpers that should be used in conjunction with
 * explicit environment checks. When combined with the environment checks, it
 * will ensure that the correct typings are used as well as enable code
 * elimination.
 */ /**
 * Type guard to determine if a request is a WebNextRequest. This does not
 * actually check the type of the request, but rather the runtime environment.
 * It's expected that when the runtime environment is the edge runtime, that any
 * base request is a WebNextRequest.
 */ __turbopack_context__.s([
    "isNodeNextRequest",
    ()=>isNodeNextRequest,
    "isNodeNextResponse",
    ()=>isNodeNextResponse,
    "isWebNextRequest",
    ()=>isWebNextRequest,
    "isWebNextResponse",
    ()=>isWebNextResponse
]);
const isWebNextRequest = (req)=>("TURBOPACK compile-time value", "nodejs") === 'edge';
const isWebNextResponse = (res)=>("TURBOPACK compile-time value", "nodejs") === 'edge';
const isNodeNextRequest = (req)=>("TURBOPACK compile-time value", "nodejs") !== 'edge';
const isNodeNextResponse = (res)=>("TURBOPACK compile-time value", "nodejs") !== 'edge'; //# sourceMappingURL=helpers.js.map
}),
"[project]/node_modules/next/dist/esm/server/web/spec-extension/adapters/next-request.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NextRequestAdapter",
    ()=>NextRequestAdapter,
    "ResponseAborted",
    ()=>ResponseAborted,
    "ResponseAbortedName",
    ()=>ResponseAbortedName,
    "createAbortController",
    ()=>createAbortController,
    "signalFromNodeResponse",
    ()=>signalFromNodeResponse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/request-meta.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$request$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/spec-extension/request.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/base-http/helpers.js [app-rsc] (ecmascript)");
;
;
;
;
const ResponseAbortedName = 'ResponseAborted';
class ResponseAborted extends Error {
    constructor(...args){
        super(...args), this.name = ResponseAbortedName;
    }
}
function createAbortController(response) {
    const controller = new AbortController();
    // If `finish` fires first, then `res.end()` has been called and the close is
    // just us finishing the stream on our side. If `close` fires first, then we
    // know the client disconnected before we finished.
    response.once('close', ()=>{
        if (response.writableFinished) return;
        controller.abort(new ResponseAborted());
    });
    return controller;
}
function signalFromNodeResponse(response) {
    const { errored, destroyed } = response;
    if (errored || destroyed) {
        return AbortSignal.abort(errored ?? new ResponseAborted());
    }
    const { signal } = createAbortController(response);
    return signal;
}
class NextRequestAdapter {
    static fromBaseNextRequest(request, signal) {
        if (// environment variable check provides dead code elimination.
        ("TURBOPACK compile-time value", "nodejs") === 'edge' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isWebNextRequest"])(request)) //TURBOPACK unreachable
        ;
        else if (// environment variable check provides dead code elimination.
        ("TURBOPACK compile-time value", "nodejs") !== 'edge' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isNodeNextRequest"])(request)) {
            return NextRequestAdapter.fromNodeNextRequest(request, signal);
        } else {
            throw Object.defineProperty(new Error('Invariant: Unsupported NextRequest type'), "__NEXT_ERROR_CODE", {
                value: "E345",
                enumerable: false,
                configurable: true
            });
        }
    }
    static fromNodeNextRequest(request, signal) {
        // HEAD and GET requests can not have a body.
        let body = null;
        if (request.method !== 'GET' && request.method !== 'HEAD' && request.body) {
            // @ts-expect-error - this is handled by undici, when streams/web land use it instead
            body = request.body;
        }
        let url;
        if (request.url.startsWith('http')) {
            url = new URL(request.url);
        } else {
            // Grab the full URL from the request metadata.
            const base = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(request, 'initURL');
            if (!base || !base.startsWith('http')) {
                // Because the URL construction relies on the fact that the URL provided
                // is absolute, we need to provide a base URL. We can't use the request
                // URL because it's relative, so we use a dummy URL instead.
                url = new URL(request.url, 'http://n');
            } else {
                url = new URL(request.url, base);
            }
        }
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$request$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextRequest"](url, {
            method: request.method,
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fromNodeOutgoingHttpHeaders"])(request.headers),
            duplex: 'half',
            signal,
            // geo
            // ip
            // nextConfig
            // body can not be passed if request was aborted
            // or we get a Request body was disturbed error
            ...signal.aborted ? {} : {
                body
            }
        });
    }
    static fromWebNextRequest(request) {
        // HEAD and GET requests can not have a body.
        let body = null;
        if (request.method !== 'GET' && request.method !== 'HEAD') {
            body = request.body;
        }
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$request$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextRequest"](request.url, {
            method: request.method,
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fromNodeOutgoingHttpHeaders"])(request.headers),
            duplex: 'half',
            signal: request.request.signal,
            // geo
            // ip
            // nextConfig
            // body can not be passed if request was aborted
            // or we get a Request body was disturbed error
            ...request.request.signal.aborted ? {} : {
                body
            }
        });
    }
} //# sourceMappingURL=next-request.js.map
}),
"[project]/node_modules/next/dist/esm/server/client-component-renderer-logger.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Combined load times for loading client components
__turbopack_context__.s([
    "getClientComponentLoaderMetrics",
    ()=>getClientComponentLoaderMetrics,
    "wrapClientComponentLoader",
    ()=>wrapClientComponentLoader
]);
let clientComponentLoadStart = 0;
let clientComponentLoadTimes = 0;
let clientComponentLoadCount = 0;
function wrapClientComponentLoader(ComponentMod) {
    if (!('performance' in globalThis)) {
        return ComponentMod.__next_app__;
    }
    return {
        require: (...args)=>{
            const startTime = performance.now();
            if (clientComponentLoadStart === 0) {
                clientComponentLoadStart = startTime;
            }
            try {
                clientComponentLoadCount += 1;
                return ComponentMod.__next_app__.require(...args);
            } finally{
                clientComponentLoadTimes += performance.now() - startTime;
            }
        },
        loadChunk: (...args)=>{
            const startTime = performance.now();
            const result = ComponentMod.__next_app__.loadChunk(...args);
            // Avoid wrapping `loadChunk`'s result in an extra promise in case something like React depends on its identity.
            // We only need to know when it's settled.
            result.finally(()=>{
                clientComponentLoadTimes += performance.now() - startTime;
            });
            return result;
        }
    };
}
function getClientComponentLoaderMetrics(options = {}) {
    const metrics = clientComponentLoadStart === 0 ? undefined : {
        clientComponentLoadStart,
        clientComponentLoadTimes,
        clientComponentLoadCount
    };
    if (options.reset) {
        clientComponentLoadStart = 0;
        clientComponentLoadTimes = 0;
        clientComponentLoadCount = 0;
    }
    return metrics;
} //# sourceMappingURL=client-component-renderer-logger.js.map
}),
"[project]/node_modules/next/dist/esm/server/pipe-readable.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isAbortError",
    ()=>isAbortError,
    "pipeToNodeResponse",
    ()=>pipeToNodeResponse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$next$2d$request$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/spec-extension/adapters/next-request.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$detached$2d$promise$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/lib/detached-promise.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/lib/trace/tracer.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/lib/trace/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$client$2d$component$2d$renderer$2d$logger$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/client-component-renderer-logger.js [app-rsc] (ecmascript)");
;
;
;
;
;
function isAbortError(e) {
    return (e == null ? void 0 : e.name) === 'AbortError' || (e == null ? void 0 : e.name) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$next$2d$request$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ResponseAbortedName"];
}
function createWriterFromResponse(res, waitUntilForEnd) {
    let started = false;
    // Create a promise that will resolve once the response has drained. See
    // https://nodejs.org/api/stream.html#stream_event_drain
    let drained = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$detached$2d$promise$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DetachedPromise"]();
    function onDrain() {
        drained.resolve();
    }
    res.on('drain', onDrain);
    // If the finish event fires, it means we shouldn't block and wait for the
    // drain event.
    res.once('close', ()=>{
        res.off('drain', onDrain);
        drained.resolve();
    });
    // Create a promise that will resolve once the response has finished. See
    // https://nodejs.org/api/http.html#event-finish_1
    const finished = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$detached$2d$promise$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DetachedPromise"]();
    res.once('finish', ()=>{
        finished.resolve();
    });
    // Create a writable stream that will write to the response.
    return new WritableStream({
        write: async (chunk)=>{
            // You'd think we'd want to use `start` instead of placing this in `write`
            // but this ensures that we don't actually flush the headers until we've
            // started writing chunks.
            if (!started) {
                started = true;
                if ('performance' in globalThis && process.env.NEXT_OTEL_PERFORMANCE_PREFIX) {
                    const metrics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$client$2d$component$2d$renderer$2d$logger$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getClientComponentLoaderMetrics"])();
                    if (metrics) {
                        performance.measure(`${process.env.NEXT_OTEL_PERFORMANCE_PREFIX}:next-client-component-loading`, {
                            start: metrics.clientComponentLoadStart,
                            end: metrics.clientComponentLoadStart + metrics.clientComponentLoadTimes
                        });
                    }
                }
                res.flushHeaders();
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTracer"])().trace(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextNodeServerSpan"].startResponse, {
                    spanName: 'start response'
                }, ()=>undefined);
            }
            try {
                const ok = res.write(chunk);
                // Added by the `compression` middleware, this is a function that will
                // flush the partially-compressed response to the client.
                if ('flush' in res && typeof res.flush === 'function') {
                    res.flush();
                }
                // If the write returns false, it means there's some backpressure, so
                // wait until it's streamed before continuing.
                if (!ok) {
                    await drained.promise;
                    // Reset the drained promise so that we can wait for the next drain event.
                    drained = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$detached$2d$promise$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DetachedPromise"]();
                }
            } catch (err) {
                res.end();
                throw Object.defineProperty(new Error('failed to write chunk to response', {
                    cause: err
                }), "__NEXT_ERROR_CODE", {
                    value: "E321",
                    enumerable: false,
                    configurable: true
                });
            }
        },
        abort: (err)=>{
            if (res.writableFinished) return;
            res.destroy(err);
        },
        close: async ()=>{
            // if a waitUntil promise was passed, wait for it to resolve before
            // ending the response.
            if (waitUntilForEnd) {
                await waitUntilForEnd;
            }
            if (res.writableFinished) return;
            res.end();
            return finished.promise;
        }
    });
}
async function pipeToNodeResponse(readable, res, waitUntilForEnd) {
    try {
        // If the response has already errored, then just return now.
        const { errored, destroyed } = res;
        if (errored || destroyed) return;
        // Create a new AbortController so that we can abort the readable if the
        // client disconnects.
        const controller = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$next$2d$request$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAbortController"])(res);
        const writer = createWriterFromResponse(res, waitUntilForEnd);
        await readable.pipeTo(writer, {
            signal: controller.signal
        });
    } catch (err) {
        // If this isn't related to an abort error, re-throw it.
        if (isAbortError(err)) return;
        throw Object.defineProperty(new Error('failed to pipe response', {
            cause: err
        }), "__NEXT_ERROR_CODE", {
            value: "E180",
            enumerable: false,
            configurable: true
        });
    }
} //# sourceMappingURL=pipe-readable.js.map
}),
"[project]/node_modules/next/dist/esm/server/render-result.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RenderResult
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$node$2d$web$2d$streams$2d$helper$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/stream-utils/node-web-streams-helper.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$pipe$2d$readable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/pipe-readable.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/invariant-error.js [app-rsc] (ecmascript)");
;
;
;
class RenderResult {
    static #_ = /**
   * A render result that represents an empty response. This is used to
   * represent a response that was not found or was already sent.
   */ this.EMPTY = new RenderResult(null, {
        metadata: {},
        contentType: null
    });
    /**
   * Creates a new RenderResult instance from a static response.
   *
   * @param value the static response value
   * @param contentType the content type of the response
   * @returns a new RenderResult instance
   */ static fromStatic(value, contentType) {
        return new RenderResult(value, {
            metadata: {},
            contentType
        });
    }
    constructor(response, { contentType, waitUntil, metadata }){
        this.response = response;
        this.contentType = contentType;
        this.metadata = metadata;
        this.waitUntil = waitUntil;
    }
    assignMetadata(metadata) {
        Object.assign(this.metadata, metadata);
    }
    /**
   * Returns true if the response is null. It can be null if the response was
   * not found or was already sent.
   */ get isNull() {
        return this.response === null;
    }
    /**
   * Returns false if the response is a string. It can be a string if the page
   * was prerendered. If it's not, then it was generated dynamically.
   */ get isDynamic() {
        return typeof this.response !== 'string';
    }
    toUnchunkedString(stream = false) {
        if (this.response === null) {
            // If the response is null, return an empty string. This behavior is
            // intentional as we're now providing the `RenderResult.EMPTY` value.
            return '';
        }
        if (typeof this.response !== 'string') {
            if (!stream) {
                throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"]('dynamic responses cannot be unchunked. This is a bug in Next.js'), "__NEXT_ERROR_CODE", {
                    value: "E732",
                    enumerable: false,
                    configurable: true
                });
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$node$2d$web$2d$streams$2d$helper$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["streamToString"])(this.readable);
        }
        return this.response;
    }
    /**
   * Returns a readable stream of the response.
   */ get readable() {
        if (this.response === null) {
            // If the response is null, return an empty stream. This behavior is
            // intentional as we're now providing the `RenderResult.EMPTY` value.
            return new ReadableStream({
                start (controller) {
                    controller.close();
                }
            });
        }
        if (typeof this.response === 'string') {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$node$2d$web$2d$streams$2d$helper$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["streamFromString"])(this.response);
        }
        if (Buffer.isBuffer(this.response)) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$node$2d$web$2d$streams$2d$helper$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["streamFromBuffer"])(this.response);
        }
        // If the response is an array of streams, then chain them together.
        if (Array.isArray(this.response)) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$node$2d$web$2d$streams$2d$helper$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["chainStreams"])(...this.response);
        }
        return this.response;
    }
    /**
   * Coerces the response to an array of streams. This will convert the response
   * to an array of streams if it is not already one.
   *
   * @returns An array of streams
   */ coerce() {
        if (this.response === null) {
            // If the response is null, return an empty stream. This behavior is
            // intentional as we're now providing the `RenderResult.EMPTY` value.
            return [];
        }
        if (typeof this.response === 'string') {
            return [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$node$2d$web$2d$streams$2d$helper$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["streamFromString"])(this.response)
            ];
        } else if (Array.isArray(this.response)) {
            return this.response;
        } else if (Buffer.isBuffer(this.response)) {
            return [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$node$2d$web$2d$streams$2d$helper$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["streamFromBuffer"])(this.response)
            ];
        } else {
            return [
                this.response
            ];
        }
    }
    /**
   * Unshifts a new stream to the response. This will convert the response to an
   * array of streams if it is not already one and will add the new stream to
   * the start of the array. When this response is piped, all of the streams
   * will be piped one after the other.
   *
   * @param readable The new stream to unshift
   */ unshift(readable) {
        // Coerce the response to an array of streams.
        this.response = this.coerce();
        // Add the new stream to the start of the array.
        this.response.unshift(readable);
    }
    /**
   * Chains a new stream to the response. This will convert the response to an
   * array of streams if it is not already one and will add the new stream to
   * the end. When this response is piped, all of the streams will be piped
   * one after the other.
   *
   * @param readable The new stream to chain
   */ push(readable) {
        // Coerce the response to an array of streams.
        this.response = this.coerce();
        // Add the new stream to the end of the array.
        this.response.push(readable);
    }
    /**
   * Pipes the response to a writable stream. This will close/cancel the
   * writable stream if an error is encountered. If this doesn't throw, then
   * the writable stream will be closed or aborted.
   *
   * @param writable Writable stream to pipe the response to
   */ async pipeTo(writable) {
        try {
            await this.readable.pipeTo(writable, {
                // We want to close the writable stream ourselves so that we can wait
                // for the waitUntil promise to resolve before closing it. If an error
                // is encountered, we'll abort the writable stream if we swallowed the
                // error.
                preventClose: true
            });
            // If there is a waitUntil promise, wait for it to resolve before
            // closing the writable stream.
            if (this.waitUntil) await this.waitUntil;
            // Close the writable stream.
            await writable.close();
        } catch (err) {
            // If this is an abort error, we should abort the writable stream (as we
            // took ownership of it when we started piping). We don't need to re-throw
            // because we handled the error.
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$pipe$2d$readable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAbortError"])(err)) {
                // Abort the writable stream if an error is encountered.
                await writable.abort(err);
                return;
            }
            // We're not aborting the writer here as when this method throws it's not
            // clear as to how so the caller should assume it's their responsibility
            // to clean up the writer.
            throw err;
        }
    }
    /**
   * Pipes the response to a node response. This will close/cancel the node
   * response if an error is encountered.
   *
   * @param res
   */ async pipeToNodeResponse(res) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$pipe$2d$readable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pipeToNodeResponse"])(this.readable, res, this.waitUntil);
    }
} //# sourceMappingURL=render-result.js.map
}),
"[project]/node_modules/next/dist/esm/server/lib/etag.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * FNV-1a Hash implementation
 * @author Travis Webb (tjwebb) <me@traviswebb.com>
 *
 * Ported from https://github.com/tjwebb/fnv-plus/blob/master/index.js
 *
 * Simplified, optimized and add modified for 52 bit, which provides a larger hash space
 * and still making use of Javascript's 53-bit integer space.
 */ __turbopack_context__.s([
    "fnv1a52",
    ()=>fnv1a52,
    "generateETag",
    ()=>generateETag
]);
const fnv1a52 = (str)=>{
    const len = str.length;
    let i = 0, t0 = 0, v0 = 0x2325, t1 = 0, v1 = 0x8422, t2 = 0, v2 = 0x9ce4, t3 = 0, v3 = 0xcbf2;
    while(i < len){
        v0 ^= str.charCodeAt(i++);
        t0 = v0 * 435;
        t1 = v1 * 435;
        t2 = v2 * 435;
        t3 = v3 * 435;
        t2 += v0 << 8;
        t3 += v1 << 8;
        t1 += t0 >>> 16;
        v0 = t0 & 65535;
        t2 += t1 >>> 16;
        v1 = t1 & 65535;
        v3 = t3 + (t2 >>> 16) & 65535;
        v2 = t2 & 65535;
    }
    return (v3 & 15) * 281474976710656 + v2 * 4294967296 + v1 * 65536 + (v0 ^ v3 >> 4);
};
const generateETag = (payload, weak = false)=>{
    const prefix = weak ? 'W/"' : '"';
    return prefix + fnv1a52(payload).toString(36) + payload.length.toString(36) + '"';
}; //# sourceMappingURL=etag.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/compiled/fresh/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

(()=>{
    "use strict";
    var e = {
        695: (e)=>{
            /*!
 * fresh
 * Copyright(c) 2012 TJ Holowaychuk
 * Copyright(c) 2016-2017 Douglas Christopher Wilson
 * MIT Licensed
 */ var r = /(?:^|,)\s*?no-cache\s*?(?:,|$)/;
            e.exports = fresh;
            function fresh(e, a) {
                var t = e["if-modified-since"];
                var s = e["if-none-match"];
                if (!t && !s) {
                    return false;
                }
                var i = e["cache-control"];
                if (i && r.test(i)) {
                    return false;
                }
                if (s && s !== "*") {
                    var f = a["etag"];
                    if (!f) {
                        return false;
                    }
                    var n = true;
                    var u = parseTokenList(s);
                    for(var _ = 0; _ < u.length; _++){
                        var o = u[_];
                        if (o === f || o === "W/" + f || "W/" + o === f) {
                            n = false;
                            break;
                        }
                    }
                    if (n) {
                        return false;
                    }
                }
                if (t) {
                    var p = a["last-modified"];
                    var v = !p || !(parseHttpDate(p) <= parseHttpDate(t));
                    if (v) {
                        return false;
                    }
                }
                return true;
            }
            function parseHttpDate(e) {
                var r = e && Date.parse(e);
                return typeof r === "number" ? r : NaN;
            }
            function parseTokenList(e) {
                var r = 0;
                var a = [];
                var t = 0;
                for(var s = 0, i = e.length; s < i; s++){
                    switch(e.charCodeAt(s)){
                        case 32:
                            if (t === r) {
                                t = r = s + 1;
                            }
                            break;
                        case 44:
                            a.push(e.substring(t, r));
                            t = r = s + 1;
                            break;
                        default:
                            r = s + 1;
                            break;
                    }
                }
                a.push(e.substring(t, r));
                return a;
            }
        }
    };
    var r = {};
    function __nccwpck_require__(a) {
        var t = r[a];
        if (t !== undefined) {
            return t.exports;
        }
        var s = r[a] = {
            exports: {}
        };
        var i = true;
        try {
            e[a](s, s.exports, __nccwpck_require__);
            i = false;
        } finally{
            if (i) delete r[a];
        }
        return s.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/Transferências/elos-creative/node_modules/next/dist/compiled/fresh") + "/";
    var a = __nccwpck_require__(695);
    module.exports = a;
})();
}),
"[project]/node_modules/next/dist/esm/server/lib/cache-control.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCacheControlHeader",
    ()=>getCacheControlHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/lib/constants.js [app-rsc] (ecmascript)");
;
function getCacheControlHeader({ revalidate, expire }) {
    const swrHeader = typeof revalidate === 'number' && expire !== undefined && revalidate < expire ? `, stale-while-revalidate=${expire - revalidate}` : '';
    if (revalidate === 0) {
        return 'private, no-cache, no-store, max-age=0, must-revalidate';
    } else if (typeof revalidate === 'number') {
        return `s-maxage=${revalidate}${swrHeader}`;
    }
    return `s-maxage=${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CACHE_ONE_YEAR"]}${swrHeader}`;
} //# sourceMappingURL=cache-control.js.map
}),
"[project]/node_modules/next/dist/esm/server/send-payload.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sendEtagResponse",
    ()=>sendEtagResponse,
    "sendRenderResult",
    ()=>sendRenderResult
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$etag$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/lib/etag.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$fresh$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Transferências/elos-creative/node_modules/next/dist/compiled/fresh/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$cache$2d$control$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/lib/cache-control.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/lib/constants.js [app-rsc] (ecmascript)");
;
;
;
;
;
function sendEtagResponse(req, res, etag) {
    if (etag) {
        /**
     * The server generating a 304 response MUST generate any of the
     * following header fields that would have been sent in a 200 (OK)
     * response to the same request: Cache-Control, Content-Location, Date,
     * ETag, Expires, and Vary. https://tools.ietf.org/html/rfc7232#section-4.1
     */ res.setHeader('ETag', etag);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$fresh$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(req.headers, {
        etag
    })) {
        res.statusCode = 304;
        res.end();
        return true;
    }
    return false;
}
async function sendRenderResult({ req, res, result, generateEtags, poweredByHeader, cacheControl }) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isResSent"])(res)) {
        return;
    }
    if (poweredByHeader && result.contentType === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HTML_CONTENT_TYPE_HEADER"]) {
        res.setHeader('X-Powered-By', 'Next.js');
    }
    // If cache control is already set on the response we don't
    // override it to allow users to customize it via next.config
    if (cacheControl && !res.getHeader('Cache-Control')) {
        res.setHeader('Cache-Control', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$cache$2d$control$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheControlHeader"])(cacheControl));
    }
    const payload = result.isDynamic ? null : result.toUnchunkedString();
    if (generateEtags && payload !== null) {
        const etag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$etag$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateETag"])(payload);
        if (sendEtagResponse(req, res, etag)) {
            return;
        }
    }
    if (!res.getHeader('Content-Type') && result.contentType) {
        res.setHeader('Content-Type', result.contentType);
    }
    if (payload) {
        res.setHeader('Content-Length', Buffer.byteLength(payload));
    }
    if (req.method === 'HEAD') {
        res.end(null);
        return;
    }
    if (payload !== null) {
        res.end(payload);
        return;
    }
    // Pipe the render result to the response after we get a writer for it.
    await result.pipeToNodeResponse(res);
} //# sourceMappingURL=send-payload.js.map
}),
"[project]/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript)"));
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility) <locals>", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Transferências/elos-creative/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript) <locals>"));}),
"[project]/Transferências/elos-creative/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Transferências/elos-creative/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript)"));}),
"[project]/node_modules/next/dist/esm/client/components/redirect-status-code.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RedirectStatusCode",
    ()=>RedirectStatusCode
]);
var RedirectStatusCode = /*#__PURE__*/ function(RedirectStatusCode) {
    RedirectStatusCode[RedirectStatusCode["SeeOther"] = 303] = "SeeOther";
    RedirectStatusCode[RedirectStatusCode["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    RedirectStatusCode[RedirectStatusCode["PermanentRedirect"] = 308] = "PermanentRedirect";
    return RedirectStatusCode;
}({}); //# sourceMappingURL=redirect-status-code.js.map
}),
"[project]/node_modules/next/dist/client/components/builtin/not-found.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/client/components/builtin/not-found.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/esm/build/templates/app-page.js?page=/page { GLOBAL_ERROR_MODULE => \"[project]/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_0 => \"[project]/Transferências/elos-creative/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_1 => \"[project]/node_modules/next/dist/client/components/builtin/not-found.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_2 => \"[project]/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_3 => \"[project]/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_4 => \"[project]/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_5 => \"[project]/Transferências/elos-creative/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)\" } [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__next_app__",
    ()=>__next_app__,
    "handler",
    ()=>handler,
    "routeModule",
    ()=>routeModule
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$module$2e$compiled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/route-kind.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$instrumentation$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/instrumentation/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/lib/trace/tracer.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/request-meta.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Transferências/elos-creative/node_modules/next/dist/esm/server/lib/trace/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$interop$2d$default$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Transferências/elos-creative/node_modules/next/dist/esm/server/app-render/interop-default.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$strip$2d$flight$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/app-render/strip-flight-headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Transferências/elos-creative/node_modules/next/dist/esm/server/base-http/node.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$experimental$2f$ppr$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/lib/experimental/ppr.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/request/fallback-params.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$encryption$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Transferências/elos-creative/node_modules/next/dist/esm/server/app-render/encryption-utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$streaming$2d$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/lib/streaming-metadata.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$action$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Transferências/elos-creative/node_modules/next/dist/esm/server/app-render/action-utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Transferências/elos-creative/node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$server$2d$action$2d$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/lib/server-action-request-meta.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Transferências/elos-creative/node_modules/next/dist/esm/client/components/app-router-headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$is$2d$bot$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Transferências/elos-creative/node_modules/next/dist/esm/shared/lib/router/utils/is-bot.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Transferências/elos-creative/node_modules/next/dist/esm/server/response-cache/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Transferências/elos-creative/node_modules/next/dist/esm/server/response-cache/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/lib/fallback.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/render-result.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Transferências/elos-creative/node_modules/next/dist/esm/lib/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/stream-utils/encoded-tags.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/send-payload.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Transferências/elos-creative/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/Transferências/elos-creative/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2d$status$2d$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/client/components/redirect-status-code.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/invariant-error.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/lib/scheduler.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$routes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/shared/lib/router/utils/interception-routes.js [app-rsc] (ecmascript)");
const __TURBOPACK__layout__$23$0__ = ()=>__turbopack_context__.r("[project]/Transferências/elos-creative/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)");
const __TURBOPACK__not$2d$found__$23$1__ = ()=>__turbopack_context__.r("[project]/node_modules/next/dist/client/components/builtin/not-found.js [app-rsc] (ecmascript, Next.js Server Component)");
const __TURBOPACK__forbidden__$23$2__ = ()=>__turbopack_context__.r("[project]/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript, Next.js Server Component)");
const __TURBOPACK__unauthorized__$23$3__ = ()=>__turbopack_context__.r("[project]/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript, Next.js Server Component)");
const __TURBOPACK__global$2d$error__$23$4__ = ()=>__turbopack_context__.r("[project]/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)");
const __TURBOPACK__page__$23$5__ = ()=>__turbopack_context__.r("[project]/Transferências/elos-creative/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)");
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
// We inject the tree and pages here so that we can use them in the route
// module.
const tree = [
    "",
    {
        "children": [
            "__PAGE__",
            {},
            {
                metadata: {},
                "page": [
                    __TURBOPACK__page__$23$5__,
                    "[project]/Transferências/elos-creative/app/page.tsx"
                ]
            }
        ]
    },
    {
        "layout": [
            __TURBOPACK__layout__$23$0__,
            "[project]/Transferências/elos-creative/app/layout.tsx"
        ],
        "not-found": [
            __TURBOPACK__not$2d$found__$23$1__,
            "[project]/node_modules/next/dist/client/components/builtin/not-found.js"
        ],
        "forbidden": [
            __TURBOPACK__forbidden__$23$2__,
            "[project]/node_modules/next/dist/client/components/builtin/forbidden.js"
        ],
        "unauthorized": [
            __TURBOPACK__unauthorized__$23$3__,
            "[project]/node_modules/next/dist/client/components/builtin/unauthorized.js"
        ],
        "global-error": [
            __TURBOPACK__global$2d$error__$23$4__,
            "[project]/node_modules/next/dist/client/components/builtin/global-error.js"
        ]
    }
];
;
;
const __next_app_require__ = __turbopack_context__.r.bind(__turbopack_context__);
const __next_app_load_chunk__ = __turbopack_context__.l.bind(__turbopack_context__);
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};
;
;
;
;
;
;
const routeModule = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$module$2e$compiled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppPageRouteModule"]({
    definition: {
        kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RouteKind"].APP_PAGE,
        page: "/page",
        pathname: "/",
        // The following aren't used in production.
        bundlePath: '',
        filename: '',
        appPaths: []
    },
    userland: {
        loaderTree: tree
    },
    distDir: ("TURBOPACK compile-time value", ".next/dev") || '',
    relativeProjectDir: ("TURBOPACK compile-time value", "") || ''
});
async function handler(req, res, ctx) {
    var _this;
    if (routeModule.isDev) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addRequestMeta"])(req, 'devRequestTimingInternalsEnd', process.hrtime.bigint());
    }
    let srcPage = "/page";
    // turbopack doesn't normalize `/index` in the page name
    // so we need to to process dynamic routes properly
    // TODO: fix turbopack providing differing value from webpack
    if ("TURBOPACK compile-time truthy", 1) {
        srcPage = srcPage.replace(/\/index$/, '') || '/';
    } else if (srcPage === '/index') {
        // we always normalize /index specifically
        srcPage = '/';
    }
    const multiZoneDraftMode = ("TURBOPACK compile-time value", false);
    const isMinimalMode = Boolean(("TURBOPACK compile-time value", false) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'minimalMode'));
    const prepareResult = await routeModule.prepare(req, res, {
        srcPage,
        multiZoneDraftMode
    });
    if (!prepareResult) {
        res.statusCode = 400;
        res.end('Bad Request');
        ctx.waitUntil == null ? void 0 : ctx.waitUntil.call(ctx, Promise.resolve());
        return null;
    }
    const { buildId, query, params, pageIsDynamic, buildManifest, nextFontManifest, reactLoadableManifest, serverActionsManifest, clientReferenceManifest, subresourceIntegrityManifest, prerenderManifest, isDraftMode, resolvedPathname, revalidateOnlyGenerated, routerServerContext, nextConfig, parsedUrl, interceptionRoutePatterns } = prepareResult;
    const normalizedSrcPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeAppPath"])(srcPage);
    let { isOnDemandRevalidate } = prepareResult;
    // We use the resolvedPathname instead of the parsedUrl.pathname because it
    // is not rewritten as resolvedPathname is. This will ensure that the correct
    // prerender info is used instead of using the original pathname as the
    // source. If however PPR is enabled and cacheComponents is disabled, we
    // treat the pathname as dynamic. Currently, there's a bug in the PPR
    // implementation that incorrectly leaves %%drp placeholders in the output of
    // parallel routes. This is addressed with cacheComponents.
    const prerenderInfo = nextConfig.experimental.ppr && !nextConfig.cacheComponents && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$routes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isInterceptionRouteAppPath"])(resolvedPathname) ? null : routeModule.match(resolvedPathname, prerenderManifest);
    const isPrerendered = !!prerenderManifest.routes[resolvedPathname];
    const userAgent = req.headers['user-agent'] || '';
    const botType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$is$2d$bot$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBotType"])(userAgent);
    const isHtmlBot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$streaming$2d$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isHtmlBotRequest"])(req);
    /**
   * If true, this indicates that the request being made is for an app
   * prefetch request.
   */ const isPrefetchRSCRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'isPrefetchRSCRequest') ?? req.headers[__TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_ROUTER_PREFETCH_HEADER"]] === '1' // exclude runtime prefetches, which use '2'
    ;
    // NOTE: Don't delete headers[RSC] yet, it still needs to be used in renderToHTML later
    const isRSCRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'isRSCRequest') ?? Boolean(req.headers[__TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RSC_HEADER"]]);
    const isPossibleServerAction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$server$2d$action$2d$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getIsPossibleServerAction"])(req);
    /**
   * If the route being rendered is an app page, and the ppr feature has been
   * enabled, then the given route _could_ support PPR.
   */ const couldSupportPPR = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$experimental$2f$ppr$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkIsAppPPREnabled"])(nextConfig.experimental.ppr);
    // When enabled, this will allow the use of the `?__nextppronly` query to
    // enable debugging of the static shell.
    const hasDebugStaticShellQuery = ("TURBOPACK compile-time value", false) === '1' && typeof query.__nextppronly !== 'undefined' && couldSupportPPR;
    // When enabled, this will allow the use of the `?__nextppronly` query
    // to enable debugging of the fallback shell.
    const hasDebugFallbackShellQuery = hasDebugStaticShellQuery && query.__nextppronly === 'fallback';
    // This page supports PPR if it is marked as being `PARTIALLY_STATIC` in the
    // prerender manifest and this is an app page.
    const isRoutePPREnabled = couldSupportPPR && (((_this = prerenderManifest.routes[normalizedSrcPage] ?? prerenderManifest.dynamicRoutes[normalizedSrcPage]) == null ? void 0 : _this.renderingMode) === 'PARTIALLY_STATIC' || // Ideally we'd want to check the appConfig to see if this page has PPR
    // enabled or not, but that would require plumbing the appConfig through
    // to the server during development. We assume that the page supports it
    // but only during development.
    hasDebugStaticShellQuery && (routeModule.isDev === true || (routerServerContext == null ? void 0 : routerServerContext.experimentalTestProxy) === true));
    const isDebugStaticShell = hasDebugStaticShellQuery && isRoutePPREnabled;
    // We should enable debugging dynamic accesses when the static shell
    // debugging has been enabled and we're also in development mode.
    const isDebugDynamicAccesses = isDebugStaticShell && routeModule.isDev === true;
    const isDebugFallbackShell = hasDebugFallbackShellQuery && isRoutePPREnabled;
    // If we're in minimal mode, then try to get the postponed information from
    // the request metadata. If available, use it for resuming the postponed
    // render.
    const minimalPostponed = isRoutePPREnabled ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'postponed') : undefined;
    // If PPR is enabled, and this is a RSC request (but not a prefetch), then
    // we can use this fact to only generate the flight data for the request
    // because we can't cache the HTML (as it's also dynamic).
    let isDynamicRSCRequest = isRoutePPREnabled && isRSCRequest && !isPrefetchRSCRequest;
    // During a PPR revalidation, the RSC request is not dynamic if we do not have the postponed data.
    // We only attach the postponed data during a resume. If there's no postponed data, then it must be a revalidation.
    // This is to ensure that we don't bypass the cache during a revalidation.
    if (isMinimalMode) {
        isDynamicRSCRequest = isDynamicRSCRequest && !!minimalPostponed;
    }
    // Need to read this before it's stripped by stripFlightHeaders. We don't
    // need to transfer it to the request meta because it's only read
    // within this function; the static segment data should have already been
    // generated, so we will always either return a static response or a 404.
    const segmentPrefetchHeader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'segmentPrefetchRSCRequest');
    // TODO: investigate existing bug with shouldServeStreamingMetadata always
    // being true for a revalidate due to modifying the base-server this.renderOpts
    // when fixing this to correct logic it causes hydration issue since we set
    // serveStreamingMetadata to true during export
    const serveStreamingMetadata = isHtmlBot && isRoutePPREnabled ? false : !userAgent ? true : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$streaming$2d$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["shouldServeStreamingMetadata"])(userAgent, nextConfig.htmlLimitedBots);
    const isSSG = Boolean((prerenderInfo || isPrerendered || prerenderManifest.routes[normalizedSrcPage]) && // If this is a html bot request and PPR is enabled, then we don't want
    // to serve a static response.
    !(isHtmlBot && isRoutePPREnabled));
    // When a page supports cacheComponents, we can support RDC for Navigations
    const supportsRDCForNavigations = isRoutePPREnabled && nextConfig.cacheComponents === true;
    // In development, we always want to generate dynamic HTML.
    const supportsDynamicResponse = // a data request, in which case we only produce static HTML.
    routeModule.isDev === true || // If this is not SSG or does not have static paths, then it supports
    // dynamic HTML.
    !isSSG || // If this request has provided postponed data, it supports dynamic
    // HTML.
    typeof minimalPostponed === 'string' || // If this handler supports onCacheEntryV2, then we can only support
    // dynamic responses if it's a dynamic RSC request and not in minimal mode. If it
    // doesn't support it we must fallback to the default behavior.
    (supportsRDCForNavigations && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'onCacheEntryV2') ? // RSC request, we'll pass the minimal postponed data to the render
    // which will trigger the `supportsDynamicResponse` to be true.
    isDynamicRSCRequest && !isMinimalMode : isDynamicRSCRequest);
    // When html bots request PPR page, perform the full dynamic rendering.
    const shouldWaitOnAllReady = isHtmlBot && isRoutePPREnabled;
    let ssgCacheKey = null;
    if (!isDraftMode && isSSG && !supportsDynamicResponse && !isPossibleServerAction && !minimalPostponed && !isDynamicRSCRequest) {
        ssgCacheKey = resolvedPathname;
    }
    // the staticPathKey differs from ssgCacheKey since
    // ssgCacheKey is null in dev since we're always in "dynamic"
    // mode in dev to bypass the cache, but we still need to honor
    // dynamicParams = false in dev mode
    let staticPathKey = ssgCacheKey;
    if (!staticPathKey && routeModule.isDev) {
        staticPathKey = resolvedPathname;
    }
    // If this is a request for an app path that should be statically generated
    // and we aren't in the edge runtime, strip the flight headers so it will
    // generate the static response.
    if (!routeModule.isDev && !isDraftMode && isSSG && isRSCRequest && !isDynamicRSCRequest) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$strip$2d$flight$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stripFlightHeaders"])(req.headers);
    }
    const ComponentMod = {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__,
        tree,
        GlobalError: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29$__["default"],
        handler,
        routeModule,
        __next_app__
    };
    // Before rendering (which initializes component tree modules), we have to
    // set the reference manifests to our global store so Server Action's
    // encryption util can access to them at the top level of the page module.
    if (serverActionsManifest && clientReferenceManifest) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$encryption$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setReferenceManifestsSingleton"])({
            page: srcPage,
            clientReferenceManifest,
            serverActionsManifest,
            serverModuleMap: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$action$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerModuleMap"])({
                serverActionsManifest
            })
        });
    }
    const method = req.method || 'GET';
    const tracer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTracer"])();
    const activeSpan = tracer.getActiveScopeSpan();
    const render404 = async ()=>{
        // TODO: should route-module itself handle rendering the 404
        if (routerServerContext == null ? void 0 : routerServerContext.render404) {
            await routerServerContext.render404(req, res, parsedUrl, false);
        } else {
            res.end('This page could not be found');
        }
        return null;
    };
    try {
        const varyHeader = routeModule.getVaryHeader(resolvedPathname, interceptionRoutePatterns);
        res.setHeader('Vary', varyHeader);
        const invokeRouteModule = async (span, context)=>{
            const nextReq = new __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NodeNextRequest"](req);
            const nextRes = new __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NodeNextResponse"](res);
            return routeModule.render(nextReq, nextRes, context).finally(()=>{
                if (!span) return;
                span.setAttributes({
                    'http.status_code': res.statusCode,
                    'next.rsc': false
                });
                const rootSpanAttributes = tracer.getRootSpanAttributes();
                // We were unable to get attributes, probably OTEL is not enabled
                if (!rootSpanAttributes) {
                    return;
                }
                if (rootSpanAttributes.get('next.span_type') !== __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseServerSpan"].handleRequest) {
                    console.warn(`Unexpected root span type '${rootSpanAttributes.get('next.span_type')}'. Please report this Next.js issue https://github.com/vercel/next.js`);
                    return;
                }
                const route = rootSpanAttributes.get('next.route');
                if (route) {
                    const name = `${method} ${route}`;
                    span.setAttributes({
                        'next.route': route,
                        'http.route': route,
                        'next.span_name': name
                    });
                    span.updateName(name);
                } else {
                    span.updateName(`${method} ${srcPage}`);
                }
            });
        };
        const incrementalCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'incrementalCache');
        const doRender = async ({ span, postponed, fallbackRouteParams, forceStaticRender })=>{
            const context = {
                query,
                params,
                page: normalizedSrcPage,
                sharedContext: {
                    buildId
                },
                serverComponentsHmrCache: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'serverComponentsHmrCache'),
                fallbackRouteParams,
                renderOpts: {
                    App: ()=>null,
                    Document: ()=>null,
                    pageConfig: {},
                    ComponentMod,
                    Component: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$interop$2d$default$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["interopDefault"])(ComponentMod),
                    params,
                    routeModule,
                    page: srcPage,
                    postponed,
                    shouldWaitOnAllReady,
                    serveStreamingMetadata,
                    supportsDynamicResponse: typeof postponed === 'string' || supportsDynamicResponse,
                    buildManifest,
                    nextFontManifest,
                    reactLoadableManifest,
                    subresourceIntegrityManifest,
                    serverActionsManifest,
                    clientReferenceManifest,
                    setCacheStatus: routerServerContext == null ? void 0 : routerServerContext.setCacheStatus,
                    setIsrStatus: routerServerContext == null ? void 0 : routerServerContext.setIsrStatus,
                    setReactDebugChannel: routerServerContext == null ? void 0 : routerServerContext.setReactDebugChannel,
                    dir: ("TURBOPACK compile-time truthy", 1) ? require('path').join(/* turbopackIgnore: true */ process.cwd(), routeModule.relativeProjectDir) : "TURBOPACK unreachable",
                    isDraftMode,
                    botType,
                    isOnDemandRevalidate,
                    isPossibleServerAction,
                    assetPrefix: nextConfig.assetPrefix,
                    nextConfigOutput: nextConfig.output,
                    crossOrigin: nextConfig.crossOrigin,
                    trailingSlash: nextConfig.trailingSlash,
                    images: nextConfig.images,
                    previewProps: prerenderManifest.preview,
                    deploymentId: nextConfig.deploymentId,
                    enableTainting: nextConfig.experimental.taint,
                    htmlLimitedBots: nextConfig.htmlLimitedBots,
                    reactMaxHeadersLength: nextConfig.reactMaxHeadersLength,
                    multiZoneDraftMode,
                    incrementalCache,
                    cacheLifeProfiles: nextConfig.cacheLife,
                    basePath: nextConfig.basePath,
                    serverActions: nextConfig.experimental.serverActions,
                    ...isDebugStaticShell || isDebugDynamicAccesses || isDebugFallbackShell ? {
                        nextExport: true,
                        supportsDynamicResponse: false,
                        isStaticGeneration: true,
                        isDebugDynamicAccesses: isDebugDynamicAccesses
                    } : {},
                    cacheComponents: Boolean(nextConfig.cacheComponents),
                    experimental: {
                        isRoutePPREnabled,
                        expireTime: nextConfig.expireTime,
                        staleTimes: nextConfig.experimental.staleTimes,
                        dynamicOnHover: Boolean(nextConfig.experimental.dynamicOnHover),
                        inlineCss: Boolean(nextConfig.experimental.inlineCss),
                        authInterrupts: Boolean(nextConfig.experimental.authInterrupts),
                        clientTraceMetadata: nextConfig.experimental.clientTraceMetadata || [],
                        clientParamParsingOrigins: nextConfig.experimental.clientParamParsingOrigins
                    },
                    waitUntil: ctx.waitUntil,
                    onClose: (cb)=>{
                        res.on('close', cb);
                    },
                    onAfterTaskError: ()=>{},
                    onInstrumentationRequestError: (error, _request, errorContext)=>routeModule.onRequestError(req, error, errorContext, routerServerContext),
                    err: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'invokeError'),
                    dev: routeModule.isDev
                }
            };
            if (isDebugStaticShell || isDebugDynamicAccesses) {
                context.renderOpts.nextExport = true;
                context.renderOpts.supportsDynamicResponse = false;
                context.renderOpts.isDebugDynamicAccesses = isDebugDynamicAccesses;
            }
            // When we're revalidating in the background, we should not allow dynamic
            // responses.
            if (forceStaticRender) {
                context.renderOpts.supportsDynamicResponse = false;
            }
            const result = await invokeRouteModule(span, context);
            const { metadata } = result;
            const { cacheControl, headers = {}, fetchTags: cacheTags, fetchMetrics } = metadata;
            if (cacheTags) {
                headers[__TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_CACHE_TAGS_HEADER"]] = cacheTags;
            }
            // Pull any fetch metrics from the render onto the request.
            ;
            req.fetchMetrics = fetchMetrics;
            // we don't throw static to dynamic errors in dev as isSSG
            // is a best guess in dev since we don't have the prerender pass
            // to know whether the path is actually static or not
            if (isSSG && (cacheControl == null ? void 0 : cacheControl.revalidate) === 0 && !routeModule.isDev && !isRoutePPREnabled) {
                const staticBailoutInfo = metadata.staticBailoutInfo;
                const err = Object.defineProperty(new Error(`Page changed from static to dynamic at runtime ${resolvedPathname}${(staticBailoutInfo == null ? void 0 : staticBailoutInfo.description) ? `, reason: ${staticBailoutInfo.description}` : ``}` + `\nsee more here https://nextjs.org/docs/messages/app-static-to-dynamic-error`), "__NEXT_ERROR_CODE", {
                    value: "E132",
                    enumerable: false,
                    configurable: true
                });
                if (staticBailoutInfo == null ? void 0 : staticBailoutInfo.stack) {
                    const stack = staticBailoutInfo.stack;
                    err.stack = err.message + stack.substring(stack.indexOf('\n'));
                }
                throw err;
            }
            return {
                value: {
                    kind: __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CachedRouteKind"].APP_PAGE,
                    html: result,
                    headers,
                    rscData: metadata.flightData,
                    postponed: metadata.postponed,
                    status: metadata.statusCode,
                    segmentData: metadata.segmentData
                },
                cacheControl
            };
        };
        const responseGenerator = async ({ hasResolved, previousCacheEntry: previousIncrementalCacheEntry, isRevalidating, span, forceStaticRender = false })=>{
            const isProduction = routeModule.isDev === false;
            const didRespond = hasResolved || res.writableEnded;
            // skip on-demand revalidate if cache is not present and
            // revalidate-if-generated is set
            if (isOnDemandRevalidate && revalidateOnlyGenerated && !previousIncrementalCacheEntry && !isMinimalMode) {
                if (routerServerContext == null ? void 0 : routerServerContext.render404) {
                    await routerServerContext.render404(req, res);
                } else {
                    res.statusCode = 404;
                    res.end('This page could not be found');
                }
                return null;
            }
            let fallbackMode;
            if (prerenderInfo) {
                fallbackMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseFallbackField"])(prerenderInfo.fallback);
            }
            // When serving a HTML bot request, we want to serve a blocking render and
            // not the prerendered page. This ensures that the correct content is served
            // to the bot in the head.
            if (fallbackMode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FallbackMode"].PRERENDER && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$is$2d$bot$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isBot"])(userAgent)) {
                if (!isRoutePPREnabled || isHtmlBot) {
                    fallbackMode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FallbackMode"].BLOCKING_STATIC_RENDER;
                }
            }
            if ((previousIncrementalCacheEntry == null ? void 0 : previousIncrementalCacheEntry.isStale) === -1) {
                isOnDemandRevalidate = true;
            }
            // TODO: adapt for PPR
            // only allow on-demand revalidate for fallback: true/blocking
            // or for prerendered fallback: false paths
            if (isOnDemandRevalidate && (fallbackMode !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FallbackMode"].NOT_FOUND || previousIncrementalCacheEntry)) {
                fallbackMode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FallbackMode"].BLOCKING_STATIC_RENDER;
            }
            if (!isMinimalMode && fallbackMode !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FallbackMode"].BLOCKING_STATIC_RENDER && staticPathKey && !didRespond && !isDraftMode && pageIsDynamic && (isProduction || !isPrerendered)) {
                // if the page has dynamicParams: false and this pathname wasn't
                // prerendered trigger the no fallback handling
                if (// getStaticPaths.
                (isProduction || prerenderInfo) && // When fallback isn't present, abort this render so we 404
                fallbackMode === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FallbackMode"].NOT_FOUND) {
                    if (nextConfig.experimental.adapterPath) {
                        return await render404();
                    }
                    throw new __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js$2c$__cjs$29$__["NoFallbackError"]();
                }
                // When cacheComponents is enabled, we can use the fallback
                // response if the request is not a dynamic RSC request because the
                // RSC data when this feature flag is enabled does not contain any
                // param references. Without this feature flag enabled, the RSC data
                // contains param references, and therefore we can't use the fallback.
                if (isRoutePPREnabled && (nextConfig.cacheComponents ? !isDynamicRSCRequest : !isRSCRequest)) {
                    const cacheKey = isProduction && typeof (prerenderInfo == null ? void 0 : prerenderInfo.fallback) === 'string' ? prerenderInfo.fallback : normalizedSrcPage;
                    const fallbackRouteParams = // can use the manifest fallback route params.
                    isProduction && (prerenderInfo == null ? void 0 : prerenderInfo.fallbackRouteParams) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createOpaqueFallbackRouteParams"])(prerenderInfo.fallbackRouteParams) : isDebugFallbackShell ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFallbackRouteParams"])(normalizedSrcPage, routeModule) : null;
                    // We use the response cache here to handle the revalidation and
                    // management of the fallback shell.
                    const fallbackResponse = await routeModule.handleResponse({
                        cacheKey,
                        req,
                        nextConfig,
                        routeKind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RouteKind"].APP_PAGE,
                        isFallback: true,
                        prerenderManifest,
                        isRoutePPREnabled,
                        responseGenerator: async ()=>doRender({
                                span,
                                // We pass `undefined` as rendering a fallback isn't resumed
                                // here.
                                postponed: undefined,
                                fallbackRouteParams,
                                forceStaticRender: false
                            }),
                        waitUntil: ctx.waitUntil,
                        isMinimalMode
                    });
                    // If the fallback response was set to null, then we should return null.
                    if (fallbackResponse === null) return null;
                    // Otherwise, if we did get a fallback response, we should return it.
                    if (fallbackResponse) {
                        // Remove the cache control from the response to prevent it from being
                        // used in the surrounding cache.
                        delete fallbackResponse.cacheControl;
                        return fallbackResponse;
                    }
                }
            }
            // Only requests that aren't revalidating can be resumed. If we have the
            // minimal postponed data, then we should resume the render with it.
            let postponed = !isOnDemandRevalidate && !isRevalidating && minimalPostponed ? minimalPostponed : undefined;
            // If this is a dynamic RSC request, we should use the postponed data from
            // the static render (if available). This ensures that we can utilize the
            // resume data cache (RDC) from the static render to ensure that the data
            // is consistent between the static and dynamic renders.
            if (supportsRDCForNavigations && ("TURBOPACK compile-time value", "nodejs") !== 'edge' && !isMinimalMode && incrementalCache && isDynamicRSCRequest && // We don't typically trigger an on-demand revalidation for dynamic RSC
            // requests, as we're typically revalidating the page in the background
            // instead. However, if the cache entry is stale, we should trigger a
            // background revalidation on dynamic RSC requests. This prevents us
            // from entering an infinite loop of revalidations.
            !forceStaticRender) {
                const incrementalCacheEntry = await incrementalCache.get(resolvedPathname, {
                    kind: __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IncrementalCacheKind"].APP_PAGE,
                    isRoutePPREnabled: true,
                    isFallback: false
                });
                // If the cache entry is found, we should use the postponed data from
                // the cache.
                if (incrementalCacheEntry && incrementalCacheEntry.value && incrementalCacheEntry.value.kind === __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CachedRouteKind"].APP_PAGE) {
                    // CRITICAL: we're assigning the postponed data from the cache entry
                    // here as we're using the RDC to resume the render.
                    postponed = incrementalCacheEntry.value.postponed;
                    // If the cache entry is stale, we should trigger a background
                    // revalidation so that subsequent requests will get a fresh response.
                    if (incrementalCacheEntry && // We want to trigger this flow if the cache entry is stale and if
                    // the requested revalidation flow is either foreground or
                    // background.
                    (incrementalCacheEntry.isStale === -1 || incrementalCacheEntry.isStale === true)) {
                        // We want to schedule this on the next tick to ensure that the
                        // render is not blocked on it.
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["scheduleOnNextTick"])(async ()=>{
                            const responseCache = routeModule.getResponseCache(req);
                            try {
                                await responseCache.revalidate(resolvedPathname, incrementalCache, isRoutePPREnabled, false, (c)=>responseGenerator({
                                        ...c,
                                        // CRITICAL: we need to set this to true as we're
                                        // revalidating in the background and typically this dynamic
                                        // RSC request is not treated as static.
                                        forceStaticRender: true
                                    }), // previous cache entry here (which is stale) will switch on
                                // isOnDemandRevalidate and break the prerendering.
                                null, hasResolved, ctx.waitUntil);
                            } catch (err) {
                                console.error('Error revalidating the page in the background', err);
                            }
                        });
                    }
                }
            }
            // When we're in minimal mode, if we're trying to debug the static shell,
            // we should just return nothing instead of resuming the dynamic render.
            if ((isDebugStaticShell || isDebugDynamicAccesses) && typeof postponed !== 'undefined') {
                return {
                    cacheControl: {
                        revalidate: 1,
                        expire: undefined
                    },
                    value: {
                        kind: __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CachedRouteKind"].PAGES,
                        html: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].EMPTY,
                        pageData: {},
                        headers: undefined,
                        status: undefined
                    }
                };
            }
            const fallbackRouteParams = // can use the manifest fallback route params if we need to render the
            // fallback shell.
            isProduction && (prerenderInfo == null ? void 0 : prerenderInfo.fallbackRouteParams) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'renderFallbackShell') ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createOpaqueFallbackRouteParams"])(prerenderInfo.fallbackRouteParams) : isDebugFallbackShell ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFallbackRouteParams"])(normalizedSrcPage, routeModule) : null;
            // Perform the render.
            return doRender({
                span,
                postponed,
                fallbackRouteParams,
                forceStaticRender
            });
        };
        const handleResponse = async (span)=>{
            var _cacheEntry_value, _cachedData_headers;
            const cacheEntry = await routeModule.handleResponse({
                cacheKey: ssgCacheKey,
                responseGenerator: (c)=>responseGenerator({
                        span,
                        ...c
                    }),
                routeKind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RouteKind"].APP_PAGE,
                isOnDemandRevalidate,
                isRoutePPREnabled,
                req,
                nextConfig,
                prerenderManifest,
                waitUntil: ctx.waitUntil,
                isMinimalMode
            });
            if (isDraftMode) {
                res.setHeader('Cache-Control', 'private, no-cache, no-store, max-age=0, must-revalidate');
            }
            // In dev, we should not cache pages for any reason.
            if (routeModule.isDev) {
                res.setHeader('Cache-Control', 'no-store, must-revalidate');
            }
            if (!cacheEntry) {
                if (ssgCacheKey) {
                    // A cache entry might not be generated if a response is written
                    // in `getInitialProps` or `getServerSideProps`, but those shouldn't
                    // have a cache key. If we do have a cache key but we don't end up
                    // with a cache entry, then either Next.js or the application has a
                    // bug that needs fixing.
                    throw Object.defineProperty(new Error('invariant: cache entry required but not generated'), "__NEXT_ERROR_CODE", {
                        value: "E62",
                        enumerable: false,
                        configurable: true
                    });
                }
                return null;
            }
            if (((_cacheEntry_value = cacheEntry.value) == null ? void 0 : _cacheEntry_value.kind) !== __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CachedRouteKind"].APP_PAGE) {
                var _cacheEntry_value1;
                throw Object.defineProperty(new Error(`Invariant app-page handler received invalid cache entry ${(_cacheEntry_value1 = cacheEntry.value) == null ? void 0 : _cacheEntry_value1.kind}`), "__NEXT_ERROR_CODE", {
                    value: "E707",
                    enumerable: false,
                    configurable: true
                });
            }
            const didPostpone = typeof cacheEntry.value.postponed === 'string';
            if (isSSG && // We don't want to send a cache header for requests that contain dynamic
            // data. If this is a Dynamic RSC request or wasn't a Prefetch RSC
            // request, then we should set the cache header.
            !isDynamicRSCRequest && (!didPostpone || isPrefetchRSCRequest)) {
                if (!isMinimalMode) {
                    // set x-nextjs-cache header to match the header
                    // we set for the image-optimizer
                    res.setHeader('x-nextjs-cache', isOnDemandRevalidate ? 'REVALIDATED' : cacheEntry.isMiss ? 'MISS' : cacheEntry.isStale ? 'STALE' : 'HIT');
                }
                // Set a header used by the client router to signal the response is static
                // and should respect the `static` cache staleTime value.
                res.setHeader(__TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_IS_PRERENDER_HEADER"], '1');
            }
            const { value: cachedData } = cacheEntry;
            // Coerce the cache control parameter from the render.
            let cacheControl;
            // If this is a resume request in minimal mode it is streamed with dynamic
            // content and should not be cached.
            if (minimalPostponed) {
                cacheControl = {
                    revalidate: 0,
                    expire: undefined
                };
            } else if (isDynamicRSCRequest) {
                cacheControl = {
                    revalidate: 0,
                    expire: undefined
                };
            } else if (!routeModule.isDev) {
                // If this is a preview mode request, we shouldn't cache it
                if (isDraftMode) {
                    cacheControl = {
                        revalidate: 0,
                        expire: undefined
                    };
                } else if (!isSSG) {
                    if (!res.getHeader('Cache-Control')) {
                        cacheControl = {
                            revalidate: 0,
                            expire: undefined
                        };
                    }
                } else if (cacheEntry.cacheControl) {
                    // If the cache entry has a cache control with a revalidate value that's
                    // a number, use it.
                    if (typeof cacheEntry.cacheControl.revalidate === 'number') {
                        var _cacheEntry_cacheControl;
                        if (cacheEntry.cacheControl.revalidate < 1) {
                            throw Object.defineProperty(new Error(`Invalid revalidate configuration provided: ${cacheEntry.cacheControl.revalidate} < 1`), "__NEXT_ERROR_CODE", {
                                value: "E22",
                                enumerable: false,
                                configurable: true
                            });
                        }
                        cacheControl = {
                            revalidate: cacheEntry.cacheControl.revalidate,
                            expire: ((_cacheEntry_cacheControl = cacheEntry.cacheControl) == null ? void 0 : _cacheEntry_cacheControl.expire) ?? nextConfig.expireTime
                        };
                    } else {
                        cacheControl = {
                            revalidate: __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CACHE_ONE_YEAR"],
                            expire: undefined
                        };
                    }
                }
            }
            cacheEntry.cacheControl = cacheControl;
            if (typeof segmentPrefetchHeader === 'string' && (cachedData == null ? void 0 : cachedData.kind) === __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CachedRouteKind"].APP_PAGE && cachedData.segmentData) {
                var _cachedData_headers1;
                // This is a prefetch request issued by the client Segment Cache. These
                // should never reach the application layer (lambda). We should either
                // respond from the cache (HIT) or respond with 204 No Content (MISS).
                // Set a header to indicate that PPR is enabled for this route. This
                // lets the client distinguish between a regular cache miss and a cache
                // miss due to PPR being disabled. In other contexts this header is used
                // to indicate that the response contains dynamic data, but here we're
                // only using it to indicate that the feature is enabled — the segment
                // response itself contains whether the data is dynamic.
                res.setHeader(__TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_DID_POSTPONE_HEADER"], '2');
                // Add the cache tags header to the response if it exists and we're in
                // minimal mode while rendering a static page.
                const tags = (_cachedData_headers1 = cachedData.headers) == null ? void 0 : _cachedData_headers1[__TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_CACHE_TAGS_HEADER"]];
                if (isMinimalMode && isSSG && tags && typeof tags === 'string') {
                    res.setHeader(__TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_CACHE_TAGS_HEADER"], tags);
                }
                const matchedSegment = cachedData.segmentData.get(segmentPrefetchHeader);
                if (matchedSegment !== undefined) {
                    // Cache hit
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendRenderResult"])({
                        req,
                        res,
                        generateEtags: nextConfig.generateEtags,
                        poweredByHeader: nextConfig.poweredByHeader,
                        result: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].fromStatic(matchedSegment, __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RSC_CONTENT_TYPE_HEADER"]),
                        cacheControl: cacheEntry.cacheControl
                    });
                }
                // Cache miss. Either a cache entry for this route has not been generated
                // (which technically should not be possible when PPR is enabled, because
                // at a minimum there should always be a fallback entry) or there's no
                // match for the requested segment. Respond with a 204 No Content. We
                // don't bother to respond with 404, because these requests are only
                // issued as part of a prefetch.
                res.statusCode = 204;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendRenderResult"])({
                    req,
                    res,
                    generateEtags: nextConfig.generateEtags,
                    poweredByHeader: nextConfig.poweredByHeader,
                    result: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].EMPTY,
                    cacheControl: cacheEntry.cacheControl
                });
            }
            // If there's a callback for `onCacheEntry`, call it with the cache entry
            // and the revalidate options. If we support RDC for Navigations, we
            // prefer the `onCacheEntryV2` callback. Once RDC for Navigations is the
            // default, we can remove the fallback to `onCacheEntry` as
            // `onCacheEntryV2` is now fully supported.
            const onCacheEntry = supportsRDCForNavigations ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'onCacheEntryV2') ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'onCacheEntry') : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'onCacheEntry');
            if (onCacheEntry) {
                const finished = await onCacheEntry(cacheEntry, {
                    url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'initURL') ?? req.url
                });
                if (finished) return null;
            }
            if (cachedData.headers) {
                const headers = {
                    ...cachedData.headers
                };
                if (!isMinimalMode || !isSSG) {
                    delete headers[__TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_CACHE_TAGS_HEADER"]];
                }
                for (let [key, value] of Object.entries(headers)){
                    if (typeof value === 'undefined') continue;
                    if (Array.isArray(value)) {
                        for (const v of value){
                            res.appendHeader(key, v);
                        }
                    } else if (typeof value === 'number') {
                        value = value.toString();
                        res.appendHeader(key, value);
                    } else {
                        res.appendHeader(key, value);
                    }
                }
            }
            // Add the cache tags header to the response if it exists and we're in
            // minimal mode while rendering a static page.
            const tags = (_cachedData_headers = cachedData.headers) == null ? void 0 : _cachedData_headers[__TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_CACHE_TAGS_HEADER"]];
            if (isMinimalMode && isSSG && tags && typeof tags === 'string') {
                res.setHeader(__TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_CACHE_TAGS_HEADER"], tags);
            }
            // If the request is a data request, then we shouldn't set the status code
            // from the response because it should always be 200. This should be gated
            // behind the experimental PPR flag.
            if (cachedData.status && (!isRSCRequest || !isRoutePPREnabled)) {
                res.statusCode = cachedData.status;
            }
            // Redirect information is encoded in RSC payload, so we don't need to use redirect status codes
            if (!isMinimalMode && cachedData.status && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2d$status$2d$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RedirectStatusCode"][cachedData.status] && isRSCRequest) {
                res.statusCode = 200;
            }
            // Mark that the request did postpone.
            if (didPostpone && !isDynamicRSCRequest) {
                res.setHeader(__TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_DID_POSTPONE_HEADER"], '1');
            }
            // we don't go through this block when preview mode is true
            // as preview mode is a dynamic request (bypasses cache) and doesn't
            // generate both HTML and payloads in the same request so continue to just
            // return the generated payload
            if (isRSCRequest && !isDraftMode) {
                // If this is a dynamic RSC request, then stream the response.
                if (typeof cachedData.rscData === 'undefined') {
                    // If the response is not an RSC response, then we can't serve it.
                    if (cachedData.html.contentType !== __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RSC_CONTENT_TYPE_HEADER"]) {
                        if (nextConfig.cacheComponents) {
                            res.statusCode = 404;
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendRenderResult"])({
                                req,
                                res,
                                generateEtags: nextConfig.generateEtags,
                                poweredByHeader: nextConfig.poweredByHeader,
                                result: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].EMPTY,
                                cacheControl: cacheEntry.cacheControl
                            });
                        } else {
                            // Otherwise this case is not expected.
                            throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"](`Expected RSC response, got ${cachedData.html.contentType}`), "__NEXT_ERROR_CODE", {
                                value: "E789",
                                enumerable: false,
                                configurable: true
                            });
                        }
                    }
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendRenderResult"])({
                        req,
                        res,
                        generateEtags: nextConfig.generateEtags,
                        poweredByHeader: nextConfig.poweredByHeader,
                        result: cachedData.html,
                        cacheControl: cacheEntry.cacheControl
                    });
                }
                // As this isn't a prefetch request, we should serve the static flight
                // data.
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendRenderResult"])({
                    req,
                    res,
                    generateEtags: nextConfig.generateEtags,
                    poweredByHeader: nextConfig.poweredByHeader,
                    result: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].fromStatic(cachedData.rscData, __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RSC_CONTENT_TYPE_HEADER"]),
                    cacheControl: cacheEntry.cacheControl
                });
            }
            // This is a request for HTML data.
            const body = cachedData.html;
            // If there's no postponed state, we should just serve the HTML. This
            // should also be the case for a resume request because it's completed
            // as a server render (rather than a static render).
            if (!didPostpone || isMinimalMode || isRSCRequest) {
                // If we're in test mode, we should add a sentinel chunk to the response
                // that's between the static and dynamic parts so we can compare the
                // chunks and add assertions.
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendRenderResult"])({
                    req,
                    res,
                    generateEtags: nextConfig.generateEtags,
                    poweredByHeader: nextConfig.poweredByHeader,
                    result: body,
                    cacheControl: cacheEntry.cacheControl
                });
            }
            // If we're debugging the static shell or the dynamic API accesses, we
            // should just serve the HTML without resuming the render. The returned
            // HTML will be the static shell so all the Dynamic API's will be used
            // during static generation.
            if (isDebugStaticShell || isDebugDynamicAccesses) {
                // Since we're not resuming the render, we need to at least add the
                // closing body and html tags to create valid HTML.
                body.push(new ReadableStream({
                    start (controller) {
                        controller.enqueue(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].CLOSED.BODY_AND_HTML);
                        controller.close();
                    }
                }));
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendRenderResult"])({
                    req,
                    res,
                    generateEtags: nextConfig.generateEtags,
                    poweredByHeader: nextConfig.poweredByHeader,
                    result: body,
                    cacheControl: {
                        revalidate: 0,
                        expire: undefined
                    }
                });
            }
            // If we're in test mode, we should add a sentinel chunk to the response
            // that's between the static and dynamic parts so we can compare the
            // chunks and add assertions.
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            // This request has postponed, so let's create a new transformer that the
            // dynamic data can pipe to that will attach the dynamic data to the end
            // of the response.
            const transformer = new TransformStream();
            body.push(transformer.readable);
            // Perform the render again, but this time, provide the postponed state.
            // We don't await because we want the result to start streaming now, and
            // we've already chained the transformer's readable to the render result.
            doRender({
                span,
                postponed: cachedData.postponed,
                // This is a resume render, not a fallback render, so we don't need to
                // set this.
                fallbackRouteParams: null,
                forceStaticRender: false
            }).then(async (result)=>{
                var _result_value;
                if (!result) {
                    throw Object.defineProperty(new Error('Invariant: expected a result to be returned'), "__NEXT_ERROR_CODE", {
                        value: "E463",
                        enumerable: false,
                        configurable: true
                    });
                }
                if (((_result_value = result.value) == null ? void 0 : _result_value.kind) !== __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CachedRouteKind"].APP_PAGE) {
                    var _result_value1;
                    throw Object.defineProperty(new Error(`Invariant: expected a page response, got ${(_result_value1 = result.value) == null ? void 0 : _result_value1.kind}`), "__NEXT_ERROR_CODE", {
                        value: "E305",
                        enumerable: false,
                        configurable: true
                    });
                }
                // Pipe the resume result to the transformer.
                await result.value.html.pipeTo(transformer.writable);
            }).catch((err)=>{
                // An error occurred during piping or preparing the render, abort
                // the transformers writer so we can terminate the stream.
                transformer.writable.abort(err).catch((e)=>{
                    console.error("couldn't abort transformer", e);
                });
            });
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendRenderResult"])({
                req,
                res,
                generateEtags: nextConfig.generateEtags,
                poweredByHeader: nextConfig.poweredByHeader,
                result: body,
                // We don't want to cache the response if it has postponed data because
                // the response being sent to the client it's dynamic parts are streamed
                // to the client on the same request.
                cacheControl: {
                    revalidate: 0,
                    expire: undefined
                }
            });
        };
        // TODO: activeSpan code path is for when wrapped by
        // next-server can be removed when this is no longer used
        if (activeSpan) {
            await handleResponse(activeSpan);
        } else {
            return await tracer.withPropagatedContext(req.headers, ()=>tracer.trace(__TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseServerSpan"].handleRequest, {
                    spanName: `${method} ${srcPage}`,
                    kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SpanKind"].SERVER,
                    attributes: {
                        'http.method': method,
                        'http.target': req.url
                    }
                }, handleResponse));
        }
    } catch (err) {
        if (!(err instanceof __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js$2c$__cjs$29$__["NoFallbackError"])) {
            await routeModule.onRequestError(req, err, {
                routerKind: 'App Router',
                routePath: srcPage,
                routeType: 'render',
                revalidateReason: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$instrumentation$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRevalidateReason"])({
                    isStaticGeneration: isSSG,
                    isOnDemandRevalidate
                })
            }, routerServerContext);
        }
        // rethrow so that we can handle serving error page
        throw err;
    }
}
// TODO: omit this from production builds, only test builds should include it
/**
 * Creates a readable stream that emits a PPR boundary sentinel.
 *
 * @returns A readable stream that emits a PPR boundary sentinel.
 */ function createPPRBoundarySentinel() {
    return new ReadableStream({
        start (controller) {
            controller.enqueue(new TextEncoder().encode('<!-- PPR_BOUNDARY_SENTINEL -->'));
            controller.close();
        }
    });
} //# sourceMappingURL=app-page.js.map
}),
"[project]/node_modules/next/dist/esm/build/templates/app-page.js?page=/page { GLOBAL_ERROR_MODULE => \"[project]/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_0 => \"[project]/Transferências/elos-creative/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_1 => \"[project]/node_modules/next/dist/client/components/builtin/not-found.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_2 => \"[project]/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_3 => \"[project]/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_4 => \"[project]/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_5 => \"[project]/Transferências/elos-creative/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)\" } [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppRouter",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["AppRouter"],
    "ClientPageRoot",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["ClientPageRoot"],
    "GlobalError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29$__["default"],
    "LayoutRouter",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["LayoutRouter"],
    "NotFoundBoundary",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["NotFoundBoundary"],
    "Postpone",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["Postpone"],
    "RenderFromTemplateContext",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RenderFromTemplateContext"],
    "__next_app__",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__GLOBAL_ERROR_MODULE__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_0__$3d3e$__$225b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$not$2d$found$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$forbidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$unauthorized$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["__next_app__"],
    "actionAsyncStorage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["actionAsyncStorage"],
    "createDynamicallyTrackedSearchParams",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createDynamicallyTrackedSearchParams"],
    "createUntrackedSearchParams",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createUntrackedSearchParams"],
    "decodeAction",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["decodeAction"],
    "decodeFormState",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["decodeFormState"],
    "decodeReply",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["decodeReply"],
    "handler",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__GLOBAL_ERROR_MODULE__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_0__$3d3e$__$225b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$not$2d$found$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$forbidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$unauthorized$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["handler"],
    "patchFetch",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["patchFetch"],
    "preconnect",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["preconnect"],
    "preloadFont",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["preloadFont"],
    "preloadStyle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["preloadStyle"],
    "renderToReadableStream",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["renderToReadableStream"],
    "requestAsyncStorage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["requestAsyncStorage"],
    "routeModule",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__GLOBAL_ERROR_MODULE__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_0__$3d3e$__$225b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$not$2d$found$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$forbidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$unauthorized$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["routeModule"],
    "serverHooks",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["serverHooks"],
    "staticGenerationAsyncStorage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["staticGenerationAsyncStorage"],
    "taintObjectReference",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["taintObjectReference"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__GLOBAL_ERROR_MODULE__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_0__$3d3e$__$225b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$not$2d$found$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$forbidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$unauthorized$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/node_modules/next/dist/esm/build/templates/app-page.js?page=/page { GLOBAL_ERROR_MODULE => "[project]/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)", MODULE_0 => "[project]/Transferências/elos-creative/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", MODULE_1 => "[project]/node_modules/next/dist/client/components/builtin/not-found.js [app-rsc] (ecmascript, Next.js Server Component)", MODULE_2 => "[project]/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript, Next.js Server Component)", MODULE_3 => "[project]/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript, Next.js Server Component)", MODULE_4 => "[project]/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)", MODULE_5 => "[project]/Transferências/elos-creative/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)" } [app-rsc] (ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/Transferências/elos-creative/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility)");
}),
];

//# sourceMappingURL=_116cc841._.js.map
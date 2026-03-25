(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/next/dist/compiled/process/browser.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {

(function() {
    var e = {
        229: function(e) {
            var t = e.exports = {};
            var r;
            var n;
            function defaultSetTimout() {
                throw new Error("setTimeout has not been defined");
            }
            function defaultClearTimeout() {
                throw new Error("clearTimeout has not been defined");
            }
            (function() {
                try {
                    if (typeof setTimeout === "function") {
                        r = setTimeout;
                    } else {
                        r = defaultSetTimout;
                    }
                } catch (e) {
                    r = defaultSetTimout;
                }
                try {
                    if (typeof clearTimeout === "function") {
                        n = clearTimeout;
                    } else {
                        n = defaultClearTimeout;
                    }
                } catch (e) {
                    n = defaultClearTimeout;
                }
            })();
            function runTimeout(e) {
                if (r === setTimeout) {
                    return setTimeout(e, 0);
                }
                if ((r === defaultSetTimout || !r) && setTimeout) {
                    r = setTimeout;
                    return setTimeout(e, 0);
                }
                try {
                    return r(e, 0);
                } catch (t) {
                    try {
                        return r.call(null, e, 0);
                    } catch (t) {
                        return r.call(this, e, 0);
                    }
                }
            }
            function runClearTimeout(e) {
                if (n === clearTimeout) {
                    return clearTimeout(e);
                }
                if ((n === defaultClearTimeout || !n) && clearTimeout) {
                    n = clearTimeout;
                    return clearTimeout(e);
                }
                try {
                    return n(e);
                } catch (t) {
                    try {
                        return n.call(null, e);
                    } catch (t) {
                        return n.call(this, e);
                    }
                }
            }
            var i = [];
            var o = false;
            var u;
            var a = -1;
            function cleanUpNextTick() {
                if (!o || !u) {
                    return;
                }
                o = false;
                if (u.length) {
                    i = u.concat(i);
                } else {
                    a = -1;
                }
                if (i.length) {
                    drainQueue();
                }
            }
            function drainQueue() {
                if (o) {
                    return;
                }
                var e = runTimeout(cleanUpNextTick);
                o = true;
                var t = i.length;
                while(t){
                    u = i;
                    i = [];
                    while(++a < t){
                        if (u) {
                            u[a].run();
                        }
                    }
                    a = -1;
                    t = i.length;
                }
                u = null;
                o = false;
                runClearTimeout(e);
            }
            t.nextTick = function(e) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1) {
                    for(var r = 1; r < arguments.length; r++){
                        t[r - 1] = arguments[r];
                    }
                }
                i.push(new Item(e, t));
                if (i.length === 1 && !o) {
                    runTimeout(drainQueue);
                }
            };
            function Item(e, t) {
                this.fun = e;
                this.array = t;
            }
            Item.prototype.run = function() {
                this.fun.apply(null, this.array);
            };
            t.title = "browser";
            t.browser = true;
            t.env = {};
            t.argv = [];
            t.version = "";
            t.versions = {};
            function noop() {}
            t.on = noop;
            t.addListener = noop;
            t.once = noop;
            t.off = noop;
            t.removeListener = noop;
            t.removeAllListeners = noop;
            t.emit = noop;
            t.prependListener = noop;
            t.prependOnceListener = noop;
            t.listeners = function(e) {
                return [];
            };
            t.binding = function(e) {
                throw new Error("process.binding is not supported");
            };
            t.cwd = function() {
                return "/";
            };
            t.chdir = function(e) {
                throw new Error("process.chdir is not supported");
            };
            t.umask = function() {
                return 0;
            };
        }
    };
    var t = {};
    function __nccwpck_require__(r) {
        var n = t[r];
        if (n !== undefined) {
            return n.exports;
        }
        var i = t[r] = {
            exports: {}
        };
        var o = true;
        try {
            e[r](i, i.exports, __nccwpck_require__);
            o = false;
        } finally{
            if (o) delete t[r];
        }
        return i.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/node_modules/next/dist/compiled/process") + "/";
    var r = __nccwpck_require__(229);
    module.exports = r;
})();
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var _global_process, _global_process1;
module.exports = ((_global_process = /*TURBOPACK member replacement*/ __turbopack_context__.g.process) == null ? void 0 : _global_process.env) && typeof ((_global_process1 = /*TURBOPACK member replacement*/ __turbopack_context__.g.process) == null ? void 0 : _global_process1.env) === "object" ? /*TURBOPACK member replacement*/ __turbopack_context__.g.process : __turbopack_context__.r("[project]/node_modules/next/dist/compiled/process/browser.js [client] (ecmascript)"); //# sourceMappingURL=process.js.map
}),
"[project]/node_modules/next/dist/compiled/react-refresh/cjs/react-refresh-runtime.development.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-refresh-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Transferências/elos-creative/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time truthy", 1) {
    (function() {
        'use strict';
        // ATTENTION
        var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
        var REACT_MEMO_TYPE = Symbol.for('react.memo');
        var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map; // We never remove these associations.
        // It's OK to reference families, but use WeakMap/Set for types.
        var allFamiliesByID = new Map();
        var allFamiliesByType = new PossiblyWeakMap();
        var allSignaturesByType = new PossiblyWeakMap(); // This WeakMap is read by React, so we only put families
        // that have actually been edited here. This keeps checks fast.
        // $FlowIssue
        var updatedFamiliesByType = new PossiblyWeakMap(); // This is cleared on every performReactRefresh() call.
        // It is an array of [Family, NextType] tuples.
        var pendingUpdates = []; // This is injected by the renderer via DevTools global hook.
        var helpersByRendererID = new Map();
        var helpersByRoot = new Map(); // We keep track of mounted roots so we can schedule updates.
        var mountedRoots = new Set(); // If a root captures an error, we remember it so we can retry on edit.
        var failedRoots = new Set(); // In environments that support WeakMap, we also remember the last element for every root.
        // It needs to be weak because we do this even for roots that failed to mount.
        // If there is no WeakMap, we won't attempt to do retrying.
        // $FlowIssue
        var rootElements = typeof WeakMap === 'function' ? new WeakMap() : null;
        var isPerformingRefresh = false;
        function computeFullKey(signature) {
            if (signature.fullKey !== null) {
                return signature.fullKey;
            }
            var fullKey = signature.ownKey;
            var hooks;
            try {
                hooks = signature.getCustomHooks();
            } catch (err) {
                // This can happen in an edge case, e.g. if expression like Foo.useSomething
                // depends on Foo which is lazily initialized during rendering.
                // In that case just assume we'll have to remount.
                signature.forceReset = true;
                signature.fullKey = fullKey;
                return fullKey;
            }
            for(var i = 0; i < hooks.length; i++){
                var hook = hooks[i];
                if (typeof hook !== 'function') {
                    // Something's wrong. Assume we need to remount.
                    signature.forceReset = true;
                    signature.fullKey = fullKey;
                    return fullKey;
                }
                var nestedHookSignature = allSignaturesByType.get(hook);
                if (nestedHookSignature === undefined) {
                    continue;
                }
                var nestedHookKey = computeFullKey(nestedHookSignature);
                if (nestedHookSignature.forceReset) {
                    signature.forceReset = true;
                }
                fullKey += '\n---\n' + nestedHookKey;
            }
            signature.fullKey = fullKey;
            return fullKey;
        }
        function haveEqualSignatures(prevType, nextType) {
            var prevSignature = allSignaturesByType.get(prevType);
            var nextSignature = allSignaturesByType.get(nextType);
            if (prevSignature === undefined && nextSignature === undefined) {
                return true;
            }
            if (prevSignature === undefined || nextSignature === undefined) {
                return false;
            }
            if (computeFullKey(prevSignature) !== computeFullKey(nextSignature)) {
                return false;
            }
            if (nextSignature.forceReset) {
                return false;
            }
            return true;
        }
        function isReactClass(type) {
            return type.prototype && type.prototype.isReactComponent;
        }
        function canPreserveStateBetween(prevType, nextType) {
            if (isReactClass(prevType) || isReactClass(nextType)) {
                return false;
            }
            if (haveEqualSignatures(prevType, nextType)) {
                return true;
            }
            return false;
        }
        function resolveFamily(type) {
            // Only check updated types to keep lookups fast.
            return updatedFamiliesByType.get(type);
        } // If we didn't care about IE11, we could use new Map/Set(iterable).
        function cloneMap(map) {
            var clone = new Map();
            map.forEach(function(value, key) {
                clone.set(key, value);
            });
            return clone;
        }
        function cloneSet(set) {
            var clone = new Set();
            set.forEach(function(value) {
                clone.add(value);
            });
            return clone;
        } // This is a safety mechanism to protect against rogue getters and Proxies.
        function getProperty(object, property) {
            try {
                return object[property];
            } catch (err) {
                // Intentionally ignore.
                return undefined;
            }
        }
        function performReactRefresh() {
            if (pendingUpdates.length === 0) {
                return null;
            }
            if (isPerformingRefresh) {
                return null;
            }
            isPerformingRefresh = true;
            try {
                var staleFamilies = new Set();
                var updatedFamilies = new Set();
                var updates = pendingUpdates;
                pendingUpdates = [];
                updates.forEach(function(_ref) {
                    var family = _ref[0], nextType = _ref[1];
                    // Now that we got a real edit, we can create associations
                    // that will be read by the React reconciler.
                    var prevType = family.current;
                    updatedFamiliesByType.set(prevType, family);
                    updatedFamiliesByType.set(nextType, family);
                    family.current = nextType; // Determine whether this should be a re-render or a re-mount.
                    if (canPreserveStateBetween(prevType, nextType)) {
                        updatedFamilies.add(family);
                    } else {
                        staleFamilies.add(family);
                    }
                }); // TODO: rename these fields to something more meaningful.
                var update = {
                    updatedFamilies: updatedFamilies,
                    // Families that will re-render preserving state
                    staleFamilies: staleFamilies // Families that will be remounted
                };
                helpersByRendererID.forEach(function(helpers) {
                    // Even if there are no roots, set the handler on first update.
                    // This ensures that if *new* roots are mounted, they'll use the resolve handler.
                    helpers.setRefreshHandler(resolveFamily);
                });
                var didError = false;
                var firstError = null; // We snapshot maps and sets that are mutated during commits.
                // If we don't do this, there is a risk they will be mutated while
                // we iterate over them. For example, trying to recover a failed root
                // may cause another root to be added to the failed list -- an infinite loop.
                var failedRootsSnapshot = cloneSet(failedRoots);
                var mountedRootsSnapshot = cloneSet(mountedRoots);
                var helpersByRootSnapshot = cloneMap(helpersByRoot);
                failedRootsSnapshot.forEach(function(root) {
                    var helpers = helpersByRootSnapshot.get(root);
                    if (helpers === undefined) {
                        throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
                    }
                    if (!failedRoots.has(root)) {}
                    if (rootElements === null) {
                        return;
                    }
                    if (!rootElements.has(root)) {
                        return;
                    }
                    var element = rootElements.get(root);
                    try {
                        helpers.scheduleRoot(root, element);
                    } catch (err) {
                        if (!didError) {
                            didError = true;
                            firstError = err;
                        } // Keep trying other roots.
                    }
                });
                mountedRootsSnapshot.forEach(function(root) {
                    var helpers = helpersByRootSnapshot.get(root);
                    if (helpers === undefined) {
                        throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
                    }
                    if (!mountedRoots.has(root)) {}
                    try {
                        helpers.scheduleRefresh(root, update);
                    } catch (err) {
                        if (!didError) {
                            didError = true;
                            firstError = err;
                        } // Keep trying other roots.
                    }
                });
                if (didError) {
                    throw firstError;
                }
                return update;
            } finally{
                isPerformingRefresh = false;
            }
        }
        function register(type, id) {
            {
                if (type === null) {
                    return;
                }
                if (typeof type !== 'function' && typeof type !== 'object') {
                    return;
                } // This can happen in an edge case, e.g. if we register
                // return value of a HOC but it returns a cached component.
                // Ignore anything but the first registration for each type.
                if (allFamiliesByType.has(type)) {
                    return;
                } // Create family or remember to update it.
                // None of this bookkeeping affects reconciliation
                // until the first performReactRefresh() call above.
                var family = allFamiliesByID.get(id);
                if (family === undefined) {
                    family = {
                        current: type
                    };
                    allFamiliesByID.set(id, family);
                } else {
                    pendingUpdates.push([
                        family,
                        type
                    ]);
                }
                allFamiliesByType.set(type, family); // Visit inner types because we might not have registered them.
                if (typeof type === 'object' && type !== null) {
                    switch(getProperty(type, '$$typeof')){
                        case REACT_FORWARD_REF_TYPE:
                            register(type.render, id + '$render');
                            break;
                        case REACT_MEMO_TYPE:
                            register(type.type, id + '$type');
                            break;
                    }
                }
            }
        }
        function setSignature(type, key) {
            var forceReset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            var getCustomHooks = arguments.length > 3 ? arguments[3] : undefined;
            {
                if (!allSignaturesByType.has(type)) {
                    allSignaturesByType.set(type, {
                        forceReset: forceReset,
                        ownKey: key,
                        fullKey: null,
                        getCustomHooks: getCustomHooks || function() {
                            return [];
                        }
                    });
                } // Visit inner types because we might not have signed them.
                if (typeof type === 'object' && type !== null) {
                    switch(getProperty(type, '$$typeof')){
                        case REACT_FORWARD_REF_TYPE:
                            setSignature(type.render, key, forceReset, getCustomHooks);
                            break;
                        case REACT_MEMO_TYPE:
                            setSignature(type.type, key, forceReset, getCustomHooks);
                            break;
                    }
                }
            }
        } // This is lazily called during first render for a type.
        // It captures Hook list at that time so inline requires don't break comparisons.
        function collectCustomHooksForSignature(type) {
            {
                var signature = allSignaturesByType.get(type);
                if (signature !== undefined) {
                    computeFullKey(signature);
                }
            }
        }
        function getFamilyByID(id) {
            {
                return allFamiliesByID.get(id);
            }
        }
        function getFamilyByType(type) {
            {
                return allFamiliesByType.get(type);
            }
        }
        function findAffectedHostInstances(families) {
            {
                var affectedInstances = new Set();
                mountedRoots.forEach(function(root) {
                    var helpers = helpersByRoot.get(root);
                    if (helpers === undefined) {
                        throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
                    }
                    var instancesForRoot = helpers.findHostInstancesForRefresh(root, families);
                    instancesForRoot.forEach(function(inst) {
                        affectedInstances.add(inst);
                    });
                });
                return affectedInstances;
            }
        }
        function injectIntoGlobalHook(globalObject) {
            {
                // For React Native, the global hook will be set up by require('react-devtools-core').
                // That code will run before us. So we need to monkeypatch functions on existing hook.
                // For React Web, the global hook will be set up by the extension.
                // This will also run before us.
                var hook = globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__;
                if (hook === undefined) {
                    // However, if there is no DevTools extension, we'll need to set up the global hook ourselves.
                    // Note that in this case it's important that renderer code runs *after* this method call.
                    // Otherwise, the renderer will think that there is no global hook, and won't do the injection.
                    var nextID = 0;
                    globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__ = hook = {
                        renderers: new Map(),
                        supportsFiber: true,
                        inject: function(injected) {
                            return nextID++;
                        },
                        onScheduleFiberRoot: function(id, root, children) {},
                        onCommitFiberRoot: function(id, root, maybePriorityLevel, didError) {},
                        onCommitFiberUnmount: function() {}
                    };
                }
                if (hook.isDisabled) {
                    // This isn't a real property on the hook, but it can be set to opt out
                    // of DevTools integration and associated warnings and logs.
                    // Using console['warn'] to evade Babel and ESLint
                    console['warn']('Something has shimmed the React DevTools global hook (__REACT_DEVTOOLS_GLOBAL_HOOK__). ' + 'Fast Refresh is not compatible with this shim and will be disabled.');
                    return;
                } // Here, we just want to get a reference to scheduleRefresh.
                var oldInject = hook.inject;
                hook.inject = function(injected) {
                    var id = oldInject.apply(this, arguments);
                    if (typeof injected.scheduleRefresh === 'function' && typeof injected.setRefreshHandler === 'function') {
                        // This version supports React Refresh.
                        helpersByRendererID.set(id, injected);
                    }
                    return id;
                }; // Do the same for any already injected roots.
                // This is useful if ReactDOM has already been initialized.
                // https://github.com/facebook/react/issues/17626
                hook.renderers.forEach(function(injected, id) {
                    if (typeof injected.scheduleRefresh === 'function' && typeof injected.setRefreshHandler === 'function') {
                        // This version supports React Refresh.
                        helpersByRendererID.set(id, injected);
                    }
                }); // We also want to track currently mounted roots.
                var oldOnCommitFiberRoot = hook.onCommitFiberRoot;
                var oldOnScheduleFiberRoot = hook.onScheduleFiberRoot || function() {};
                hook.onScheduleFiberRoot = function(id, root, children) {
                    if (!isPerformingRefresh) {
                        // If it was intentionally scheduled, don't attempt to restore.
                        // This includes intentionally scheduled unmounts.
                        failedRoots.delete(root);
                        if (rootElements !== null) {
                            rootElements.set(root, children);
                        }
                    }
                    return oldOnScheduleFiberRoot.apply(this, arguments);
                };
                hook.onCommitFiberRoot = function(id, root, maybePriorityLevel, didError) {
                    var helpers = helpersByRendererID.get(id);
                    if (helpers !== undefined) {
                        helpersByRoot.set(root, helpers);
                        var current = root.current;
                        var alternate = current.alternate; // We need to determine whether this root has just (un)mounted.
                        // This logic is copy-pasted from similar logic in the DevTools backend.
                        // If this breaks with some refactoring, you'll want to update DevTools too.
                        if (alternate !== null) {
                            var wasMounted = alternate.memoizedState != null && alternate.memoizedState.element != null && mountedRoots.has(root);
                            var isMounted = current.memoizedState != null && current.memoizedState.element != null;
                            if (!wasMounted && isMounted) {
                                // Mount a new root.
                                mountedRoots.add(root);
                                failedRoots.delete(root);
                            } else if (wasMounted && isMounted) ;
                            else if (wasMounted && !isMounted) {
                                // Unmount an existing root.
                                mountedRoots.delete(root);
                                if (didError) {
                                    // We'll remount it on future edits.
                                    failedRoots.add(root);
                                } else {
                                    helpersByRoot.delete(root);
                                }
                            } else if (!wasMounted && !isMounted) {
                                if (didError) {
                                    // We'll remount it on future edits.
                                    failedRoots.add(root);
                                }
                            }
                        } else {
                            // Mount a new root.
                            mountedRoots.add(root);
                        }
                    } // Always call the decorated DevTools hook.
                    return oldOnCommitFiberRoot.apply(this, arguments);
                };
            }
        }
        function hasUnrecoverableErrors() {
            // TODO: delete this after removing dependency in RN.
            return false;
        } // Exposed for testing.
        function _getMountedRootCount() {
            {
                return mountedRoots.size;
            }
        } // This is a wrapper over more primitive functions for setting signature.
        // Signatures let us decide whether the Hook order has changed on refresh.
        //
        // This function is intended to be used as a transform target, e.g.:
        // var _s = createSignatureFunctionForTransform()
        //
        // function Hello() {
        //   const [foo, setFoo] = useState(0);
        //   const value = useCustomHook();
        //   _s(); /* Call without arguments triggers collecting the custom Hook list.
        //          * This doesn't happen during the module evaluation because we
        //          * don't want to change the module order with inline requires.
        //          * Next calls are noops. */
        //   return <h1>Hi</h1>;
        // }
        //
        // /* Call with arguments attaches the signature to the type: */
        // _s(
        //   Hello,
        //   'useState{[foo, setFoo]}(0)',
        //   () => [useCustomHook], /* Lazy to avoid triggering inline requires */
        // );
        function createSignatureFunctionForTransform() {
            {
                var savedType;
                var hasCustomHooks;
                var didCollectHooks = false;
                return function(type, key, forceReset, getCustomHooks) {
                    if (typeof key === 'string') {
                        // We're in the initial phase that associates signatures
                        // with the functions. Note this may be called multiple times
                        // in HOC chains like _s(hoc1(_s(hoc2(_s(actualFunction))))).
                        if (!savedType) {
                            // We're in the innermost call, so this is the actual type.
                            savedType = type;
                            hasCustomHooks = typeof getCustomHooks === 'function';
                        } // Set the signature for all types (even wrappers!) in case
                        // they have no signatures of their own. This is to prevent
                        // problems like https://github.com/facebook/react/issues/20417.
                        if (type != null && (typeof type === 'function' || typeof type === 'object')) {
                            setSignature(type, key, forceReset, getCustomHooks);
                        }
                        return type;
                    } else {
                        // We're in the _s() call without arguments, which means
                        // this is the time to collect custom Hook signatures.
                        // Only do this once. This path is hot and runs *inside* every render!
                        if (!didCollectHooks && hasCustomHooks) {
                            didCollectHooks = true;
                            collectCustomHooksForSignature(savedType);
                        }
                    }
                };
            }
        }
        function isLikelyComponentType(type) {
            {
                switch(typeof type){
                    case 'function':
                        {
                            // First, deal with classes.
                            if (type.prototype != null) {
                                if (type.prototype.isReactComponent) {
                                    // React class.
                                    return true;
                                }
                                var ownNames = Object.getOwnPropertyNames(type.prototype);
                                if (ownNames.length > 1 || ownNames[0] !== 'constructor') {
                                    // This looks like a class.
                                    return false;
                                } // eslint-disable-next-line no-proto
                                if (type.prototype.__proto__ !== Object.prototype) {
                                    // It has a superclass.
                                    return false;
                                } // Pass through.
                            // This looks like a regular function with empty prototype.
                            } // For plain functions and arrows, use name as a heuristic.
                            var name = type.name || type.displayName;
                            return typeof name === 'string' && /^[A-Z]/.test(name);
                        }
                    case 'object':
                        {
                            if (type != null) {
                                switch(getProperty(type, '$$typeof')){
                                    case REACT_FORWARD_REF_TYPE:
                                    case REACT_MEMO_TYPE:
                                        // Definitely React components.
                                        return true;
                                    default:
                                        return false;
                                }
                            }
                            return false;
                        }
                    default:
                        {
                            return false;
                        }
                }
            }
        }
        exports._getMountedRootCount = _getMountedRootCount;
        exports.collectCustomHooksForSignature = collectCustomHooksForSignature;
        exports.createSignatureFunctionForTransform = createSignatureFunctionForTransform;
        exports.findAffectedHostInstances = findAffectedHostInstances;
        exports.getFamilyByID = getFamilyByID;
        exports.getFamilyByType = getFamilyByType;
        exports.hasUnrecoverableErrors = hasUnrecoverableErrors;
        exports.injectIntoGlobalHook = injectIntoGlobalHook;
        exports.isLikelyComponentType = isLikelyComponentType;
        exports.performReactRefresh = performReactRefresh;
        exports.register = register;
        exports.setSignature = setSignature;
    })();
}
}),
"[project]/node_modules/next/dist/compiled/react-refresh/runtime.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Transferências/elos-creative/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react-refresh/cjs/react-refresh-runtime.development.js [client] (ecmascript)");
}
}),
"[project]/node_modules/next/dist/compiled/@next/react-refresh-utils/dist/internal/helpers.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * MIT License
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */ var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
// This file is copied from the Metro JavaScript bundler, with minor tweaks for
// webpack 4 compatibility.
//
// https://github.com/facebook/metro/blob/d6b9685c730d0d63577db40f41369157f28dfa3a/packages/metro/src/lib/polyfills/require.js
const runtime_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/next/dist/compiled/react-refresh/runtime.js [client] (ecmascript)"));
function isSafeExport(key) {
    return key === '__esModule' || key === '__N_SSG' || key === '__N_SSP' || // TODO: remove this key from page config instead of allow listing it
    key === 'config';
}
function registerExportsForReactRefresh(moduleExports, moduleID) {
    runtime_1.default.register(moduleExports, moduleID + ' %exports%');
    if (moduleExports == null || typeof moduleExports !== 'object') {
        // Exit if we can't iterate over exports.
        // (This is important for legacy environments.)
        return;
    }
    for(var key in moduleExports){
        if (isSafeExport(key)) {
            continue;
        }
        try {
            var exportValue = moduleExports[key];
        } catch (_a) {
            continue;
        }
        var typeID = moduleID + ' %exports% ' + key;
        runtime_1.default.register(exportValue, typeID);
    }
}
function getRefreshBoundarySignature(moduleExports) {
    var signature = [];
    signature.push(runtime_1.default.getFamilyByType(moduleExports));
    if (moduleExports == null || typeof moduleExports !== 'object') {
        // Exit if we can't iterate over exports.
        // (This is important for legacy environments.)
        return signature;
    }
    for(var key in moduleExports){
        if (isSafeExport(key)) {
            continue;
        }
        try {
            var exportValue = moduleExports[key];
        } catch (_a) {
            continue;
        }
        signature.push(key);
        signature.push(runtime_1.default.getFamilyByType(exportValue));
    }
    return signature;
}
function isReactRefreshBoundary(moduleExports) {
    if (runtime_1.default.isLikelyComponentType(moduleExports)) {
        return true;
    }
    if (moduleExports == null || typeof moduleExports !== 'object') {
        // Exit if we can't iterate over exports.
        return false;
    }
    var hasExports = false;
    var areAllExportsComponents = true;
    for(var key in moduleExports){
        hasExports = true;
        if (isSafeExport(key)) {
            continue;
        }
        try {
            var exportValue = moduleExports[key];
        } catch (_a) {
            // This might fail due to circular dependencies
            return false;
        }
        if (!runtime_1.default.isLikelyComponentType(exportValue)) {
            areAllExportsComponents = false;
        }
    }
    return hasExports && areAllExportsComponents;
}
function shouldInvalidateReactRefreshBoundary(prevSignature, nextSignature) {
    if (prevSignature.length !== nextSignature.length) {
        return true;
    }
    for(var i = 0; i < nextSignature.length; i++){
        if (prevSignature[i] !== nextSignature[i]) {
            return true;
        }
    }
    return false;
}
var isUpdateScheduled = false;
// This function aggregates updates from multiple modules into a single React Refresh call.
function scheduleUpdate() {
    if (isUpdateScheduled) {
        return;
    }
    isUpdateScheduled = true;
    function canApplyUpdate(status) {
        return status === 'idle';
    }
    function applyUpdate() {
        isUpdateScheduled = false;
        try {
            runtime_1.default.performReactRefresh();
        } catch (err) {
            console.warn('Warning: Failed to re-render. We will retry on the next Fast Refresh event.\n' + err);
        }
    }
    if (canApplyUpdate(module.hot.status())) {
        // Apply update on the next tick.
        Promise.resolve().then(()=>{
            applyUpdate();
        });
        return;
    }
    const statusHandler = (status)=>{
        if (canApplyUpdate(status)) {
            module.hot.removeStatusHandler(statusHandler);
            applyUpdate();
        }
    };
    // Apply update once the HMR runtime's status is idle.
    module.hot.addStatusHandler(statusHandler);
}
// Needs to be compatible with IE11
exports.default = {
    registerExportsForReactRefresh: registerExportsForReactRefresh,
    isReactRefreshBoundary: isReactRefreshBoundary,
    shouldInvalidateReactRefreshBoundary: shouldInvalidateReactRefreshBoundary,
    getRefreshBoundarySignature: getRefreshBoundarySignature,
    scheduleUpdate: scheduleUpdate
}; //# sourceMappingURL=helpers.js.map
}),
"[project]/node_modules/next/dist/compiled/@next/react-refresh-utils/dist/runtime.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const runtime_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/next/dist/compiled/react-refresh/runtime.js [client] (ecmascript)"));
const helpers_1 = __importDefault(__turbopack_context__.r("[project]/node_modules/next/dist/compiled/@next/react-refresh-utils/dist/internal/helpers.js [client] (ecmascript)"));
// Hook into ReactDOM initialization
runtime_1.default.injectIntoGlobalHook(self);
// Register global helpers
self.$RefreshHelpers$ = helpers_1.default;
// Register a helper for module execution interception
self.$RefreshInterceptModuleExecution$ = function(webpackModuleId) {
    var prevRefreshReg = self.$RefreshReg$;
    var prevRefreshSig = self.$RefreshSig$;
    self.$RefreshReg$ = function(type, id) {
        runtime_1.default.register(type, webpackModuleId + ' ' + id);
    };
    self.$RefreshSig$ = runtime_1.default.createSignatureFunctionForTransform;
    // Modeled after `useEffect` cleanup pattern:
    // https://react.dev/learn/synchronizing-with-effects#step-3-add-cleanup-if-needed
    return function() {
        self.$RefreshReg$ = prevRefreshReg;
        self.$RefreshSig$ = prevRefreshSig;
    };
}; //# sourceMappingURL=runtime.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/build/polyfills/polyfill-module.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {

"trimStart" in String.prototype || (String.prototype.trimStart = String.prototype.trimLeft), "trimEnd" in String.prototype || (String.prototype.trimEnd = String.prototype.trimRight), "description" in Symbol.prototype || Object.defineProperty(Symbol.prototype, "description", {
    configurable: !0,
    get: function() {
        var t = /\((.*)\)/.exec(this.toString());
        return t ? t[1] : void 0;
    }
}), Array.prototype.flat || (Array.prototype.flat = function(t, r) {
    return r = this.concat.apply([], this), t > 1 && r.some(Array.isArray) ? r.flat(t - 1) : r;
}, Array.prototype.flatMap = function(t, r) {
    return this.map(t, r).flat();
}), Promise.prototype.finally || (Promise.prototype.finally = function(t) {
    if ("function" != typeof t) return this.then(t, t);
    var r = this.constructor || Promise;
    return this.then(function(n) {
        return r.resolve(t()).then(function() {
            return n;
        });
    }, function(n) {
        return r.resolve(t()).then(function() {
            throw n;
        });
    });
}), Object.fromEntries || (Object.fromEntries = function(t) {
    return Array.from(t).reduce(function(t, r) {
        return t[r[0]] = r[1], t;
    }, {});
}), Array.prototype.at || (Array.prototype.at = function(t) {
    var r = Math.trunc(t) || 0;
    if (r < 0 && (r += this.length), !(r < 0 || r >= this.length)) return this[r];
}), Object.hasOwn || (Object.hasOwn = function(t, r) {
    if (null == t) throw new TypeError("Cannot convert undefined or null to object");
    return Object.prototype.hasOwnProperty.call(Object(t), r);
});
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/shared/lib/head-manager-context.shared-runtime.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Transferências/elos-creative/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "HeadManagerContext", {
    enumerable: true,
    get: function() {
        return HeadManagerContext;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/react/index.js [client] (ecmascript)"));
const HeadManagerContext = _react.default.createContext({});
if ("TURBOPACK compile-time truthy", 1) {
    HeadManagerContext.displayName = "HeadManagerContext";
} //# sourceMappingURL=head-manager-context.shared-runtime.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/shared/lib/mitt.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/ // This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return mitt;
    }
});
function mitt() {
    const all = Object.create(null);
    return {
        on (type, handler) {
            (all[type] || (all[type] = [])).push(handler);
        },
        off (type, handler) {
            if (all[type]) {
                all[type].splice(all[type].indexOf(handler) >>> 0, 1);
            }
        },
        emit (type) {
            for(var _len = arguments.length, evts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                evts[_key - 1] = arguments[_key];
            }
            (all[type] || []).slice().map((handler)=>{
                handler(...evts);
            });
        }
    };
} //# sourceMappingURL=mitt.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/shared/lib/router/utils/handle-smooth-scroll.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Run function with `scroll-behavior: auto` applied to `<html/>`.
 * This css change will be reverted after the function finishes.
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "handleSmoothScroll", {
    enumerable: true,
    get: function() {
        return handleSmoothScroll;
    }
});
function handleSmoothScroll(fn, options) {
    if (options === void 0) options = {};
    // if only the hash is changed, we don't need to disable smooth scrolling
    // we only care to prevent smooth scrolling when navigating to a new page to avoid jarring UX
    if (options.onlyHashChange) {
        fn();
        return;
    }
    const htmlElement = document.documentElement;
    const existing = htmlElement.style.scrollBehavior;
    htmlElement.style.scrollBehavior = "auto";
    if (!options.dontForceLayout) {
        // In Chrome-based browsers we need to force reflow before calling `scrollTo`.
        // Otherwise it will not pickup the change in scrollBehavior
        // More info here: https://github.com/vercel/next.js/issues/40719#issuecomment-1336248042
        htmlElement.getClientRects();
    }
    fn();
    htmlElement.style.scrollBehavior = existing;
} //# sourceMappingURL=handle-smooth-scroll.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/shared/lib/page-path/ensure-leading-slash.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * For a given page path, this function ensures that there is a leading slash.
 * If there is not a leading slash, one is added, otherwise it is noop.
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ensureLeadingSlash", {
    enumerable: true,
    get: function() {
        return ensureLeadingSlash;
    }
});
function ensureLeadingSlash(path) {
    return path.startsWith("/") ? path : "/" + path;
} //# sourceMappingURL=ensure-leading-slash.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/shared/lib/router/utils/app-paths.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    normalizeAppPath: null,
    normalizeRscURL: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    normalizeAppPath: function() {
        return normalizeAppPath;
    },
    normalizeRscURL: function() {
        return normalizeRscURL;
    }
});
const _ensureleadingslash = __turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/shared/lib/page-path/ensure-leading-slash.js [client] (ecmascript)");
const _segment = (()=>{
    const e = new Error("Cannot find module '../../segment'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
function normalizeAppPath(route) {
    return (0, _ensureleadingslash.ensureLeadingSlash)(route.split("/").reduce((pathname, segment, index, segments)=>{
        // Empty segments are ignored.
        if (!segment) {
            return pathname;
        }
        // Groups are ignored.
        if ((0, _segment.isGroupSegment)(segment)) {
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
"[project]/Transferências/elos-creative/node_modules/next/dist/server/future/helpers/interception-routes.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    INTERCEPTION_ROUTE_MARKERS: null,
    extractInterceptionRouteInformation: null,
    isInterceptionRouteAppPath: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    INTERCEPTION_ROUTE_MARKERS: function() {
        return INTERCEPTION_ROUTE_MARKERS;
    },
    extractInterceptionRouteInformation: function() {
        return extractInterceptionRouteInformation;
    },
    isInterceptionRouteAppPath: function() {
        return isInterceptionRouteAppPath;
    }
});
const _apppaths = __turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/shared/lib/router/utils/app-paths.js [client] (ecmascript)");
const INTERCEPTION_ROUTE_MARKERS = [
    "(..)(..)",
    "(.)",
    "(..)",
    "(...)"
];
function isInterceptionRouteAppPath(path) {
    // TODO-APP: add more serious validation
    return path.split("/").find((segment)=>INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m))) !== undefined;
}
function extractInterceptionRouteInformation(path) {
    let interceptingRoute, marker, interceptedRoute;
    for (const segment of path.split("/")){
        marker = INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m));
        if (marker) {
            [interceptingRoute, interceptedRoute] = path.split(marker, 2);
            break;
        }
    }
    if (!interceptingRoute || !marker || !interceptedRoute) {
        throw new Error(`Invalid interception route: ${path}. Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>`);
    }
    interceptingRoute = (0, _apppaths.normalizeAppPath)(interceptingRoute) // normalize the path, e.g. /(blog)/feed -> /feed
    ;
    switch(marker){
        case "(.)":
            // (.) indicates that we should match with sibling routes, so we just need to append the intercepted route to the intercepting route
            if (interceptingRoute === "/") {
                interceptedRoute = `/${interceptedRoute}`;
            } else {
                interceptedRoute = interceptingRoute + "/" + interceptedRoute;
            }
            break;
        case "(..)":
            // (..) indicates that we should match at one level up, so we need to remove the last segment of the intercepting route
            if (interceptingRoute === "/") {
                throw new Error(`Invalid interception route: ${path}. Cannot use (..) marker at the root level, use (.) instead.`);
            }
            interceptedRoute = interceptingRoute.split("/").slice(0, -1).concat(interceptedRoute).join("/");
            break;
        case "(...)":
            // (...) will match the route segment in the root directory, so we need to use the root directory to prepend the intercepted route
            interceptedRoute = "/" + interceptedRoute;
            break;
        case "(..)(..)":
            // (..)(..) indicates that we should match at two levels up, so we need to remove the last two segments of the intercepting route
            const splitInterceptingRoute = interceptingRoute.split("/");
            if (splitInterceptingRoute.length <= 2) {
                throw new Error(`Invalid interception route: ${path}. Cannot use (..)(..) marker at the root level or one level up.`);
            }
            interceptedRoute = splitInterceptingRoute.slice(0, -2).concat(interceptedRoute).join("/");
            break;
        default:
            throw new Error("Invariant: unexpected marker");
    }
    return {
        interceptingRoute,
        interceptedRoute
    };
} //# sourceMappingURL=interception-routes.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/shared/lib/router/utils/is-dynamic.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isDynamicRoute", {
    enumerable: true,
    get: function() {
        return isDynamicRoute;
    }
});
const _interceptionroutes = __turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/server/future/helpers/interception-routes.js [client] (ecmascript)");
// Identify /[param]/ in route string
const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;
function isDynamicRoute(route) {
    if ((0, _interceptionroutes.isInterceptionRouteAppPath)(route)) {
        route = (0, _interceptionroutes.extractInterceptionRouteInformation)(route).interceptedRoute;
    }
    return TEST_ROUTE.test(route);
} //# sourceMappingURL=is-dynamic.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/shared/lib/router/utils/querystring.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    assign: null,
    searchParamsToUrlQuery: null,
    urlQueryToSearchParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    assign: function() {
        return assign;
    },
    searchParamsToUrlQuery: function() {
        return searchParamsToUrlQuery;
    },
    urlQueryToSearchParams: function() {
        return urlQueryToSearchParams;
    }
});
function searchParamsToUrlQuery(searchParams) {
    const query = {};
    searchParams.forEach((value, key)=>{
        if (typeof query[key] === "undefined") {
            query[key] = value;
        } else if (Array.isArray(query[key])) {
            query[key].push(value);
        } else {
            query[key] = [
                query[key],
                value
            ];
        }
    });
    return query;
}
function stringifyUrlQueryParam(param) {
    if (typeof param === "string" || typeof param === "number" && !isNaN(param) || typeof param === "boolean") {
        return String(param);
    } else {
        return "";
    }
}
function urlQueryToSearchParams(urlQuery) {
    const result = new URLSearchParams();
    Object.entries(urlQuery).forEach((param)=>{
        let [key, value] = param;
        if (Array.isArray(value)) {
            value.forEach((item)=>result.append(key, stringifyUrlQueryParam(item)));
        } else {
            result.set(key, stringifyUrlQueryParam(value));
        }
    });
    return result;
}
function assign(target) {
    for(var _len = arguments.length, searchParamsList = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        searchParamsList[_key - 1] = arguments[_key];
    }
    searchParamsList.forEach((searchParams)=>{
        Array.from(searchParams.keys()).forEach((key)=>target.delete(key));
        searchParams.forEach((value, key)=>target.append(key, value));
    });
    return target;
} //# sourceMappingURL=querystring.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/client/portal/index.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Portal", {
    enumerable: true,
    get: function() {
        return Portal;
    }
});
const _react = __turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/react/index.js [client] (ecmascript)");
const _reactdom = __turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/react-dom/index.js [client] (ecmascript)");
const Portal = (param)=>{
    let { children, type } = param;
    const [portalNode, setPortalNode] = (0, _react.useState)(null);
    (0, _react.useEffect)(()=>{
        const element = document.createElement(type);
        document.body.appendChild(element);
        setPortalNode(element);
        return ()=>{
            document.body.removeChild(element);
        };
    }, [
        type
    ]);
    return portalNode ? /*#__PURE__*/ (0, _reactdom.createPortal)(children, portalNode) : null;
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=index.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/client/head-manager.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Transferências/elos-creative/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DOMAttributeNames: null,
    default: null,
    isEqualNode: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DOMAttributeNames: function() {
        return DOMAttributeNames;
    },
    default: function() {
        return initHeadManager;
    },
    isEqualNode: function() {
        return isEqualNode;
    }
});
const DOMAttributeNames = {
    acceptCharset: "accept-charset",
    className: "class",
    htmlFor: "for",
    httpEquiv: "http-equiv",
    noModule: "noModule"
};
function reactElementToDOM(param) {
    let { type, props } = param;
    const el = document.createElement(type);
    for(const p in props){
        if (!props.hasOwnProperty(p)) continue;
        if (p === "children" || p === "dangerouslySetInnerHTML") continue;
        // we don't render undefined props to the DOM
        if (props[p] === undefined) continue;
        const attr = DOMAttributeNames[p] || p.toLowerCase();
        if (type === "script" && (attr === "async" || attr === "defer" || attr === "noModule")) {
            el[attr] = !!props[p];
        } else {
            el.setAttribute(attr, props[p]);
        }
    }
    const { children, dangerouslySetInnerHTML } = props;
    if (dangerouslySetInnerHTML) {
        el.innerHTML = dangerouslySetInnerHTML.__html || "";
    } else if (children) {
        el.textContent = typeof children === "string" ? children : Array.isArray(children) ? children.join("") : "";
    }
    return el;
}
function isEqualNode(oldTag, newTag) {
    if (oldTag instanceof HTMLElement && newTag instanceof HTMLElement) {
        const nonce = newTag.getAttribute("nonce");
        // Only strip the nonce if `oldTag` has had it stripped. An element's nonce attribute will not
        // be stripped if there is no content security policy response header that includes a nonce.
        if (nonce && !oldTag.getAttribute("nonce")) {
            const cloneTag = newTag.cloneNode(true);
            cloneTag.setAttribute("nonce", "");
            cloneTag.nonce = nonce;
            return nonce === oldTag.nonce && oldTag.isEqualNode(cloneTag);
        }
    }
    return oldTag.isEqualNode(newTag);
}
let updateElements;
if (__TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.__NEXT_STRICT_NEXT_HEAD) {
    updateElements = (type, components)=>{
        const headEl = document.querySelector("head");
        if (!headEl) return;
        const headMetaTags = headEl.querySelectorAll('meta[name="next-head"]') || [];
        const oldTags = [];
        if (type === "meta") {
            const metaCharset = headEl.querySelector("meta[charset]");
            if (metaCharset) {
                oldTags.push(metaCharset);
            }
        }
        for(let i = 0; i < headMetaTags.length; i++){
            var _headTag_tagName;
            const metaTag = headMetaTags[i];
            const headTag = metaTag.nextSibling;
            if ((headTag == null ? void 0 : (_headTag_tagName = headTag.tagName) == null ? void 0 : _headTag_tagName.toLowerCase()) === type) {
                oldTags.push(headTag);
            }
        }
        const newTags = components.map(reactElementToDOM).filter((newTag)=>{
            for(let k = 0, len = oldTags.length; k < len; k++){
                const oldTag = oldTags[k];
                if (isEqualNode(oldTag, newTag)) {
                    oldTags.splice(k, 1);
                    return false;
                }
            }
            return true;
        });
        oldTags.forEach((t)=>{
            var _t_parentNode;
            const metaTag = t.previousSibling;
            if (metaTag && metaTag.getAttribute("name") === "next-head") {
                var _t_parentNode1;
                (_t_parentNode1 = t.parentNode) == null ? void 0 : _t_parentNode1.removeChild(metaTag);
            }
            (_t_parentNode = t.parentNode) == null ? void 0 : _t_parentNode.removeChild(t);
        });
        newTags.forEach((t)=>{
            var _t_tagName;
            const meta = document.createElement("meta");
            meta.name = "next-head";
            meta.content = "1";
            // meta[charset] must be first element so special case
            if (!(((_t_tagName = t.tagName) == null ? void 0 : _t_tagName.toLowerCase()) === "meta" && t.getAttribute("charset"))) {
                headEl.appendChild(meta);
            }
            headEl.appendChild(t);
        });
    };
} else {
    updateElements = (type, components)=>{
        const headEl = document.getElementsByTagName("head")[0];
        const headCountEl = headEl.querySelector("meta[name=next-head-count]");
        if ("TURBOPACK compile-time truthy", 1) {
            if (!headCountEl) {
                console.error("Warning: next-head-count is missing. https://nextjs.org/docs/messages/next-head-count-missing");
                return;
            }
        }
        const headCount = Number(headCountEl.content);
        const oldTags = [];
        for(let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = (j == null ? void 0 : j.previousElementSibling) || null){
            var _j_tagName;
            if ((j == null ? void 0 : (_j_tagName = j.tagName) == null ? void 0 : _j_tagName.toLowerCase()) === type) {
                oldTags.push(j);
            }
        }
        const newTags = components.map(reactElementToDOM).filter((newTag)=>{
            for(let k = 0, len = oldTags.length; k < len; k++){
                const oldTag = oldTags[k];
                if (isEqualNode(oldTag, newTag)) {
                    oldTags.splice(k, 1);
                    return false;
                }
            }
            return true;
        });
        oldTags.forEach((t)=>{
            var _t_parentNode;
            return (_t_parentNode = t.parentNode) == null ? void 0 : _t_parentNode.removeChild(t);
        });
        newTags.forEach((t)=>headEl.insertBefore(t, headCountEl));
        headCountEl.content = (headCount - oldTags.length + newTags.length).toString();
    };
}
function initHeadManager() {
    return {
        mountedInstances: new Set(),
        updateHead: (head)=>{
            const tags = {};
            head.forEach((h)=>{
                if (// it won't be inlined. In this case revert to the original behavior
                h.type === "link" && h.props["data-optimized-fonts"]) {
                    if (document.querySelector('style[data-href="' + h.props["data-href"] + '"]')) {
                        return;
                    } else {
                        h.props.href = h.props["data-href"];
                        h.props["data-href"] = undefined;
                    }
                }
                const components = tags[h.type] || [];
                components.push(h);
                tags[h.type] = components;
            });
            const titleComponent = tags.title ? tags.title[0] : null;
            let title = "";
            if (titleComponent) {
                const { children } = titleComponent.props;
                title = typeof children === "string" ? children : Array.isArray(children) ? children.join("") : "";
            }
            if (title !== document.title) document.title = title;
            [
                "meta",
                "base",
                "link",
                "style",
                "script"
            ].forEach((type)=>{
                updateElements(type, tags[type] || []);
            });
        }
    };
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=head-manager.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/shared/lib/router/utils/parse-path.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Given a path this function will find the pathname, query and hash and return
 * them. This is useful to parse full paths on the client side.
 * @param path A path to parse e.g. /foo/bar?id=1#hash
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "parsePath", {
    enumerable: true,
    get: function() {
        return parsePath;
    }
});
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
"[project]/Transferências/elos-creative/node_modules/next/dist/shared/lib/router/utils/add-path-prefix.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "addPathPrefix", {
    enumerable: true,
    get: function() {
        return addPathPrefix;
    }
});
const _parsepath = __turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/shared/lib/router/utils/parse-path.js [client] (ecmascript)");
function addPathPrefix(path, prefix) {
    if (!path.startsWith("/") || !prefix) {
        return path;
    }
    const { pathname, query, hash } = (0, _parsepath.parsePath)(path);
    return "" + prefix + pathname + query + hash;
} //# sourceMappingURL=add-path-prefix.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/client/normalize-trailing-slash.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Transferências/elos-creative/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "normalizePathTrailingSlash", {
    enumerable: true,
    get: function() {
        return normalizePathTrailingSlash;
    }
});
const _removetrailingslash = (()=>{
    const e = new Error("Cannot find module '../shared/lib/router/utils/remove-trailing-slash'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _parsepath = __turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/shared/lib/router/utils/parse-path.js [client] (ecmascript)");
const normalizePathTrailingSlash = (path)=>{
    if (!path.startsWith("/") || ("TURBOPACK compile-time value", void 0)) {
        return path;
    }
    const { pathname, query, hash } = (0, _parsepath.parsePath)(path);
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return "" + (0, _removetrailingslash.removeTrailingSlash)(pathname) + query + hash;
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=normalize-trailing-slash.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/client/add-base-path.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Transferências/elos-creative/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "addBasePath", {
    enumerable: true,
    get: function() {
        return addBasePath;
    }
});
const _addpathprefix = __turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/shared/lib/router/utils/add-path-prefix.js [client] (ecmascript)");
const _normalizetrailingslash = __turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/client/normalize-trailing-slash.js [client] (ecmascript)");
const basePath = ("TURBOPACK compile-time value", "") || "";
function addBasePath(path, required) {
    return (0, _normalizetrailingslash.normalizePathTrailingSlash)(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : (0, _addpathprefix.addPathPrefix)(path, basePath));
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=add-base-path.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/shared/lib/router/utils/interpolate-as.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "interpolateAs", {
    enumerable: true,
    get: function() {
        return interpolateAs;
    }
});
const _routematcher = (()=>{
    const e = new Error("Cannot find module './route-matcher'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _routeregex = (()=>{
    const e = new Error("Cannot find module './route-regex'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
function interpolateAs(route, asPathname, query) {
    let interpolatedRoute = "";
    const dynamicRegex = (0, _routeregex.getRouteRegex)(route);
    const dynamicGroups = dynamicRegex.groups;
    const dynamicMatches = (asPathname !== route ? (0, _routematcher.getRouteMatcher)(dynamicRegex)(asPathname) : "") || // Fall back to reading the values from the href
    // TODO: should this take priority; also need to change in the router.
    query;
    interpolatedRoute = route;
    const params = Object.keys(dynamicGroups);
    if (!params.every((param)=>{
        let value = dynamicMatches[param] || "";
        const { repeat, optional } = dynamicGroups[param];
        // support single-level catch-all
        // TODO: more robust handling for user-error (passing `/`)
        let replaced = "[" + (repeat ? "..." : "") + param + "]";
        if (optional) {
            replaced = (!value ? "/" : "") + "[" + replaced + "]";
        }
        if (repeat && !Array.isArray(value)) value = [
            value
        ];
        return (optional || param in dynamicMatches) && // Interpolate group into data URL if present
        (interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(// path delimiter escaped since they are being inserted
        // into the URL and we expect URL encoded segments
        // when parsing dynamic route params
        (segment)=>encodeURIComponent(segment)).join("/") : encodeURIComponent(value)) || "/");
    })) {
        interpolatedRoute = "" // did not satisfy all requirements
        ;
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
    }
    return {
        params,
        result: interpolatedRoute
    };
} //# sourceMappingURL=interpolate-as.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/shared/lib/router/utils/get-asset-path-from-route.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Translates a logical route into its pages asset path (relative from a common prefix)
// "asset path" being its javascript file, data file, prerendered html,...
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return getAssetPathFromRoute;
    }
});
function getAssetPathFromRoute(route, ext) {
    if (ext === void 0) ext = "";
    const path = route === "/" ? "/index" : /^\/index(\/|$)/.test(route) ? "/index" + route : route;
    return path + ext;
} //# sourceMappingURL=get-asset-path-from-route.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/client/add-locale.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Transferências/elos-creative/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "addLocale", {
    enumerable: true,
    get: function() {
        return addLocale;
    }
});
const _normalizetrailingslash = __turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/client/normalize-trailing-slash.js [client] (ecmascript)");
const addLocale = function(path) {
    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        args[_key - 1] = arguments[_key];
    }
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return path;
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=add-locale.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/shared/lib/router/utils/parse-relative-url.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "parseRelativeUrl", {
    enumerable: true,
    get: function() {
        return parseRelativeUrl;
    }
});
const _utils = (()=>{
    const e = new Error("Cannot find module '../../utils'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _querystring = __turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/shared/lib/router/utils/querystring.js [client] (ecmascript)");
function parseRelativeUrl(url, base) {
    const globalBase = new URL(typeof window === "undefined" ? "http://n" : (0, _utils.getLocationOrigin)());
    const resolvedBase = base ? new URL(base, globalBase) : url.startsWith(".") ? new URL(typeof window === "undefined" ? "http://n" : window.location.href) : globalBase;
    const { pathname, searchParams, search, hash, href, origin } = new URL(url, resolvedBase);
    if (origin !== globalBase.origin) {
        throw new Error("invariant: invalid relative URL, router received " + url);
    }
    return {
        pathname,
        query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
        search,
        hash,
        href: href.slice(globalBase.origin.length)
    };
} //# sourceMappingURL=parse-relative-url.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/shared/lib/modern-browserslist-target.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Note: This file is JS because it's used by the taskfile-swc.js file, which is JS.
// Keep file changes in sync with the corresponding `.d.ts` files.
/**
 * These are the browser versions that support all of the following:
 * static import: https://caniuse.com/es6-module
 * dynamic import: https://caniuse.com/es6-module-dynamic-import
 * import.meta: https://caniuse.com/mdn-javascript_operators_import_meta
 */ const MODERN_BROWSERSLIST_TARGET = [
    "chrome 64",
    "edge 79",
    "firefox 67",
    "opera 51",
    "safari 12"
];
module.exports = MODERN_BROWSERSLIST_TARGET; //# sourceMappingURL=modern-browserslist-target.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/shared/lib/constants.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    APP_BUILD_MANIFEST: null,
    APP_CLIENT_INTERNALS: null,
    APP_PATHS_MANIFEST: null,
    APP_PATH_ROUTES_MANIFEST: null,
    AUTOMATIC_FONT_OPTIMIZATION_MANIFEST: null,
    BARREL_OPTIMIZATION_PREFIX: null,
    BLOCKED_PAGES: null,
    BUILD_ID_FILE: null,
    BUILD_MANIFEST: null,
    CLIENT_PUBLIC_FILES_PATH: null,
    CLIENT_REFERENCE_MANIFEST: null,
    CLIENT_STATIC_FILES_PATH: null,
    CLIENT_STATIC_FILES_RUNTIME_AMP: null,
    CLIENT_STATIC_FILES_RUNTIME_MAIN: null,
    CLIENT_STATIC_FILES_RUNTIME_MAIN_APP: null,
    CLIENT_STATIC_FILES_RUNTIME_POLYFILLS: null,
    CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL: null,
    CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH: null,
    CLIENT_STATIC_FILES_RUNTIME_WEBPACK: null,
    COMPILER_INDEXES: null,
    COMPILER_NAMES: null,
    CONFIG_FILES: null,
    DEFAULT_RUNTIME_WEBPACK: null,
    DEFAULT_SANS_SERIF_FONT: null,
    DEFAULT_SERIF_FONT: null,
    DEV_CLIENT_PAGES_MANIFEST: null,
    DEV_MIDDLEWARE_MANIFEST: null,
    EDGE_RUNTIME_WEBPACK: null,
    EDGE_UNSUPPORTED_NODE_APIS: null,
    EXPORT_DETAIL: null,
    EXPORT_MARKER: null,
    FUNCTIONS_CONFIG_MANIFEST: null,
    GOOGLE_FONT_PROVIDER: null,
    IMAGES_MANIFEST: null,
    INTERCEPTION_ROUTE_REWRITE_MANIFEST: null,
    INTERNAL_HEADERS: null,
    MIDDLEWARE_BUILD_MANIFEST: null,
    MIDDLEWARE_MANIFEST: null,
    MIDDLEWARE_REACT_LOADABLE_MANIFEST: null,
    MODERN_BROWSERSLIST_TARGET: null,
    NEXT_BUILTIN_DOCUMENT: null,
    NEXT_FONT_MANIFEST: null,
    OPTIMIZED_FONT_PROVIDERS: null,
    PAGES_MANIFEST: null,
    PHASE_DEVELOPMENT_SERVER: null,
    PHASE_EXPORT: null,
    PHASE_INFO: null,
    PHASE_PRODUCTION_BUILD: null,
    PHASE_PRODUCTION_SERVER: null,
    PHASE_TEST: null,
    PRERENDER_MANIFEST: null,
    REACT_LOADABLE_MANIFEST: null,
    ROUTES_MANIFEST: null,
    RSC_MODULE_TYPES: null,
    SERVER_DIRECTORY: null,
    SERVER_FILES_MANIFEST: null,
    SERVER_PROPS_ID: null,
    SERVER_REFERENCE_MANIFEST: null,
    STATIC_PROPS_ID: null,
    STATIC_STATUS_PAGES: null,
    STRING_LITERAL_DROP_BUNDLE: null,
    SUBRESOURCE_INTEGRITY_MANIFEST: null,
    SYSTEM_ENTRYPOINTS: null,
    TRACE_OUTPUT_VERSION: null,
    TURBO_TRACE_DEFAULT_MEMORY_LIMIT: null,
    UNDERSCORE_NOT_FOUND_ROUTE: null,
    UNDERSCORE_NOT_FOUND_ROUTE_ENTRY: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    APP_BUILD_MANIFEST: function() {
        return APP_BUILD_MANIFEST;
    },
    APP_CLIENT_INTERNALS: function() {
        return APP_CLIENT_INTERNALS;
    },
    APP_PATHS_MANIFEST: function() {
        return APP_PATHS_MANIFEST;
    },
    APP_PATH_ROUTES_MANIFEST: function() {
        return APP_PATH_ROUTES_MANIFEST;
    },
    AUTOMATIC_FONT_OPTIMIZATION_MANIFEST: function() {
        return AUTOMATIC_FONT_OPTIMIZATION_MANIFEST;
    },
    BARREL_OPTIMIZATION_PREFIX: function() {
        return BARREL_OPTIMIZATION_PREFIX;
    },
    BLOCKED_PAGES: function() {
        return BLOCKED_PAGES;
    },
    BUILD_ID_FILE: function() {
        return BUILD_ID_FILE;
    },
    BUILD_MANIFEST: function() {
        return BUILD_MANIFEST;
    },
    CLIENT_PUBLIC_FILES_PATH: function() {
        return CLIENT_PUBLIC_FILES_PATH;
    },
    CLIENT_REFERENCE_MANIFEST: function() {
        return CLIENT_REFERENCE_MANIFEST;
    },
    CLIENT_STATIC_FILES_PATH: function() {
        return CLIENT_STATIC_FILES_PATH;
    },
    CLIENT_STATIC_FILES_RUNTIME_AMP: function() {
        return CLIENT_STATIC_FILES_RUNTIME_AMP;
    },
    CLIENT_STATIC_FILES_RUNTIME_MAIN: function() {
        return CLIENT_STATIC_FILES_RUNTIME_MAIN;
    },
    CLIENT_STATIC_FILES_RUNTIME_MAIN_APP: function() {
        return CLIENT_STATIC_FILES_RUNTIME_MAIN_APP;
    },
    CLIENT_STATIC_FILES_RUNTIME_POLYFILLS: function() {
        return CLIENT_STATIC_FILES_RUNTIME_POLYFILLS;
    },
    CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL: function() {
        return CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL;
    },
    CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH: function() {
        return CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH;
    },
    CLIENT_STATIC_FILES_RUNTIME_WEBPACK: function() {
        return CLIENT_STATIC_FILES_RUNTIME_WEBPACK;
    },
    COMPILER_INDEXES: function() {
        return COMPILER_INDEXES;
    },
    COMPILER_NAMES: function() {
        return COMPILER_NAMES;
    },
    CONFIG_FILES: function() {
        return CONFIG_FILES;
    },
    DEFAULT_RUNTIME_WEBPACK: function() {
        return DEFAULT_RUNTIME_WEBPACK;
    },
    DEFAULT_SANS_SERIF_FONT: function() {
        return DEFAULT_SANS_SERIF_FONT;
    },
    DEFAULT_SERIF_FONT: function() {
        return DEFAULT_SERIF_FONT;
    },
    DEV_CLIENT_PAGES_MANIFEST: function() {
        return DEV_CLIENT_PAGES_MANIFEST;
    },
    DEV_MIDDLEWARE_MANIFEST: function() {
        return DEV_MIDDLEWARE_MANIFEST;
    },
    EDGE_RUNTIME_WEBPACK: function() {
        return EDGE_RUNTIME_WEBPACK;
    },
    EDGE_UNSUPPORTED_NODE_APIS: function() {
        return EDGE_UNSUPPORTED_NODE_APIS;
    },
    EXPORT_DETAIL: function() {
        return EXPORT_DETAIL;
    },
    EXPORT_MARKER: function() {
        return EXPORT_MARKER;
    },
    FUNCTIONS_CONFIG_MANIFEST: function() {
        return FUNCTIONS_CONFIG_MANIFEST;
    },
    GOOGLE_FONT_PROVIDER: function() {
        return GOOGLE_FONT_PROVIDER;
    },
    IMAGES_MANIFEST: function() {
        return IMAGES_MANIFEST;
    },
    INTERCEPTION_ROUTE_REWRITE_MANIFEST: function() {
        return INTERCEPTION_ROUTE_REWRITE_MANIFEST;
    },
    INTERNAL_HEADERS: function() {
        return INTERNAL_HEADERS;
    },
    MIDDLEWARE_BUILD_MANIFEST: function() {
        return MIDDLEWARE_BUILD_MANIFEST;
    },
    MIDDLEWARE_MANIFEST: function() {
        return MIDDLEWARE_MANIFEST;
    },
    MIDDLEWARE_REACT_LOADABLE_MANIFEST: function() {
        return MIDDLEWARE_REACT_LOADABLE_MANIFEST;
    },
    MODERN_BROWSERSLIST_TARGET: function() {
        return _modernbrowserslisttarget.default;
    },
    NEXT_BUILTIN_DOCUMENT: function() {
        return NEXT_BUILTIN_DOCUMENT;
    },
    NEXT_FONT_MANIFEST: function() {
        return NEXT_FONT_MANIFEST;
    },
    OPTIMIZED_FONT_PROVIDERS: function() {
        return OPTIMIZED_FONT_PROVIDERS;
    },
    PAGES_MANIFEST: function() {
        return PAGES_MANIFEST;
    },
    PHASE_DEVELOPMENT_SERVER: function() {
        return PHASE_DEVELOPMENT_SERVER;
    },
    PHASE_EXPORT: function() {
        return PHASE_EXPORT;
    },
    PHASE_INFO: function() {
        return PHASE_INFO;
    },
    PHASE_PRODUCTION_BUILD: function() {
        return PHASE_PRODUCTION_BUILD;
    },
    PHASE_PRODUCTION_SERVER: function() {
        return PHASE_PRODUCTION_SERVER;
    },
    PHASE_TEST: function() {
        return PHASE_TEST;
    },
    PRERENDER_MANIFEST: function() {
        return PRERENDER_MANIFEST;
    },
    REACT_LOADABLE_MANIFEST: function() {
        return REACT_LOADABLE_MANIFEST;
    },
    ROUTES_MANIFEST: function() {
        return ROUTES_MANIFEST;
    },
    RSC_MODULE_TYPES: function() {
        return RSC_MODULE_TYPES;
    },
    SERVER_DIRECTORY: function() {
        return SERVER_DIRECTORY;
    },
    SERVER_FILES_MANIFEST: function() {
        return SERVER_FILES_MANIFEST;
    },
    SERVER_PROPS_ID: function() {
        return SERVER_PROPS_ID;
    },
    SERVER_REFERENCE_MANIFEST: function() {
        return SERVER_REFERENCE_MANIFEST;
    },
    STATIC_PROPS_ID: function() {
        return STATIC_PROPS_ID;
    },
    STATIC_STATUS_PAGES: function() {
        return STATIC_STATUS_PAGES;
    },
    STRING_LITERAL_DROP_BUNDLE: function() {
        return STRING_LITERAL_DROP_BUNDLE;
    },
    SUBRESOURCE_INTEGRITY_MANIFEST: function() {
        return SUBRESOURCE_INTEGRITY_MANIFEST;
    },
    SYSTEM_ENTRYPOINTS: function() {
        return SYSTEM_ENTRYPOINTS;
    },
    TRACE_OUTPUT_VERSION: function() {
        return TRACE_OUTPUT_VERSION;
    },
    TURBO_TRACE_DEFAULT_MEMORY_LIMIT: function() {
        return TURBO_TRACE_DEFAULT_MEMORY_LIMIT;
    },
    UNDERSCORE_NOT_FOUND_ROUTE: function() {
        return UNDERSCORE_NOT_FOUND_ROUTE;
    },
    UNDERSCORE_NOT_FOUND_ROUTE_ENTRY: function() {
        return UNDERSCORE_NOT_FOUND_ROUTE_ENTRY;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _modernbrowserslisttarget = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/shared/lib/modern-browserslist-target.js [client] (ecmascript)"));
const COMPILER_NAMES = {
    client: "client",
    server: "server",
    edgeServer: "edge-server"
};
const INTERNAL_HEADERS = [
    "x-invoke-error",
    "x-invoke-output",
    "x-invoke-path",
    "x-invoke-query",
    "x-invoke-status",
    "x-middleware-invoke"
];
const COMPILER_INDEXES = {
    [COMPILER_NAMES.client]: 0,
    [COMPILER_NAMES.server]: 1,
    [COMPILER_NAMES.edgeServer]: 2
};
const UNDERSCORE_NOT_FOUND_ROUTE = "/_not-found";
const UNDERSCORE_NOT_FOUND_ROUTE_ENTRY = "" + UNDERSCORE_NOT_FOUND_ROUTE + "/page";
const PHASE_EXPORT = "phase-export";
const PHASE_PRODUCTION_BUILD = "phase-production-build";
const PHASE_PRODUCTION_SERVER = "phase-production-server";
const PHASE_DEVELOPMENT_SERVER = "phase-development-server";
const PHASE_TEST = "phase-test";
const PHASE_INFO = "phase-info";
const PAGES_MANIFEST = "pages-manifest.json";
const APP_PATHS_MANIFEST = "app-paths-manifest.json";
const APP_PATH_ROUTES_MANIFEST = "app-path-routes-manifest.json";
const BUILD_MANIFEST = "build-manifest.json";
const APP_BUILD_MANIFEST = "app-build-manifest.json";
const FUNCTIONS_CONFIG_MANIFEST = "functions-config-manifest.json";
const SUBRESOURCE_INTEGRITY_MANIFEST = "subresource-integrity-manifest";
const NEXT_FONT_MANIFEST = "next-font-manifest";
const EXPORT_MARKER = "export-marker.json";
const EXPORT_DETAIL = "export-detail.json";
const PRERENDER_MANIFEST = "prerender-manifest.json";
const ROUTES_MANIFEST = "routes-manifest.json";
const IMAGES_MANIFEST = "images-manifest.json";
const SERVER_FILES_MANIFEST = "required-server-files.json";
const DEV_CLIENT_PAGES_MANIFEST = "_devPagesManifest.json";
const MIDDLEWARE_MANIFEST = "middleware-manifest.json";
const DEV_MIDDLEWARE_MANIFEST = "_devMiddlewareManifest.json";
const REACT_LOADABLE_MANIFEST = "react-loadable-manifest.json";
const AUTOMATIC_FONT_OPTIMIZATION_MANIFEST = "font-manifest.json";
const SERVER_DIRECTORY = "server";
const CONFIG_FILES = [
    "next.config.js",
    "next.config.mjs"
];
const BUILD_ID_FILE = "BUILD_ID";
const BLOCKED_PAGES = [
    "/_document",
    "/_app",
    "/_error"
];
const CLIENT_PUBLIC_FILES_PATH = "public";
const CLIENT_STATIC_FILES_PATH = "static";
const STRING_LITERAL_DROP_BUNDLE = "__NEXT_DROP_CLIENT_FILE__";
const NEXT_BUILTIN_DOCUMENT = "__NEXT_BUILTIN_DOCUMENT__";
const BARREL_OPTIMIZATION_PREFIX = "__barrel_optimize__";
const CLIENT_REFERENCE_MANIFEST = "client-reference-manifest";
const SERVER_REFERENCE_MANIFEST = "server-reference-manifest";
const MIDDLEWARE_BUILD_MANIFEST = "middleware-build-manifest";
const MIDDLEWARE_REACT_LOADABLE_MANIFEST = "middleware-react-loadable-manifest";
const INTERCEPTION_ROUTE_REWRITE_MANIFEST = "interception-route-rewrite-manifest";
const CLIENT_STATIC_FILES_RUNTIME_MAIN = "main";
const CLIENT_STATIC_FILES_RUNTIME_MAIN_APP = "" + CLIENT_STATIC_FILES_RUNTIME_MAIN + "-app";
const APP_CLIENT_INTERNALS = "app-pages-internals";
const CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH = "react-refresh";
const CLIENT_STATIC_FILES_RUNTIME_AMP = "amp";
const CLIENT_STATIC_FILES_RUNTIME_WEBPACK = "webpack";
const CLIENT_STATIC_FILES_RUNTIME_POLYFILLS = "polyfills";
const CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL = Symbol(CLIENT_STATIC_FILES_RUNTIME_POLYFILLS);
const DEFAULT_RUNTIME_WEBPACK = "webpack-runtime";
const EDGE_RUNTIME_WEBPACK = "edge-runtime-webpack";
const STATIC_PROPS_ID = "__N_SSG";
const SERVER_PROPS_ID = "__N_SSP";
const GOOGLE_FONT_PROVIDER = "https://fonts.googleapis.com/";
const OPTIMIZED_FONT_PROVIDERS = [
    {
        url: GOOGLE_FONT_PROVIDER,
        preconnect: "https://fonts.gstatic.com"
    },
    {
        url: "https://use.typekit.net",
        preconnect: "https://use.typekit.net"
    }
];
const DEFAULT_SERIF_FONT = {
    name: "Times New Roman",
    xAvgCharWidth: 821,
    azAvgWidth: 854.3953488372093,
    unitsPerEm: 2048
};
const DEFAULT_SANS_SERIF_FONT = {
    name: "Arial",
    xAvgCharWidth: 904,
    azAvgWidth: 934.5116279069767,
    unitsPerEm: 2048
};
const STATIC_STATUS_PAGES = [
    "/500"
];
const TRACE_OUTPUT_VERSION = 1;
const TURBO_TRACE_DEFAULT_MEMORY_LIMIT = 6000;
const RSC_MODULE_TYPES = {
    client: "client",
    server: "server"
};
const EDGE_UNSUPPORTED_NODE_APIS = [
    "clearImmediate",
    "setImmediate",
    "BroadcastChannel",
    "ByteLengthQueuingStrategy",
    "CompressionStream",
    "CountQueuingStrategy",
    "DecompressionStream",
    "DomException",
    "MessageChannel",
    "MessageEvent",
    "MessagePort",
    "ReadableByteStreamController",
    "ReadableStreamBYOBRequest",
    "ReadableStreamDefaultController",
    "TransformStreamDefaultController",
    "WritableStreamDefaultController"
];
const SYSTEM_ENTRYPOINTS = new Set([
    CLIENT_STATIC_FILES_RUNTIME_MAIN,
    CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH,
    CLIENT_STATIC_FILES_RUNTIME_AMP,
    CLIENT_STATIC_FILES_RUNTIME_MAIN_APP
]);
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=constants.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/client/page-loader.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Transferências/elos-creative/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PageLoader;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _addbasepath = __turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/client/add-base-path.js [client] (ecmascript)");
const _interpolateas = __turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/shared/lib/router/utils/interpolate-as.js [client] (ecmascript)");
const _getassetpathfromroute = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/shared/lib/router/utils/get-asset-path-from-route.js [client] (ecmascript)"));
const _addlocale = __turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/client/add-locale.js [client] (ecmascript)");
const _isdynamic = __turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/shared/lib/router/utils/is-dynamic.js [client] (ecmascript)");
const _parserelativeurl = __turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/shared/lib/router/utils/parse-relative-url.js [client] (ecmascript)");
const _removetrailingslash = (()=>{
    const e = new Error("Cannot find module '../shared/lib/router/utils/remove-trailing-slash'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _routeloader = (()=>{
    const e = new Error("Cannot find module './route-loader'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _constants = __turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/shared/lib/constants.js [client] (ecmascript)");
class PageLoader {
    getPageList() {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        else {
            if (window.__DEV_PAGES_MANIFEST) {
                return window.__DEV_PAGES_MANIFEST.pages;
            } else {
                this.promisedDevPagesManifest || (this.promisedDevPagesManifest = fetch(this.assetPrefix + "/_next/static/development/" + _constants.DEV_CLIENT_PAGES_MANIFEST, {
                    credentials: "same-origin"
                }).then((res)=>res.json()).then((manifest)=>{
                    window.__DEV_PAGES_MANIFEST = manifest;
                    return manifest.pages;
                }).catch((err)=>{
                    console.log("Failed to fetch devPagesManifest:", err);
                    throw new Error("Failed to fetch _devPagesManifest.json. Is something blocking that network request?\n" + "Read more: https://nextjs.org/docs/messages/failed-to-fetch-devpagesmanifest");
                }));
                return this.promisedDevPagesManifest;
            }
        }
    }
    getMiddleware() {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        else {
            if (window.__DEV_MIDDLEWARE_MATCHERS) {
                return window.__DEV_MIDDLEWARE_MATCHERS;
            } else {
                if (!this.promisedMiddlewareMatchers) {
                    // TODO: Decide what should happen when fetching fails instead of asserting
                    // @ts-ignore
                    this.promisedMiddlewareMatchers = fetch(this.assetPrefix + "/_next/static/" + this.buildId + "/" + _constants.DEV_MIDDLEWARE_MANIFEST, {
                        credentials: "same-origin"
                    }).then((res)=>res.json()).then((matchers)=>{
                        window.__DEV_MIDDLEWARE_MATCHERS = matchers;
                        return matchers;
                    }).catch((err)=>{
                        console.log("Failed to fetch _devMiddlewareManifest", err);
                    });
                }
                // TODO Remove this assertion as this could be undefined
                return this.promisedMiddlewareMatchers;
            }
        }
    }
    getDataHref(params) {
        const { asPath, href, locale } = params;
        const { pathname: hrefPathname, query, search } = (0, _parserelativeurl.parseRelativeUrl)(href);
        const { pathname: asPathname } = (0, _parserelativeurl.parseRelativeUrl)(asPath);
        const route = (0, _removetrailingslash.removeTrailingSlash)(hrefPathname);
        if (route[0] !== "/") {
            throw new Error('Route name should start with a "/", got "' + route + '"');
        }
        const getHrefForSlug = (path)=>{
            const dataRoute = (0, _getassetpathfromroute.default)((0, _removetrailingslash.removeTrailingSlash)((0, _addlocale.addLocale)(path, locale)), ".json");
            return (0, _addbasepath.addBasePath)("/_next/data/" + this.buildId + dataRoute + search, true);
        };
        return getHrefForSlug(params.skipInterpolation ? asPathname : (0, _isdynamic.isDynamicRoute)(route) ? (0, _interpolateas.interpolateAs)(hrefPathname, asPathname, query).result : route);
    }
    _isSsg(/** the route (file-system path) */ route) {
        return this.promisedSsgManifest.then((manifest)=>manifest.has(route));
    }
    loadPage(route) {
        return this.routeLoader.loadRoute(route).then((res)=>{
            if ("component" in res) {
                return {
                    page: res.component,
                    mod: res.exports,
                    styleSheets: res.styles.map((o)=>({
                            href: o.href,
                            text: o.content
                        }))
                };
            }
            throw res.error;
        });
    }
    prefetch(route) {
        return this.routeLoader.prefetch(route);
    }
    constructor(buildId, assetPrefix){
        this.routeLoader = (0, _routeloader.createRouteLoader)(assetPrefix);
        this.buildId = buildId;
        this.assetPrefix = assetPrefix;
        this.promisedSsgManifest = new Promise((resolve)=>{
            if (window.__SSG_MANIFEST) {
                resolve(window.__SSG_MANIFEST);
            } else {
                window.__SSG_MANIFEST_CB = ()=>{
                    resolve(window.__SSG_MANIFEST);
                };
            }
        });
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=page-loader.js.map
}),
"[project]/node_modules/next/dist/compiled/web-vitals/web-vitals.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {

(function() {
    "use strict";
    var n = {};
    !function() {
        n.d = function(b, L) {
            for(var P in L){
                if (n.o(L, P) && !n.o(b, P)) {
                    Object.defineProperty(b, P, {
                        enumerable: true,
                        get: L[P]
                    });
                }
            }
        };
    }();
    !function() {
        n.o = function(n, b) {
            return Object.prototype.hasOwnProperty.call(n, b);
        };
    }();
    !function() {
        n.r = function(n) {
            if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
                Object.defineProperty(n, Symbol.toStringTag, {
                    value: "Module"
                });
            }
            Object.defineProperty(n, "__esModule", {
                value: true
            });
        };
    }();
    if (typeof n !== "undefined") n.ab = ("TURBOPACK compile-time value", "/ROOT/node_modules/next/dist/compiled/web-vitals") + "/";
    var b = {};
    n.r(b);
    n.d(b, {
        CLSThresholds: function() {
            return j;
        },
        FCPThresholds: function() {
            return B;
        },
        FIDThresholds: function() {
            return cn;
        },
        INPThresholds: function() {
            return nn;
        },
        LCPThresholds: function() {
            return en;
        },
        TTFBThresholds: function() {
            return rn;
        },
        onCLS: function() {
            return w;
        },
        onFCP: function() {
            return S;
        },
        onFID: function() {
            return $;
        },
        onINP: function() {
            return N;
        },
        onLCP: function() {
            return z;
        },
        onTTFB: function() {
            return K;
        }
    });
    var L, P, I, A, F, D = -1, a = function(n) {
        addEventListener("pageshow", function(b) {
            b.persisted && (D = b.timeStamp, n(b));
        }, !0);
    }, c = function() {
        var n = self.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0];
        if (n && n.responseStart > 0 && n.responseStart < performance.now()) return n;
    }, u = function() {
        var n = c();
        return n && n.activationStart || 0;
    }, f = function(n, b) {
        var L = c(), P = "navigate";
        D >= 0 ? P = "back-forward-cache" : L && (document.prerendering || u() > 0 ? P = "prerender" : document.wasDiscarded ? P = "restore" : L.type && (P = L.type.replace(/_/g, "-")));
        return {
            name: n,
            value: void 0 === b ? -1 : b,
            rating: "good",
            delta: 0,
            entries: [],
            id: "v4-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12),
            navigationType: P
        };
    }, s = function(n, b, L) {
        try {
            if (PerformanceObserver.supportedEntryTypes.includes(n)) {
                var P = new PerformanceObserver(function(n) {
                    Promise.resolve().then(function() {
                        b(n.getEntries());
                    });
                });
                return P.observe(Object.assign({
                    type: n,
                    buffered: !0
                }, L || {})), P;
            }
        } catch (n) {}
    }, d = function(n, b, L, P) {
        var I, A;
        return function(F) {
            b.value >= 0 && (F || P) && ((A = b.value - (I || 0)) || void 0 === I) && (I = b.value, b.delta = A, b.rating = function(n, b) {
                return n > b[1] ? "poor" : n > b[0] ? "needs-improvement" : "good";
            }(b.value, L), n(b));
        };
    }, l = function(n) {
        requestAnimationFrame(function() {
            return requestAnimationFrame(function() {
                return n();
            });
        });
    }, p = function(n) {
        document.addEventListener("visibilitychange", function() {
            "hidden" === document.visibilityState && n();
        });
    }, v = function(n) {
        var b = !1;
        return function() {
            b || (n(), b = !0);
        };
    }, O = -1, h = function() {
        return "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0;
    }, g = function(n) {
        "hidden" === document.visibilityState && O > -1 && (O = "visibilitychange" === n.type ? n.timeStamp : 0, T());
    }, y = function() {
        addEventListener("visibilitychange", g, !0), addEventListener("prerenderingchange", g, !0);
    }, T = function() {
        removeEventListener("visibilitychange", g, !0), removeEventListener("prerenderingchange", g, !0);
    }, E = function() {
        return O < 0 && (O = h(), y(), a(function() {
            setTimeout(function() {
                O = h(), y();
            }, 0);
        })), {
            get firstHiddenTime () {
                return O;
            }
        };
    }, C = function(n) {
        document.prerendering ? addEventListener("prerenderingchange", function() {
            return n();
        }, !0) : n();
    }, B = [
        1800,
        3e3
    ], S = function(n, b) {
        b = b || {}, C(function() {
            var L, P = E(), I = f("FCP"), A = s("paint", function(n) {
                n.forEach(function(n) {
                    "first-contentful-paint" === n.name && (A.disconnect(), n.startTime < P.firstHiddenTime && (I.value = Math.max(n.startTime - u(), 0), I.entries.push(n), L(!0)));
                });
            });
            A && (L = d(n, I, B, b.reportAllChanges), a(function(P) {
                I = f("FCP"), L = d(n, I, B, b.reportAllChanges), l(function() {
                    I.value = performance.now() - P.timeStamp, L(!0);
                });
            }));
        });
    }, j = [
        .1,
        .25
    ], w = function(n, b) {
        b = b || {}, S(v(function() {
            var L, P = f("CLS", 0), I = 0, A = [], c = function(n) {
                n.forEach(function(n) {
                    if (!n.hadRecentInput) {
                        var b = A[0], L = A[A.length - 1];
                        I && n.startTime - L.startTime < 1e3 && n.startTime - b.startTime < 5e3 ? (I += n.value, A.push(n)) : (I = n.value, A = [
                            n
                        ]);
                    }
                }), I > P.value && (P.value = I, P.entries = A, L());
            }, F = s("layout-shift", c);
            F && (L = d(n, P, j, b.reportAllChanges), p(function() {
                c(F.takeRecords()), L(!0);
            }), a(function() {
                I = 0, P = f("CLS", 0), L = d(n, P, j, b.reportAllChanges), l(function() {
                    return L();
                });
            }), setTimeout(L, 0));
        }));
    }, x = 0, _ = 1 / 0, G = 0, M = function(n) {
        n.forEach(function(n) {
            n.interactionId && (_ = Math.min(_, n.interactionId), G = Math.max(G, n.interactionId), x = G ? (G - _) / 7 + 1 : 0);
        });
    }, k = function() {
        "interactionCount" in performance || L || (L = s("event", M, {
            type: "event",
            buffered: !0,
            durationThreshold: 0
        }));
    }, J = [], Q = new Map, U = 0, R = function() {
        return (L ? x : performance.interactionCount || 0) - U;
    }, Z = [], H = function(n) {
        if (Z.forEach(function(b) {
            return b(n);
        }), n.interactionId || "first-input" === n.entryType) {
            var b = J[J.length - 1], L = Q.get(n.interactionId);
            if (L || J.length < 10 || n.duration > b.latency) {
                if (L) n.duration > L.latency ? (L.entries = [
                    n
                ], L.latency = n.duration) : n.duration === L.latency && n.startTime === L.entries[0].startTime && L.entries.push(n);
                else {
                    var P = {
                        id: n.interactionId,
                        latency: n.duration,
                        entries: [
                            n
                        ]
                    };
                    Q.set(P.id, P), J.push(P);
                }
                J.sort(function(n, b) {
                    return b.latency - n.latency;
                }), J.length > 10 && J.splice(10).forEach(function(n) {
                    return Q.delete(n.id);
                });
            }
        }
    }, q = function(n) {
        var b = self.requestIdleCallback || self.setTimeout, L = -1;
        return n = v(n), "hidden" === document.visibilityState ? n() : (L = b(n), p(n)), L;
    }, nn = [
        200,
        500
    ], N = function(n, b) {
        "PerformanceEventTiming" in self && "interactionId" in PerformanceEventTiming.prototype && (b = b || {}, C(function() {
            var L;
            k();
            var P, I = f("INP"), o = function(n) {
                q(function() {
                    n.forEach(H);
                    var b, L = (b = Math.min(J.length - 1, Math.floor(R() / 50)), J[b]);
                    L && L.latency !== I.value && (I.value = L.latency, I.entries = L.entries, P());
                });
            }, A = s("event", o, {
                durationThreshold: null !== (L = b.durationThreshold) && void 0 !== L ? L : 40
            });
            P = d(n, I, nn, b.reportAllChanges), A && (A.observe({
                type: "first-input",
                buffered: !0
            }), p(function() {
                o(A.takeRecords()), P(!0);
            }), a(function() {
                U = 0, J.length = 0, Q.clear(), I = f("INP"), P = d(n, I, nn, b.reportAllChanges);
            }));
        }));
    }, en = [
        2500,
        4e3
    ], tn = {}, z = function(n, b) {
        b = b || {}, C(function() {
            var L, P = E(), I = f("LCP"), o = function(n) {
                b.reportAllChanges || (n = n.slice(-1)), n.forEach(function(n) {
                    n.startTime < P.firstHiddenTime && (I.value = Math.max(n.startTime - u(), 0), I.entries = [
                        n
                    ], L());
                });
            }, A = s("largest-contentful-paint", o);
            if (A) {
                L = d(n, I, en, b.reportAllChanges);
                var F = v(function() {
                    tn[I.id] || (o(A.takeRecords()), A.disconnect(), tn[I.id] = !0, L(!0));
                });
                [
                    "keydown",
                    "click"
                ].forEach(function(n) {
                    addEventListener(n, function() {
                        return q(F);
                    }, !0);
                }), p(F), a(function(P) {
                    I = f("LCP"), L = d(n, I, en, b.reportAllChanges), l(function() {
                        I.value = performance.now() - P.timeStamp, tn[I.id] = !0, L(!0);
                    });
                });
            }
        });
    }, rn = [
        800,
        1800
    ], on = function e(n) {
        document.prerendering ? C(function() {
            return e(n);
        }) : "complete" !== document.readyState ? addEventListener("load", function() {
            return e(n);
        }, !0) : setTimeout(n, 0);
    }, K = function(n, b) {
        b = b || {};
        var L = f("TTFB"), P = d(n, L, rn, b.reportAllChanges);
        on(function() {
            var I = c();
            I && (L.value = Math.max(I.responseStart - u(), 0), L.entries = [
                I
            ], P(!0), a(function() {
                L = f("TTFB", 0), (P = d(n, L, rn, b.reportAllChanges))(!0);
            }));
        });
    }, an = {
        passive: !0,
        capture: !0
    }, un = new Date, V = function(n, b) {
        P || (P = b, I = n, A = new Date, Y(removeEventListener), W());
    }, W = function() {
        if (I >= 0 && I < A - un) {
            var n = {
                entryType: "first-input",
                name: P.type,
                target: P.target,
                cancelable: P.cancelable,
                startTime: P.timeStamp,
                processingStart: P.timeStamp + I
            };
            F.forEach(function(b) {
                b(n);
            }), F = [];
        }
    }, X = function(n) {
        if (n.cancelable) {
            var b = (n.timeStamp > 1e12 ? new Date : performance.now()) - n.timeStamp;
            "pointerdown" == n.type ? function(n, b) {
                var t = function() {
                    V(n, b), i();
                }, r = function() {
                    i();
                }, i = function() {
                    removeEventListener("pointerup", t, an), removeEventListener("pointercancel", r, an);
                };
                addEventListener("pointerup", t, an), addEventListener("pointercancel", r, an);
            }(b, n) : V(b, n);
        }
    }, Y = function(n) {
        [
            "mousedown",
            "keydown",
            "touchstart",
            "pointerdown"
        ].forEach(function(b) {
            return n(b, X, an);
        });
    }, cn = [
        100,
        300
    ], $ = function(n, b) {
        b = b || {}, C(function() {
            var L, A = E(), D = f("FID"), l = function(n) {
                n.startTime < A.firstHiddenTime && (D.value = n.processingStart - n.startTime, D.entries.push(n), L(!0));
            }, m = function(n) {
                n.forEach(l);
            }, O = s("first-input", m);
            L = d(n, D, cn, b.reportAllChanges), O && (p(v(function() {
                m(O.takeRecords()), O.disconnect();
            })), a(function() {
                var A;
                D = f("FID"), L = d(n, D, cn, b.reportAllChanges), F = [], I = -1, P = null, Y(addEventListener), A = l, F.push(A), W();
            }));
        });
    };
    module.exports = b;
})();
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/client/performance-relayer.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// TODO: remove in the next major version
/* global location */ var __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Transferências/elos-creative/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
// copied to prevent pulling in un-necessary utils
const WEB_VITALS = [
    "CLS",
    "FCP",
    "FID",
    "INP",
    "LCP",
    "TTFB"
];
const initialHref = location.href;
let isRegistered = false;
let userReportHandler;
function onReport(metric) {
    if (userReportHandler) {
        userReportHandler(metric);
    }
    // This code is not shipped, executed, or present in the client-side
    // JavaScript bundle unless explicitly enabled in your application.
    //
    // When this feature is enabled, we'll make it very clear by printing a
    // message during the build (`next build`).
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    {
        var _window___NEXT_DATA__;
        function fallbackSend() {
            fetch(vitalsUrl, {
                body: blob,
                method: "POST",
                credentials: "omit",
                keepalive: true
            }).catch(console.error);
        }
    }
}
const _default = (onPerfEntry)=>{
    // Update function if it changes:
    userReportHandler = onPerfEntry;
    // Only register listeners once:
    if (isRegistered) {
        return;
    }
    isRegistered = true;
    const attributions = ("TURBOPACK compile-time value", false);
    for (const webVital of WEB_VITALS){
        try {
            let mod;
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            if (!mod) {
                mod = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/web-vitals/web-vitals.js [client] (ecmascript)");
            }
            mod["on" + webVital](onReport);
        } catch (err) {
            // Do nothing if the module fails to load
            console.warn("Failed to track " + webVital + " web-vital", err);
        }
    }
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=performance-relayer.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/shared/lib/is-plain-object.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getObjectClassLabel: null,
    isPlainObject: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getObjectClassLabel: function() {
        return getObjectClassLabel;
    },
    isPlainObject: function() {
        return isPlainObject;
    }
});
function getObjectClassLabel(value) {
    return Object.prototype.toString.call(value);
}
function isPlainObject(value) {
    if (getObjectClassLabel(value) !== "[object Object]") {
        return false;
    }
    const prototype = Object.getPrototypeOf(value);
    /**
   * this used to be previously:
   *
   * `return prototype === null || prototype === Object.prototype`
   *
   * but Edge Runtime expose Object from vm, being that kind of type-checking wrongly fail.
   *
   * It was changed to the current implementation since it's resilient to serialization.
   */ return prototype === null || prototype.hasOwnProperty("isPrototypeOf");
} //# sourceMappingURL=is-plain-object.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/lib/is-error.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Transferências/elos-creative/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    getProperError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return isError;
    },
    getProperError: function() {
        return getProperError;
    }
});
const _isplainobject = __turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/shared/lib/is-plain-object.js [client] (ecmascript)");
function isError(err) {
    return typeof err === "object" && err !== null && "name" in err && "message" in err;
}
function getProperError(err) {
    if (isError(err)) {
        return err;
    }
    if ("TURBOPACK compile-time truthy", 1) {
        // provide better error for case where `throw undefined`
        // is called in development
        if (typeof err === "undefined") {
            return new Error("An undefined error was thrown, " + "see here for more info: https://nextjs.org/docs/messages/threw-undefined");
        }
        if (err === null) {
            return new Error("A null error was thrown, " + "see here for more info: https://nextjs.org/docs/messages/threw-undefined");
        }
    }
    return new Error((0, _isplainobject.isPlainObject)(err) ? JSON.stringify(err) : err + "");
} //# sourceMappingURL=is-error.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/shared/lib/image-config.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    VALID_LOADERS: null,
    imageConfigDefault: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    VALID_LOADERS: function() {
        return VALID_LOADERS;
    },
    imageConfigDefault: function() {
        return imageConfigDefault;
    }
});
const VALID_LOADERS = [
    "default",
    "imgix",
    "cloudinary",
    "akamai",
    "custom"
];
const imageConfigDefault = {
    deviceSizes: [
        640,
        750,
        828,
        1080,
        1200,
        1920,
        2048,
        3840
    ],
    imageSizes: [
        16,
        32,
        48,
        64,
        96,
        128,
        256,
        384
    ],
    path: "/_next/image",
    loader: "default",
    loaderFile: "",
    domains: [],
    disableStaticImages: false,
    minimumCacheTTL: 60,
    formats: [
        "image/webp"
    ],
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
    contentDispositionType: "inline",
    remotePatterns: [],
    unoptimized: false
}; //# sourceMappingURL=image-config.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/shared/lib/image-config-context.shared-runtime.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Transferências/elos-creative/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ImageConfigContext", {
    enumerable: true,
    get: function() {
        return ImageConfigContext;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/react/index.js [client] (ecmascript)"));
const _imageconfig = __turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/shared/lib/image-config.js [client] (ecmascript)");
const ImageConfigContext = _react.default.createContext(_imageconfig.imageConfigDefault);
if ("TURBOPACK compile-time truthy", 1) {
    ImageConfigContext.displayName = "ImageConfigContext";
} //# sourceMappingURL=image-config-context.shared-runtime.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/shared/lib/router/utils/path-has-prefix.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "pathHasPrefix", {
    enumerable: true,
    get: function() {
        return pathHasPrefix;
    }
});
const _parsepath = __turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/shared/lib/router/utils/parse-path.js [client] (ecmascript)");
function pathHasPrefix(path, prefix) {
    if (typeof path !== "string") {
        return false;
    }
    const { pathname } = (0, _parsepath.parsePath)(path);
    return pathname === prefix || pathname.startsWith(prefix + "/");
} //# sourceMappingURL=path-has-prefix.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/client/has-base-path.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Transferências/elos-creative/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "hasBasePath", {
    enumerable: true,
    get: function() {
        return hasBasePath;
    }
});
const _pathhasprefix = __turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/shared/lib/router/utils/path-has-prefix.js [client] (ecmascript)");
const basePath = ("TURBOPACK compile-time value", "") || "";
function hasBasePath(path) {
    return (0, _pathhasprefix.pathHasPrefix)(path, basePath);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=has-base-path.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Transferências/elos-creative/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    AppRouterContext: null,
    GlobalLayoutRouterContext: null,
    LayoutRouterContext: null,
    MissingSlotContext: null,
    TemplateContext: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    AppRouterContext: function() {
        return AppRouterContext;
    },
    GlobalLayoutRouterContext: function() {
        return GlobalLayoutRouterContext;
    },
    LayoutRouterContext: function() {
        return LayoutRouterContext;
    },
    MissingSlotContext: function() {
        return MissingSlotContext;
    },
    TemplateContext: function() {
        return TemplateContext;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/react/index.js [client] (ecmascript)"));
const AppRouterContext = _react.default.createContext(null);
const LayoutRouterContext = _react.default.createContext(null);
const GlobalLayoutRouterContext = _react.default.createContext(null);
const TemplateContext = _react.default.createContext(null);
if ("TURBOPACK compile-time truthy", 1) {
    AppRouterContext.displayName = "AppRouterContext";
    LayoutRouterContext.displayName = "LayoutRouterContext";
    GlobalLayoutRouterContext.displayName = "GlobalLayoutRouterContext";
    TemplateContext.displayName = "TemplateContext";
}
const MissingSlotContext = _react.default.createContext(new Set()); //# sourceMappingURL=app-router-context.shared-runtime.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Transferências/elos-creative/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    PathParamsContext: null,
    PathnameContext: null,
    SearchParamsContext: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    PathParamsContext: function() {
        return PathParamsContext;
    },
    PathnameContext: function() {
        return PathnameContext;
    },
    SearchParamsContext: function() {
        return SearchParamsContext;
    }
});
const _react = __turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/react/index.js [client] (ecmascript)");
const SearchParamsContext = (0, _react.createContext)(null);
const PathnameContext = (0, _react.createContext)(null);
const PathParamsContext = (0, _react.createContext)(null);
if ("TURBOPACK compile-time truthy", 1) {
    SearchParamsContext.displayName = "SearchParamsContext";
    PathnameContext.displayName = "PathnameContext";
    PathParamsContext.displayName = "PathParamsContext";
} //# sourceMappingURL=hooks-client-context.shared-runtime.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/shared/lib/router/utils/index.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getSortedRoutes: null,
    isDynamicRoute: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getSortedRoutes: function() {
        return _sortedroutes.getSortedRoutes;
    },
    isDynamicRoute: function() {
        return _isdynamic.isDynamicRoute;
    }
});
const _sortedroutes = (()=>{
    const e = new Error("Cannot find module './sorted-routes'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _isdynamic = __turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/shared/lib/router/utils/is-dynamic.js [client] (ecmascript)"); //# sourceMappingURL=index.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/shared/lib/router/utils/as-path-to-search-params.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Convert router.asPath to a URLSearchParams object
// example: /dynamic/[slug]?foo=bar -> { foo: 'bar' }
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "asPathToSearchParams", {
    enumerable: true,
    get: function() {
        return asPathToSearchParams;
    }
});
function asPathToSearchParams(asPath) {
    return new URL(asPath, "http://n").searchParams;
} //# sourceMappingURL=as-path-to-search-params.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/shared/lib/router/adapters.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    PathnameContextProviderAdapter: null,
    adaptForAppRouterInstance: null,
    adaptForPathParams: null,
    adaptForSearchParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    PathnameContextProviderAdapter: function() {
        return PathnameContextProviderAdapter;
    },
    adaptForAppRouterInstance: function() {
        return adaptForAppRouterInstance;
    },
    adaptForPathParams: function() {
        return adaptForPathParams;
    },
    adaptForSearchParams: function() {
        return adaptForSearchParams;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/react/index.js [client] (ecmascript)"));
const _hooksclientcontextsharedruntime = __turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js [client] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/shared/lib/router/utils/index.js [client] (ecmascript)");
const _aspathtosearchparams = __turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/shared/lib/router/utils/as-path-to-search-params.js [client] (ecmascript)");
const _routeregex = (()=>{
    const e = new Error("Cannot find module './utils/route-regex'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
function adaptForAppRouterInstance(pagesRouter) {
    return {
        back () {
            pagesRouter.back();
        },
        forward () {
            pagesRouter.forward();
        },
        refresh () {
            pagesRouter.reload();
        },
        fastRefresh () {},
        push (href, param) {
            let { scroll } = param === void 0 ? {} : param;
            void pagesRouter.push(href, undefined, {
                scroll
            });
        },
        replace (href, param) {
            let { scroll } = param === void 0 ? {} : param;
            void pagesRouter.replace(href, undefined, {
                scroll
            });
        },
        prefetch (href) {
            void pagesRouter.prefetch(href);
        }
    };
}
function adaptForSearchParams(router) {
    if (!router.isReady || !router.query) {
        return new URLSearchParams();
    }
    return (0, _aspathtosearchparams.asPathToSearchParams)(router.asPath);
}
function adaptForPathParams(router) {
    if (!router.isReady || !router.query) {
        return null;
    }
    const pathParams = {};
    const routeRegex = (0, _routeregex.getRouteRegex)(router.pathname);
    const keys = Object.keys(routeRegex.groups);
    for (const key of keys){
        pathParams[key] = router.query[key];
    }
    return pathParams;
}
function PathnameContextProviderAdapter(param) {
    let { children, router, ...props } = param;
    const ref = (0, _react.useRef)(props.isAutoExport);
    const value = (0, _react.useMemo)(()=>{
        // isAutoExport is only ever `true` on the first render from the server,
        // so reset it to `false` after we read it for the first time as `true`. If
        // we don't use the value, then we don't need it.
        const isAutoExport = ref.current;
        if (isAutoExport) {
            ref.current = false;
        }
        // When the route is a dynamic route, we need to do more processing to
        // determine if we need to stop showing the pathname.
        if ((0, _utils.isDynamicRoute)(router.pathname)) {
            // When the router is rendering the fallback page, it can't possibly know
            // the path, so return `null` here. Read more about fallback pages over
            // at:
            // https://nextjs.org/docs/api-reference/data-fetching/get-static-paths#fallback-pages
            if (router.isFallback) {
                return null;
            }
            // When `isAutoExport` is true, meaning this is a page page has been
            // automatically statically optimized, and the router is not ready, then
            // we can't know the pathname yet. Read more about automatic static
            // optimization at:
            // https://nextjs.org/docs/advanced-features/automatic-static-optimization
            if (isAutoExport && !router.isReady) {
                return null;
            }
        }
        // The `router.asPath` contains the pathname seen by the browser (including
        // any query strings), so it should have that stripped. Read more about the
        // `asPath` option over at:
        // https://nextjs.org/docs/api-reference/next/router#router-object
        let url;
        try {
            url = new URL(router.asPath, "http://f");
        } catch (_) {
            // fallback to / for invalid asPath values e.g. //
            return "/";
        }
        return url.pathname;
    }, [
        router.asPath,
        router.isFallback,
        router.isReady,
        router.pathname
    ]);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_hooksclientcontextsharedruntime.PathnameContext.Provider, {
        value: value,
        children: children
    });
} //# sourceMappingURL=adapters.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This has to be a shared module which is shared between client component error boundary and dynamic component
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    BailoutToCSRError: null,
    isBailoutToCSRError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    BailoutToCSRError: function() {
        return BailoutToCSRError;
    },
    isBailoutToCSRError: function() {
        return isBailoutToCSRError;
    }
});
const BAILOUT_TO_CSR = "BAILOUT_TO_CLIENT_SIDE_RENDERING";
class BailoutToCSRError extends Error {
    constructor(reason){
        super("Bail out to client-side rendering: " + reason);
        this.reason = reason;
        this.digest = BAILOUT_TO_CSR;
    }
}
function isBailoutToCSRError(err) {
    if (typeof err !== "object" || err === null || !("digest" in err)) {
        return false;
    }
    return err.digest === BAILOUT_TO_CSR;
} //# sourceMappingURL=bailout-to-csr.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/client/on-recoverable-error.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return onRecoverableError;
    }
});
const _bailouttocsr = __turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [client] (ecmascript)");
function onRecoverableError(err) {
    // Using default react onRecoverableError
    // x-ref: https://github.com/facebook/react/blob/d4bc16a7d69eb2ea38a88c8ac0b461d5f72cdcab/packages/react-dom/src/client/ReactDOMRoot.js#L83
    const defaultOnRecoverableError = typeof reportError === "function" ? reportError : (error)=>{
        window.console.error(error);
    };
    // Skip certain custom errors which are not expected to be reported on client
    if ((0, _bailouttocsr.isBailoutToCSRError)(err)) return;
    defaultOnRecoverableError(err);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=on-recoverable-error.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/client/components/react-dev-overlay/pages/bus.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    emit: null,
    off: null,
    on: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    emit: function() {
        return emit;
    },
    off: function() {
        return off;
    },
    on: function() {
        return on;
    }
});
let handlers = new Set();
let queue = [];
function drain() {
    // Draining should never happen synchronously in case multiple handlers are
    // registered.
    setTimeout(function() {
        while(Boolean(queue.length) && // Or, if all handlers removed themselves as a result of handling the
        // event(s)
        Boolean(handlers.size)){
            const ev = queue.shift();
            handlers.forEach((handler)=>handler(ev));
        }
    }, 1);
}
function emit(ev) {
    queue.push(Object.freeze({
        ...ev
    }));
    drain();
}
function on(fn) {
    if (handlers.has(fn)) {
        return false;
    }
    handlers.add(fn);
    drain();
    return true;
}
function off(fn) {
    if (handlers.has(fn)) {
        handlers.delete(fn);
        return true;
    }
    return false;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=bus.js.map
}),
"[project]/node_modules/next/dist/compiled/stacktrace-parser/stack-trace-parser.cjs.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {

(()=>{
    "use strict";
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/node_modules/next/dist/compiled/stacktrace-parser") + "/";
    var e = {};
    (()=>{
        var r = e;
        Object.defineProperty(r, "__esModule", {
            value: true
        });
        var n = "<unknown>";
        function parse(e) {
            var r = e.split("\n");
            return r.reduce(function(e, r) {
                var n = parseChrome(r) || parseWinjs(r) || parseGecko(r) || parseNode(r) || parseJSC(r);
                if (n) {
                    e.push(n);
                }
                return e;
            }, []);
        }
        var a = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|webpack-internal|rsc|about|turbopack|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
        var u = /\((\S*)(?::(\d+))(?::(\d+))\)/;
        function parseChrome(e) {
            var r = a.exec(e);
            if (!r) {
                return null;
            }
            var l = r[2] && r[2].indexOf("native") === 0;
            var t = r[2] && r[2].indexOf("eval") === 0;
            var i = u.exec(r[2]);
            if (t && i != null) {
                r[2] = i[1];
                r[3] = i[2];
                r[4] = i[3];
            }
            return {
                file: !l ? r[2] : null,
                methodName: r[1] || n,
                arguments: l ? [
                    r[2]
                ] : [],
                lineNumber: r[3] ? +r[3] : null,
                column: r[4] ? +r[4] : null
            };
        }
        var l = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|webpack-internal|rsc|about|turbopack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
        function parseWinjs(e) {
            var r = l.exec(e);
            if (!r) {
                return null;
            }
            return {
                file: r[2],
                methodName: r[1] || n,
                arguments: [],
                lineNumber: +r[3],
                column: r[4] ? +r[4] : null
            };
        }
        var t = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|webpack-internal|rsc|about|turbopack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i;
        var i = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
        function parseGecko(e) {
            var r = t.exec(e);
            if (!r) {
                return null;
            }
            var a = r[3] && r[3].indexOf(" > eval") > -1;
            var u = i.exec(r[3]);
            if (a && u != null) {
                r[3] = u[1];
                r[4] = u[2];
                r[5] = null;
            }
            return {
                file: r[3],
                methodName: r[1] || n,
                arguments: r[2] ? r[2].split(",") : [],
                lineNumber: r[4] ? +r[4] : null,
                column: r[5] ? +r[5] : null
            };
        }
        var o = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;
        function parseJSC(e) {
            var r = o.exec(e);
            if (!r) {
                return null;
            }
            return {
                file: r[3],
                methodName: r[1] || n,
                arguments: [],
                lineNumber: +r[4],
                column: r[5] ? +r[5] : null
            };
        }
        var s = /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;
        function parseNode(e) {
            var r = s.exec(e);
            if (!r) {
                return null;
            }
            return {
                file: r[2],
                methodName: r[1] || n,
                arguments: [],
                lineNumber: +r[3],
                column: r[4] ? +r[4] : null
            };
        }
        r.parse = parse;
    })();
    module.exports = e;
})();
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/parseStack.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Transferências/elos-creative/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "parseStack", {
    enumerable: true,
    get: function() {
        return parseStack;
    }
});
const _stacktraceparser = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/stacktrace-parser/stack-trace-parser.cjs.js [client] (ecmascript)");
const regexNextStatic = /\/_next(\/static\/.+)/;
function parseStack(stack) {
    const frames = (0, _stacktraceparser.parse)(stack);
    return frames.map((frame)=>{
        try {
            const url = new URL(frame.file);
            const res = regexNextStatic.exec(url.pathname);
            if (res) {
                var _process_env___NEXT_DIST_DIR_replace, _process_env___NEXT_DIST_DIR;
                const distDir = (_process_env___NEXT_DIST_DIR = ("TURBOPACK compile-time value", "/home/pedro/Transferências/elos-creative/.next/dev")) == null ? void 0 : (_process_env___NEXT_DIST_DIR_replace = _process_env___NEXT_DIST_DIR.replace(/\\/g, "/")) == null ? void 0 : _process_env___NEXT_DIST_DIR_replace.replace(/\/$/, "");
                if (distDir) {
                    frame.file = "file://" + distDir.concat(res.pop()) + url.search;
                }
            }
        } catch (e) {}
        return frame;
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=parseStack.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/parse-component-stack.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "parseComponentStack", {
    enumerable: true,
    get: function() {
        return parseComponentStack;
    }
});
var LocationType;
(function(LocationType) {
    LocationType["FILE"] = "file";
    LocationType["WEBPACK_INTERNAL"] = "webpack-internal";
    LocationType["HTTP"] = "http";
    LocationType["PROTOCOL_RELATIVE"] = "protocol-relative";
    LocationType["UNKNOWN"] = "unknown";
})(LocationType || (LocationType = {}));
/**
 * Get the type of frame line based on the location
 */ function getLocationType(location) {
    if (location.startsWith("file://")) {
        return "file";
    }
    if (location.startsWith("webpack-internal://")) {
        return "webpack-internal";
    }
    if (location.startsWith("http://") || location.startsWith("https://")) {
        return "http";
    }
    if (location.startsWith("//")) {
        return "protocol-relative";
    }
    return "unknown";
}
function parseStackFrameLocation(location) {
    const locationType = getLocationType(location);
    const modulePath = location == null ? void 0 : location.replace(/^(webpack-internal:\/\/\/|file:\/\/)(\(.*\)\/)?/, "");
    var _modulePath_match;
    const [, file, lineNumber, column] = (_modulePath_match = modulePath == null ? void 0 : modulePath.match(/^(.+):(\d+):(\d+)/)) != null ? _modulePath_match : [];
    switch(locationType){
        case "file":
        case "webpack-internal":
            return {
                canOpenInEditor: true,
                file,
                lineNumber: lineNumber ? Number(lineNumber) : undefined,
                column: column ? Number(column) : undefined
            };
        // When the location is a URL we only show the file
        // TODO: Resolve http(s) URLs through sourcemaps
        case "http":
        case "protocol-relative":
        case "unknown":
        default:
            {
                return {
                    canOpenInEditor: false
                };
            }
    }
}
function parseComponentStack(componentStack) {
    const componentStackFrames = [];
    for (const line of componentStack.trim().split("\n")){
        // Get component and file from the component stack line
        const match = /at ([^ ]+)( \((.*)\))?/.exec(line);
        if (match == null ? void 0 : match[1]) {
            const component = match[1];
            const location = match[3];
            if (!location) {
                componentStackFrames.push({
                    canOpenInEditor: false,
                    component
                });
                continue;
            }
            // Stop parsing the component stack if we reach a Next.js component
            if (location == null ? void 0 : location.includes("next/dist")) {
                break;
            }
            const frameLocation = parseStackFrameLocation(location);
            componentStackFrames.push({
                component,
                ...frameLocation
            });
        }
    }
    return componentStackFrames;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=parse-component-stack.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/hydration-error-info.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getHydrationWarningType: null,
    hydrationErrorState: null,
    patchConsoleError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getHydrationWarningType: function() {
        return getHydrationWarningType;
    },
    hydrationErrorState: function() {
        return hydrationErrorState;
    },
    patchConsoleError: function() {
        return patchConsoleError;
    }
});
const getHydrationWarningType = (msg)=>{
    if (isHtmlTagsWarning(msg)) return "tag";
    if (isTextInTagsMismatchWarning(msg)) return "text-in-tag";
    return "text";
};
const isHtmlTagsWarning = (msg)=>Boolean(msg && htmlTagsWarnings.has(msg));
const isTextMismatchWarning = (msg)=>textMismatchWarning === msg;
const isTextInTagsMismatchWarning = (msg)=>Boolean(msg && textAndTagsMismatchWarnings.has(msg));
const isKnownHydrationWarning = (msg)=>isHtmlTagsWarning(msg) || isTextInTagsMismatchWarning(msg) || isTextMismatchWarning(msg);
const hydrationErrorState = {};
// https://github.com/facebook/react/blob/main/packages/react-dom/src/__tests__/ReactDOMHydrationDiff-test.js used as a reference
const htmlTagsWarnings = new Set([
    'Warning: Cannot render a sync or defer <script> outside the main document without knowing its order. Try adding async="" or moving it into the root <head> tag.%s',
    "Warning: In HTML, %s cannot be a child of <%s>.%s\nThis will cause a hydration error.%s",
    "Warning: In HTML, %s cannot be a descendant of <%s>.\nThis will cause a hydration error.%s",
    "Warning: In HTML, text nodes cannot be a child of <%s>.\nThis will cause a hydration error.",
    "Warning: In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.\nThis will cause a hydration error.",
    "Warning: Expected server HTML to contain a matching <%s> in <%s>.%s",
    "Warning: Did not expect server HTML to contain a <%s> in <%s>.%s"
]);
const textAndTagsMismatchWarnings = new Set([
    'Warning: Expected server HTML to contain a matching text node for "%s" in <%s>.%s',
    'Warning: Did not expect server HTML to contain the text node "%s" in <%s>.%s'
]);
const textMismatchWarning = 'Warning: Text content did not match. Server: "%s" Client: "%s"%s';
function patchConsoleError() {
    const prev = console.error;
    console.error = function(msg, serverContent, clientContent, componentStack) {
        if (isKnownHydrationWarning(msg)) {
            hydrationErrorState.warning = [
                // remove the last %s from the message
                msg,
                serverContent,
                clientContent
            ];
            hydrationErrorState.componentStack = componentStack;
            hydrationErrorState.serverContent = serverContent;
            hydrationErrorState.clientContent = clientContent;
        }
        // @ts-expect-error argument is defined
        prev.apply(console, arguments);
    };
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=hydration-error-info.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/shared/lib/error-source.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    decorateServerError: null,
    getErrorSource: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    decorateServerError: function() {
        return decorateServerError;
    },
    getErrorSource: function() {
        return getErrorSource;
    }
});
const symbolError = Symbol.for("NextjsError");
function getErrorSource(error) {
    return error[symbolError] || null;
}
function decorateServerError(error, type) {
    Object.defineProperty(error, symbolError, {
        writable: false,
        enumerable: false,
        configurable: false,
        value: type
    });
} //# sourceMappingURL=error-source.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/getErrorByType.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getErrorByType", {
    enumerable: true,
    get: function() {
        return getErrorByType;
    }
});
const _shared = (()=>{
    const e = new Error("Cannot find module '../../shared'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _stackframe = (()=>{
    const e = new Error("Cannot find module './stack-frame'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _errorsource = __turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/shared/lib/error-source.js [client] (ecmascript)");
async function getErrorByType(ev, isAppDir) {
    const { id, event } = ev;
    switch(event.type){
        case _shared.ACTION_UNHANDLED_ERROR:
        case _shared.ACTION_UNHANDLED_REJECTION:
            {
                const readyRuntimeError = {
                    id,
                    runtime: true,
                    error: event.reason,
                    frames: await (0, _stackframe.getOriginalStackFrames)(event.frames, (0, _errorsource.getErrorSource)(event.reason), isAppDir, event.reason.toString())
                };
                if (event.type === _shared.ACTION_UNHANDLED_ERROR) {
                    readyRuntimeError.componentStackFrames = event.componentStackFrames;
                }
                return readyRuntimeError;
            }
        default:
            {
                break;
            }
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const _ = event;
    throw new Error("type system invariant violation");
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=getErrorByType.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/nodeStackFrames.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getFilesystemFrame: null,
    getServerError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getFilesystemFrame: function() {
        return getFilesystemFrame;
    },
    getServerError: function() {
        return getServerError;
    }
});
const _stacktraceparser = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/stacktrace-parser/stack-trace-parser.cjs.js [client] (ecmascript)");
const _errorsource = __turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/shared/lib/error-source.js [client] (ecmascript)");
function getFilesystemFrame(frame) {
    const f = {
        ...frame
    };
    if (typeof f.file === "string") {
        if (f.file.startsWith("/") || // Win32:
        /^[a-z]:\\/i.test(f.file) || // Win32 UNC:
        f.file.startsWith("\\\\")) {
            f.file = "file://" + f.file;
        }
    }
    return f;
}
function getServerError(error, type) {
    let n;
    try {
        throw new Error(error.message);
    } catch (e) {
        n = e;
    }
    n.name = error.name;
    try {
        n.stack = n.toString() + "\n" + (0, _stacktraceparser.parse)(error.stack).map(getFilesystemFrame).map((f)=>{
            let str = "    at " + f.methodName;
            if (f.file) {
                let loc = f.file;
                if (f.lineNumber) {
                    loc += ":" + f.lineNumber;
                    if (f.column) {
                        loc += ":" + f.column;
                    }
                }
                str += " (" + loc + ")";
            }
            return str;
        }).join("\n");
    } catch (e) {
        n.stack = error.stack;
    }
    (0, _errorsource.decorateServerError)(n, type);
    return n;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=nodeStackFrames.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/client/components/react-dev-overlay/pages/client.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ReactDevOverlay: null,
    getErrorByType: null,
    getServerError: null,
    onBeforeRefresh: null,
    onBuildError: null,
    onBuildOk: null,
    onRefresh: null,
    onVersionInfo: null,
    register: null,
    unregister: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ReactDevOverlay: function() {
        return _ReactDevOverlay.default;
    },
    getErrorByType: function() {
        return _getErrorByType.getErrorByType;
    },
    getServerError: function() {
        return _nodeStackFrames.getServerError;
    },
    onBeforeRefresh: function() {
        return onBeforeRefresh;
    },
    onBuildError: function() {
        return onBuildError;
    },
    onBuildOk: function() {
        return onBuildOk;
    },
    onRefresh: function() {
        return onRefresh;
    },
    onVersionInfo: function() {
        return onVersionInfo;
    },
    register: function() {
        return register;
    },
    unregister: function() {
        return unregister;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [client] (ecmascript)");
const _bus = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/client/components/react-dev-overlay/pages/bus.js [client] (ecmascript)"));
const _parseStack = __turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/parseStack.js [client] (ecmascript)");
const _parsecomponentstack = __turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/parse-component-stack.js [client] (ecmascript)");
const _hydrationerrorinfo = __turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/hydration-error-info.js [client] (ecmascript)");
const _shared = (()=>{
    const e = new Error("Cannot find module '../shared'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _getErrorByType = __turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/getErrorByType.js [client] (ecmascript)");
const _nodeStackFrames = __turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/nodeStackFrames.js [client] (ecmascript)");
const _ReactDevOverlay = /*#__PURE__*/ _interop_require_default._((()=>{
    const e = new Error("Cannot find module './ReactDevOverlay'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})());
// Patch console.error to collect information about hydration errors
(0, _hydrationerrorinfo.patchConsoleError)();
let isRegistered = false;
let stackTraceLimit = undefined;
function onUnhandledError(ev) {
    const error = ev == null ? void 0 : ev.error;
    if (!error || !(error instanceof Error) || typeof error.stack !== "string") {
        // A non-error was thrown, we don't have anything to show. :-(
        return;
    }
    if (error.message.match(/(hydration|content does not match|did not match)/i)) {
        if (_hydrationerrorinfo.hydrationErrorState.warning) {
            error.details = {
                ...error.details,
                // It contains the warning, component stack, server and client tag names
                ..._hydrationerrorinfo.hydrationErrorState
            };
        }
        error.message += "\nSee more info here: https://nextjs.org/docs/messages/react-hydration-error";
    }
    const e = error;
    const componentStackFrames = typeof _hydrationerrorinfo.hydrationErrorState.componentStack === "string" ? (0, _parsecomponentstack.parseComponentStack)(_hydrationerrorinfo.hydrationErrorState.componentStack) : undefined;
    // Skip ModuleBuildError and ModuleNotFoundError, as it will be sent through onBuildError callback.
    // This is to avoid same error as different type showing up on client to cause flashing.
    if (e.name !== "ModuleBuildError" && e.name !== "ModuleNotFoundError") {
        _bus.emit({
            type: _shared.ACTION_UNHANDLED_ERROR,
            reason: error,
            frames: (0, _parseStack.parseStack)(e.stack),
            componentStackFrames
        });
    }
}
function onUnhandledRejection(ev) {
    const reason = ev == null ? void 0 : ev.reason;
    if (!reason || !(reason instanceof Error) || typeof reason.stack !== "string") {
        // A non-error was thrown, we don't have anything to show. :-(
        return;
    }
    const e = reason;
    _bus.emit({
        type: _shared.ACTION_UNHANDLED_REJECTION,
        reason: reason,
        frames: (0, _parseStack.parseStack)(e.stack)
    });
}
function register() {
    if (isRegistered) {
        return;
    }
    isRegistered = true;
    try {
        const limit = Error.stackTraceLimit;
        Error.stackTraceLimit = 50;
        stackTraceLimit = limit;
    } catch (e) {}
    window.addEventListener("error", onUnhandledError);
    window.addEventListener("unhandledrejection", onUnhandledRejection);
}
function unregister() {
    if (!isRegistered) {
        return;
    }
    isRegistered = false;
    if (stackTraceLimit !== undefined) {
        try {
            Error.stackTraceLimit = stackTraceLimit;
        } catch (e) {}
        stackTraceLimit = undefined;
    }
    window.removeEventListener("error", onUnhandledError);
    window.removeEventListener("unhandledrejection", onUnhandledRejection);
}
function onBuildOk() {
    _bus.emit({
        type: _shared.ACTION_BUILD_OK
    });
}
function onBuildError(message) {
    _bus.emit({
        type: _shared.ACTION_BUILD_ERROR,
        message
    });
}
function onRefresh() {
    _bus.emit({
        type: _shared.ACTION_REFRESH
    });
}
function onBeforeRefresh() {
    _bus.emit({
        type: _shared.ACTION_BEFORE_REFRESH
    });
}
function onVersionInfo(versionInfo) {
    _bus.emit({
        type: _shared.ACTION_VERSION_INFO,
        versionInfo
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=client.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/compiled/react-is/index.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Transferências/elos-creative/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = (()=>{
        const e = new Error("Cannot find module './cjs/react-is.development.js'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
    })();
}
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/client/index.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* global location */ var __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Transferências/elos-creative/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    emitter: null,
    hydrate: null,
    initialize: null,
    router: null,
    version: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    emitter: function() {
        return emitter;
    },
    hydrate: function() {
        return hydrate;
    },
    initialize: function() {
        return initialize;
    },
    router: function() {
        return router;
    },
    version: function() {
        return version;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/react/jsx-runtime.js [client] (ecmascript)");
__turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/build/polyfills/polyfill-module.js [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/react/index.js [client] (ecmascript)"));
const _client = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/react-dom/client.js [client] (ecmascript)"));
const _headmanagercontextsharedruntime = __turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/shared/lib/head-manager-context.shared-runtime.js [client] (ecmascript)");
const _mitt = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/shared/lib/mitt.js [client] (ecmascript)"));
const _routercontextsharedruntime = (()=>{
    const e = new Error("Cannot find module '../shared/lib/router-context.shared-runtime'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _handlesmoothscroll = __turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/shared/lib/router/utils/handle-smooth-scroll.js [client] (ecmascript)");
const _isdynamic = __turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/shared/lib/router/utils/is-dynamic.js [client] (ecmascript)");
const _querystring = __turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/shared/lib/router/utils/querystring.js [client] (ecmascript)");
const _runtimeconfigexternal = (()=>{
    const e = new Error("Cannot find module '../shared/lib/runtime-config.external'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _utils = (()=>{
    const e = new Error("Cannot find module '../shared/lib/utils'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _portal = __turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/client/portal/index.js [client] (ecmascript)");
const _headmanager = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/client/head-manager.js [client] (ecmascript)"));
const _pageloader = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/client/page-loader.js [client] (ecmascript)"));
const _performancerelayer = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/client/performance-relayer.js [client] (ecmascript)"));
const _routeannouncer = (()=>{
    const e = new Error("Cannot find module './route-announcer'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _router = (()=>{
    const e = new Error("Cannot find module './router'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _iserror = __turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/lib/is-error.js [client] (ecmascript)");
const _imageconfigcontextsharedruntime = __turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/shared/lib/image-config-context.shared-runtime.js [client] (ecmascript)");
const _removebasepath = (()=>{
    const e = new Error("Cannot find module './remove-base-path'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _hasbasepath = __turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/client/has-base-path.js [client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [client] (ecmascript)");
const _adapters = __turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/shared/lib/router/adapters.js [client] (ecmascript)");
const _hooksclientcontextsharedruntime = __turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js [client] (ecmascript)");
const _onrecoverableerror = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/client/on-recoverable-error.js [client] (ecmascript)"));
const _tracer = /*#__PURE__*/ _interop_require_default._((()=>{
    const e = new Error("Cannot find module './tracing/tracer'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})());
const _reporttosocket = /*#__PURE__*/ _interop_require_default._((()=>{
    const e = new Error("Cannot find module './tracing/report-to-socket'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})());
const version = "14.2.5";
let router;
const emitter = (0, _mitt.default)();
const looseToArray = (input)=>[].slice.call(input);
let initialData;
let defaultLocale = undefined;
let asPath;
let pageLoader;
let appElement;
let headManager;
let initialMatchesMiddleware = false;
let lastAppProps;
let lastRenderReject;
let devClient;
let CachedApp, onPerfEntry;
let CachedComponent;
class Container extends _react.default.Component {
    componentDidCatch(componentErr, info) {
        this.props.fn(componentErr, info);
    }
    componentDidMount() {
        this.scrollToHash();
        // We need to replace the router state if:
        // - the page was (auto) exported and has a query string or search (hash)
        // - it was auto exported and is a dynamic route (to provide params)
        // - if it is a client-side skeleton (fallback render)
        // - if middleware matches the current page (may have rewrite params)
        // - if rewrites in next.config.js match (may have rewrite params)
        if (router.isSsr && (initialData.isFallback || initialData.nextExport && ((0, _isdynamic.isDynamicRoute)(router.pathname) || location.search || ("TURBOPACK compile-time value", false) || initialMatchesMiddleware) || initialData.props && initialData.props.__N_SSG && (location.search || ("TURBOPACK compile-time value", false) || initialMatchesMiddleware))) {
            // update query on mount for exported pages
            router.replace(router.pathname + "?" + String((0, _querystring.assign)((0, _querystring.urlQueryToSearchParams)(router.query), new URLSearchParams(location.search))), asPath, {
                // @ts-ignore
                // WARNING: `_h` is an internal option for handing Next.js
                // client-side hydration. Your app should _never_ use this property.
                // It may change at any time without notice.
                _h: 1,
                // Fallback pages must trigger the data fetch, so the transition is
                // not shallow.
                // Other pages (strictly updating query) happens shallowly, as data
                // requirements would already be present.
                shallow: !initialData.isFallback && !initialMatchesMiddleware
            }).catch((err)=>{
                if (!err.cancelled) throw err;
            });
        }
    }
    componentDidUpdate() {
        this.scrollToHash();
    }
    scrollToHash() {
        let { hash } = location;
        hash = hash && hash.substring(1);
        if (!hash) return;
        const el = document.getElementById(hash);
        if (!el) return;
        // If we call scrollIntoView() in here without a setTimeout
        // it won't scroll properly.
        setTimeout(()=>el.scrollIntoView(), 0);
    }
    render() {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        else {
            const ReactDevOverlay = __turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/client/components/react-dev-overlay/pages/client.js [client] (ecmascript)").ReactDevOverlay;
            return /*#__PURE__*/ (0, _jsxruntime.jsx)(ReactDevOverlay, {
                children: this.props.children
            });
        }
    }
}
async function initialize(opts) {
    if (opts === void 0) opts = {};
    _tracer.default.onSpanEnd(_reporttosocket.default);
    // This makes sure this specific lines are removed in production
    if ("TURBOPACK compile-time truthy", 1) {
        devClient = opts.devClient;
    }
    initialData = JSON.parse(document.getElementById("__NEXT_DATA__").textContent);
    window.__NEXT_DATA__ = initialData;
    defaultLocale = initialData.defaultLocale;
    const prefix = initialData.assetPrefix || "";
    self.__next_set_public_path__("" + prefix + "/_next/") //eslint-disable-line
    ;
    // Initialize next/config with the environment configuration
    (0, _runtimeconfigexternal.setConfig)({
        serverRuntimeConfig: {},
        publicRuntimeConfig: initialData.runtimeConfig || {}
    });
    asPath = (0, _utils.getURL)();
    // make sure not to attempt stripping basePath for 404s
    if ((0, _hasbasepath.hasBasePath)(asPath)) {
        asPath = (0, _removebasepath.removeBasePath)(asPath);
    }
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (initialData.scriptLoader) {
        const { initScriptLoader } = (()=>{
            const e = new Error("Cannot find module './script'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
        })();
        initScriptLoader(initialData.scriptLoader);
    }
    pageLoader = new _pageloader.default(initialData.buildId, prefix);
    const register = (param)=>{
        let [r, f] = param;
        return pageLoader.routeLoader.onEntrypoint(r, f);
    };
    if (window.__NEXT_P) {
        // Defer page registration for another tick. This will increase the overall
        // latency in hydrating the page, but reduce the total blocking time.
        window.__NEXT_P.map((p)=>setTimeout(()=>register(p), 0));
    }
    window.__NEXT_P = [];
    window.__NEXT_P.push = register;
    headManager = (0, _headmanager.default)();
    headManager.getIsSsr = ()=>{
        return router.isSsr;
    };
    appElement = document.getElementById("__next");
    return {
        assetPrefix: prefix
    };
}
function renderApp(App, appProps) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(App, {
        ...appProps
    });
}
function AppContainer(param) {
    let { children } = param;
    // Create a memoized value for next/navigation router context.
    const adaptedForAppRouter = _react.default.useMemo({
        "AppContainer.useMemo[adaptedForAppRouter]": ()=>{
            return (0, _adapters.adaptForAppRouterInstance)(router);
        }
    }["AppContainer.useMemo[adaptedForAppRouter]"], []);
    var _self___NEXT_DATA___autoExport;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(Container, {
        fn: (error)=>// eslint-disable-next-line @typescript-eslint/no-use-before-define
            renderError({
                App: CachedApp,
                err: error
            }).catch((err)=>console.error("Error rendering page: ", err)),
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_approutercontextsharedruntime.AppRouterContext.Provider, {
            value: adaptedForAppRouter,
            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_hooksclientcontextsharedruntime.SearchParamsContext.Provider, {
                value: (0, _adapters.adaptForSearchParams)(router),
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_adapters.PathnameContextProviderAdapter, {
                    router: router,
                    isAutoExport: (_self___NEXT_DATA___autoExport = self.__NEXT_DATA__.autoExport) != null ? _self___NEXT_DATA___autoExport : false,
                    children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_hooksclientcontextsharedruntime.PathParamsContext.Provider, {
                        value: (0, _adapters.adaptForPathParams)(router),
                        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_routercontextsharedruntime.RouterContext.Provider, {
                            value: (0, _router.makePublicRouterInstance)(router),
                            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_headmanagercontextsharedruntime.HeadManagerContext.Provider, {
                                value: headManager,
                                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_imageconfigcontextsharedruntime.ImageConfigContext.Provider, {
                                    value: ("TURBOPACK compile-time value", {
                                        "deviceSizes": ("TURBOPACK compile-time value", [
                                            ("TURBOPACK compile-time value", 640),
                                            ("TURBOPACK compile-time value", 750),
                                            ("TURBOPACK compile-time value", 828),
                                            ("TURBOPACK compile-time value", 1080),
                                            ("TURBOPACK compile-time value", 1200),
                                            ("TURBOPACK compile-time value", 1920),
                                            ("TURBOPACK compile-time value", 2048),
                                            ("TURBOPACK compile-time value", 3840)
                                        ]),
                                        "imageSizes": ("TURBOPACK compile-time value", [
                                            ("TURBOPACK compile-time value", 32),
                                            ("TURBOPACK compile-time value", 48),
                                            ("TURBOPACK compile-time value", 64),
                                            ("TURBOPACK compile-time value", 96),
                                            ("TURBOPACK compile-time value", 128),
                                            ("TURBOPACK compile-time value", 256),
                                            ("TURBOPACK compile-time value", 384)
                                        ]),
                                        "qualities": ("TURBOPACK compile-time value", [
                                            ("TURBOPACK compile-time value", 75)
                                        ]),
                                        "path": ("TURBOPACK compile-time value", "/_next/image"),
                                        "loader": ("TURBOPACK compile-time value", "default"),
                                        "dangerouslyAllowSVG": ("TURBOPACK compile-time value", false),
                                        "unoptimized": ("TURBOPACK compile-time value", false),
                                        "domains": ("TURBOPACK compile-time value", []),
                                        "remotePatterns": ("TURBOPACK compile-time value", [
                                            ("TURBOPACK compile-time value", {
                                                "protocol": ("TURBOPACK compile-time value", "https"),
                                                "hostname": ("TURBOPACK compile-time value", "**")
                                            })
                                        ]),
                                        "localPatterns": ("TURBOPACK compile-time value", [
                                            ("TURBOPACK compile-time value", {
                                                "pathname": ("TURBOPACK compile-time value", "**"),
                                                "search": ("TURBOPACK compile-time value", "")
                                            })
                                        ])
                                    }),
                                    children: children
                                })
                            })
                        })
                    })
                })
            })
        })
    });
}
const wrapApp = (App)=>(wrappedAppProps)=>{
        const appProps = {
            ...wrappedAppProps,
            Component: CachedComponent,
            err: initialData.err,
            router
        };
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(AppContainer, {
            children: renderApp(App, appProps)
        });
    };
// This method handles all runtime and debug errors.
// 404 and 500 errors are special kind of errors
// and they are still handle via the main render method.
function renderError(renderErrorProps) {
    let { App, err } = renderErrorProps;
    // In development runtime errors are caught by our overlay
    // In production we catch runtime errors using componentDidCatch which will trigger renderError
    if ("TURBOPACK compile-time truthy", 1) {
        // A Next.js rendering runtime error is always unrecoverable
        // FIXME: let's make this recoverable (error in GIP client-transition)
        devClient.onUnrecoverableError();
        // We need to render an empty <App> so that the `<ReactDevOverlay>` can
        // render itself.
        // TODO: Fix disabled eslint rule
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        return doRender({
            App: ()=>null,
            props: {},
            Component: ()=>null,
            styleSheets: []
        });
    }
    //TURBOPACK unreachable
    ;
}
// Dummy component that we render as a child of Root so that we can
// toggle the correct styles before the page is rendered.
function Head(param) {
    let { callback } = param;
    // We use `useLayoutEffect` to guarantee the callback is executed
    // as soon as React flushes the update.
    _react.default.useLayoutEffect({
        "Head.useLayoutEffect": ()=>callback()
    }["Head.useLayoutEffect"], [
        callback
    ]);
    return null;
}
const performanceMarks = {
    navigationStart: "navigationStart",
    beforeRender: "beforeRender",
    afterRender: "afterRender",
    afterHydrate: "afterHydrate",
    routeChange: "routeChange"
};
const performanceMeasures = {
    hydration: "Next.js-hydration",
    beforeHydration: "Next.js-before-hydration",
    routeChangeToRender: "Next.js-route-change-to-render",
    render: "Next.js-render"
};
let reactRoot = null;
// On initial render a hydrate should always happen
let shouldHydrate = true;
function clearMarks() {
    [
        performanceMarks.beforeRender,
        performanceMarks.afterHydrate,
        performanceMarks.afterRender,
        performanceMarks.routeChange
    ].forEach((mark)=>performance.clearMarks(mark));
}
function markHydrateComplete() {
    if (!_utils.ST) return;
    performance.mark(performanceMarks.afterHydrate) // mark end of hydration
    ;
    const hasBeforeRenderMark = performance.getEntriesByName(performanceMarks.beforeRender, "mark").length;
    if (hasBeforeRenderMark) {
        const beforeHydrationMeasure = performance.measure(performanceMeasures.beforeHydration, performanceMarks.navigationStart, performanceMarks.beforeRender);
        const hydrationMeasure = performance.measure(performanceMeasures.hydration, performanceMarks.beforeRender, performanceMarks.afterHydrate);
        if (("TURBOPACK compile-time value", "development") === "development" && // Old versions of Safari don't return `PerformanceMeasure`s from `performance.measure()`
        beforeHydrationMeasure !== undefined && hydrationMeasure !== undefined) {
            _tracer.default.startSpan("navigation-to-hydration", {
                startTime: performance.timeOrigin + beforeHydrationMeasure.startTime,
                attributes: {
                    pathname: location.pathname,
                    query: location.search
                }
            }).end(performance.timeOrigin + hydrationMeasure.startTime + hydrationMeasure.duration);
        }
    }
    if (onPerfEntry) {
        performance.getEntriesByName(performanceMeasures.hydration).forEach(onPerfEntry);
    }
    clearMarks();
}
function markRenderComplete() {
    if (!_utils.ST) return;
    performance.mark(performanceMarks.afterRender) // mark end of render
    ;
    const navStartEntries = performance.getEntriesByName(performanceMarks.routeChange, "mark");
    if (!navStartEntries.length) return;
    const hasBeforeRenderMark = performance.getEntriesByName(performanceMarks.beforeRender, "mark").length;
    if (hasBeforeRenderMark) {
        performance.measure(performanceMeasures.routeChangeToRender, navStartEntries[0].name, performanceMarks.beforeRender);
        performance.measure(performanceMeasures.render, performanceMarks.beforeRender, performanceMarks.afterRender);
        if (onPerfEntry) {
            performance.getEntriesByName(performanceMeasures.render).forEach(onPerfEntry);
            performance.getEntriesByName(performanceMeasures.routeChangeToRender).forEach(onPerfEntry);
        }
    }
    clearMarks();
    [
        performanceMeasures.routeChangeToRender,
        performanceMeasures.render
    ].forEach((measure)=>performance.clearMeasures(measure));
}
function renderReactElement(domEl, fn) {
    // mark start of hydrate/render
    if (_utils.ST) {
        performance.mark(performanceMarks.beforeRender);
    }
    const reactEl = fn(shouldHydrate ? markHydrateComplete : markRenderComplete);
    if (!reactRoot) {
        // Unlike with createRoot, you don't need a separate root.render() call here
        reactRoot = _client.default.hydrateRoot(domEl, reactEl, {
            onRecoverableError: _onrecoverableerror.default
        });
        // TODO: Remove shouldHydrate variable when React 18 is stable as it can depend on `reactRoot` existing
        shouldHydrate = false;
    } else {
        const startTransition = _react.default.startTransition;
        startTransition(()=>{
            reactRoot.render(reactEl);
        });
    }
}
function Root(param) {
    let { callbacks, children } = param;
    // We use `useLayoutEffect` to guarantee the callbacks are executed
    // as soon as React flushes the update
    _react.default.useLayoutEffect({
        "Root.useLayoutEffect": ()=>callbacks.forEach({
                "Root.useLayoutEffect": (callback)=>callback()
            }["Root.useLayoutEffect"])
    }["Root.useLayoutEffect"], [
        callbacks
    ]);
    // TODO: remove in the next major version
    // We should ask to measure the Web Vitals after rendering completes so we
    // don't cause any hydration delay:
    _react.default.useEffect({
        "Root.useEffect": ()=>{
            (0, _performancerelayer.default)(onPerfEntry);
        }
    }["Root.useEffect"], []);
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return children;
}
function doRender(input) {
    let { App, Component, props, err } = input;
    let styleSheets = "initial" in input ? undefined : input.styleSheets;
    Component = Component || lastAppProps.Component;
    props = props || lastAppProps.props;
    const appProps = {
        ...props,
        Component,
        err,
        router
    };
    // lastAppProps has to be set before ReactDom.render to account for ReactDom throwing an error.
    lastAppProps = appProps;
    let canceled = false;
    let resolvePromise;
    const renderPromise = new Promise((resolve, reject)=>{
        if (lastRenderReject) {
            lastRenderReject();
        }
        resolvePromise = ()=>{
            lastRenderReject = null;
            resolve();
        };
        lastRenderReject = ()=>{
            canceled = true;
            lastRenderReject = null;
            const error = new Error("Cancel rendering route");
            error.cancelled = true;
            reject(error);
        };
    });
    // This function has a return type to ensure it doesn't start returning a
    // Promise. It should remain synchronous.
    function onStart() {
        if ("TURBOPACK compile-time truthy", 1) {
            return false;
        }
        //TURBOPACK unreachable
        ;
        const currentStyleTags = undefined;
        const currentHrefs = undefined;
        const noscript = undefined;
        const nonce = undefined;
    }
    function onHeadCommit() {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        if (input.scroll) {
            const { x, y } = input.scroll;
            (0, _handlesmoothscroll.handleSmoothScroll)(()=>{
                window.scrollTo(x, y);
            });
        }
    }
    function onRootCommit() {
        resolvePromise();
    }
    onStart();
    const elem = /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)(Head, {
                callback: onHeadCommit
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsxs)(AppContainer, {
                children: [
                    renderApp(App, appProps),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)(_portal.Portal, {
                        type: "next-route-announcer",
                        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_routeannouncer.RouteAnnouncer, {})
                    })
                ]
            })
        ]
    });
    // We catch runtime errors using componentDidCatch which will trigger renderError
    renderReactElement(appElement, (callback)=>/*#__PURE__*/ (0, _jsxruntime.jsx)(Root, {
            callbacks: [
                callback,
                onRootCommit
            ],
            children: ("TURBOPACK compile-time falsy", 0) ? /*#__PURE__*/ "TURBOPACK unreachable" : elem
        }));
    return renderPromise;
}
async function render(renderingProps) {
    // if an error occurs in a server-side page (e.g. in getInitialProps),
    // skip re-rendering the error page client-side as data-fetching operations
    // will already have been done on the server and NEXT_DATA contains the correct
    // data for straight-forward hydration of the error page
    if (renderingProps.err && // renderingProps.Component might be undefined if there is a top/module-level error
    (typeof renderingProps.Component === "undefined" || !renderingProps.isHydratePass)) {
        await renderError(renderingProps);
        return;
    }
    try {
        await doRender(renderingProps);
    } catch (err) {
        const renderErr = (0, _iserror.getProperError)(err);
        // bubble up cancelation errors
        if (renderErr.cancelled) {
            throw renderErr;
        }
        if ("TURBOPACK compile-time truthy", 1) {
            // Ensure this error is displayed in the overlay in development
            setTimeout(()=>{
                throw renderErr;
            });
        }
        await renderError({
            ...renderingProps,
            err: renderErr
        });
    }
}
async function hydrate(opts) {
    let initialErr = initialData.err;
    try {
        const appEntrypoint = await pageLoader.routeLoader.whenEntrypoint("/_app");
        if ("error" in appEntrypoint) {
            throw appEntrypoint.error;
        }
        const { component: app, exports: mod } = appEntrypoint;
        CachedApp = app;
        if (mod && mod.reportWebVitals) {
            onPerfEntry = (param)=>{
                let { id, name, startTime, value, duration, entryType, entries, attribution } = param;
                // Combines timestamp with random number for unique ID
                const uniqueID = Date.now() + "-" + (Math.floor(Math.random() * (9e12 - 1)) + 1e12);
                let perfStartEntry;
                if (entries && entries.length) {
                    perfStartEntry = entries[0].startTime;
                }
                const webVitals = {
                    id: id || uniqueID,
                    name,
                    startTime: startTime || perfStartEntry,
                    value: value == null ? duration : value,
                    label: entryType === "mark" || entryType === "measure" ? "custom" : "web-vital"
                };
                if (attribution) {
                    webVitals.attribution = attribution;
                }
                mod.reportWebVitals(webVitals);
            };
        }
        const pageEntrypoint = // error, so we need to skip waiting for the entrypoint.
        ("TURBOPACK compile-time value", "development") === "development" && initialData.err ? {
            error: initialData.err
        } : await pageLoader.routeLoader.whenEntrypoint(initialData.page);
        if ("error" in pageEntrypoint) {
            throw pageEntrypoint.error;
        }
        CachedComponent = pageEntrypoint.component;
        if ("TURBOPACK compile-time truthy", 1) {
            const { isValidElementType } = __turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/compiled/react-is/index.js [client] (ecmascript)");
            if (!isValidElementType(CachedComponent)) {
                throw new Error('The default export is not a React Component in page: "' + initialData.page + '"');
            }
        }
    } catch (error) {
        // This catches errors like throwing in the top level of a module
        initialErr = (0, _iserror.getProperError)(error);
    }
    if ("TURBOPACK compile-time truthy", 1) {
        const getServerError = __turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/client/components/react-dev-overlay/pages/client.js [client] (ecmascript)").getServerError;
        // Server-side runtime errors need to be re-thrown on the client-side so
        // that the overlay is rendered.
        if (initialErr) {
            if (initialErr === initialData.err) {
                setTimeout(()=>{
                    let error;
                    try {
                        // Generate a new error object. We `throw` it because some browsers
                        // will set the `stack` when thrown, and we want to ensure ours is
                        // not overridden when we re-throw it below.
                        throw new Error(initialErr.message);
                    } catch (e) {
                        error = e;
                    }
                    error.name = initialErr.name;
                    error.stack = initialErr.stack;
                    throw getServerError(error, initialErr.source);
                });
            } else {
                setTimeout(()=>{
                    throw initialErr;
                });
            }
        }
    }
    if (window.__NEXT_PRELOADREADY) {
        await window.__NEXT_PRELOADREADY(initialData.dynamicIds);
    }
    router = (0, _router.createRouter)(initialData.page, initialData.query, asPath, {
        initialProps: initialData.props,
        pageLoader,
        App: CachedApp,
        Component: CachedComponent,
        wrapApp,
        err: initialErr,
        isFallback: Boolean(initialData.isFallback),
        subscription: (info, App, scroll)=>render(Object.assign({}, info, {
                App,
                scroll
            })),
        locale: initialData.locale,
        locales: initialData.locales,
        defaultLocale,
        domainLocales: initialData.domainLocales,
        isPreview: initialData.isPreview
    });
    initialMatchesMiddleware = await router._initialMatchesMiddlewarePromise;
    const renderCtx = {
        App: CachedApp,
        initial: true,
        Component: CachedComponent,
        props: initialData.props,
        err: initialErr,
        isHydratePass: true
    };
    if (opts == null ? void 0 : opts.beforeRender) {
        await opts.beforeRender();
    }
    render(renderCtx);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=index.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/compiled/strip-ansi/index.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {

(()=>{
    "use strict";
    var e = {
        511: (e)=>{
            e.exports = ({ onlyFirst: e = false } = {})=>{
                const r = [
                    "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
                    "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"
                ].join("|");
                return new RegExp(r, e ? undefined : "g");
            };
        },
        532: (e, r, _)=>{
            const t = _(511);
            e.exports = (e)=>typeof e === "string" ? e.replace(t(), "") : e;
        }
    };
    var r = {};
    function __nccwpck_require__(_) {
        var t = r[_];
        if (t !== undefined) {
            return t.exports;
        }
        var a = r[_] = {
            exports: {}
        };
        var n = true;
        try {
            e[_](a, a.exports, __nccwpck_require__);
            n = false;
        } finally{
            if (n) delete r[_];
        }
        return a.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/Transferências/elos-creative/node_modules/next/dist/compiled/strip-ansi") + "/";
    var _ = __nccwpck_require__(532);
    module.exports = _;
})();
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/format-webpack-messages.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
MIT License

Copyright (c) 2015-present, Facebook, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return formatWebpackMessages;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _stripansi = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/compiled/strip-ansi/index.js [client] (ecmascript)"));
// This file is based on https://github.com/facebook/create-react-app/blob/7b1a32be6ec9f99a6c9a3c66813f3ac09c4736b9/packages/react-dev-utils/formatWebpackMessages.js
// It's been edited to remove chalk and CRA-specific logic
const friendlySyntaxErrorLabel = "Syntax error:";
const WEBPACK_BREAKING_CHANGE_POLYFILLS = "\n\nBREAKING CHANGE: webpack < 5 used to include polyfills for node.js core modules by default.";
function isLikelyASyntaxError(message) {
    return (0, _stripansi.default)(message).includes(friendlySyntaxErrorLabel);
}
let hadMissingSassError = false;
// Cleans up webpack error messages.
function formatMessage(message, verbose, importTraceNote) {
    // TODO: Replace this once webpack 5 is stable
    if (typeof message === "object" && message.message) {
        const filteredModuleTrace = message.moduleTrace && message.moduleTrace.filter((trace)=>!/next-(middleware|client-pages|route|edge-function)-loader\.js/.test(trace.originName));
        let body = message.message;
        const breakingChangeIndex = body.indexOf(WEBPACK_BREAKING_CHANGE_POLYFILLS);
        if (breakingChangeIndex >= 0) {
            body = body.slice(0, breakingChangeIndex);
        }
        message = (message.moduleName ? (0, _stripansi.default)(message.moduleName) + "\n" : "") + (message.file ? (0, _stripansi.default)(message.file) + "\n" : "") + body + (message.details && verbose ? "\n" + message.details : "") + (filteredModuleTrace && filteredModuleTrace.length ? (importTraceNote || "\n\nImport trace for requested module:") + filteredModuleTrace.map((trace)=>"\n" + trace.moduleName).join("") : "") + (message.stack && verbose ? "\n" + message.stack : "");
    }
    let lines = message.split("\n");
    // Strip Webpack-added headers off errors/warnings
    // https://github.com/webpack/webpack/blob/master/lib/ModuleError.js
    lines = lines.filter((line)=>!/Module [A-z ]+\(from/.test(line));
    // Transform parsing error into syntax error
    // TODO: move this to our ESLint formatter?
    lines = lines.map((line)=>{
        const parsingError = /Line (\d+):(?:(\d+):)?\s*Parsing error: (.+)$/.exec(line);
        if (!parsingError) {
            return line;
        }
        const [, errorLine, errorColumn, errorMessage] = parsingError;
        return friendlySyntaxErrorLabel + " " + errorMessage + " (" + errorLine + ":" + errorColumn + ")";
    });
    message = lines.join("\n");
    // Smoosh syntax errors (commonly found in CSS)
    message = message.replace(/SyntaxError\s+\((\d+):(\d+)\)\s*(.+?)\n/g, "" + friendlySyntaxErrorLabel + " $3 ($1:$2)\n");
    // Clean up export errors
    message = message.replace(/^.*export '(.+?)' was not found in '(.+?)'.*$/gm, "Attempted import error: '$1' is not exported from '$2'.");
    message = message.replace(/^.*export 'default' \(imported as '(.+?)'\) was not found in '(.+?)'.*$/gm, "Attempted import error: '$2' does not contain a default export (imported as '$1').");
    message = message.replace(/^.*export '(.+?)' \(imported as '(.+?)'\) was not found in '(.+?)'.*$/gm, "Attempted import error: '$1' is not exported from '$3' (imported as '$2').");
    lines = message.split("\n");
    // Remove leading newline
    if (lines.length > 2 && lines[1].trim() === "") {
        lines.splice(1, 1);
    }
    // Cleans up verbose "module not found" messages for files and packages.
    if (lines[1] && lines[1].indexOf("Module not found: ") === 0) {
        lines = [
            lines[0],
            lines[1].replace("Error: ", "").replace("Module not found: Cannot find file:", "Cannot find file:"),
            ...lines.slice(2)
        ];
    }
    // Add helpful message for users trying to use Sass for the first time
    if (lines[1] && lines[1].match(/Cannot find module.+sass/)) {
        // ./file.module.scss (<<loader info>>) => ./file.module.scss
        const firstLine = lines[0].split("!");
        lines[0] = firstLine[firstLine.length - 1];
        lines[1] = "To use Next.js' built-in Sass support, you first need to install `sass`.\n";
        lines[1] += "Run `npm i sass` or `yarn add sass` inside your workspace.\n";
        lines[1] += "\nLearn more: https://nextjs.org/docs/messages/install-sass";
        // dispose of unhelpful stack trace
        lines = lines.slice(0, 2);
        hadMissingSassError = true;
    } else if (hadMissingSassError && message.match(/(sass-loader|resolve-url-loader: CSS error)/)) {
        // dispose of unhelpful stack trace following missing sass module
        lines = [];
    }
    if (!verbose) {
        message = lines.join("\n");
        // Internal stacks are generally useless so we strip them... with the
        // exception of stacks containing `webpack:` because they're normally
        // from user code generated by Webpack. For more information see
        // https://github.com/facebook/create-react-app/pull/1050
        message = message.replace(/^\s*at\s((?!webpack:).)*:\d+:\d+[\s)]*(\n|$)/gm, "") // at ... ...:x:y
        ;
        message = message.replace(/^\s*at\s<anonymous>(\n|$)/gm, "") // at <anonymous>
        ;
        message = message.replace(/File was processed with these loaders:\n(.+[\\/](next[\\/]dist[\\/].+|@next[\\/]react-refresh-utils[\\/]loader)\.js\n)*You may need an additional loader to handle the result of these loaders.\n/g, "");
        lines = message.split("\n");
    }
    // Remove duplicated newlines
    lines = lines.filter((line, index, arr)=>index === 0 || line.trim() !== "" || line.trim() !== arr[index - 1].trim());
    // Reassemble the message
    message = lines.join("\n");
    return message.trim();
}
function formatWebpackMessages(json, verbose) {
    const formattedErrors = json.errors.map((message)=>{
        const isUnknownNextFontError = message.message.includes("An error occurred in `next/font`.");
        return formatMessage(message, isUnknownNextFontError || verbose);
    });
    const formattedWarnings = json.warnings.map((message)=>{
        return formatMessage(message, verbose);
    });
    // Reorder errors to put the most relevant ones first.
    let reactServerComponentsError = -1;
    for(let i = 0; i < formattedErrors.length; i++){
        const error = formattedErrors[i];
        if (error.includes("ReactServerComponentsError")) {
            reactServerComponentsError = i;
            break;
        }
    }
    // Move the reactServerComponentsError to the top if it exists
    if (reactServerComponentsError !== -1) {
        const error = formattedErrors.splice(reactServerComponentsError, 1);
        formattedErrors.unshift(error[0]);
    }
    const result = {
        ...json,
        errors: formattedErrors,
        warnings: formattedWarnings
    };
    if (!verbose && result.errors.some(isLikelyASyntaxError)) {
        // If there are any syntax errors, show just them.
        result.errors = result.errors.filter(isLikelyASyntaxError);
        result.warnings = [];
    }
    return result;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=format-webpack-messages.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/server/dev/hot-reloader-types.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "HMR_ACTIONS_SENT_TO_BROWSER", {
    enumerable: true,
    get: function() {
        return HMR_ACTIONS_SENT_TO_BROWSER;
    }
});
var HMR_ACTIONS_SENT_TO_BROWSER;
(function(HMR_ACTIONS_SENT_TO_BROWSER) {
    HMR_ACTIONS_SENT_TO_BROWSER["ADDED_PAGE"] = "addedPage";
    HMR_ACTIONS_SENT_TO_BROWSER["REMOVED_PAGE"] = "removedPage";
    HMR_ACTIONS_SENT_TO_BROWSER["RELOAD_PAGE"] = "reloadPage";
    HMR_ACTIONS_SENT_TO_BROWSER["SERVER_COMPONENT_CHANGES"] = "serverComponentChanges";
    HMR_ACTIONS_SENT_TO_BROWSER["MIDDLEWARE_CHANGES"] = "middlewareChanges";
    HMR_ACTIONS_SENT_TO_BROWSER["CLIENT_CHANGES"] = "clientChanges";
    HMR_ACTIONS_SENT_TO_BROWSER["SERVER_ONLY_CHANGES"] = "serverOnlyChanges";
    HMR_ACTIONS_SENT_TO_BROWSER["SYNC"] = "sync";
    HMR_ACTIONS_SENT_TO_BROWSER["BUILT"] = "built";
    HMR_ACTIONS_SENT_TO_BROWSER["BUILDING"] = "building";
    HMR_ACTIONS_SENT_TO_BROWSER["DEV_PAGES_MANIFEST_UPDATE"] = "devPagesManifestUpdate";
    HMR_ACTIONS_SENT_TO_BROWSER["TURBOPACK_MESSAGE"] = "turbopack-message";
    HMR_ACTIONS_SENT_TO_BROWSER["SERVER_ERROR"] = "serverError";
    HMR_ACTIONS_SENT_TO_BROWSER["TURBOPACK_CONNECTED"] = "turbopack-connected";
})(HMR_ACTIONS_SENT_TO_BROWSER || (HMR_ACTIONS_SENT_TO_BROWSER = {})); //# sourceMappingURL=hot-reloader-types.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/server/dev/extract-modules-from-turbopack-message.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "extractModulesFromTurbopackMessage", {
    enumerable: true,
    get: function() {
        return extractModulesFromTurbopackMessage;
    }
});
function extractModulesFromTurbopackMessage(data) {
    const updatedModules = new Set();
    const updates = Array.isArray(data) ? data : [
        data
    ];
    for (const update of updates){
        // TODO this won't capture changes to CSS since they don't result in a "merged" update
        if (update.type !== "partial" || update.instruction.type !== "ChunkListUpdate" || update.instruction.merged === undefined) {
            continue;
        }
        for (const mergedUpdate of update.instruction.merged){
            for (const name of Object.keys(mergedUpdate.entries)){
                const res = /(.*)\s+\[.*/.exec(name);
                if (res === null) {
                    console.error("[Turbopack HMR] Expected module to match pattern: " + name);
                    continue;
                }
                updatedModules.add(res[1]);
            }
        }
    }
    return [
        ...updatedModules
    ];
} //# sourceMappingURL=extract-modules-from-turbopack-message.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/client/components/react-dev-overlay/pages/hot-reloader-client.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// TODO: Remove use of `any` type. Fix no-use-before-define violations.
/* eslint-disable @typescript-eslint/no-use-before-define */ /**
 * MIT License
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */ // This file is a modified version of the Create React App HMR dev client that
// can be found here:
// https://github.com/facebook/create-react-app/blob/v3.4.1/packages/react-dev-utils/webpackHotDevClient.js
var __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Transferências/elos-creative/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    performFullReload: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return connect;
    },
    performFullReload: function() {
        return performFullReload;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _client = __turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/client/components/react-dev-overlay/pages/client.js [client] (ecmascript)");
const _stripansi = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/compiled/strip-ansi/index.js [client] (ecmascript)"));
const _websocket = (()=>{
    const e = new Error("Cannot find module './websocket'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _formatwebpackmessages = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/format-webpack-messages.js [client] (ecmascript)"));
const _hotreloadertypes = __turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/server/dev/hot-reloader-types.js [client] (ecmascript)");
const _extractmodulesfromturbopackmessage = __turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/server/dev/extract-modules-from-turbopack-message.js [client] (ecmascript)");
const _shared = (()=>{
    const e = new Error("Cannot find module '../shared'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _runtimeerrorhandler = (()=>{
    const e = new Error("Cannot find module '../internal/helpers/runtime-error-handler'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
window.__nextDevClientId = Math.round(Math.random() * 100 + Date.now());
let customHmrEventHandler;
let turbopackMessageListeners = [];
let MODE = "webpack";
function connect(mode) {
    MODE = mode;
    (0, _client.register)();
    (0, _websocket.addMessageListener)((payload)=>{
        if (!("action" in payload)) {
            return;
        }
        try {
            processMessage(payload);
        } catch (err) {
            var _err_stack;
            console.warn("[HMR] Invalid message: " + payload + "\n" + ((_err_stack = err == null ? void 0 : err.stack) != null ? _err_stack : ""));
        }
    });
    return {
        subscribeToHmrEvent (handler) {
            customHmrEventHandler = handler;
        },
        onUnrecoverableError () {
            _runtimeerrorhandler.RuntimeErrorHandler.hadRuntimeError = true;
        },
        addTurbopackMessageListener (cb) {
            turbopackMessageListeners.push(cb);
        },
        sendTurbopackMessage (msg) {
            (0, _websocket.sendMessage)(msg);
        },
        handleUpdateError (err) {
            performFullReload(err);
        }
    };
}
// Remember some state related to hot module replacement.
var isFirstCompilation = true;
var mostRecentCompilationHash = null;
var hasCompileErrors = false;
function clearOutdatedErrors() {
    // Clean up outdated compile errors, if any.
    if (typeof console !== "undefined" && typeof console.clear === "function") {
        if (hasCompileErrors) {
            console.clear();
        }
    }
}
// Successful compilation.
function handleSuccess() {
    clearOutdatedErrors();
    if (MODE === "webpack") {
        const isHotUpdate = !isFirstCompilation || window.__NEXT_DATA__.page !== "/_error" && isUpdateAvailable();
        isFirstCompilation = false;
        hasCompileErrors = false;
        // Attempt to apply hot updates or reload.
        if (isHotUpdate) {
            tryApplyUpdates(onBeforeFastRefresh, onFastRefresh);
        }
    } else {
        (0, _client.onBuildOk)();
    }
}
// Compilation with warnings (e.g. ESLint).
function handleWarnings(warnings) {
    clearOutdatedErrors();
    const isHotUpdate = !isFirstCompilation;
    isFirstCompilation = false;
    hasCompileErrors = false;
    function printWarnings() {
        // Print warnings to the console.
        const formatted = (0, _formatwebpackmessages.default)({
            warnings: warnings,
            errors: []
        });
        if (typeof console !== "undefined" && typeof console.warn === "function") {
            var _formatted_warnings;
            for(let i = 0; i < ((_formatted_warnings = formatted.warnings) == null ? void 0 : _formatted_warnings.length); i++){
                if (i === 5) {
                    console.warn("There were more warnings in other files.\n" + "You can find a complete log in the terminal.");
                    break;
                }
                console.warn((0, _stripansi.default)(formatted.warnings[i]));
            }
        }
    }
    printWarnings();
    // Attempt to apply hot updates or reload.
    if (isHotUpdate) {
        tryApplyUpdates(onBeforeFastRefresh, onFastRefresh);
    }
}
// Compilation with errors (e.g. syntax error or missing modules).
function handleErrors(errors) {
    clearOutdatedErrors();
    isFirstCompilation = false;
    hasCompileErrors = true;
    // "Massage" webpack messages.
    var formatted = (0, _formatwebpackmessages.default)({
        errors: errors,
        warnings: []
    });
    // Only show the first error.
    (0, _client.onBuildError)(formatted.errors[0]);
    // Also log them to the console.
    if (typeof console !== "undefined" && typeof console.error === "function") {
        for(var i = 0; i < formatted.errors.length; i++){
            console.error((0, _stripansi.default)(formatted.errors[i]));
        }
    }
    // Do not attempt to reload now.
    // We will reload on next success instead.
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
}
let startLatency = undefined;
function onBeforeFastRefresh(updatedModules) {
    if (updatedModules.length > 0) {
        // Only trigger a pending state if we have updates to apply
        // (cf. onFastRefresh)
        (0, _client.onBeforeRefresh)();
    }
}
function onFastRefresh(updatedModules) {
    if (updatedModules === void 0) updatedModules = [];
    (0, _client.onBuildOk)();
    if (updatedModules.length === 0) {
        return;
    }
    (0, _client.onRefresh)();
    reportHmrLatency();
}
function reportHmrLatency(updatedModules) {
    if (updatedModules === void 0) updatedModules = [];
    if (startLatency) {
        const endLatency = Date.now();
        const latency = endLatency - startLatency;
        console.log("[Fast Refresh] done in " + latency + "ms");
        (0, _websocket.sendMessage)(JSON.stringify({
            event: "client-hmr-latency",
            id: window.__nextDevClientId,
            startTime: startLatency,
            endTime: endLatency,
            page: window.location.pathname,
            updatedModules,
            // Whether the page (tab) was hidden at the time the event occurred.
            // This can impact the accuracy of the event's timing.
            isPageHidden: document.visibilityState === "hidden"
        }));
        if (self.__NEXT_HMR_LATENCY_CB) {
            self.__NEXT_HMR_LATENCY_CB(latency);
        }
    }
}
// There is a newer version of the code available.
function handleAvailableHash(hash) {
    // Update last known compilation hash.
    mostRecentCompilationHash = hash;
}
/** Handles messages from the sevrer for the Pages Router. */ function processMessage(obj) {
    if (!("action" in obj)) {
        return;
    }
    // Use turbopack message for analytics, (still need built for webpack)
    switch(obj.action){
        case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.BUILDING:
            {
                startLatency = Date.now();
                console.log("[Fast Refresh] rebuilding");
                break;
            }
        case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.BUILT:
        case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.SYNC:
            {
                if (obj.hash) handleAvailableHash(obj.hash);
                const { errors, warnings } = obj;
                // Is undefined when it's a 'built' event
                if ("versionInfo" in obj) (0, _client.onVersionInfo)(obj.versionInfo);
                const hasErrors = Boolean(errors && errors.length);
                if (hasErrors) {
                    (0, _websocket.sendMessage)(JSON.stringify({
                        event: "client-error",
                        errorCount: errors.length,
                        clientId: window.__nextDevClientId
                    }));
                    return handleErrors(errors);
                }
                const hasWarnings = Boolean(warnings && warnings.length);
                if (hasWarnings) {
                    (0, _websocket.sendMessage)(JSON.stringify({
                        event: "client-warning",
                        warningCount: warnings.length,
                        clientId: window.__nextDevClientId
                    }));
                    return handleWarnings(warnings);
                }
                (0, _websocket.sendMessage)(JSON.stringify({
                    event: "client-success",
                    clientId: window.__nextDevClientId
                }));
                return handleSuccess();
            }
        case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.SERVER_COMPONENT_CHANGES:
            {
                window.location.reload();
                return;
            }
        case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.SERVER_ERROR:
            {
                const { errorJSON } = obj;
                if (errorJSON) {
                    const { message, stack } = JSON.parse(errorJSON);
                    const error = new Error(message);
                    error.stack = stack;
                    handleErrors([
                        error
                    ]);
                }
                return;
            }
        case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.TURBOPACK_CONNECTED:
            {
                for (const listener of turbopackMessageListeners){
                    listener({
                        type: _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.TURBOPACK_CONNECTED
                    });
                }
                break;
            }
        case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.TURBOPACK_MESSAGE:
            {
                const updatedModules = (0, _extractmodulesfromturbopackmessage.extractModulesFromTurbopackMessage)(obj.data);
                onBeforeFastRefresh(updatedModules);
                for (const listener of turbopackMessageListeners){
                    listener({
                        type: _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.TURBOPACK_MESSAGE,
                        data: obj.data
                    });
                }
                if (_runtimeerrorhandler.RuntimeErrorHandler.hadRuntimeError) {
                    console.warn(_shared.REACT_REFRESH_FULL_RELOAD_FROM_ERROR);
                    performFullReload(null);
                }
                (0, _client.onRefresh)();
                reportHmrLatency(updatedModules);
                break;
            }
        default:
            {
                if (customHmrEventHandler) {
                    customHmrEventHandler(obj);
                    break;
                }
                break;
            }
    }
}
// Is there a newer version of this code available?
function isUpdateAvailable() {
    /* globals __webpack_hash__ */ // __webpack_hash__ is the hash of the current compilation.
    // It's a global variable injected by Webpack.
    return mostRecentCompilationHash !== __webpack_hash__;
}
// Webpack disallows updates in other states.
function canApplyUpdates() {
    // @ts-expect-error TODO: module.hot exists but type needs to be added. Can't use `as any` here as webpack parses for `module.hot` calls.
    return module.hot.status() === "idle";
}
function afterApplyUpdates(fn) {
    if (canApplyUpdates()) {
        fn();
    } else {
        function handler(status) {
            if (status === "idle") {
                // @ts-expect-error TODO: module.hot exists but type needs to be added. Can't use `as any` here as webpack parses for `module.hot` calls.
                module.hot.removeStatusHandler(handler);
                fn();
            }
        }
        // @ts-expect-error TODO: module.hot exists but type needs to be added. Can't use `as any` here as webpack parses for `module.hot` calls.
        module.hot.addStatusHandler(handler);
    }
}
// Attempt to update code on the fly, fall back to a hard reload.
function tryApplyUpdates(onBeforeHotUpdate, onHotUpdateSuccess) {
    // @ts-expect-error TODO: module.hot exists but type needs to be added. Can't use `as any` here as webpack parses for `module.hot` calls.
    if (!module.hot) {
        // HotModuleReplacementPlugin is not in Webpack configuration.
        console.error("HotModuleReplacementPlugin is not in Webpack configuration.");
        // window.location.reload();
        return;
    }
    if (!isUpdateAvailable() || !canApplyUpdates()) {
        (0, _client.onBuildOk)();
        return;
    }
    function handleApplyUpdates(err, updatedModules) {
        if (err || _runtimeerrorhandler.RuntimeErrorHandler.hadRuntimeError || !updatedModules) {
            if (err) {
                console.warn("[Fast Refresh] performing full reload\n\n" + "Fast Refresh will perform a full reload when you edit a file that's imported by modules outside of the React rendering tree.\n" + "You might have a file which exports a React component but also exports a value that is imported by a non-React component file.\n" + "Consider migrating the non-React component export to a separate file and importing it into both files.\n\n" + "It is also possible the parent component of the component you edited is a class component, which disables Fast Refresh.\n" + "Fast Refresh requires at least one parent function component in your React tree.");
            } else if (_runtimeerrorhandler.RuntimeErrorHandler.hadRuntimeError) {
                console.warn("[Fast Refresh] performing full reload because your application had an unrecoverable error");
            }
            performFullReload(err);
            return;
        }
        if (typeof onHotUpdateSuccess === "function") {
            // Maybe we want to do something.
            onHotUpdateSuccess(updatedModules);
        }
        if (isUpdateAvailable()) {
            // While we were updating, there was a new update! Do it again.
            // However, this time, don't trigger a pending refresh state.
            tryApplyUpdates(updatedModules.length > 0 ? undefined : onBeforeHotUpdate, updatedModules.length > 0 ? _client.onBuildOk : onHotUpdateSuccess);
        } else {
            (0, _client.onBuildOk)();
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        }
    }
    // https://webpack.js.org/api/hot-module-replacement/#check
    // @ts-expect-error TODO: module.hot exists but type needs to be added. Can't use `as any` here as webpack parses for `module.hot` calls.
    module.hot.check(/* autoApply */ false).then((updatedModules)=>{
        if (!updatedModules) {
            return null;
        }
        if (typeof onBeforeHotUpdate === "function") {
            onBeforeHotUpdate(updatedModules);
        }
        // @ts-expect-error TODO: module.hot exists but type needs to be added. Can't use `as any` here as webpack parses for `module.hot` calls.
        return module.hot.apply();
    }).then((updatedModules)=>{
        handleApplyUpdates(null, updatedModules);
    }, (err)=>{
        handleApplyUpdates(err, null);
    });
}
function performFullReload(err) {
    const stackTrace = err && (err.stack && err.stack.split("\n").slice(0, 5).join("\n") || err.message || err + "");
    (0, _websocket.sendMessage)(JSON.stringify({
        event: "client-full-reload",
        stackTrace,
        hadRuntimeError: !!_runtimeerrorhandler.RuntimeErrorHandler.hadRuntimeError,
        dependencyChain: err ? err.dependencyChain : undefined
    }));
    window.location.reload();
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=hot-reloader-client.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/client/dev/hot-middleware-client.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _hotreloaderclient = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/client/components/react-dev-overlay/pages/hot-reloader-client.js [client] (ecmascript)"));
const _websocket = (()=>{
    const e = new Error("Cannot find module '../components/react-dev-overlay/pages/websocket'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
let reloading = false;
const _default = (mode)=>{
    const devClient = (0, _hotreloaderclient.default)(mode);
    devClient.subscribeToHmrEvent((obj)=>{
        if (reloading) return;
        // if we're on an error/404 page, we can't reliably tell if the newly added/removed page
        // matches the current path. In that case, assume any added/removed entries should trigger a reload of the current page
        const isOnErrorPage = window.next.router.pathname === "/404" || window.next.router.pathname === "/_error";
        switch(obj.action){
            case "reloadPage":
                {
                    (0, _websocket.sendMessage)(JSON.stringify({
                        event: "client-reload-page",
                        clientId: window.__nextDevClientId
                    }));
                    reloading = true;
                    return window.location.reload();
                }
            case "removedPage":
                {
                    const [page] = obj.data;
                    if (page === window.next.router.pathname || isOnErrorPage) {
                        (0, _websocket.sendMessage)(JSON.stringify({
                            event: "client-removed-page",
                            clientId: window.__nextDevClientId,
                            page
                        }));
                        return window.location.reload();
                    }
                    return;
                }
            case "addedPage":
                {
                    const [page] = obj.data;
                    if (page === window.next.router.pathname && typeof window.next.router.components[page] === "undefined" || isOnErrorPage) {
                        (0, _websocket.sendMessage)(JSON.stringify({
                            event: "client-added-page",
                            clientId: window.__nextDevClientId,
                            page
                        }));
                        return window.location.reload();
                    }
                    return;
                }
            case "serverError":
            case "devPagesManifestUpdate":
            case "building":
            case "finishBuilding":
                {
                    return;
                }
            default:
                {
                    throw new Error("Unexpected action " + obj.action);
                }
        }
    });
    return devClient;
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=hot-middleware-client.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/client/dev/on-demand-entries-client.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _router = /*#__PURE__*/ _interop_require_default._((()=>{
    const e = new Error("Cannot find module '../router'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})());
const _websocket = (()=>{
    const e = new Error("Cannot find module '../components/react-dev-overlay/pages/websocket'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _default = async (page)=>{
    if (page) {
        // in AMP the router isn't initialized on the client and
        // client-transitions don't occur so ping initial page
        setInterval(()=>{
            (0, _websocket.sendMessage)(JSON.stringify({
                event: "ping",
                page
            }));
        }, 2500);
    } else {
        _router.default.ready(()=>{
            setInterval(()=>{
                // when notFound: true is returned we should use the notFoundPage
                // as the Router.pathname will point to the 404 page but we want
                // to ping the source page that returned notFound: true instead
                const notFoundSrcPage = self.__NEXT_DATA__.notFoundSrcPage;
                const pathname = (_router.default.pathname === "/404" || _router.default.pathname === "/_error") && notFoundSrcPage ? notFoundSrcPage : _router.default.pathname;
                (0, _websocket.sendMessage)(JSON.stringify({
                    event: "ping",
                    page: pathname
                }));
            }, 2500);
        });
    }
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=on-demand-entries-client.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/client/dev/dev-build-watcher.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint-disable @typescript-eslint/no-use-before-define */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return initializeBuildWatcher;
    }
});
const _hotreloadertypes = __turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/server/dev/hot-reloader-types.js [client] (ecmascript)");
const _websocket = (()=>{
    const e = new Error("Cannot find module '../components/react-dev-overlay/pages/websocket'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
function initializeBuildWatcher(toggleCallback, position) {
    if (position === void 0) position = "bottom-right";
    const shadowHost = document.createElement("div");
    const [verticalProperty, horizontalProperty] = position.split("-", 2);
    shadowHost.id = "__next-build-watcher";
    // Make sure container is fixed and on a high zIndex so it shows
    shadowHost.style.position = "fixed";
    // Ensure container's position to be top or bottom (default)
    shadowHost.style[verticalProperty] = "10px";
    // Ensure container's position to be left or right (default)
    shadowHost.style[horizontalProperty] = "20px";
    shadowHost.style.width = "0";
    shadowHost.style.height = "0";
    shadowHost.style.zIndex = "99999";
    document.body.appendChild(shadowHost);
    let shadowRoot;
    let prefix = "";
    if (shadowHost.attachShadow) {
        shadowRoot = shadowHost.attachShadow({
            mode: "open"
        });
    } else {
        // If attachShadow is undefined then the browser does not support
        // the Shadow DOM, we need to prefix all the names so there
        // will be no conflicts
        shadowRoot = shadowHost;
        prefix = "__next-build-watcher-";
    }
    // Container
    const container = createContainer(prefix);
    shadowRoot.appendChild(container);
    // CSS
    const css = createCss(prefix, {
        horizontalProperty,
        verticalProperty
    });
    shadowRoot.appendChild(css);
    // State
    let isVisible = false;
    let isBuilding = false;
    let timeoutId = null;
    // Handle events
    (0, _websocket.addMessageListener)((obj)=>{
        try {
            handleMessage(obj);
        } catch (e) {}
    });
    function show() {
        timeoutId && clearTimeout(timeoutId);
        isVisible = true;
        isBuilding = true;
        updateContainer();
    }
    function hide() {
        isBuilding = false;
        // Wait for the fade out transition to complete
        timeoutId = setTimeout(()=>{
            isVisible = false;
            updateContainer();
        }, 100);
        updateContainer();
    }
    function handleMessage(obj) {
        if (!("action" in obj)) {
            return;
        }
        // eslint-disable-next-line default-case
        switch(obj.action){
            case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.BUILDING:
                show();
                break;
            case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.BUILT:
            case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.SYNC:
                hide();
                break;
        }
    }
    toggleCallback({
        show,
        hide
    });
    function updateContainer() {
        if (isBuilding) {
            container.classList.add("" + prefix + "building");
        } else {
            container.classList.remove("" + prefix + "building");
        }
        if (isVisible) {
            container.classList.add("" + prefix + "visible");
        } else {
            container.classList.remove("" + prefix + "visible");
        }
    }
}
function createContainer(prefix) {
    const container = document.createElement("div");
    container.id = "" + prefix + "container";
    container.innerHTML = '\n    <div id="' + prefix + 'icon-wrapper">\n      <svg viewBox="0 0 226 200">\n        <defs>\n          <linearGradient\n            x1="114.720775%"\n            y1="181.283245%"\n            x2="39.5399306%"\n            y2="100%"\n            id="' + prefix + 'linear-gradient"\n          >\n            <stop stop-color="#000000" offset="0%" />\n            <stop stop-color="#FFFFFF" offset="100%" />\n          </linearGradient>\n        </defs>\n        <g id="' + prefix + 'icon-group" fill="none" stroke="url(#' + prefix + 'linear-gradient)" stroke-width="18">\n          <path d="M113,5.08219117 L4.28393801,197.5 L221.716062,197.5 L113,5.08219117 Z" />\n        </g>\n      </svg>\n    </div>\n  ';
    return container;
}
function createCss(prefix, param) {
    let { horizontalProperty, verticalProperty } = param;
    const css = document.createElement("style");
    css.textContent = "\n    #" + prefix + "container {\n      position: absolute;\n      " + verticalProperty + ": 10px;\n      " + horizontalProperty + ": 30px;\n\n      border-radius: 3px;\n      background: #000;\n      color: #fff;\n      font: initial;\n      cursor: initial;\n      letter-spacing: initial;\n      text-shadow: initial;\n      text-transform: initial;\n      visibility: initial;\n\n      padding: 7px 10px 8px 10px;\n      align-items: center;\n      box-shadow: 0 11px 40px 0 rgba(0, 0, 0, 0.25), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n\n      display: none;\n      opacity: 0;\n      transition: opacity 0.1s ease, " + verticalProperty + " 0.1s ease;\n      animation: " + prefix + "fade-in 0.1s ease-in-out;\n    }\n\n    #" + prefix + "container." + prefix + "visible {\n      display: flex;\n    }\n\n    #" + prefix + "container." + prefix + "building {\n      " + verticalProperty + ": 20px;\n      opacity: 1;\n    }\n\n    #" + prefix + "icon-wrapper {\n      width: 16px;\n      height: 16px;\n    }\n\n    #" + prefix + "icon-wrapper > svg {\n      width: 100%;\n      height: 100%;\n    }\n\n    #" + prefix + "icon-group {\n      animation: " + prefix + "strokedash 1s ease-in-out both infinite;\n    }\n\n    @keyframes " + prefix + "fade-in {\n      from {\n        " + verticalProperty + ": 10px;\n        opacity: 0;\n      }\n      to {\n        " + verticalProperty + ": 20px;\n        opacity: 1;\n      }\n    }\n\n    @keyframes " + prefix + "strokedash {\n      0% {\n        stroke-dasharray: 0 226;\n      }\n      80%,\n      100% {\n        stroke-dasharray: 659 226;\n      }\n    }\n  ";
    return css;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=dev-build-watcher.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/client/dev/fouc.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This wrapper function is used to safely select the best available function
// to schedule removal of the no-FOUC styles workaround. requestAnimationFrame
// is the ideal choice, but when used in iframes, there are no guarantees that
// the callback will actually be called, which could stall the promise returned
// from displayContent.
//
// See: https://www.vector-logic.com/blog/posts/on-request-animation-frame-and-embedded-iframes
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "displayContent", {
    enumerable: true,
    get: function() {
        return displayContent;
    }
});
const safeCallbackQueue = (callback)=>{
    if (window.requestAnimationFrame && window.self === window.top) {
        window.requestAnimationFrame(callback);
    } else {
        window.setTimeout(callback);
    }
};
function displayContent() {
    return new Promise((resolve)=>{
        safeCallbackQueue(function() {
            for(var x = document.querySelectorAll("[data-next-hide-fouc]"), i = x.length; i--;){
                x[i].parentNode.removeChild(x[i]);
            }
            resolve();
        });
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=fouc.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/client/page-bootstrap.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Transferências/elos-creative/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "pageBootrap", {
    enumerable: true,
    get: function() {
        return pageBootrap;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _ = __turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/client/index.js [client] (ecmascript)");
const _ondemandentriesclient = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/client/dev/on-demand-entries-client.js [client] (ecmascript)"));
const _devbuildwatcher = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/client/dev/dev-build-watcher.js [client] (ecmascript)"));
const _fouc = __turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/client/dev/fouc.js [client] (ecmascript)");
const _websocket = (()=>{
    const e = new Error("Cannot find module './components/react-dev-overlay/pages/websocket'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _querystring = __turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/shared/lib/router/utils/querystring.js [client] (ecmascript)");
const _hotreloadertypes = __turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/server/dev/hot-reloader-types.js [client] (ecmascript)");
const _runtimeerrorhandler = (()=>{
    const e = new Error("Cannot find module './components/react-dev-overlay/internal/helpers/runtime-error-handler'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _shared = (()=>{
    const e = new Error("Cannot find module './components/react-dev-overlay/shared'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _hotreloaderclient = __turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/client/components/react-dev-overlay/pages/hot-reloader-client.js [client] (ecmascript)");
function pageBootrap(assetPrefix) {
    (0, _websocket.connectHMR)({
        assetPrefix,
        path: "/_next/webpack-hmr"
    });
    return (0, _.hydrate)({
        beforeRender: _fouc.displayContent
    }).then(()=>{
        (0, _ondemandentriesclient.default)();
        let buildIndicatorHandler;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.__NEXT_BUILD_INDICATOR) {
            (0, _devbuildwatcher.default)((handler)=>{
                buildIndicatorHandler = handler;
            }, __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.__NEXT_BUILD_INDICATOR_POSITION);
        }
        let reloading = false;
        (0, _websocket.addMessageListener)((payload)=>{
            if (reloading) return;
            if ("action" in payload) {
                switch(payload.action){
                    case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.SERVER_ERROR:
                        {
                            const { stack, message } = JSON.parse(payload.errorJSON);
                            const error = new Error(message);
                            error.stack = stack;
                            throw error;
                        }
                    case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.RELOAD_PAGE:
                        {
                            reloading = true;
                            window.location.reload();
                            break;
                        }
                    case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.DEV_PAGES_MANIFEST_UPDATE:
                        {
                            fetch("" + assetPrefix + "/_next/static/development/_devPagesManifest.json").then((res)=>res.json()).then((manifest)=>{
                                window.__DEV_PAGES_MANIFEST = manifest;
                            }).catch((err)=>{
                                console.log("Failed to fetch devPagesManifest", err);
                            });
                            break;
                        }
                    default:
                        break;
                }
            } else if ("event" in payload) {
                switch(payload.event){
                    case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.MIDDLEWARE_CHANGES:
                        {
                            return window.location.reload();
                        }
                    case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.CLIENT_CHANGES:
                        {
                            // This is used in `../server/dev/turbopack-utils.ts`.
                            const isOnErrorPage = window.next.router.pathname === "/_error";
                            // On the error page we want to reload the page when a page was changed
                            if (isOnErrorPage) {
                                if (_runtimeerrorhandler.RuntimeErrorHandler.hadRuntimeError) {
                                    console.warn(_shared.REACT_REFRESH_FULL_RELOAD_FROM_ERROR);
                                }
                                reloading = true;
                                (0, _hotreloaderclient.performFullReload)(null);
                            }
                            break;
                        }
                    case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.SERVER_ONLY_CHANGES:
                        {
                            if (_runtimeerrorhandler.RuntimeErrorHandler.hadRuntimeError) {
                                console.warn(_shared.REACT_REFRESH_FULL_RELOAD_FROM_ERROR);
                                (0, _hotreloaderclient.performFullReload)(null);
                            }
                            const { pages } = payload;
                            // Make sure to reload when the dev-overlay is showing for an
                            // API route
                            // TODO: Fix `__NEXT_PAGE` type
                            if (pages.includes(_.router.query.__NEXT_PAGE)) {
                                return window.location.reload();
                            }
                            if (!_.router.clc && pages.includes(_.router.pathname)) {
                                console.log("Refreshing page data due to server-side change");
                                buildIndicatorHandler == null ? void 0 : buildIndicatorHandler.show();
                                const clearIndicator = ()=>buildIndicatorHandler == null ? void 0 : buildIndicatorHandler.hide();
                                _.router.replace(_.router.pathname + "?" + String((0, _querystring.assign)((0, _querystring.urlQueryToSearchParams)(_.router.query), new URLSearchParams(location.search))), _.router.asPath, {
                                    scroll: false
                                }).catch(()=>{
                                    // trigger hard reload when failing to refresh data
                                    // to show error overlay properly
                                    location.reload();
                                }).finally(clearIndicator);
                            }
                            break;
                        }
                    default:
                        break;
                }
            }
        });
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=page-bootstrap.js.map
}),
"[project]/Transferências/elos-creative/node_modules/next/dist/client/next-dev-turbopack.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// TODO: Remove use of `any` type.
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _ = __turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/client/index.js [client] (ecmascript)");
const _hotmiddlewareclient = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/client/dev/hot-middleware-client.js [client] (ecmascript)"));
(()=>{
    const e = new Error("Cannot find module './setup-hydration-warning'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _pagebootstrap = __turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/next/dist/client/page-bootstrap.js [client] (ecmascript)");
const _hmrclientts = (()=>{
    const e = new Error("Cannot find module '@vercel/turbopack-ecmascript-runtime/dev/client/hmr-client.ts'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
window.next = {
    version: "" + _.version + "-turbo",
    // router is initialized later so it has to be live-binded
    get router () {
        return _.router;
    },
    emitter: _.emitter
};
self.__next_set_public_path__ = ()=>{};
self.__webpack_hash__ = "";
const devClient = (0, _hotmiddlewareclient.default)("turbopack");
(0, _.initialize)({
    devClient
}).then((param)=>{
    let { assetPrefix } = param;
    self.__turbopack_load_page_chunks__ = (page, chunksData)=>{
        const chunkPromises = chunksData.map(/*TURBOPACK member replacement*/ __turbopack_context__.l);
        Promise.all(chunkPromises).catch((err)=>console.error("failed to load chunks for page " + page, err));
    };
    (0, _hmrclientts.connect)({
        addMessageListener (cb) {
            devClient.addTurbopackMessageListener(cb);
        },
        sendMessage: devClient.sendTurbopackMessage,
        onUpdateError: devClient.handleUpdateError
    });
    return (0, _pagebootstrap.pageBootrap)(assetPrefix);
}).catch((err)=>{
    console.error("Error was not caught", err);
});
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=next-dev-turbopack.js.map
}),
"[project]/node_modules/next/dist/shared/lib/utils.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Transfer$ea$ncias$2f$elos$2d$creative$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Transferências/elos-creative/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DecodeError: null,
    MiddlewareNotFoundError: null,
    MissingStaticPage: null,
    NormalizeError: null,
    PageNotFoundError: null,
    SP: null,
    ST: null,
    WEB_VITALS: null,
    execOnce: null,
    getDisplayName: null,
    getLocationOrigin: null,
    getURL: null,
    isAbsoluteUrl: null,
    isResSent: null,
    loadGetInitialProps: null,
    normalizeRepeatedSlashes: null,
    stringifyError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DecodeError: function() {
        return DecodeError;
    },
    MiddlewareNotFoundError: function() {
        return MiddlewareNotFoundError;
    },
    MissingStaticPage: function() {
        return MissingStaticPage;
    },
    NormalizeError: function() {
        return NormalizeError;
    },
    PageNotFoundError: function() {
        return PageNotFoundError;
    },
    SP: function() {
        return SP;
    },
    ST: function() {
        return ST;
    },
    WEB_VITALS: function() {
        return WEB_VITALS;
    },
    execOnce: function() {
        return execOnce;
    },
    getDisplayName: function() {
        return getDisplayName;
    },
    getLocationOrigin: function() {
        return getLocationOrigin;
    },
    getURL: function() {
        return getURL;
    },
    isAbsoluteUrl: function() {
        return isAbsoluteUrl;
    },
    isResSent: function() {
        return isResSent;
    },
    loadGetInitialProps: function() {
        return loadGetInitialProps;
    },
    normalizeRepeatedSlashes: function() {
        return normalizeRepeatedSlashes;
    },
    stringifyError: function() {
        return stringifyError;
    }
});
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
"[project]/node_modules/next/dist/pages/_app.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return App;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Transferências/elos-creative/node_modules/react/index.js [client] (ecmascript)"));
const _utils = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils.js [client] (ecmascript)");
/**
 * `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
 * This allows for keeping state between navigation, custom error handling, injecting additional data.
 */ async function appGetInitialProps({ Component, ctx }) {
    const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
    return {
        pageProps
    };
}
class App extends _react.default.Component {
    static{
        this.origGetInitialProps = appGetInitialProps;
    }
    static{
        this.getInitialProps = appGetInitialProps;
    }
    render() {
        const { Component, pageProps } = this.props;
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(Component, {
            ...pageProps
        });
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=_app.js.map
}),
"[project]/node_modules/next/app.js [client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/pages/_app.js [client] (ecmascript)");
}),
"[next]/entry/page-loader.ts { PAGE => \"[project]/node_modules/next/app.js [client] (ecmascript)\" } [client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const PAGE_PATH = "/_app";
(window.__NEXT_P = window.__NEXT_P || []).push([
    PAGE_PATH,
    ()=>{
        return __turbopack_context__.r("[project]/node_modules/next/app.js [client] (ecmascript)");
    }
]);
// @ts-expect-error module.hot exists
if (module.hot) {
    // @ts-expect-error module.hot exists
    module.hot.dispose(function() {
        window.__NEXT_P.push([
            PAGE_PATH
        ]);
    });
}
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__a5fe573e._.js.map
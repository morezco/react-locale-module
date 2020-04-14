import { useState, useCallback } from "react";
export function useRerender() {
    var _a = useState(Math.random()), setForceRender = _a[1];
    var refresh = useCallback(function () { return setForceRender(Math.random()); }, []);
    return refresh;
}
//# sourceMappingURL=useRerender.js.map
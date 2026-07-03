import { m as cn } from "../ssr.js";
import { Loader2Icon } from "lucide-react";
import { jsx } from "react/jsx-runtime";
//#region resources/js/components/ui/spinner.tsx
function Spinner({ className, ...props }) {
	return /* @__PURE__ */ jsx(Loader2Icon, {
		role: "status",
		"aria-label": "Loading",
		className: cn("size-4 animate-spin", className),
		...props
	});
}
//#endregion
export { Spinner as t };

//# sourceMappingURL=spinner-Dk8sPI44.js.map
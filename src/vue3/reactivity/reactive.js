import { isObject } from '../shared/utils';
import { mutableHandle } from './mutableHandle';
function reactive(target) {
	return createReactiveObject(target, mutableHandle);
}
function createReactiveObject(target, baseHandler) {
	if (!isObject(target)) {
		return target;
	}

	const observer = new Proxy(target, baseHandler);
	return observer;
}
// const proxy = new Proxy(target, {
// 	get(target, key, receiver) {},
// 	set(target, key, value, receiver) {},
// });
export { reactive };

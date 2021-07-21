import { isObject, haseOwnProperty, isEqual } from '../shared/utils';
import { reactive } from './reactive';

/*

*/
const get = createGetter();
const set = createSetter();
function createGetter() {
	return function get(target, key, receiver) {
		const res = Reflect.get(target, key, receiver);
		if (isObject(res)) {
			// proxy只能代理一层，如{name:'sheldon'},无法代理{props:{age:25}}
			return reactive(res);
		}
		return res;
	};
}
function createSetter() {
	return function set(target, key, value, receiver) {
		const isKeyExist = haseOwnProperty(target, key);
		const oldValue = target[key];

		const res = Reflect.set(target, key, value, receiver);
		console.log(`res`, res);
		if (!isKeyExist) {
			console.log(`不存在？`, res);
		} else if (!isEqual(value, oldValue)) {
			console.log(`不等`);
		}
		return res;
	};
}

const mutableHandle = {
	get,
	set,
};
export { mutableHandle };

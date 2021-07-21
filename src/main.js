import { reactive } from './vue3/reactivity';
const state = reactive({
	name: 'sheldon',
	age: 25,
	info: {
		job: 'programmer',
		hobby: [
			{
				index: 1,
				name: 'coder',
			},
			{
				index: 2,
				name: 'traveler',
			},
		],
	},
	book: ['js', 'network', 'linux'],
});
state.age = 26;

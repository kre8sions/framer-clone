import { selector } from 'recoil';
import { canvasStore } from './atoms';

export const canvasStoreState = selector({
	key: 'canvasStoreState',
	get: ({get}) => {
		const totalCost = get(canvasStore).reduce((a, b) => a + b.price * b.qty, 0);
		const totalQty = get(canvasStore).reduce((a, b) => a + b.qty, 0);
		return {
			totalCost,
			totalQty
		}
	}
})

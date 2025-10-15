export class Runtime {
	private renderers: Renderer[];

	static registerRenderer(renderer: Renderer) {
		rendererQueue.push(renderer);
	}

	static unregisterRenderer(renderer: Renderer) {
		const index = renderers.indexOf(renderer, 0);
		if(index > -1) {
			renderers.splice(index, 1);
		}
	}

}

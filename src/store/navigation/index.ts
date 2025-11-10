import { create } from "zustand";

type State = {
	sidebar: {
		opened: boolean;
	};
};

type Actions = {
	open: () => void;
	close: () => void;
	toggle: () => void;
};

const useNavigationStore = create<State & Actions>((set) => ({
	sidebar: {
		opened: true,
	},

	open: () => {
		set({ sidebar: { opened: true } });
	},

	close: () => {
		set({ sidebar: { opened: false } });
	},

	toggle: () => {
		set((state) => ({ sidebar: { opened: !state.sidebar.opened } }));
	},
}));

export default useNavigationStore;

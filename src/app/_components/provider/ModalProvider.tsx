type Props = { children: React.ReactNode; id: string };
export default function ModalProvider({ children, id }: Props) {
  return (
    <dialog id={id} className="modal">
      <div className="modal-box max-w-[720px] p-4 sm:p-6">{children}</div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}

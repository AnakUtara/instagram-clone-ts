import ModalProvider from "@/app/_components/provider/ModalProvider";

type Props = {};
export default function ChangeAvatar({}: Props) {
  return (
    <ModalProvider id="change-avatar">
      <h3 className="text-black text-lg font-bold mb-3">Change Avatar</h3>
      <form>
        <input
          className="input input-bordered w-full mb-3"
          placeholder="Enter Image URL"
        />
        <button className="btn btn-primary btn-block text-white">Change</button>
      </form>
    </ModalProvider>
  );
}

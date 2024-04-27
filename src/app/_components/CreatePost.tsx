import { BiHash, BiImage } from "react-icons/bi";
import ModalProvider from "./provider/ModalProvider";

type Props = {};
export default function CreateModal({}: Props) {
  return (
    <ModalProvider id="create">
      <center>
        <h3 className="font-bold text-xl mb-5">Create new post</h3>
        <form className="w-full flex flex-col gap-8">
          <label className="form-control w-full" htmlFor="hashtags">
            <label className="input input-bordered flex items-center gap-2">
              <BiImage className="size-8" />
              <input
                name="hashtags"
                id="hashtags"
                placeholder="Insert image URL"
                className="grow"
              />
            </label>
            <div className="label">
              <span className="label-text-alt text-neutral-700">
                (Max.(200 characters))
              </span>
            </div>
          </label>
          <label className="form-control w-full" htmlFor="caption">
            <textarea
              className="textarea textarea-bordered h-32 overflow-y-auto"
              placeholder="Short description of your photo"
              id="caption"
              name="caption"
              // value={formik.values.username}
              // onChange={formik.handleChange}
            />
            <div className="label">
              <span className="label-text-alt text-neutral-700">
                (Max.(2000 characters))
              </span>
            </div>
          </label>
          <label className="form-control w-full" htmlFor="hashtags">
            <label className="input input-bordered flex items-center gap-2">
              <BiHash className="size-8" />
              <input
                name="hashtags"
                id="hashtags"
                placeholder="Insert some hashtags"
                className="grow"
              />
            </label>
            <div className="label">
              <span className="label-text-alt text-neutral-700">
                (Max.(20 tags))
              </span>
            </div>
          </label>
          <button className="btn btn-primary btn-lg btn-block text-white">
            Create Post
          </button>
        </form>
      </center>
    </ModalProvider>
  );
}

import Link from "next/link";
import { IoMdAdd } from "react-icons/io";
import style from "./skeletons.module.css";
import { ImImage } from "react-icons/im";

export function WelcomeSkeleton() {
  return (
    <div className="skeleton relative max-w-[1280px] h-[250px] sm:h-[350px] rounded-b-[3px]"></div>
  );
}

export function MediaSkeleton() {
  return (
    <div className="mt-[2rem] sm:mt-[3rem] max-w-[1000px] mx-auto">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(150px,1fr))] items-stretch gap-[2rem_1rem] sm:gap-[4rem_2rem]">
        <div className="skeleton relative min-h-[200px] sm:min-h-[250px] shadow-[0_2px_4px_rgba(0,0,0,0.2)] rounded-[var(--border-radius-1)]">
          <div className="group block h-full no-underline rounded-[var(--border-radius-1)]">
            <div className="relative flex items-center justify-center h-[175px] sm:h-[225px] rounded-tl-[var(--border-radius-1)] rounded-tr-[var(--border-radius-1)] ">
              <div className={style.color + " text-white"}>
                <ImImage />
              </div>
            </div>

            <div className="relative flex flex-col pt-6 pb-2 sm:pb-4 px-2 sm:px-4">
              <div
                className={
                  style.bgColor +
                  " absolute h-10 w-10 p-[0.15rem] rounded-[50%] border-2 border-solid border-white left-4 -top-5"
                }
              >
                <span
                  className={`absolute -translate-x-2/4 -translate-y-2/4 text-[0.7rem] font-medium text-white left-2/4 top-2/4`}
                >
                  NR
                </span>
              </div>

              <span
                className={
                  style.bgColor +
                  " font-semibold sm:font-bold text-[0.85rem] sm:text-[1rem] mb-1 rounded min-h-[20px]"
                }
              ></span>

              <span
                className={
                  style.bgColor +
                  " text-[0.75rem] sm:text-[0.85rem] text-[#555] sm:font-medium rounded min-h-[20px]"
                }
              ></span>
            </div>
          </div>

          <div
            className={
              style.bgColor +
              " absolute top-0 right-0 w-[35px] h-[35px] rounded-[3px]"
            }
          >
            <span className="absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 text-white text-[1.25rem]">
              ...
            </span>
          </div>
        </div>

        <div className="skeleton relative min-h-[200px] sm:min-h-[250px] shadow-[0_2px_4px_rgba(0,0,0,0.2)] rounded-[var(--border-radius-1)]">
          <div className="group block h-full no-underline rounded-[var(--border-radius-1)]">
            <div className="relative flex items-center justify-center h-[175px] sm:h-[225px] rounded-tl-[var(--border-radius-1)] rounded-tr-[var(--border-radius-1)] ">
              <div className={style.color + " text-white"}>
                <ImImage />
              </div>
            </div>

            <div className="relative flex flex-col pt-6 pb-2 sm:pb-4 px-2 sm:px-4">
              <div
                className={
                  style.bgColor +
                  " absolute h-10 w-10 p-[0.15rem] rounded-[50%] border-2 border-solid border-white left-4 -top-5"
                }
              >
                <span
                  className={`absolute -translate-x-2/4 -translate-y-2/4 text-[0.7rem] font-medium text-white left-2/4 top-2/4`}
                >
                  NR
                </span>
              </div>

              <span
                className={
                  style.bgColor +
                  " font-semibold sm:font-bold text-[0.85rem] sm:text-[1rem] mb-1 rounded min-h-[20px]"
                }
              ></span>

              <span
                className={
                  style.bgColor +
                  " text-[0.75rem] sm:text-[0.85rem] text-[#555] sm:font-medium rounded min-h-[20px]"
                }
              ></span>
            </div>
          </div>

          <div
            className={
              style.bgColor +
              " absolute top-0 right-0 w-[35px] h-[35px] rounded-[3px]"
            }
          >
            <span className="absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 text-white text-[1.25rem]">
              ...
            </span>
          </div>
        </div>

        <div className="skeleton relative min-h-[200px] sm:min-h-[250px] shadow-[0_2px_4px_rgba(0,0,0,0.2)] rounded-[var(--border-radius-1)]">
          <div className="group block h-full no-underline rounded-[var(--border-radius-1)]">
            <div className="relative flex items-center justify-center h-[175px] sm:h-[225px] rounded-tl-[var(--border-radius-1)] rounded-tr-[var(--border-radius-1)] ">
              <div className={style.color + " text-white"}>
                <ImImage />
              </div>
            </div>

            <div className="relative flex flex-col pt-6 pb-2 sm:pb-4 px-2 sm:px-4">
              <div
                className={
                  style.bgColor +
                  " absolute h-10 w-10 p-[0.15rem] rounded-[50%] border-2 border-solid border-white left-4 -top-5"
                }
              >
                <span
                  className={`absolute -translate-x-2/4 -translate-y-2/4 text-[0.7rem] font-medium text-white left-2/4 top-2/4`}
                >
                  NR
                </span>
              </div>

              <span
                className={
                  style.bgColor +
                  " font-semibold sm:font-bold text-[0.85rem] sm:text-[1rem] mb-1 rounded min-h-[20px]"
                }
              ></span>

              <span
                className={
                  style.bgColor +
                  " text-[0.75rem] sm:text-[0.85rem] text-[#555] sm:font-medium rounded min-h-[20px]"
                }
              ></span>
            </div>
          </div>

          <div
            className={
              style.bgColor +
              " absolute top-0 right-0 w-[35px] h-[35px] rounded-[3px]"
            }
          >
            <span className="absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 text-white text-[1.25rem]">
              ...
            </span>
          </div>
        </div>

        <div className="skeleton relative min-h-[200px] sm:min-h-[250px] shadow-[0_2px_4px_rgba(0,0,0,0.2)] rounded-[var(--border-radius-1)]">
          <div className="group block h-full no-underline rounded-[var(--border-radius-1)]">
            <div className="relative flex items-center justify-center h-[175px] sm:h-[225px] rounded-tl-[var(--border-radius-1)] rounded-tr-[var(--border-radius-1)] ">
              <div className={style.color + " text-white"}>
                <ImImage />
              </div>
            </div>

            <div className="relative flex flex-col pt-6 pb-2 sm:pb-4 px-2 sm:px-4">
              <div
                className={
                  style.bgColor +
                  " absolute h-10 w-10 p-[0.15rem] rounded-[50%] border-2 border-solid border-white left-4 -top-5"
                }
              >
                <span
                  className={`absolute -translate-x-2/4 -translate-y-2/4 text-[0.7rem] font-medium text-white left-2/4 top-2/4`}
                >
                  NR
                </span>
              </div>

              <span
                className={
                  style.bgColor +
                  " font-semibold sm:font-bold text-[0.85rem] sm:text-[1rem] mb-1 rounded min-h-[20px]"
                }
              ></span>

              <span
                className={
                  style.bgColor +
                  " text-[0.75rem] sm:text-[0.85rem] text-[#555] sm:font-medium rounded min-h-[20px]"
                }
              ></span>
            </div>
          </div>

          <div
            className={
              style.bgColor +
              " absolute top-0 right-0 w-[35px] h-[35px] rounded-[3px]"
            }
          >
            <span className="absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 text-white text-[1.25rem]">
              ...
            </span>
          </div>
        </div>

        <div className="skeleton relative min-h-[200px] sm:min-h-[250px] shadow-[0_2px_4px_rgba(0,0,0,0.2)] rounded-[var(--border-radius-1)]">
          <div className="group block h-full no-underline rounded-[var(--border-radius-1)]">
            <div className="relative flex items-center justify-center h-[175px] sm:h-[225px] rounded-tl-[var(--border-radius-1)] rounded-tr-[var(--border-radius-1)] ">
              <div className={style.color + " text-white"}>
                <ImImage />
              </div>
            </div>

            <div className="relative flex flex-col pt-6 pb-2 sm:pb-4 px-2 sm:px-4">
              <div
                className={
                  style.bgColor +
                  " absolute h-10 w-10 p-[0.15rem] rounded-[50%] border-2 border-solid border-white left-4 -top-5"
                }
              >
                <span
                  className={`absolute -translate-x-2/4 -translate-y-2/4 text-[0.7rem] font-medium text-white left-2/4 top-2/4`}
                >
                  NR
                </span>
              </div>

              <span
                className={
                  style.bgColor +
                  " font-semibold sm:font-bold text-[0.85rem] sm:text-[1rem] mb-1 rounded min-h-[20px]"
                }
              ></span>

              <span
                className={
                  style.bgColor +
                  " text-[0.75rem] sm:text-[0.85rem] text-[#555] sm:font-medium rounded min-h-[20px]"
                }
              ></span>
            </div>
          </div>

          <div
            className={
              style.bgColor +
              " absolute top-0 right-0 w-[35px] h-[35px] rounded-[3px]"
            }
          >
            <span className="absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 text-white text-[1.25rem]">
              ...
            </span>
          </div>
        </div>

        <div className="skeleton relative min-h-[200px] sm:min-h-[250px] shadow-[0_2px_4px_rgba(0,0,0,0.2)] rounded-[var(--border-radius-1)]">
          <div className="group block h-full no-underline rounded-[var(--border-radius-1)]">
            <div className="relative flex items-center justify-center h-[175px] sm:h-[225px] rounded-tl-[var(--border-radius-1)] rounded-tr-[var(--border-radius-1)] ">
              <div className={style.color + " text-white"}>
                <ImImage />
              </div>
            </div>

            <div className="relative flex flex-col pt-6 pb-2 sm:pb-4 px-2 sm:px-4">
              <div
                className={
                  style.bgColor +
                  " absolute h-10 w-10 p-[0.15rem] rounded-[50%] border-2 border-solid border-white left-4 -top-5"
                }
              >
                <span
                  className={`absolute -translate-x-2/4 -translate-y-2/4 text-[0.7rem] font-medium text-white left-2/4 top-2/4`}
                >
                  NR
                </span>
              </div>

              <span
                className={
                  style.bgColor +
                  " font-semibold sm:font-bold text-[0.85rem] sm:text-[1rem] mb-1 rounded min-h-[20px]"
                }
              ></span>

              <span
                className={
                  style.bgColor +
                  " text-[0.75rem] sm:text-[0.85rem] text-[#555] sm:font-medium rounded min-h-[20px]"
                }
              ></span>
            </div>
          </div>

          <div
            className={
              style.bgColor +
              " absolute top-0 right-0 w-[35px] h-[35px] rounded-[3px]"
            }
          >
            <span className="absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 text-white text-[1.25rem]">
              ...
            </span>
          </div>
        </div>

        <div className="skeleton relative min-h-[200px] sm:min-h-[250px] shadow-[0_2px_4px_rgba(0,0,0,0.2)] rounded-[var(--border-radius-1)]">
          <div className="group block h-full no-underline rounded-[var(--border-radius-1)]">
            <div className="relative flex items-center justify-center h-[175px] sm:h-[225px] rounded-tl-[var(--border-radius-1)] rounded-tr-[var(--border-radius-1)] ">
              <div className={style.color + " text-white"}>
                <ImImage />
              </div>
            </div>

            <div className="relative flex flex-col pt-6 pb-2 sm:pb-4 px-2 sm:px-4">
              <div
                className={
                  style.bgColor +
                  " absolute h-10 w-10 p-[0.15rem] rounded-[50%] border-2 border-solid border-white left-4 -top-5"
                }
              >
                <span
                  className={`absolute -translate-x-2/4 -translate-y-2/4 text-[0.7rem] font-medium text-white left-2/4 top-2/4`}
                >
                  NR
                </span>
              </div>

              <span
                className={
                  style.bgColor +
                  " font-semibold sm:font-bold text-[0.85rem] sm:text-[1rem] mb-1 rounded min-h-[20px]"
                }
              ></span>

              <span
                className={
                  style.bgColor +
                  " text-[0.75rem] sm:text-[0.85rem] text-[#555] sm:font-medium rounded min-h-[20px]"
                }
              ></span>
            </div>
          </div>

          <div
            className={
              style.bgColor +
              " absolute top-0 right-0 w-[35px] h-[35px] rounded-[3px]"
            }
          >
            <span className="absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 text-white text-[1.25rem]">
              ...
            </span>
          </div>
        </div>

        <div className="skeleton relative min-h-[200px] sm:min-h-[250px] shadow-[0_2px_4px_rgba(0,0,0,0.2)] rounded-[var(--border-radius-1)]">
          <div className="group block h-full no-underline rounded-[var(--border-radius-1)]">
            <div className="relative flex items-center justify-center h-[175px] sm:h-[225px] rounded-tl-[var(--border-radius-1)] rounded-tr-[var(--border-radius-1)] ">
              <div className={style.color + " text-white"}>
                <ImImage />
              </div>
            </div>

            <div className="relative flex flex-col pt-6 pb-2 sm:pb-4 px-2 sm:px-4">
              <div
                className={
                  style.bgColor +
                  " absolute h-10 w-10 p-[0.15rem] rounded-[50%] border-2 border-solid border-white left-4 -top-5"
                }
              >
                <span
                  className={`absolute -translate-x-2/4 -translate-y-2/4 text-[0.7rem] font-medium text-white left-2/4 top-2/4`}
                >
                  NR
                </span>
              </div>

              <span
                className={
                  style.bgColor +
                  " font-semibold sm:font-bold text-[0.85rem] sm:text-[1rem] mb-1 rounded min-h-[20px]"
                }
              ></span>

              <span
                className={
                  style.bgColor +
                  " text-[0.75rem] sm:text-[0.85rem] text-[#555] sm:font-medium rounded min-h-[20px]"
                }
              ></span>
            </div>
          </div>

          <div
            className={
              style.bgColor +
              " absolute top-0 right-0 w-[35px] h-[35px] rounded-[3px]"
            }
          >
            <span className="absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 text-white text-[1.25rem]">
              ...
            </span>
          </div>
        </div>

        <div className="skeleton relative min-h-[200px] sm:min-h-[250px] shadow-[0_2px_4px_rgba(0,0,0,0.2)] rounded-[var(--border-radius-1)]">
          <div className="group block h-full no-underline rounded-[var(--border-radius-1)]">
            <div className="relative flex items-center justify-center h-[175px] sm:h-[225px] rounded-tl-[var(--border-radius-1)] rounded-tr-[var(--border-radius-1)] ">
              <div className={style.color + " text-white"}>
                <ImImage />
              </div>
            </div>

            <div className="relative flex flex-col pt-6 pb-2 sm:pb-4 px-2 sm:px-4">
              <div
                className={
                  style.bgColor +
                  " absolute h-10 w-10 p-[0.15rem] rounded-[50%] border-2 border-solid border-white left-4 -top-5"
                }
              >
                <span
                  className={`absolute -translate-x-2/4 -translate-y-2/4 text-[0.7rem] font-medium text-white left-2/4 top-2/4`}
                >
                  NR
                </span>
              </div>

              <span
                className={
                  style.bgColor +
                  " font-semibold sm:font-bold text-[0.85rem] sm:text-[1rem] mb-1 rounded min-h-[20px]"
                }
              ></span>

              <span
                className={
                  style.bgColor +
                  " text-[0.75rem] sm:text-[0.85rem] text-[#555] sm:font-medium rounded min-h-[20px]"
                }
              ></span>
            </div>
          </div>

          <div
            className={
              style.bgColor +
              " absolute top-0 right-0 w-[35px] h-[35px] rounded-[3px]"
            }
          >
            <span className="absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 text-white text-[1.25rem]">
              ...
            </span>
          </div>
        </div>

        <div className="skeleton relative min-h-[200px] sm:min-h-[250px] shadow-[0_2px_4px_rgba(0,0,0,0.2)] rounded-[var(--border-radius-1)]">
          <div className="group block h-full no-underline rounded-[var(--border-radius-1)]">
            <div className="relative flex items-center justify-center h-[175px] sm:h-[225px] rounded-tl-[var(--border-radius-1)] rounded-tr-[var(--border-radius-1)] ">
              <div className={style.color + " text-white"}>
                <ImImage />
              </div>
            </div>

            <div className="relative flex flex-col pt-6 pb-2 sm:pb-4 px-2 sm:px-4">
              <div
                className={
                  style.bgColor +
                  " absolute h-10 w-10 p-[0.15rem] rounded-[50%] border-2 border-solid border-white left-4 -top-5"
                }
              >
                <span
                  className={`absolute -translate-x-2/4 -translate-y-2/4 text-[0.7rem] font-medium text-white left-2/4 top-2/4`}
                >
                  NR
                </span>
              </div>

              <span
                className={
                  style.bgColor +
                  " font-semibold sm:font-bold text-[0.85rem] sm:text-[1rem] mb-1 rounded min-h-[20px]"
                }
              ></span>

              <span
                className={
                  style.bgColor +
                  " text-[0.75rem] sm:text-[0.85rem] text-[#555] sm:font-medium rounded min-h-[20px]"
                }
              ></span>
            </div>
          </div>

          <div
            className={
              style.bgColor +
              " absolute top-0 right-0 w-[35px] h-[35px] rounded-[3px]"
            }
          >
            <span className="absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 text-white text-[1.25rem]">
              ...
            </span>
          </div>
        </div>

        <div className="skeleton relative min-h-[200px] sm:min-h-[250px] shadow-[0_2px_4px_rgba(0,0,0,0.2)] rounded-[var(--border-radius-1)]">
          <div className="group block h-full no-underline rounded-[var(--border-radius-1)]">
            <div className="relative flex items-center justify-center h-[175px] sm:h-[225px] rounded-tl-[var(--border-radius-1)] rounded-tr-[var(--border-radius-1)] ">
              <div className={style.color + " text-white"}>
                <ImImage />
              </div>
            </div>

            <div className="relative flex flex-col pt-6 pb-2 sm:pb-4 px-2 sm:px-4">
              <div
                className={
                  style.bgColor +
                  " absolute h-10 w-10 p-[0.15rem] rounded-[50%] border-2 border-solid border-white left-4 -top-5"
                }
              >
                <span
                  className={`absolute -translate-x-2/4 -translate-y-2/4 text-[0.7rem] font-medium text-white left-2/4 top-2/4`}
                >
                  NR
                </span>
              </div>

              <span
                className={
                  style.bgColor +
                  " font-semibold sm:font-bold text-[0.85rem] sm:text-[1rem] mb-1 rounded min-h-[20px]"
                }
              ></span>

              <span
                className={
                  style.bgColor +
                  " text-[0.75rem] sm:text-[0.85rem] text-[#555] sm:font-medium rounded min-h-[20px]"
                }
              ></span>
            </div>
          </div>

          <div
            className={
              style.bgColor +
              " absolute top-0 right-0 w-[35px] h-[35px] rounded-[3px]"
            }
          >
            <span className="absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 text-white text-[1.25rem]">
              ...
            </span>
          </div>
        </div>

        <div className="skeleton relative min-h-[200px] sm:min-h-[250px] shadow-[0_2px_4px_rgba(0,0,0,0.2)] rounded-[var(--border-radius-1)]">
          <div className="group block h-full no-underline rounded-[var(--border-radius-1)]">
            <div className="relative flex items-center justify-center h-[175px] sm:h-[225px] rounded-tl-[var(--border-radius-1)] rounded-tr-[var(--border-radius-1)] ">
              <div className={style.color + " text-white"}>
                <ImImage />
              </div>
            </div>

            <div className="relative flex flex-col pt-6 pb-2 sm:pb-4 px-2 sm:px-4">
              <div
                className={
                  style.bgColor +
                  " absolute h-10 w-10 p-[0.15rem] rounded-[50%] border-2 border-solid border-white left-4 -top-5"
                }
              >
                <span
                  className={`absolute -translate-x-2/4 -translate-y-2/4 text-[0.7rem] font-medium text-white left-2/4 top-2/4`}
                >
                  NR
                </span>
              </div>

              <span
                className={
                  style.bgColor +
                  " font-semibold sm:font-bold text-[0.85rem] sm:text-[1rem] mb-1 rounded min-h-[20px]"
                }
              ></span>

              <span
                className={
                  style.bgColor +
                  " text-[0.75rem] sm:text-[0.85rem] text-[#555] sm:font-medium rounded min-h-[20px]"
                }
              ></span>
            </div>
          </div>

          <div
            className={
              style.bgColor +
              " absolute top-0 right-0 w-[35px] h-[35px] rounded-[3px]"
            }
          >
            <span className="absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 text-white text-[1.25rem]">
              ...
            </span>
          </div>
        </div>

        <div className="skeleton relative min-h-[200px] sm:min-h-[250px] shadow-[0_2px_4px_rgba(0,0,0,0.2)] rounded-[var(--border-radius-1)]">
          <div className="group block h-full no-underline rounded-[var(--border-radius-1)]">
            <div className="relative flex items-center justify-center h-[175px] sm:h-[225px] rounded-tl-[var(--border-radius-1)] rounded-tr-[var(--border-radius-1)] ">
              <div className={style.color + " text-white"}>
                <ImImage />
              </div>
            </div>

            <div className="relative flex flex-col pt-6 pb-2 sm:pb-4 px-2 sm:px-4">
              <div
                className={
                  style.bgColor +
                  " absolute h-10 w-10 p-[0.15rem] rounded-[50%] border-2 border-solid border-white left-4 -top-5"
                }
              >
                <span
                  className={`absolute -translate-x-2/4 -translate-y-2/4 text-[0.7rem] font-medium text-white left-2/4 top-2/4`}
                >
                  NR
                </span>
              </div>

              <span
                className={
                  style.bgColor +
                  " font-semibold sm:font-bold text-[0.85rem] sm:text-[1rem] mb-1 rounded min-h-[20px]"
                }
              ></span>

              <span
                className={
                  style.bgColor +
                  " text-[0.75rem] sm:text-[0.85rem] text-[#555] sm:font-medium rounded min-h-[20px]"
                }
              ></span>
            </div>
          </div>

          <div
            className={
              style.bgColor +
              " absolute top-0 right-0 w-[35px] h-[35px] rounded-[3px]"
            }
          >
            <span className="absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 text-white text-[1.25rem]">
              ...
            </span>
          </div>
        </div>

        <div className="skeleton relative min-h-[200px] sm:min-h-[250px] shadow-[0_2px_4px_rgba(0,0,0,0.2)] rounded-[var(--border-radius-1)]">
          <div className="group block h-full no-underline rounded-[var(--border-radius-1)]">
            <div className="relative flex items-center justify-center h-[175px] sm:h-[225px] rounded-tl-[var(--border-radius-1)] rounded-tr-[var(--border-radius-1)] ">
              <div className={style.color + " text-white"}>
                <ImImage />
              </div>
            </div>

            <div className="relative flex flex-col pt-6 pb-2 sm:pb-4 px-2 sm:px-4">
              <div
                className={
                  style.bgColor +
                  " absolute h-10 w-10 p-[0.15rem] rounded-[50%] border-2 border-solid border-white left-4 -top-5"
                }
              >
                <span
                  className={`absolute -translate-x-2/4 -translate-y-2/4 text-[0.7rem] font-medium text-white left-2/4 top-2/4`}
                >
                  NR
                </span>
              </div>

              <span
                className={
                  style.bgColor +
                  " font-semibold sm:font-bold text-[0.85rem] sm:text-[1rem] mb-1 rounded min-h-[20px]"
                }
              ></span>

              <span
                className={
                  style.bgColor +
                  " text-[0.75rem] sm:text-[0.85rem] text-[#555] sm:font-medium rounded min-h-[20px]"
                }
              ></span>
            </div>
          </div>

          <div
            className={
              style.bgColor +
              " absolute top-0 right-0 w-[35px] h-[35px] rounded-[3px]"
            }
          >
            <span className="absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 text-white text-[1.25rem]">
              ...
            </span>
          </div>
        </div>

        <div className="skeleton relative min-h-[200px] sm:min-h-[250px] shadow-[0_2px_4px_rgba(0,0,0,0.2)] rounded-[var(--border-radius-1)]">
          <div className="group block h-full no-underline rounded-[var(--border-radius-1)]">
            <div className="relative flex items-center justify-center h-[175px] sm:h-[225px] rounded-tl-[var(--border-radius-1)] rounded-tr-[var(--border-radius-1)] ">
              <div className={style.color + " text-white"}>
                <ImImage />
              </div>
            </div>

            <div className="relative flex flex-col pt-6 pb-2 sm:pb-4 px-2 sm:px-4">
              <div
                className={
                  style.bgColor +
                  " absolute h-10 w-10 p-[0.15rem] rounded-[50%] border-2 border-solid border-white left-4 -top-5"
                }
              >
                <span
                  className={`absolute -translate-x-2/4 -translate-y-2/4 text-[0.7rem] font-medium text-white left-2/4 top-2/4`}
                >
                  NR
                </span>
              </div>

              <span
                className={
                  style.bgColor +
                  " font-semibold sm:font-bold text-[0.85rem] sm:text-[1rem] mb-1 rounded min-h-[20px]"
                }
              ></span>

              <span
                className={
                  style.bgColor +
                  " text-[0.75rem] sm:text-[0.85rem] text-[#555] sm:font-medium rounded min-h-[20px]"
                }
              ></span>
            </div>
          </div>

          <div
            className={
              style.bgColor +
              " absolute top-0 right-0 w-[35px] h-[35px] rounded-[3px]"
            }
          >
            <span className="absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 text-white text-[1.25rem]">
              ...
            </span>
          </div>
        </div>

        <div className="skeleton relative min-h-[200px] sm:min-h-[250px] shadow-[0_2px_4px_rgba(0,0,0,0.2)] rounded-[var(--border-radius-1)]">
          <div className="group block h-full no-underline rounded-[var(--border-radius-1)]">
            <div className="relative flex items-center justify-center h-[175px] sm:h-[225px] rounded-tl-[var(--border-radius-1)] rounded-tr-[var(--border-radius-1)] ">
              <div className={style.color + " text-white"}>
                <ImImage />
              </div>
            </div>

            <div className="relative flex flex-col pt-6 pb-2 sm:pb-4 px-2 sm:px-4">
              <div
                className={
                  style.bgColor +
                  " absolute h-10 w-10 p-[0.15rem] rounded-[50%] border-2 border-solid border-white left-4 -top-5"
                }
              >
                <span
                  className={`absolute -translate-x-2/4 -translate-y-2/4 text-[0.7rem] font-medium text-white left-2/4 top-2/4`}
                >
                  NR
                </span>
              </div>

              <span
                className={
                  style.bgColor +
                  " font-semibold sm:font-bold text-[0.85rem] sm:text-[1rem] mb-1 rounded min-h-[20px]"
                }
              ></span>

              <span
                className={
                  style.bgColor +
                  " text-[0.75rem] sm:text-[0.85rem] text-[#555] sm:font-medium rounded min-h-[20px]"
                }
              ></span>
            </div>
          </div>

          <div
            className={
              style.bgColor +
              " absolute top-0 right-0 w-[35px] h-[35px] rounded-[3px]"
            }
          >
            <span className="absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 text-white text-[1.25rem]">
              ...
            </span>
          </div>
        </div>

        <div className="skeleton relative min-h-[200px] sm:min-h-[250px] shadow-[0_2px_4px_rgba(0,0,0,0.2)] rounded-[var(--border-radius-1)]">
          <div className="group block h-full no-underline rounded-[var(--border-radius-1)]">
            <div className="relative flex items-center justify-center h-[175px] sm:h-[225px] rounded-tl-[var(--border-radius-1)] rounded-tr-[var(--border-radius-1)] ">
              <div className={style.color + " text-white"}>
                <ImImage />
              </div>
            </div>

            <div className="relative flex flex-col pt-6 pb-2 sm:pb-4 px-2 sm:px-4">
              <div
                className={
                  style.bgColor +
                  " absolute h-10 w-10 p-[0.15rem] rounded-[50%] border-2 border-solid border-white left-4 -top-5"
                }
              >
                <span
                  className={`absolute -translate-x-2/4 -translate-y-2/4 text-[0.7rem] font-medium text-white left-2/4 top-2/4`}
                >
                  NR
                </span>
              </div>

              <span
                className={
                  style.bgColor +
                  " font-semibold sm:font-bold text-[0.85rem] sm:text-[1rem] mb-1 rounded min-h-[20px]"
                }
              ></span>

              <span
                className={
                  style.bgColor +
                  " text-[0.75rem] sm:text-[0.85rem] text-[#555] sm:font-medium rounded min-h-[20px]"
                }
              ></span>
            </div>
          </div>

          <div
            className={
              style.bgColor +
              " absolute top-0 right-0 w-[35px] h-[35px] rounded-[3px]"
            }
          >
            <span className="absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 text-white text-[1.25rem]">
              ...
            </span>
          </div>
        </div>

        <div className="skeleton relative min-h-[200px] sm:min-h-[250px] shadow-[0_2px_4px_rgba(0,0,0,0.2)] rounded-[var(--border-radius-1)]">
          <div className="group block h-full no-underline rounded-[var(--border-radius-1)]">
            <div className="relative flex items-center justify-center h-[175px] sm:h-[225px] rounded-tl-[var(--border-radius-1)] rounded-tr-[var(--border-radius-1)] ">
              <div className={style.color + " text-white"}>
                <ImImage />
              </div>
            </div>

            <div className="relative flex flex-col pt-6 pb-2 sm:pb-4 px-2 sm:px-4">
              <div
                className={
                  style.bgColor +
                  " absolute h-10 w-10 p-[0.15rem] rounded-[50%] border-2 border-solid border-white left-4 -top-5"
                }
              >
                <span
                  className={`absolute -translate-x-2/4 -translate-y-2/4 text-[0.7rem] font-medium text-white left-2/4 top-2/4`}
                >
                  NR
                </span>
              </div>

              <span
                className={
                  style.bgColor +
                  " font-semibold sm:font-bold text-[0.85rem] sm:text-[1rem] mb-1 rounded min-h-[20px]"
                }
              ></span>

              <span
                className={
                  style.bgColor +
                  " text-[0.75rem] sm:text-[0.85rem] text-[#555] sm:font-medium rounded min-h-[20px]"
                }
              ></span>
            </div>
          </div>

          <div
            className={
              style.bgColor +
              " absolute top-0 right-0 w-[35px] h-[35px] rounded-[3px]"
            }
          >
            <span className="absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 text-white text-[1.25rem]">
              ...
            </span>
          </div>
        </div>

        <div className="skeleton relative min-h-[200px] sm:min-h-[250px] shadow-[0_2px_4px_rgba(0,0,0,0.2)] rounded-[var(--border-radius-1)]">
          <div className="group block h-full no-underline rounded-[var(--border-radius-1)]">
            <div className="relative flex items-center justify-center h-[175px] sm:h-[225px] rounded-tl-[var(--border-radius-1)] rounded-tr-[var(--border-radius-1)] ">
              <div className={style.color + " text-white"}>
                <ImImage />
              </div>
            </div>

            <div className="relative flex flex-col pt-6 pb-2 sm:pb-4 px-2 sm:px-4">
              <div
                className={
                  style.bgColor +
                  " absolute h-10 w-10 p-[0.15rem] rounded-[50%] border-2 border-solid border-white left-4 -top-5"
                }
              >
                <span
                  className={`absolute -translate-x-2/4 -translate-y-2/4 text-[0.7rem] font-medium text-white left-2/4 top-2/4`}
                >
                  NR
                </span>
              </div>

              <span
                className={
                  style.bgColor +
                  " font-semibold sm:font-bold text-[0.85rem] sm:text-[1rem] mb-1 rounded min-h-[20px]"
                }
              ></span>

              <span
                className={
                  style.bgColor +
                  " text-[0.75rem] sm:text-[0.85rem] text-[#555] sm:font-medium rounded min-h-[20px]"
                }
              ></span>
            </div>
          </div>

          <div
            className={
              style.bgColor +
              " absolute top-0 right-0 w-[35px] h-[35px] rounded-[3px]"
            }
          >
            <span className="absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 text-white text-[1.25rem]">
              ...
            </span>
          </div>
        </div>

        <div className="skeleton relative min-h-[200px] sm:min-h-[250px] shadow-[0_2px_4px_rgba(0,0,0,0.2)] rounded-[var(--border-radius-1)]">
          <div className="group block h-full no-underline rounded-[var(--border-radius-1)]">
            <div className="relative flex items-center justify-center h-[175px] sm:h-[225px] rounded-tl-[var(--border-radius-1)] rounded-tr-[var(--border-radius-1)] ">
              <div className={style.color + " text-white"}>
                <ImImage />
              </div>
            </div>

            <div className="relative flex flex-col pt-6 pb-2 sm:pb-4 px-2 sm:px-4">
              <div
                className={
                  style.bgColor +
                  " absolute h-10 w-10 p-[0.15rem] rounded-[50%] border-2 border-solid border-white left-4 -top-5"
                }
              >
                <span
                  className={`absolute -translate-x-2/4 -translate-y-2/4 text-[0.7rem] font-medium text-white left-2/4 top-2/4`}
                >
                  NR
                </span>
              </div>

              <span
                className={
                  style.bgColor +
                  " font-semibold sm:font-bold text-[0.85rem] sm:text-[1rem] mb-1 rounded min-h-[20px]"
                }
              ></span>

              <span
                className={
                  style.bgColor +
                  " text-[0.75rem] sm:text-[0.85rem] text-[#555] sm:font-medium rounded min-h-[20px]"
                }
              ></span>
            </div>
          </div>

          <div
            className={
              style.bgColor +
              " absolute top-0 right-0 w-[35px] h-[35px] rounded-[3px]"
            }
          >
            <span className="absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 text-white text-[1.25rem]">
              ...
            </span>
          </div>
        </div>

        {/* <div className="skeleton relative min-h-[200px] sm:min-h-[250px] rounded-[3px]"></div>
        <div className="skeleton relative min-h-[200px] sm:min-h-[250px] rounded-[3px]"></div>
        <div className="skeleton relative min-h-[200px] sm:min-h-[250px] rounded-[3px]"></div>
        <div className="skeleton relative min-h-[200px] sm:min-h-[250px] rounded-[3px]"></div>
        <div className="skeleton relative min-h-[200px] sm:min-h-[250px] rounded-[3px]"></div>
        <div className="skeleton relative min-h-[200px] sm:min-h-[250px] rounded-[3px]"></div>
        <div className="skeleton relative min-h-[200px] sm:min-h-[250px] rounded-[3px]"></div>
        <div className="skeleton relative min-h-[200px] sm:min-h-[250px] rounded-[3px]"></div>
        <div className="skeleton relative min-h-[200px] sm:min-h-[250px] rounded-[3px]"></div>
        <div className="skeleton relative min-h-[200px] sm:min-h-[250px] rounded-[3px]"></div>
        <div className="skeleton relative min-h-[200px] sm:min-h-[250px] rounded-[3px]"></div>
        <div className="skeleton relative min-h-[200px] sm:min-h-[250px] rounded-[3px]"></div>
        <div className="skeleton relative min-h-[200px] sm:min-h-[250px] rounded-[3px]"></div>
        <div className="skeleton relative min-h-[200px] sm:min-h-[250px] rounded-[3px]"></div>
        <div className="skeleton relative min-h-[200px] sm:min-h-[250px] rounded-[3px]"></div>
        <div className="skeleton relative min-h-[200px] sm:min-h-[250px] rounded-[3px]"></div>
        <div className="skeleton relative min-h-[200px] sm:min-h-[250px] rounded-[3px]"></div>
        <div className="skeleton relative min-h-[200px] sm:min-h-[250px] rounded-[3px]"></div>
        <div className="skeleton relative min-h-[200px] sm:min-h-[250px] rounded-[3px]"></div>
        <div className="skeleton relative min-h-[200px] sm:min-h-[250px] rounded-[3px]"></div> */}
      </div>
    </div>
  );
}

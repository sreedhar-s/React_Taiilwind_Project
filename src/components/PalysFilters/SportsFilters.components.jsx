import { Disclosure } from "@headlessui/react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

const SportsFilter = (props) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="py-2 flex items-center gap-3">
            {open ? <FiChevronUp /> : <FiChevronDown />}{" "}
            <span className={open ? "text-red-600" : "text-gray-700"}>
              {props.title}
            </span>
          </Disclosure.Button>
          <Disclosure.Panel className="text-gray-500 shadow-lg">
            <div className="flex item-center gap-2 flex-wrap p-2 bg-white">
              {props.tags.map((tag) => (
                <>
                  <div className="border-2 border-gray-200 px-3 py-2">
                    <span className="text-red-600">{tag}</span>
                  </div>
                </>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default SportsFilter;


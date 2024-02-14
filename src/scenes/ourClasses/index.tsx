import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/model-5.jpeg";
import image2 from "@/assets/model-5.jpeg";
import image3 from "@/assets/model-5.jpeg";
import image4 from "@/assets/model-5.jpeg";
import image5 from "@/assets/model-5.jpeg";
import image6 from "@/assets/model-5.jpeg";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description: "fdbfdndngdndbsgsdgadgshfdnfgngdnbsfadgsdfsdndfn",
    image: image1,
  },
  {
    name: "Fitness Training Classes",
    description: "fdbfdndngdndbsgsdgadgshfdnfgngdnbsfadgsdfsdndfn",
    image: image2,
  },
  {
    name: "Jump Training Classes",
    description: "fdbfdndngdndbsgsdgadgshfdnfgngdnbsfadgsdfsdndfn",
    image: image3,
  },
  {
    name: "Abs Training Classes",
    description: "fdbfdndngdndbsgsdgadgshfdnfgngdnbsfadgsdfsdndfn",
    image: image4,
  },
  {
    name: "Yoga Training Classes",
    description: "fdbfdndngdndbsgsdgadgshfdnfgngdnbsfadgsdfsdndfn",
    image: image5,
  },
  {
    name: "Aero Training Classes",
    description: "fdbfdndngdndbsgsdgadgshfdnfgngdnbsfadgsdfsdndfn",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-yellow-300 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">hviowhihwbilhbilshbilfshblhdslbhfslbhflsb</p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;

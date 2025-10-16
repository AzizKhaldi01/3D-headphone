import {
  VideoCameraIcon,
  Square3Stack3DIcon,
  ShareIcon,
} from "@heroicons/react/24/solid";

import receptionGif from "../../public/img/reception.gif";

const featuresData = {
  title: "Features",
  desc: "Comra.ai simplifies the process of creating 3D models by leveraging AI and a simple web interface.",
  image: receptionGif,
  bullets: [
    {
      title: "Scan your environment",
      desc: "An AI enhanced tool that allows you to scan your environment.",
      icon: <VideoCameraIcon />,
    },
    {
      title: "Augment your scans",
      desc: "Add annotations and enhancements to your scans.",
      icon: <Square3Stack3DIcon />,
    },
    {
      title: "Embed your 3D models anywhere",
      desc: "Embed your 3D models in your website to give your customers an immersive experience discovering your environement.",
      icon: <ShareIcon />,
    },
  ],
};

export { featuresData };

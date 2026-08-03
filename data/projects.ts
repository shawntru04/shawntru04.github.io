export type Project = {
  slug: string;
  title: string;
  category: string;
  date: string;
  image: string;
  summary: string;
  overview: string[];
  technologies: string[];
  highlights: string[];
  sections: {
    title: string;
    paragraphs?: string[];
    bullets?: string[];
    image?: string;
    imageAlt?: string;
  }[];
  github?: string;
  video?: string;
};

export const projects: Project[] = [
  {
    slug: "autonomous-guided-parafoil",
    title: "Autonomous Guided Parafoil",
    category: "Embedded Systems · Autonomous Flight",
    date: "November 2025",
    image: "/parafoil.jpg",

    summary:
      "A low-cost autonomous parafoil system designed to recover high-altitude payloads through GPS and IMU-based navigation, real-time state estimation, and servo-actuated brake control.",

    overview: [
      "This project focused on developing an autonomous recovery platform capable of guiding a payload toward a selected landing location.",
      "The system combines embedded flight hardware, wireless communication, sensor fusion, and mechanical brake-line control in a compact airborne guidance unit.",
    ],

    technologies: [
      "C",
      "Python",
      "STM32",
      "FreeRTOS",
      "GPS",
      "BNO085 IMU",
      "Extended Kalman Filter",
      "XBee",
      "KiCad",
    ],

    highlights: [
      "Designed and built an STM32-based airborne guidance unit",
      "Implemented GPS and IMU sensor fusion using a custom Extended Kalman Filter",
      "Developed servo-actuated brake-line control",
      "Built a Python ground control station for telemetry and live tracking",
      "Demonstrated autonomous terminal guidance during field testing",
    ],

    sections: [
      {
        title: "The Problem",
        paragraphs: [
          "High-altitude payload recovery systems can be expensive, difficult to deploy, or dependent on large recovery areas. The goal of this project was to build a lower-cost system capable of autonomously steering a payload toward a safe and accessible landing location.",
        ],
      },
      {
        title: "Airborne Guidance Unit",
        paragraphs: [
          "The airborne guidance unit was built around an STM32 microcontroller running FreeRTOS. It integrated GPS, an inertial measurement unit, XBee radios, and servo outputs used to actuate the parafoil brake lines.",
        ],
        bullets: [
          "u-blox NEO-M9N GPS",
          "BNO085 inertial measurement unit",
          "XBee telemetry radio",
          "Servo-actuated left and right brake lines",
          "Custom embedded firmware and hardware drivers",
        ],
        image: "/parafoil-electronics.jpg",
        imageAlt: "Autonomous parafoil airborne guidance electronics",
      },
      {
        title: "State Estimation",
        paragraphs: [
          "A custom Extended Kalman Filter fused GPS and IMU measurements to estimate the payload's position, velocity, orientation, and motion during flight.",
          "This provided a more stable navigation estimate than relying on either sensor independently.",
        ],
      },
      {
        title: "Ground Control Station",
        paragraphs: [
          "I developed a Python ground control station for mission monitoring, telemetry visualization, live position tracking, and communication with the airborne unit through the XBee radio link.",
        ],
        image: "/parafoil-gcs.jpg",
        imageAlt: "Python ground control station for the autonomous parafoil",
      },
      {
        title: "Results",
        bullets: [
          "Completed controlled and open-air flight testing",
          "Demonstrated autonomous terminal guidance",
          "Produced repeatable landings from release heights above 50 feet",
          "Validated communication, sensing, and servo-control subsystems",
        ],
      },
    ],
  },

  {
    slug: "robot-laser-tag",
    title: "Autonomous Robot Laser Tag",
    category: "Robotics · Communication Systems",
    date: "March 2026",
    image: "/laser-tag.jpg",

    summary:
      "A multi-robot laser-tag platform using ROS 2, Raspberry Pi computers, custom infrared hardware, autonomous navigation, and real-time hit detection.",

    overview: [
      "This project combined autonomous navigation, custom electronics, and infrared communication to allow multiple mobile robots to participate in a laser-tag-style game.",
      "Each robot could navigate the environment, transmit encoded infrared shots, detect valid hits, and communicate game events through ROS 2.",
    ],

    technologies: [
      "C++",
      "Python",
      "ROS 2",
      "Raspberry Pi",
      "KiCad",
      "LiDAR",
      "38 kHz IR",
      "GPIO",
    ],

    highlights: [
      "Designed a custom Raspberry Pi PCB",
      "Created a custom 38 kHz infrared communication protocol",
      "Implemented packet decoding and checksum validation",
      "Integrated hit detection with ROS 2",
      "Achieved reliable communication at distances up to 8 feet",
    ],

    sections: [
      {
        title: "System Overview",
        paragraphs: [
          "Each robot used a Raspberry Pi for high-level processing, LiDAR for mapping and navigation, and custom infrared electronics for shooting and hit detection.",
        ],
      },
      {
        title: "Custom PCB",
        paragraphs: [
          "I designed a custom PCB shaped specifically to fit the MBot platform. The board connected infrared transmitters, receivers, and visible status LEDs to the Raspberry Pi GPIO pins.",
        ],
        bullets: [
          "Two infrared LEDs",
          "Four TSOP4838 infrared receivers",
          "Four status LEDs",
          "Transistor-driven infrared output",
          "GPIO-based control and detection",
        ],
        image: "/laser-tag-pcb.jpg",
        imageAlt: "Custom PCB for the autonomous robot laser tag system",
      },
      {
        title: "Infrared Protocol",
        paragraphs: [
          "The robots communicated using a custom protocol transmitted on a 38 kHz carrier. Packets included robot identification and checksum validation to reduce false hit detections.",
        ],
      },
      {
        title: "ROS 2 Integration",
        paragraphs: [
          "The infrared system was integrated into ROS 2 nodes that published firing commands, valid hit events, and robot status updates.",
        ],
      },
      {
        title: "Results",
        bullets: [
          "Reliable hit detection at distances up to 8 feet",
          "Real-time communication between infrared hardware and ROS 2",
          "Multi-angle detection through four infrared receivers",
          "Custom PCB successfully integrated with the MBot platform",
        ],
      },
    ],
  },

  {
    slug: "steel-slab-optimization",
    title: "Steel Slab Width Optimization",
    category: "Industrial Software · Optimization",
    date: "Summer 2026",
    image: "/steel-casting.jpg",

    summary:
      "A production optimization system that analyzed daily casting schedules and identified compatible slab-width transitions to reduce waste and preserve customer orders.",

    overview: [
      "Steel slabs are cast in scheduled sequences, and differences in required widths can create excess material, downgraded steel, or production waste.",
      "I developed an optimization system that evaluated width compatibility between slabs throughout an entire daily casting schedule.",
    ],

    technologies: [
      "C",
      "JavaScript",
      "SQL",
      "Optimization",
      "Manufacturing Systems",
    ],

    highlights: [
      "Reduced monthly scrap by 60 tons",
      "Prevented 220 tons per month from becoming secondary material",
      "Kept 1,100 tons per month on original prime orders",
      "Evaluated compatibility across complete daily schedules",
    ],

    sections: [
      {
        title: "The Manufacturing Problem",
        paragraphs: [
          "Steel production schedules contain slabs with different width requirements. Poorly coordinated width transitions can cause material to be scrapped, downgraded to secondary quality, or removed from its original customer order.",
        ],
      },
      {
        title: "Optimization Approach",
        paragraphs: [
          "The software analyzed the complete daily schedule and identified where width compatibility existed between consecutive slabs.",
          "The system supported dynamic width control decisions while considering downstream production and order requirements.",
        ],
      },
      {
        title: "Production Impact",
        bullets: [
          "60 tons of monthly scrap avoided",
          "220 tons per month prevented from being downgraded",
          "1,100 tons per month retained on original prime orders",
        ],
      },
      {
        title: "Confidentiality",
        paragraphs: [
          "Technical implementation details, internal systems, production data, and proprietary manufacturing rules are intentionally excluded from this public portfolio.",
        ],
      },
    ],
  },

  {
    slug: "balloon-turret",
    title: "Autonomous Balloon Turret",
    category: "Computer Vision · Embedded Control",
    date: "March 2025",
    image: "/balloon-turret.jpg",

    summary:
      "An autonomous targeting system combining computer vision, an STM32 controller, FPGA display hardware, and motor control to identify and engage balloon targets.",

    overview: [
      "This project combined a Raspberry Pi, STM32 microcontroller, FPGA, camera, servos, and stepper motors into an autonomous balloon-detection and targeting platform.",
    ],

    technologies: [
      "C",
      "Python",
      "Verilog",
      "OpenCV",
      "STM32",
      "FPGA",
      "UART",
      "SPI",
      "PWM",
    ],

    highlights: [
      "Detected balloon targets using OpenCV",
      "Programmed an STM32 to coordinate system communication",
      "Developed custom FPGA VGA and LCD drivers",
      "Implemented servo and stepper motor control",
    ],

    sections: [
      {
        title: "Computer Vision",
        paragraphs: [
          "A Raspberry Pi camera captured the environment, and OpenCV detected balloon targets using hue, saturation, and value thresholds.",
          "The system selected targets according to color priority and transmitted their coordinates to the STM32 controller.",
        ],
      },
      {
        title: "Embedded Communication",
        paragraphs: [
          "The STM32 managed communication between the camera system, user interface, FPGA, and motor-control subsystems using UART, SPI, and memory-mapped input/output.",
        ],
      },
      {
        title: "FPGA Interface",
        paragraphs: [
          "Custom VGA and LCD display drivers were implemented in Verilog to provide real-time system feedback.",
        ],
      },
      {
        title: "Motor Control",
        paragraphs: [
          "PWM control was used for the servos and stepper motors responsible for aiming and firing at detected balloon targets.",
        ],
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
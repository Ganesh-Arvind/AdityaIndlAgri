interface SubProductDetail {
    features: string[];
    applications: string[];
    description: string;
  }
  
  interface ProductSubDetails {
    [key: string]: {
      [key: string]: SubProductDetail;
    };
  }
  
export const subProductDetails: ProductSubDetails = {
  "Belts": {
    "Industrial V-Belts": {
      description: "These belts are trapezoidal in shape and are used in industrial applications for transmitting power between pulleys.",
      features: [
        "High durability and reliability",
        "Resistant to wear and tear",
        "Provides smooth power transmission with minimal vibration",
        "Available in various cross-sections and lengths."
      ],
      applications: [
        "Heavy machinery like compressors, pumps, and generators.",
        "Conveyor systems.",
        "HVAC systems."
      ]
    },
    "Ribbed/Poly V-Belts": {
      description: "Ribbed or Poly V-Belts have longitudinal grooves that provide a larger contact surface with pulleys for better grip and efficiency.",
      features: [
        "Compact design allows for high-speed power transmission.",
        "Low noise operation.",
        "Resistant to misalignment issues.",
        "Flexibility for small pulley diameters."
      ],
      applications: [
        "Domestic appliances like washing machines and dryers.",
        "Power tools.",
        "Automotive engines."
      ]
    },
    "Agriculture Belts": {
      description: "Specialized belts designed for agricultural machinery that operate in harsh environments.",
      features: [
        "High resistance to dust, dirt, and extreme weather conditions.",
        "Reinforced to handle heavy loads and shocks.",
        "Long lifespan with minimal maintenance."
      ],
      applications: [
        "Tractors and combine harvesters.",
        "Seeders, plows, and balers.",
        "Irrigation and milling equipment."
      ]
    },
    "Automotive Belts": {
      description: "Belts specifically engineered for automotive applications, including engine and accessory drives.",
      features: [
        "Heat and oil-resistant materials.",
        "High flexibility for compact automotive designs.",
        "Designed for smooth operation and longevity."
      ],
      applications: [
        "Timing belts for engine synchronization.",
        "Serpentine belts for accessory drives like alternators and air conditioners.",
        "Fan and power steering systems."
      ]
    },
    "Timing/Synchronous Belts": {
      description: "Belts with teeth on the inner surface that synchronize with matching pulley teeth for precise movement.",
      features: [
        "Eliminates slippage and ensures accurate timing.",
        "Quiet operation.",
        "High tensile strength for heavy-duty applications."
      ],
      applications: [
        "Automotive engines for camshaft synchronization.",
        "Industrial machinery requiring precise positioning.",
        "Robotics and conveyor systems."
      ]
    },
    "Banded Belts": {
      description: "Multiple V-belts joined together to form a single unit, preventing individual belt flipping or twisting.",
      features: [
        "High stability and resistance to vibrations.",
        "Reduced maintenance due to unified construction.",
        "Enhanced load distribution across pulleys."
      ],
      applications: [
        "Industrial applications requiring high power transmission.",
        "Agricultural equipment like threshers.",
        "Heavy-duty conveyors."
      ]
    },
    "Special Belts": {
      description: "Custom-designed belts for unique or specific applications that standard belts cannot handle.",
      features: [
        "Tailored materials and construction for specific needs (e.g., chemical resistance, high-speed operation).",
        "Can include non-standard profiles or reinforced designs.",
        "Suitable for extreme conditions like high temperature or corrosive environments."
      ],
      applications: [
        "Food processing equipment.",
        "Mining and quarrying machinery.",
        "Customized industrial or automotive systems."
      ]
    }
  },

  "Pulleys & Bushes": {
    "Taper Lock V-Pulleys": {
      description: "V-Pulleys designed with a Taper Lock bushing system that allows for easy and secure mounting on shafts.",
      features: [
       "Quick and precise installation and removal with the Taper Lock design.",
       "Compatible with V-belts for smooth power transmission.",
       "Manufactured from durable materials like cast iron or steel for long-lasting performance.",
       "Balanced to reduce vibration during high-speed operations."
      ],
      applications: [
        "Industrial machinery like pumps, compressors, and fans.",
        "Conveyor systems.",
        "Agricultural equipment."
      ]
    },
    "Taper Lock Poly V-Pulleys": {
      description: "Poly V-Pulleys equipped with a Taper Lock system for easy attachment, designed for use with Poly V-belts.",
      features: [
        "Compact and lightweight design.",
        "Enhanced grip with multiple grooves for ribbed belts.",
        "Suitable for high-speed and high-torque applications.",
        "Easy to install, align, and maintain."
      ],
      applications: [
        "Automotive engines and alternators.",
        "Domestic appliances like washing machines and air conditioners.",
        "Light industrial applications"
      ]
    },
    "Taper Lock Timing-Pulleys": {
      description: "Pulleys with toothed profiles designed for synchronous belts, incorporating a Taper Lock mounting system.",
      features: [
        "Provides accurate power transmission without slippage.",
        "Resistant to wear, ensuring a long lifespan.",
        "Supports high torque and precise timing applications.",
        "Easy assembly and disassembly using the Taper Lock mechanism."
      ],
      applications: [
        "Automotive timing systems for camshaft operation.",
        "Industrial machinery requiring synchronized movement.",
        "Robotics and precision equipment."
      ]
    },
    "Ventilated Turbo Pulleys": {
      description: "A specialized pulley design with ventilation features to enhance cooling during high-speed or high-power operations.",
      features: [
        "Heat dissipation design to prevent overheating.",
        "Lightweight yet sturdy construction for efficiency.",
        "Designed for high-performance applications with minimal vibration.",
        "Corrosion-resistant materials for durability."
      ],
      applications: [
        "Turbochargers in automotive systems.",
        "High-speed industrial machinery.",
        "Equipment operating under high-temperature conditions."
      ]
    }
  },

  "Bearings": {
    "Industrial Bearings": {
      description: "Bearings designed for heavy-duty industrial applications to support rotating or moving parts while minimizing friction.",
      features: [
        "Available in various types: ball bearings, roller bearings, spherical bearings, and more.",
        "High load-carrying capacity for radial and axial loads.",
        "Resistant to harsh operating conditions such as high temperatures, dust, and moisture.",
        "Long lifespan with proper lubrication and maintenance."
      ],
      applications: [
        "Conveyor systems and material handling equipment.",
        "Heavy machinery in manufacturing and mining industries.",
        "Pumps, fans, and compressors.",
        "Wind turbines and power generation systems."
        
      ]
    },
    "Automotive Bearings": {
      description: "Specialized bearings for automotive applications that enhance performance, safety, and efficiency.",
      features: [
        "Precision-engineered to handle high speeds and variable loads.",
        "Designed for smooth and quiet operation.",
        "Resistant to heat, vibration, and contaminants like dirt and water.",
        "Common types include wheel bearings, clutch release bearings, and engine bearings."
      ],
      applications: [
        "Wheel hubs to support the vehicle's weight and rotation.",
        "Transmission systems for smooth gear changes.",
        "Engine components like crankshafts and camshafts.",
        "Steering and suspension systems for better vehicle control."
      ]
    }
  },

  "Couplings": {
    "Pin-Bush Couplings": {
      description: "Flexible couplings consisting of a set of pins fitted with rubber or polyurethane bushes to provide cushioning and flexibility during power transmission.",
      features: [
        "Simple and compact design.",
        "Capable of absorbing shocks and vibrations.",
        "Allows for slight misalignment between shafts.",
        "Low maintenance and easy assembly."
      ],
      applications: [
        "Pumps and compressors.",
        "Fans and blowers.",
        "Conveyor systems.",
        "Light to medium industrial machinery."
        
      ]
    },
    "Gear Couplings": {
      description: "High-performance couplings with interlocking gear teeth, used to connect two shafts while transmitting high torque.",
      features: [
        "Handles high torque with minimal backlash.",
        "Allows for angular, radial, and axial misalignment.",
        "High durability due to hardened and precision-machined gear teeth.",
        "Requires periodic lubrication for optimal performance."
      ],
      applications: [
        "Heavy industrial machinery like crushers, mills, and turbines.",
        "High-torque applications in steel plants and power generation.",
        "Marine and mining equipment."
      ]
    },
    "Tyre Couplings": {
      description: "Flexible couplings with a rubber or polyurethane tyre that connects two hubs, providing elasticity and shock absorption.",
      features: [
        "Excellent flexibility for accommodating misalignment.",
        "Absorbs vibrations and reduces noise.",
        "Easy to replace the tyre without dismantling the entire coupling.",
        "Resistant to wear and weather conditions."
      ],
      applications: [
        "General-purpose industrial machinery.",
        "Pumps and compressors.",
        "Small to medium conveyor systems."
        
      ]
    },
    "Resilient / Grid Couplings": {
      description: "Couplings that use a grid of spring-like material to transmit torque while damping vibrations and absorbing shocks.",
      features: [
        "High strength and flexibility.",
        "Capable of handling large torque variations and shocks.",
        "Allows for angular, parallel, and axial misalignments.",
        "Long service life with proper lubrication."
      ],
      applications: [
        "Heavy-duty industrial applications.",
        "Conveyor drives and rolling mills.",
        "Compressors, pumps, and crushers."
      ]
    }
  },

  "Tensioners & Idler Pulleys": {
    "Bearing Idlers (Plastic Pulleys)": {
      description: "Lightweight pulleys made of plastic, integrated with bearings to guide and support belts or ropes.",
      features: [
        "Corrosion-resistant and lightweight construction.",
        "Integrated bearings for smooth rotation.",
        "Cost-effective and durable for specific applications.",
        "Minimal maintenance required."
      ],
      applications: [
        "Conveyor systems in industries like food processing and packaging.",
        "Lightweight machinery.",
        "Applications requiring reduced noise and weight."
      ]
    },
    "Tensioner Bearings": {
      description: "Specialized bearings used in tensioner assemblies to maintain the proper tension of belts or chains in a drive system.",
      features: [
        "Designed for high durability and precision.",
        "Operates under varying loads and speeds.",
        "Resistant to heat and wear.",
        "Ensures smooth and quiet belt operation."
      ],
      applications: [
        "Automotive engines for serpentine and timing belts.",
        "Industrial belt drive systems.",
        "Machinery requiring precise tension control."
      ]
    },
    "Grooved Pulleys": {
      description: "Pulleys with grooves designed to guide and hold belts, ensuring proper alignment and grip.",
      features: [
        "Available in different groove profiles (V, flat, or ribbed).",
        "High grip and reduced slippage."
      ],
      applications: [
        "Automotive accessory systems.",
        "Industrial belt-driven equipment.",
        "HVAC systems and other precision machinery."
      ]
    },
    "Timing Tensioners": {
      description: "Components in timing systems that maintain the proper tension of timing belts, ensuring precise engine synchronization.",
      features: [
        "Ensures constant belt tension for reliable timing.",
        "Resistant to high temperatures and operational stress.",
        "Typically equipped with high-performance bearings for durability.",
        "Prevents belt slippage and prolongs belt life."
      ],
      applications: [
        "Automotive engines for timing belt systems.",
        "Industrial machinery requiring synchronous belt drives.",
        "Robotic systems with precise movement."
        
      ]
    },
    "Timing Belt Idlers": {
      description: "Idler pulleys used in timing belt systems to guide and support the belt while maintaining its alignment and reducing wear.",
      features: [
        "Smooth operation with integrated high-quality bearings.",
        "Resistant to heat, wear, and contamination.",
        "Helps maintain proper belt tension and alignment.",
        "Reduces vibration and noise."
      ],
      applications: [
        "Automotive timing systems.",
        "Industrial timing belt drives.",
        "Machinery requiring precise and efficient belt guidance."    
      ]
    }
  },

  "Bespokes": {
    "Customised Timing Pulleys": {
      description: "Specially designed timing pulleys tailored to meet specific application requirements in terms of dimensions, material, and performance.",
      features: [
        "Precisely machined teeth for accurate belt engagement.",
        "Customizable in materials (aluminum, steel, plastic) and profiles.",
        "Suitable for high-precision and unique applications.",
        "Options for anodizing or coatings for enhanced durability."
      ],
      applications: [
        "Robotics and automation systems.",
        "High-precision industrial machinery.",
        "Automotive and aerospace components."
      ]
    },
    "SG Iron Pulleys": {
      description: "Pulleys made from Spheroidal Graphite (SG) iron, known for its superior strength and durability compared to regular cast iron.",
      features: [
        "High resistance to wear and mechanical stress.",
        "Suitable for heavy-duty applications.",
        "Exceptional shock-absorbing capacity.",
        "Corrosion resistance with proper coating."
      ],
      applications: [
        "Heavy industrial machinery such as crushers and mills.",
        "Mining equipment.",
        "High-load conveyor systems."
        
      ]
    },
    "Standard Imperial Pulleys": {
      description: "Pulleys designed to adhere to imperial measurement standards for compatibility with systems using such specifications.",
      features: [
        "Standardized dimensions for universal compatibility.",
        "Available in a variety of materials and profiles.",
        "Durable construction for reliable performance.",
        "Easy integration into existing machinery with imperial specifications."
      ],
      applications: [
        "Standardized dimensions for universal compatibility.",
        "Available in a variety of materials and profiles.",
        "Durable construction for reliable performance.",
        "Easy integration into existing machinery with imperial specifications."
      ]
    },
    "Self Cooling Pulleys": {
      description: "Specialized pulleys designed with a ventilated or finned structure to dissipate heat during high-speed or high-load operations.",
      features: [
        "Heat dissipation through air circulation.",
        "Lightweight yet robust design.",
        "Ideal for high-temperature environments.",
        "Reduces the risk of belt or pulley failure due to overheating."
      ],
      applications: [
        "Turbochargers and other high-speed automotive components.",
        "Industrial machinery operating under heavy loads.",
        "Power generation equipment."
      ]
    },
    "Sheet Metal Pulleys": {
      description: "Pulleys fabricated from sheet metal, offering a lightweight and cost-effective solution for various applications.",
      features: [
        "Lightweight and corrosion-resistant construction.",
        "Economical manufacturing process.",
        "Suitable for light-duty applications.",
        "Available in various sizes and profiles."
      ],
      applications: [
        "Domestic appliances like washing machines and dryers.",
        "HVAC systems.",
        "Light industrial machinery."
      ]
    },
    "QD Bush Pulleys": {
      description: "Pulleys equipped with a Quick Detachable (QD) bushing system, allowing for easy installation and removal.",
      features: [
        "Quick and secure attachment to shafts.",
        "Interchangeable bushings for versatile applications.",
        "Precision machining for minimal vibration.",
        "Durable and low-maintenance design."
      ],
      applications: [
        "Conveyor systems and power transmission equipment.",
        "Agricultural and industrial machinery.",
        "HVAC and fan systems."
      ]
    },
    "Spline Shafts For Harvester Combines": {
      description: "Specialized shafts with spline profiles designed for transmitting torque in harvester combine machinery.",
      features: [
        "High strength and wear resistance for heavy-duty operations.",
        "Precision machining for accurate power transmission.",
        "Resistant to bending and torsional stress.",
        "Long-lasting performance in harsh agricultural environments."
      ],
      applications: [
        "Harvesting and agricultural equipment.",
        "Tractors and other heavy farm machinery.",
        "Components for power transmission in combines."
      ]
    }
  },
  
  "Auto Aftermarket": {
    "Variators": {
      description: "Variable speed drives that allow for seamless adjustment of speed and torque in mechanical systems.",
      features: [
        "Smooth speed variation without needing stepped gears.",
        "Energy-efficient operation.",
        "Durable and robust construction for long life.",
        "Suitable for a wide range of operating conditions."
      ],
      applications: [
        "Industrial machinery like conveyors and mixers.",
        "Agricultural equipment.",
        "Scooters and small vehicles for optimized performance."
        
      ]
    },
    "Weight Rollers": {
      description: "Cylindrical weights used in variators to adjust speed and torque dynamically.",
      features: [
        "High precision for smooth operation.",
        "Made from durable materials like plastic or metal.",
        "Lightweight and balanced design."
      ],
      applications: [
        "Automatic scooters for tuning acceleration and speed.",
        "Variator systems in compact vehicles.",
        "Small industrial drive systems."
      ]
    },
    "Air-cleaner Hose": {
      description: "Flexible hoses designed to transport clean air from air filters to the engine intake.",
      features: [
        "High resistance to heat and abrasion.",
        "Flexible and easy to install.",
        "Ensures contaminant-free air supply to engines."
      ],
      applications: [
        "Automobiles (cars, bikes, and trucks).",
        "Agricultural machinery and tractors.",
        "Industrial engines and compressors."
      ]
    },
    "Clutch Pulley-2W": {
      description: "Pulley systems integrated with a clutch mechanism used in two-wheelers for engaging and disengaging power transmission.",
      features: [
        "Compact and lightweight design.",
        "Ensures smooth power transmission.",
        "Long-lasting and low maintenance."
      ],
      applications: [
        "Scooters and motorcycles.",
        "Small automotive applications.",
        "Low-speed machinery requiring compact power transmission systems."
      ]
    },
    "Groove Pulley - Metallic and Plastic": {
      description: "Pulleys with grooves, made from metal or plastic, designed to guide belts or ropes for power transmission.",
      features: [
        "High durability and load-handling capacity (metallic).",
        "Lightweight and corrosion-resistant (plastic).",
        "Available in various groove profiles for different applications."
      ],
      applications: [
        "Automotive systems like alternators and AC compressors.",
        "Light and heavy industrial equipment.",
        "Domestic appliances."
      ]
    },
    "Shockers and Silencers": {
    description: 
      "Shockers: Absorbers that dampen vibration and shock in vehicles or machinery. Silencers: Components that reduce noise from exhaust systems.",

      features: [
        "Shockers: Durable, corrosion-resistant, and provide smooth operation.",
        "Silencers: High resistance to heat and corrosion, and designed for efficient noise reduction."
      ],
      applications: [
        "Automobiles (motorcycles, cars, and trucks).",
        "Agricultural equipment.",
        "Industrial machinery with vibrating or noisy operations."
      ]
    },
    "Tractor Trolley Hose": {
      description: "Heavy-duty hoses used in tractor trolleys to transport fluids, typically for hydraulic systems.",
      features: [
        "Resistant to high pressure and wear.",
        "Flexible and robust for tough environments.",
        "Available in various diameters and lengths."
      ],
      applications: [
        "Hydraulic systems in agricultural machinery.",
        "Tractor trolleys for fluid transport.",
        "Industrial equipment for fluid handling."
      ]
    },
    "Coolant Hose and Pipes": {
      description: "Hoses and pipes designed to circulate coolant in engines and machinery to prevent overheating.",
      features: [
        "Heat-resistant materials for durability.",
        "Flexible construction for easy routing.",
        "Leak-proof and corrosion-resistant."
      ],
      applications: [
        "Automotive cooling systems (cars, bikes, trucks).",
        "Industrial and agricultural engines.",
        "HVAC systems."
      ]
    }
  },

};
import room1 from "./images/details-1.jpeg";
import room2 from "./images/details-2.jpeg";
import caretaker1 from "./images/RoomiePhoto.png";
import caretaker2 from "./images/VL_fav_white.PNG";


const data = [
  {
    sys: {
      id: "1"
    },
    fields: {

      fname: "treasure",
      school: "uniport",
      dept: "Mathematics",
      level: "200L",
      gender: "female",
      interestedIn: "female",
      noOfRoommies: "1",
      isRoommieFound : false,
      contact : "09066435763",
      isLodgeFound : false,
      nameOfLodge : "",
      type : "Selfcontain",
      region : "Choba",
      sponsored: true,
      rentCost: "120000",
      preconditions: [
        "A roomie who is God fearing",
        "Intelligent",
        "Nice to be around with",
        "Must be a good cook",
      ],
      lodgeAvatar: [
        {
          fields: {
            file: {
              url: null
            }
          }
        },
      ],
      roommieAvatar: [
        {
          fields: {
            file: {
              url: caretaker1
            }
          }
        },
      ]
    }
  },
  {
    sys: {
        id: "2"
      },
      fields: {
  
        fname: "John",
        school: "uniport",
        dept: "Engineering",
        level: "basic",
        gender: "male",
        interestedIn: "male",
        noOfRoommies: "2",
        isRoommieFound : false,
       
        contact : "09066435763",
        isLodgeFound : true,
        nameOfLodge : "Andyz Palace",
        type : "Selfcontain",
        region : "Alakahia",
        rentCost: "150000",
        preconditions: [
          "A roomie who is God fearing",
          "Intelligent",
          "Nice to be around with",
          "Must be a good cook",
        ],
        lodgeAvatar: [
          {
            fields: {
              file: {
                url: room1
              }
            }
          },
        ],
        roommieAvatar: [
          {
            fields: {
              file: {
                url: caretaker2
              }
            }
          },
        ]
      },
      
  },
  {
    sys: {
        id: "3"
      },
      fields: {
  
        fname: "Dave",
        school: "uniport",
        dept: "Engineering",
        level: "100L",
        gender: "male",
        interestedIn: "male",
        noOfRoommies: "",
        isRoommieFound : true,
     
        contact : "09066435763",
        isLodgeFound : true,
        nameOfLodge : "Andyz Palace",
        type : "Selfcontain",
        region : "Alakahia",
        rentCost: "150000",
        preconditions: [
          "A roomie who is God fearing",
          "Intelligent",
          "Nice to be around with",
          "Must be a good cook",
        ],
        lodgeAvatar: [
          {
            fields: {
              file: {
                url: room2
              }
            }
          },
        ],
        roommieAvatar: [
          {
            fields: {
              file: {
                url: caretaker2
              }
            }
          },
        ]
      },
      
  },
  {
    sys: {
        id: "4"
      },
      fields: {
  
        fname: "Tonyo",
        school: "uniport",
        dept: "Engineering",
        level: "200L",
        gender: "female",
        interestedIn: "male",
        noOfRoommies: "2",
        isRoommieFound : true,
       
        contact : "09066435763",
        isLodgeFound : true,
        nameOfLodge : "Andyz Palace",
        type : "1 room",
        region : "Choba",
        rentCost: "150000",
        preconditions: [
          "A roomie who is God fearing",
          "Intelligent",
          "Nice to be around with",
          "Must be a good cook",
        ],
        lodgeAvatar: [
          {
            fields: {
              file: {
                url: room2
              }
            }
          },
        ],
        roommieAvatar: [
          {
            fields: {
              file: {
                url: caretaker2
              }
            }
          },
        ]
      },
      
  },
  {
    sys: {
        id: "5"
      },
      fields: {
  
        fname: "Johnson",
        school: "uniport",
        dept: "Engineering",
        level: "basic",
        gender: "male",
        interestedIn: "male",
        noOfRoommies: "1",
        isRoommieFound : false,
        sponsored: false,
        contact : "09066435763",
        isLodgeFound : true,
        nameOfLodge : "Andyz Palace",
        type : "Selfcontain",
        region : "Aluu",
        rentCost: "150000",
        preconditions: [
          "A roomie who is God fearing",
          "Intelligent",
          "Nice to be around with",
          "Must be a good cook",
        ],
        lodgeAvatar: [
          {
            fields: {
              file: {
                url: room2
              }
            }
          },
        ],
        roommieAvatar: [
          {
            fields: {
              file: {
                url: caretaker2
              }
            }
          },
        ]
      },
      
  },
  {
    sys: {
        id: "6"
      },
      fields: {
  
        fname: "Gift",
        school: "delsu",
        region : "express",
        dept: "Engineering",
        level: "100L",
        gender: "feamle",
        interestedIn: "female",
        noOfRoommies: "1",
        isRoommieFound : false,
        sponsored: false,
        contact : "09066435763",
        isLodgeFound : true,
        nameOfLodge : "Andyz Palace",
        type : "Selfcontain",
        
        rentCost: "150000",
        preconditions: [
          "A roomie who is God fearing",
          "Intelligent",
          "Nice to be around with",
          "Must be a good cook",
        ],
        lodgeAvatar: [
          {
            fields: {
              file: {
                url: room2
              }
            }
          },
        ],
        roommieAvatar: [
          {
            fields: {
              file: {
                url: caretaker2
              }
            }
          },
        ]
      },   
  },

  //new set of data starts here
  {
    sys: {
        id: "7"
      },
      fields: {
  
        fname: "Gift",
        school: "delsu",
        region : "express",
        dept: "Engineering",
        level: "200L",
        gender: "feamle",
        interestedIn: "female",
        noOfRoommies: "1",
        isRoommieFound : false,
        sponsored: false,
        contact : "09066435763",
        isLodgeFound : true,
        nameOfLodge : "Andyz Palace",
        type : "Selfcontain",
        
        rentCost: "150000",
        preconditions: [
          "A roomie who is God fearing",
          "Intelligent",
          "Nice to be around with",
          "Must be a good cook",
        ],
        lodgeAvatar: [
          {
            fields: {
              file: {
                url: room2
              }
            }
          },
        ],
        roommieAvatar: [
          {
            fields: {
              file: {
                url: caretaker2
              }
            }
          },
        ]
      },   
  },
  //another set
  {
    sys: {
        id: "8"
      },
      fields: {
  
        fname: "Gift",
        school: "delsu",
        region : "express",
        dept: "Engineering",
        level: "300L",
        gender: "feamle",
        interestedIn: "male",
        noOfRoommies: "2",
        isRoommieFound : true,
        sponsored: false,
        contact : "09066435763",
        isLodgeFound : true,
        nameOfLodge : "Andyz Palace",
        type : "Selfcontain",
        
        rentCost: "150000",
        preconditions: [
          "A roomie who is God fearing",
          "Intelligent",
          "Nice to be around with",
          "Must be a good cook",
        ],
        lodgeAvatar: [
          {
            fields: {
              file: {
                url: room2
              }
            }
          },
        ],
        roommieAvatar: [
          {
            fields: {
              file: {
                url: caretaker2
              }
            }
          },
        ]
      },   
  },
  //3
  {
    sys: {
        id: "9"
      },
      fields: {
  
        fname: "Gift",
        school: "delsu",
        region : "express",
        dept: "Engineering",
        level: "100L",
        gender: "feamle",
        interestedIn: "female",
        noOfRoommies: "1",
        isRoommieFound : false,
        sponsored: false,
        contact : "09066435763",
        isLodgeFound : true,
        nameOfLodge : "Andyz Palace",
        type : "Selfcontain",
        
        rentCost: "150000",
        preconditions: [
          "A roomie who is God fearing",
          "Intelligent",
          "Nice to be around with",
          "Must be a good cook",
        ],
        lodgeAvatar: [
          {
            fields: {
              file: {
                url: room2
              }
            }
          },
        ],
        roommieAvatar: [
          {
            fields: {
              file: {
                url: caretaker2
              }
            }
          },
        ]
      },   
  },
  //4
  {
    sys: {
        id: "10"
      },
      fields: {
  
        fname: "Gift",
        school: "delsu",
        region : "express",
        dept: "Engineering",
        level: "100L",
        gender: "feamle",
        interestedIn: "female",
        noOfRoommies: "1",
        isRoommieFound : false,
        sponsored: false,
        contact : "09066435763",
        isLodgeFound : true,
        nameOfLodge : "Andyz Palace",
        type : "Selfcontain",
        
        rentCost: "150000",
        preconditions: [
          "A roomie who is God fearing",
          "Intelligent",
          "Nice to be around with",
          "Must be a good cook",
        ],
        lodgeAvatar: [
          {
            fields: {
              file: {
                url: room2
              }
            }
          },
        ],
        roommieAvatar: [
          {
            fields: {
              file: {
                url: caretaker2
              }
            }
          },
        ]
      },   
  },
  //5
  {
    sys: {
        id: "11"
      },
      fields: {
  
        fname: "Gift",
        school: "delsu",
        region : "express",
        dept: "Engineering",
        level: "200L",
        gender: "female",
        interestedIn: "female",
        noOfRoommies: "1",
        isRoommieFound : false,
        sponsored: false,
        contact : "09066435763",
        isLodgeFound : true,
        nameOfLodge : "Andyz Palace",
        type : "Selfcontain",
        
        rentCost: "150000",
        preconditions: [
          "A roomie who is God fearing",
          "Intelligent",
          "Nice to be around with",
          "Must be a good cook",
        ],
        lodgeAvatar: [
          {
            fields: {
              file: {
                url: room2
              }
            }
          },
        ],
        roommieAvatar: [
          {
            fields: {
              file: {
                url: caretaker2
              }
            }
          },
        ]
      },   
  },
  //6
  {
    sys: {
        id: "12"
      },
      fields: {
  
        fname: "Gift",
        school: "delsu",
        region : "express",
        dept: "Engineering",
        level: "400L",
        gender: "female",
        interestedIn: "female",
        noOfRoommies: "1",
        isRoommieFound : false,
        sponsored: false,
        contact : "09066435763",
        isLodgeFound : true,
        nameOfLodge : "Andyz Palace",
        type : "Selfcontain",
        
        rentCost: "150000",
        preconditions: [
          "A roomie who is God fearing",
          "Intelligent",
          "Nice to be around with",
          "Must be a good cook",
        ],
        lodgeAvatar: [
          {
            fields: {
              file: {
                url: room2
              }
            }
          },
        ],
        roommieAvatar: [
          {
            fields: {
              file: {
                url: caretaker2
              }
            }
          },
        ]
      },   
  },
  //7
  {
    sys: {
        id: "13"
      },
      fields: {
  
        fname: "Gift",
        school: "delsu",
        region : "express",
        dept: "Engineering",
        level: "300L",
        gender: "female",
        interestedIn: "female",
        noOfRoommies: "1",
        isRoommieFound : false,
        sponsored: false,
        contact : "09066435763",
        isLodgeFound : true,
        nameOfLodge : "Andyz Palace",
        type : "Selfcontain",
        
        rentCost: "150000",
        preconditions: [
          "A roomie who is God fearing",
          "Intelligent",
          "Nice to be around with",
          "Must be a good cook",
        ],
        lodgeAvatar: [
          {
            fields: {
              file: {
                url: room2
              }
            }
          },
        ],
        roommieAvatar: [
          {
            fields: {
              file: {
                url: caretaker2
              }
            }
          },
        ]
      },   
  },
  //8
  {
    sys: {
        id: "14"
      },
      fields: {
  
        fname: "Gift",
        school: "delsu",
        region : "express",
        dept: "Engineering",
        level: "100L",
        gender: "feamle",
        interestedIn: "female",
        noOfRoommies: "1",
        isRoommieFound : false,
         sponsored: false,
        contact : "09066435763",
        isLodgeFound : true,
        nameOfLodge : "Andyz Palace",
        type : "Selfcontain",
        
        rentCost: "150000",
        preconditions: [
          "A roomie who is God fearing",
          "Intelligent",
          "Nice to be around with",
          "Must be a good cook",
        ],
        lodgeAvatar: [
          {
            fields: {
              file: {
                url: room2
              }
            }
          },
        ],
        roommieAvatar: [
          {
            fields: {
              file: {
                url: caretaker2
              }
            }
          },
        ]
      },   
  },
  //9
  {
    sys: {
        id: "15"
      },
      fields: {
  
        fname: "Gift",
        school: "delsu",
        region : "express",
        dept: "Engineering",
        level: "500L",
        gender: "feamle",
        interestedIn: "female",
        noOfRoommies: "2",
        isRoommieFound : true,
        sponsored: false,
        contact : "09066435763",
        isLodgeFound : true,
        nameOfLodge : "Andyz Palace",
        type : "Selfcontain",
        
        rentCost: "150000",
        preconditions: [
          "A roomie who is God fearing",
          "Intelligent",
          "Nice to be around with",
          "Must be a good cook",
        ],
        lodgeAvatar: [
          {
            fields: {
              file: {
                url: room2
              }
            }
          },
        ],
        roommieAvatar: [
          {
            fields: {
              file: {
                url: caretaker2
              }
            }
          },
        ]
      },   
  },
  //10
  {
    sys: {
        id: "16"
      },
      fields: {
  
        fname: "Gift",
        school: "delsu",
        region : "express",
        dept: "Engineering",
        level: "100L",
        gender: "female",
        interestedIn: "female",
        noOfRoommies: "2",
        isRoommieFound : false,
        sponsored: false,
        contact : "09066435763",
        isLodgeFound : true,
        nameOfLodge : "Andyz Palace",
        type : "Selfcontain",
        
        rentCost: "150000",
        preconditions: [
          "A roomie who is God fearing",
          "Intelligent",
          "Nice to be around with",
          "Must be a good cook",
        ],
        lodgeAvatar: [
          {
            fields: {
              file: {
                url: room2
              }
            }
          },
        ],
        roommieAvatar: [
          {
            fields: {
              file: {
                url: caretaker2
              }
            }
          },
        ]
      },   
  },
   
];

export default data;

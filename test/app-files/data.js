var APP_DATA = {
  "scenes": [
    {
      "id": "0-outside",
      "name": "outside",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.13432828867302504,
          "pitch": -0.10944922023605486,
          "rotation": 0,
          "target": "1-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-lobby",
      "name": "lobby",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.05943431738392135,
          "pitch": -0.0202575578422568,
          "rotation": 0,
          "target": "0-outside"
        },
        {
          "yaw": 0.40506596483278656,
          "pitch": -0.05082437341659585,
          "rotation": 0,
          "target": "23-reception"
        },
        {
          "yaw": 1.9720835208656542,
          "pitch": 0.17095148698646057,
          "rotation": 3.141592653589793,
          "target": "2-1f-hallway1"
        },
        {
          "yaw": -3.0284061585435396,
          "pitch": -0.0500421940033533,
          "rotation": 0,
          "target": "17-faculty"
        },
        {
          "yaw": -1.480486201164009,
          "pitch": -0.14918375864106537,
          "rotation": 0,
          "target": "14-comlab2"
        },
        {
          "yaw": -2.904907780714936,
          "pitch": 0.13886886885066474,
          "rotation": 3.141592653589793,
          "target": "31-staff-cr"
        },
        {
          "yaw": 2.043495041805528,
          "pitch": -0.44306742255603915,
          "rotation": 6.283185307179586,
          "target": "8-2f-hallway1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-1f-hallway1",
      "name": "1f hallway1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.9315779241856799,
          "pitch": 0.14968902690800157,
          "rotation": 3.141592653589793,
          "target": "1-lobby"
        },
        {
          "yaw": -0.028148491686476262,
          "pitch": 0.11975591200343416,
          "rotation": 3.141592653589793,
          "target": "3-1f-hallway2"
        },
        {
          "yaw": 0.17892052537154335,
          "pitch": -0.06974073606115283,
          "rotation": 0,
          "target": "17-faculty"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-1f-hallway2",
      "name": "1f hallway2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.021254521273982974,
          "pitch": 0.07771806974334083,
          "rotation": 3.141592653589793,
          "target": "2-1f-hallway1"
        },
        {
          "yaw": -0.6360379365717623,
          "pitch": -0.12641708218171388,
          "rotation": 12.566370614359176,
          "target": "24-room-101"
        },
        {
          "yaw": -0.15983391432899197,
          "pitch": -0.07525774965404608,
          "rotation": 0,
          "target": "17-faculty"
        },
        {
          "yaw": -2.5839134348282027,
          "pitch": -0.11813073773098282,
          "rotation": 0,
          "target": "25-room-102"
        },
        {
          "yaw": -3.0524772551443924,
          "pitch": 0.06696088343624673,
          "rotation": 3.141592653589793,
          "target": "4-1f-hallway3"
        },
        {
          "yaw": -2.9087414156532763,
          "pitch": -0.06740606547487538,
          "rotation": 0,
          "target": "26-room-103"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-1f-hallway3",
      "name": "1F hallway3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.33517690618032603,
          "pitch": -0.04569118911098968,
          "rotation": 3.141592653589793,
          "target": "26-room-103"
        },
        {
          "yaw": -0.0423692770146058,
          "pitch": 0.12976233482678445,
          "rotation": 3.141592653589793,
          "target": "3-1f-hallway2"
        },
        {
          "yaw": -1.5960369206667018,
          "pitch": 0.20722730671525547,
          "rotation": 3.141592653589793,
          "target": "5-1f-hallway4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-1f-hallway4",
      "name": "1F hallway4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.3722363881643336,
          "pitch": -0.1270950551290433,
          "rotation": 0,
          "target": "33-storage-room"
        },
        {
          "yaw": -0.10829365135468727,
          "pitch": -0.05878574064619002,
          "rotation": 0,
          "target": "34-utility-room"
        },
        {
          "yaw": 2.7746035758830168,
          "pitch": 0.29164295701086473,
          "rotation": 3.141592653589793,
          "target": "4-1f-hallway3"
        },
        {
          "yaw": -0.33177686097651105,
          "pitch": -0.06174937351930865,
          "rotation": 4.71238898038469,
          "target": "16-cr-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-2f-h1",
      "name": "2f h1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.050326040074285316,
          "pitch": 0.12987891154236308,
          "rotation": 3.141592653589793,
          "target": "7-2f-h2"
        },
        {
          "yaw": -1.7879589058233165,
          "pitch": -0.1437525002928446,
          "rotation": 0,
          "target": "27-room-202"
        },
        {
          "yaw": 1.6567089517826208,
          "pitch": 0.3355956452751734,
          "rotation": 3.141592653589793,
          "target": "8-2f-hallway1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-2f-h2",
      "name": "2f h2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.4374143831438904,
          "pitch": -0.050259797989490096,
          "rotation": 0,
          "target": "19-guidance"
        },
        {
          "yaw": -0.6135812209810414,
          "pitch": -0.021351271873367494,
          "rotation": 0,
          "target": "13-clinic"
        },
        {
          "yaw": 0.06681320396232593,
          "pitch": 0.10088823504972311,
          "rotation": 3.141592653589793,
          "target": "6-2f-h1"
        },
        {
          "yaw": 0.5209286395462218,
          "pitch": -0.11482876180329349,
          "rotation": 0,
          "target": "11-201"
        },
        {
          "yaw": 3.097100956504658,
          "pitch": -0.09820657445725445,
          "rotation": 0,
          "target": "11-201"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-2f-hallway1",
      "name": "2f hallway1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.3074850098906712,
          "pitch": 0.2813122565853732,
          "rotation": 3.141592653589793,
          "target": "6-2f-h1"
        },
        {
          "yaw": -3.0693352230409303,
          "pitch": 0.1659340540888401,
          "rotation": 3.141592653589793,
          "target": "9-2f-hallway2"
        },
        {
          "yaw": -2.6363077494518024,
          "pitch": -0.03549302498875129,
          "rotation": 0,
          "target": "28-room-203"
        },
        {
          "yaw": -0.007157256439313642,
          "pitch": 0.5559476462826431,
          "rotation": 3.141592653589793,
          "target": "1-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-2f-hallway2",
      "name": "2f hallway2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.10769326386040312,
          "pitch": 0.12003286115621847,
          "rotation": 3.141592653589793,
          "target": "8-2f-hallway1"
        },
        {
          "yaw": -0.3870460792808377,
          "pitch": -0.05749204544642339,
          "rotation": 0,
          "target": "28-room-203"
        },
        {
          "yaw": -1.3514336968951355,
          "pitch": -0.13066937940297052,
          "rotation": 0,
          "target": "12-204"
        },
        {
          "yaw": 3.0459531401140456,
          "pitch": 0.038097424347494524,
          "rotation": 3.141592653589793,
          "target": "10-2f-hallway3"
        },
        {
          "yaw": -2.901147388687006,
          "pitch": -0.06109801883009425,
          "rotation": 0,
          "target": "29-room-205"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-2f-hallway3",
      "name": "2f hallway3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.11819201802482837,
          "pitch": 0.022860046492647612,
          "rotation": 3.141592653589793,
          "target": "18-fire-exit"
        },
        {
          "yaw": 1.4749439862359779,
          "pitch": 0.12093020057566761,
          "rotation": 3.141592653589793,
          "target": "9-2f-hallway2"
        },
        {
          "yaw": 1.2202079299451754,
          "pitch": -0.028469450591812162,
          "rotation": 0,
          "target": "30-room-206"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-201",
      "name": "201",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.11719016635327506,
          "pitch": -0.022776575362222218,
          "rotation": 0,
          "target": "7-2f-h2"
        },
        {
          "yaw": -0.9409133230931772,
          "pitch": -0.0786122546078829,
          "rotation": 0,
          "target": "7-2f-h2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-204",
      "name": "204",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.4184165556928594,
          "pitch": -0.027136905139091283,
          "rotation": 0,
          "target": "9-2f-hallway2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-clinic",
      "name": "clinic",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.05177531683060188,
          "pitch": -0.01343585549837556,
          "rotation": 0,
          "target": "7-2f-h2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-comlab2",
      "name": "comlab2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.936060362601074,
          "pitch": 0.2209189421267368,
          "rotation": 3.141592653589793,
          "target": "1-lobby"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.708498769167897,
          "pitch": 0.035581243693018294,
          "title": "Operating room",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "15-cr-area",
      "name": "cr area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.011381445808613222,
          "pitch": 0.208978997888142,
          "rotation": 3.141592653589793,
          "target": "16-cr-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-cr-stairs",
      "name": "cr stairs",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.2476255521432691,
          "pitch": 0.6982174675945014,
          "rotation": 7.853981633974483,
          "target": "5-1f-hallway4"
        },
        {
          "yaw": -2.094128031872522,
          "pitch": -0.14215843386414306,
          "rotation": 0,
          "target": "20-library"
        },
        {
          "yaw": -2.592576331990461,
          "pitch": 0.18251661709382283,
          "rotation": 3.141592653589793,
          "target": "15-cr-area"
        },
        {
          "yaw": -3.07253546355739,
          "pitch": -0.4717484419925704,
          "rotation": 0,
          "target": "22-peh"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-faculty",
      "name": "faculty",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.04034094217550788,
          "pitch": -0.027190386998613647,
          "rotation": 0,
          "target": "31-staff-cr"
        },
        {
          "yaw": 3.0596268682285146,
          "pitch": -0.057676630495318904,
          "rotation": 0,
          "target": "2-1f-hallway1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-fire-exit",
      "name": "fire exit",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.1170051102184466,
          "pitch": 0.17536809203291526,
          "rotation": 3.141592653589793,
          "target": "10-2f-hallway3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-guidance",
      "name": "guidance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.3019394653722234,
          "pitch": 0.04338420046860669,
          "rotation": 0,
          "target": "21-office"
        },
        {
          "yaw": -0.17666422142359295,
          "pitch": 0.012743883738345119,
          "rotation": 0,
          "target": "7-2f-h2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-library",
      "name": "library",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.08485507478397736,
          "pitch": -0.04208739440791831,
          "rotation": 0,
          "target": "16-cr-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-office",
      "name": "office",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.4164692808114747,
          "pitch": 0.009074546591271826,
          "rotation": 0,
          "target": "19-guidance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-peh",
      "name": "peh",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6308360697563575,
          "pitch": 0.10867827171177247,
          "rotation": 9.42477796076938,
          "target": "16-cr-stairs"
        },
        {
          "yaw": 0.6340840925976678,
          "pitch": -0.3992098234753705,
          "rotation": 0,
          "target": "32-storage-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-reception",
      "name": "reception",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6134737504042462,
          "pitch": -0.0725192225128346,
          "rotation": 0,
          "target": "1-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-room-101",
      "name": "room 101",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.38682661922636896,
          "pitch": -0.05861466631454704,
          "rotation": 6.283185307179586,
          "target": "3-1f-hallway2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-room-102",
      "name": "room 102",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.3334735126203121,
          "pitch": -0.028455515272522547,
          "rotation": 0,
          "target": "3-1f-hallway2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-room-103",
      "name": "room 103",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.2689578641748884,
          "pitch": -0.09782692867589304,
          "rotation": 0,
          "target": "4-1f-hallway3"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.8407406643268196,
          "pitch": -0.12737911572694216,
          "title": "Tools and Equipments Laboratory",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "27-room-202",
      "name": "room 202",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.20067559347406316,
          "pitch": -0.034700431359649286,
          "rotation": 0,
          "target": "6-2f-h1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-room-203",
      "name": "room 203",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.41788796324330413,
          "pitch": -0.06322950537252936,
          "rotation": 0,
          "target": "8-2f-hallway1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-room-205",
      "name": "room 205",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.25405147012992657,
          "pitch": -0.020751990769706907,
          "rotation": 0,
          "target": "9-2f-hallway2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-room-206",
      "name": "room 206",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.47435052067881855,
          "pitch": -0.03020148511922116,
          "rotation": 0,
          "target": "10-2f-hallway3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "31-staff-cr",
      "name": "staff cr",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.245881487407008,
          "pitch": 0.0451786781880088,
          "rotation": 0,
          "target": "17-faculty"
        },
        {
          "yaw": 2.5717199308059886,
          "pitch": 0.1928958654295485,
          "rotation": 3.141592653589793,
          "target": "1-lobby"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.798790050958605,
          "pitch": -0.018986121143475643,
          "title": "Administrator's office",
          "text": "<br>"
        },
        {
          "yaw": 0.1337866780441459,
          "pitch": -0.12711625552575612,
          "title": "staff's comfort room",
          "text": "Text"
        }
      ]
    },
    {
      "id": "32-storage-area",
      "name": "storage area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.04434838285805043,
          "pitch": 0.19955979078406472,
          "rotation": 3.141592653589793,
          "target": "22-peh"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "33-storage-room",
      "name": "storage room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.06021394519083323,
          "pitch": -0.09944271776137725,
          "rotation": 0,
          "target": "5-1f-hallway4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "34-utility-room",
      "name": "utility room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.3717276627907786,
          "pitch": -0.028950659787239985,
          "rotation": 0,
          "target": "5-1f-hallway4"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};

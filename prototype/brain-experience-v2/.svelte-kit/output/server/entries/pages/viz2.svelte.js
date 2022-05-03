import { c as create_ssr_component } from "../../chunks/index-d88a766f.js";
import "d3-scale";
import "d3-force";
var data = [
  {
    neuron: "25",
    time: "3",
    value: "42",
    stimulus: "14"
  },
  {
    neuron: "8",
    time: "5",
    value: "70",
    stimulus: "67"
  },
  {
    neuron: "7",
    time: "1",
    value: "21",
    stimulus: "46"
  },
  {
    neuron: "20",
    time: "4",
    value: "48",
    stimulus: "83"
  },
  {
    neuron: "49",
    time: "1",
    value: "31",
    stimulus: "82"
  },
  {
    neuron: "10",
    time: "5",
    value: "55",
    stimulus: "40"
  },
  {
    neuron: "11",
    time: "4",
    value: "6",
    stimulus: "89"
  },
  {
    neuron: "40",
    time: "4",
    value: "57",
    stimulus: "39"
  },
  {
    neuron: "6",
    time: "2",
    value: "27",
    stimulus: "25"
  },
  {
    neuron: "20",
    time: "4",
    value: "49",
    stimulus: "50"
  },
  {
    neuron: "30",
    time: "4",
    value: "11",
    stimulus: "32"
  },
  {
    neuron: "13",
    time: "1",
    value: "76",
    stimulus: "30"
  },
  {
    neuron: "29",
    time: "4",
    value: "8",
    stimulus: "18"
  },
  {
    neuron: "36",
    time: "5",
    value: "20",
    stimulus: "50"
  },
  {
    neuron: "46",
    time: "3",
    value: "8",
    stimulus: "63"
  },
  {
    neuron: "34",
    time: "2",
    value: "42",
    stimulus: "31"
  },
  {
    neuron: "32",
    time: "4",
    value: "50",
    stimulus: "41"
  },
  {
    neuron: "25",
    time: "5",
    value: "13",
    stimulus: "24"
  },
  {
    neuron: "10",
    time: "2",
    value: "22",
    stimulus: "84"
  },
  {
    neuron: "9",
    time: "3",
    value: "80",
    stimulus: "21"
  },
  {
    neuron: "9",
    time: "5",
    value: "50",
    stimulus: "62"
  },
  {
    neuron: "3",
    time: "3",
    value: "13",
    stimulus: "91"
  },
  {
    neuron: "41",
    time: "4",
    value: "90",
    stimulus: "21"
  },
  {
    neuron: "37",
    time: "5",
    value: "98",
    stimulus: "20"
  },
  {
    neuron: "2",
    time: "1",
    value: "55",
    stimulus: "70"
  },
  {
    neuron: "11",
    time: "2",
    value: "18",
    stimulus: "68"
  },
  {
    neuron: "43",
    time: "4",
    value: "59",
    stimulus: "83"
  },
  {
    neuron: "38",
    time: "5",
    value: "1",
    stimulus: "58"
  },
  {
    neuron: "36",
    time: "5",
    value: "73",
    stimulus: "15"
  },
  {
    neuron: "28",
    time: "4",
    value: "92",
    stimulus: "42"
  },
  {
    neuron: "42",
    time: "4",
    value: "92",
    stimulus: "68"
  },
  {
    neuron: "25",
    time: "1",
    value: "62",
    stimulus: "91"
  },
  {
    neuron: "22",
    time: "5",
    value: "62",
    stimulus: "75"
  },
  {
    neuron: "23",
    time: "2",
    value: "33",
    stimulus: "59"
  },
  {
    neuron: "47",
    time: "2",
    value: "5",
    stimulus: "93"
  },
  {
    neuron: "25",
    time: "1",
    value: "21",
    stimulus: "68"
  },
  {
    neuron: "1",
    time: "2",
    value: "46",
    stimulus: "54"
  },
  {
    neuron: "33",
    time: "2",
    value: "94",
    stimulus: "31"
  },
  {
    neuron: "2",
    time: "1",
    value: "85",
    stimulus: "61"
  },
  {
    neuron: "34",
    time: "4",
    value: "34",
    stimulus: "11"
  },
  {
    neuron: "31",
    time: "5",
    value: "21",
    stimulus: "40"
  },
  {
    neuron: "26",
    time: "4",
    value: "7",
    stimulus: "48"
  },
  {
    neuron: "11",
    time: "1",
    value: "35",
    stimulus: "77"
  },
  {
    neuron: "3",
    time: "1",
    value: "33",
    stimulus: "17"
  },
  {
    neuron: "34",
    time: "5",
    value: "86",
    stimulus: "64"
  },
  {
    neuron: "35",
    time: "4",
    value: "96",
    stimulus: "89"
  },
  {
    neuron: "21",
    time: "4",
    value: "79",
    stimulus: "51"
  },
  {
    neuron: "9",
    time: "2",
    value: "53",
    stimulus: "65"
  },
  {
    neuron: "50",
    time: "3",
    value: "5",
    stimulus: "90"
  },
  {
    neuron: "13",
    time: "5",
    value: "34",
    stimulus: "16"
  },
  {
    neuron: "25",
    time: "4",
    value: "69",
    stimulus: "59"
  },
  {
    neuron: "31",
    time: "2",
    value: "62",
    stimulus: "19"
  },
  {
    neuron: "4",
    time: "2",
    value: "16",
    stimulus: "41"
  },
  {
    neuron: "33",
    time: "3",
    value: "44",
    stimulus: "6"
  },
  {
    neuron: "22",
    time: "4",
    value: "98",
    stimulus: "23"
  },
  {
    neuron: "38",
    time: "5",
    value: "83",
    stimulus: "45"
  },
  {
    neuron: "37",
    time: "2",
    value: "82",
    stimulus: "32"
  },
  {
    neuron: "15",
    time: "1",
    value: "99",
    stimulus: "67"
  },
  {
    neuron: "34",
    time: "1",
    value: "75",
    stimulus: "56"
  },
  {
    neuron: "39",
    time: "2",
    value: "52",
    stimulus: "86"
  },
  {
    neuron: "31",
    time: "1",
    value: "12",
    stimulus: "48"
  },
  {
    neuron: "29",
    time: "2",
    value: "44",
    stimulus: "2"
  },
  {
    neuron: "25",
    time: "4",
    value: "62",
    stimulus: "82"
  },
  {
    neuron: "2",
    time: "3",
    value: "54",
    stimulus: "55"
  },
  {
    neuron: "10",
    time: "4",
    value: "4",
    stimulus: "91"
  },
  {
    neuron: "10",
    time: "5",
    value: "5",
    stimulus: "67"
  },
  {
    neuron: "49",
    time: "5",
    value: "48",
    stimulus: "36"
  },
  {
    neuron: "47",
    time: "2",
    value: "1",
    stimulus: "70"
  },
  {
    neuron: "10",
    time: "3",
    value: "15",
    stimulus: "9"
  },
  {
    neuron: "28",
    time: "1",
    value: "53",
    stimulus: "11"
  },
  {
    neuron: "14",
    time: "5",
    value: "56",
    stimulus: "94"
  },
  {
    neuron: "38",
    time: "5",
    value: "54",
    stimulus: "55"
  },
  {
    neuron: "26",
    time: "1",
    value: "75",
    stimulus: "71"
  },
  {
    neuron: "15",
    time: "3",
    value: "70",
    stimulus: "99"
  },
  {
    neuron: "3",
    time: "1",
    value: "50",
    stimulus: "80"
  },
  {
    neuron: "1",
    time: "3",
    value: "95",
    stimulus: "28"
  },
  {
    neuron: "2",
    time: "2",
    value: "61",
    stimulus: "5"
  },
  {
    neuron: "21",
    time: "1",
    value: "61",
    stimulus: "54"
  },
  {
    neuron: "42",
    time: "5",
    value: "82",
    stimulus: "19"
  },
  {
    neuron: "30",
    time: "1",
    value: "54",
    stimulus: "68"
  },
  {
    neuron: "39",
    time: "1",
    value: "30",
    stimulus: "20"
  },
  {
    neuron: "31",
    time: "5",
    value: "29",
    stimulus: "89"
  },
  {
    neuron: "22",
    time: "2",
    value: "52",
    stimulus: "57"
  },
  {
    neuron: "21",
    time: "5",
    value: "18",
    stimulus: "85"
  },
  {
    neuron: "17",
    time: "3",
    value: "20",
    stimulus: "96"
  },
  {
    neuron: "26",
    time: "5",
    value: "69",
    stimulus: "80"
  },
  {
    neuron: "14",
    time: "2",
    value: "96",
    stimulus: "92"
  },
  {
    neuron: "18",
    time: "2",
    value: "62",
    stimulus: "11"
  },
  {
    neuron: "10",
    time: "4",
    value: "73",
    stimulus: "55"
  },
  {
    neuron: "1",
    time: "1",
    value: "23",
    stimulus: "62"
  },
  {
    neuron: "22",
    time: "3",
    value: "17",
    stimulus: "15"
  },
  {
    neuron: "40",
    time: "2",
    value: "27",
    stimulus: "80"
  },
  {
    neuron: "35",
    time: "5",
    value: "65",
    stimulus: "85"
  },
  {
    neuron: "3",
    time: "2",
    value: "93",
    stimulus: "40"
  },
  {
    neuron: "13",
    time: "5",
    value: "45",
    stimulus: "79"
  },
  {
    neuron: "48",
    time: "3",
    value: "64",
    stimulus: "70"
  },
  {
    neuron: "26",
    time: "2",
    value: "74",
    stimulus: "11"
  },
  {
    neuron: "23",
    time: "3",
    value: "52",
    stimulus: "58"
  },
  {
    neuron: "34",
    time: "2",
    value: "59",
    stimulus: "40"
  },
  {
    neuron: "49",
    time: "4",
    value: "48",
    stimulus: "98"
  },
  {
    neuron: "24",
    time: "5",
    value: "33",
    stimulus: "81"
  },
  {
    neuron: "35",
    time: "5",
    value: "79",
    stimulus: "32"
  },
  {
    neuron: "9",
    time: "1",
    value: "30",
    stimulus: "87"
  },
  {
    neuron: "48",
    time: "2",
    value: "98",
    stimulus: "64"
  },
  {
    neuron: "13",
    time: "5",
    value: "30",
    stimulus: "43"
  },
  {
    neuron: "33",
    time: "3",
    value: "70",
    stimulus: "22"
  },
  {
    neuron: "2",
    time: "4",
    value: "56",
    stimulus: "7"
  },
  {
    neuron: "46",
    time: "4",
    value: "10",
    stimulus: "61"
  },
  {
    neuron: "10",
    time: "5",
    value: "78",
    stimulus: "10"
  },
  {
    neuron: "4",
    time: "4",
    value: "51",
    stimulus: "12"
  },
  {
    neuron: "38",
    time: "1",
    value: "57",
    stimulus: "34"
  },
  {
    neuron: "14",
    time: "4",
    value: "28",
    stimulus: "12"
  },
  {
    neuron: "16",
    time: "1",
    value: "15",
    stimulus: "44"
  },
  {
    neuron: "9",
    time: "1",
    value: "45",
    stimulus: "4"
  },
  {
    neuron: "11",
    time: "5",
    value: "20",
    stimulus: "98"
  },
  {
    neuron: "49",
    time: "4",
    value: "54",
    stimulus: "8"
  },
  {
    neuron: "41",
    time: "5",
    value: "100",
    stimulus: "28"
  },
  {
    neuron: "17",
    time: "3",
    value: "69",
    stimulus: "92"
  },
  {
    neuron: "39",
    time: "3",
    value: "32",
    stimulus: "41"
  },
  {
    neuron: "37",
    time: "5",
    value: "50",
    stimulus: "17"
  },
  {
    neuron: "42",
    time: "2",
    value: "97",
    stimulus: "85"
  },
  {
    neuron: "30",
    time: "2",
    value: "79",
    stimulus: "70"
  },
  {
    neuron: "49",
    time: "4",
    value: "42",
    stimulus: "40"
  },
  {
    neuron: "40",
    time: "4",
    value: "44",
    stimulus: "72"
  },
  {
    neuron: "2",
    time: "1",
    value: "56",
    stimulus: "36"
  },
  {
    neuron: "7",
    time: "1",
    value: "47",
    stimulus: "57"
  },
  {
    neuron: "3",
    time: "1",
    value: "14",
    stimulus: "75"
  },
  {
    neuron: "4",
    time: "4",
    value: "70",
    stimulus: "44"
  },
  {
    neuron: "10",
    time: "4",
    value: "67",
    stimulus: "47"
  },
  {
    neuron: "20",
    time: "2",
    value: "46",
    stimulus: "100"
  },
  {
    neuron: "49",
    time: "5",
    value: "92",
    stimulus: "95"
  },
  {
    neuron: "20",
    time: "4",
    value: "64",
    stimulus: "66"
  },
  {
    neuron: "3",
    time: "3",
    value: "20",
    stimulus: "55"
  },
  {
    neuron: "44",
    time: "3",
    value: "38",
    stimulus: "22"
  },
  {
    neuron: "38",
    time: "5",
    value: "63",
    stimulus: "75"
  },
  {
    neuron: "46",
    time: "4",
    value: "96",
    stimulus: "7"
  },
  {
    neuron: "42",
    time: "1",
    value: "96",
    stimulus: "32"
  },
  {
    neuron: "2",
    time: "3",
    value: "51",
    stimulus: "34"
  },
  {
    neuron: "14",
    time: "4",
    value: "21",
    stimulus: "44"
  },
  {
    neuron: "13",
    time: "5",
    value: "44",
    stimulus: "28"
  },
  {
    neuron: "34",
    time: "1",
    value: "19",
    stimulus: "83"
  },
  {
    neuron: "38",
    time: "1",
    value: "52",
    stimulus: "95"
  },
  {
    neuron: "20",
    time: "2",
    value: "83",
    stimulus: "82"
  },
  {
    neuron: "10",
    time: "2",
    value: "37",
    stimulus: "5"
  },
  {
    neuron: "38",
    time: "3",
    value: "62",
    stimulus: "9"
  },
  {
    neuron: "11",
    time: "5",
    value: "67",
    stimulus: "12"
  },
  {
    neuron: "38",
    time: "1",
    value: "12",
    stimulus: "77"
  },
  {
    neuron: "24",
    time: "2",
    value: "87",
    stimulus: "73"
  },
  {
    neuron: "27",
    time: "2",
    value: "98",
    stimulus: "15"
  },
  {
    neuron: "47",
    time: "1",
    value: "88",
    stimulus: "41"
  },
  {
    neuron: "3",
    time: "3",
    value: "76",
    stimulus: "3"
  },
  {
    neuron: "40",
    time: "3",
    value: "73",
    stimulus: "17"
  },
  {
    neuron: "4",
    time: "2",
    value: "27",
    stimulus: "87"
  },
  {
    neuron: "11",
    time: "4",
    value: "15",
    stimulus: "91"
  },
  {
    neuron: "9",
    time: "4",
    value: "64",
    stimulus: "75"
  },
  {
    neuron: "3",
    time: "1",
    value: "13",
    stimulus: "41"
  },
  {
    neuron: "26",
    time: "2",
    value: "88",
    stimulus: "12"
  },
  {
    neuron: "35",
    time: "3",
    value: "70",
    stimulus: "57"
  },
  {
    neuron: "36",
    time: "3",
    value: "49",
    stimulus: "56"
  },
  {
    neuron: "12",
    time: "1",
    value: "89",
    stimulus: "61"
  },
  {
    neuron: "29",
    time: "1",
    value: "11",
    stimulus: "53"
  },
  {
    neuron: "4",
    time: "2",
    value: "65",
    stimulus: "9"
  },
  {
    neuron: "7",
    time: "4",
    value: "19",
    stimulus: "20"
  },
  {
    neuron: "43",
    time: "4",
    value: "55",
    stimulus: "91"
  },
  {
    neuron: "12",
    time: "5",
    value: "22",
    stimulus: "53"
  },
  {
    neuron: "26",
    time: "3",
    value: "94",
    stimulus: "48"
  },
  {
    neuron: "49",
    time: "2",
    value: "31",
    stimulus: "61"
  },
  {
    neuron: "40",
    time: "3",
    value: "37",
    stimulus: "83"
  },
  {
    neuron: "22",
    time: "3",
    value: "51",
    stimulus: "96"
  },
  {
    neuron: "12",
    time: "5",
    value: "29",
    stimulus: "95"
  },
  {
    neuron: "5",
    time: "1",
    value: "8",
    stimulus: "32"
  },
  {
    neuron: "35",
    time: "4",
    value: "48",
    stimulus: "9"
  },
  {
    neuron: "22",
    time: "1",
    value: "94",
    stimulus: "20"
  },
  {
    neuron: "23",
    time: "4",
    value: "47",
    stimulus: "85"
  },
  {
    neuron: "25",
    time: "3",
    value: "69",
    stimulus: "79"
  },
  {
    neuron: "29",
    time: "2",
    value: "1",
    stimulus: "78"
  },
  {
    neuron: "46",
    time: "2",
    value: "9",
    stimulus: "37"
  },
  {
    neuron: "44",
    time: "5",
    value: "88",
    stimulus: "26"
  },
  {
    neuron: "6",
    time: "3",
    value: "56",
    stimulus: "100"
  },
  {
    neuron: "49",
    time: "4",
    value: "69",
    stimulus: "41"
  },
  {
    neuron: "19",
    time: "4",
    value: "56",
    stimulus: "7"
  },
  {
    neuron: "14",
    time: "3",
    value: "94",
    stimulus: "84"
  },
  {
    neuron: "17",
    time: "4",
    value: "91",
    stimulus: "61"
  },
  {
    neuron: "7",
    time: "1",
    value: "80",
    stimulus: "54"
  },
  {
    neuron: "44",
    time: "3",
    value: "81",
    stimulus: "45"
  },
  {
    neuron: "24",
    time: "5",
    value: "88",
    stimulus: "77"
  },
  {
    neuron: "27",
    time: "4",
    value: "42",
    stimulus: "51"
  },
  {
    neuron: "31",
    time: "3",
    value: "92",
    stimulus: "94"
  },
  {
    neuron: "27",
    time: "5",
    value: "93",
    stimulus: "8"
  },
  {
    neuron: "20",
    time: "2",
    value: "38",
    stimulus: "54"
  },
  {
    neuron: "2",
    time: "3",
    value: "15",
    stimulus: "12"
  },
  {
    neuron: "6",
    time: "3",
    value: "83",
    stimulus: "100"
  },
  {
    neuron: "22",
    time: "5",
    value: "15",
    stimulus: "47"
  },
  {
    neuron: "30",
    time: "4",
    value: "38",
    stimulus: "79"
  },
  {
    neuron: "13",
    time: "2",
    value: "8",
    stimulus: "28"
  },
  {
    neuron: "43",
    time: "5",
    value: "96",
    stimulus: "71"
  },
  {
    neuron: "19",
    time: "4",
    value: "87",
    stimulus: "55"
  },
  {
    neuron: "28",
    time: "3",
    value: "87",
    stimulus: "4"
  },
  {
    neuron: "35",
    time: "3",
    value: "100",
    stimulus: "73"
  },
  {
    neuron: "49",
    time: "1",
    value: "49",
    stimulus: "17"
  },
  {
    neuron: "49",
    time: "5",
    value: "25",
    stimulus: "4"
  },
  {
    neuron: "47",
    time: "3",
    value: "73",
    stimulus: "14"
  },
  {
    neuron: "45",
    time: "3",
    value: "60",
    stimulus: "43"
  },
  {
    neuron: "3",
    time: "4",
    value: "74",
    stimulus: "44"
  },
  {
    neuron: "38",
    time: "3",
    value: "68",
    stimulus: "7"
  },
  {
    neuron: "39",
    time: "1",
    value: "39",
    stimulus: "37"
  },
  {
    neuron: "1",
    time: "2",
    value: "95",
    stimulus: "50"
  },
  {
    neuron: "39",
    time: "5",
    value: "18",
    stimulus: "53"
  },
  {
    neuron: "17",
    time: "5",
    value: "11",
    stimulus: "55"
  },
  {
    neuron: "18",
    time: "4",
    value: "100",
    stimulus: "72"
  },
  {
    neuron: "24",
    time: "2",
    value: "47",
    stimulus: "27"
  },
  {
    neuron: "39",
    time: "5",
    value: "8",
    stimulus: "54"
  },
  {
    neuron: "17",
    time: "5",
    value: "15",
    stimulus: "6"
  },
  {
    neuron: "30",
    time: "5",
    value: "30",
    stimulus: "23"
  },
  {
    neuron: "49",
    time: "2",
    value: "50",
    stimulus: "86"
  },
  {
    neuron: "32",
    time: "1",
    value: "31",
    stimulus: "62"
  },
  {
    neuron: "32",
    time: "1",
    value: "39",
    stimulus: "76"
  },
  {
    neuron: "43",
    time: "3",
    value: "91",
    stimulus: "33"
  },
  {
    neuron: "16",
    time: "2",
    value: "62",
    stimulus: "58"
  },
  {
    neuron: "41",
    time: "5",
    value: "64",
    stimulus: "35"
  },
  {
    neuron: "26",
    time: "2",
    value: "34",
    stimulus: "9"
  },
  {
    neuron: "10",
    time: "3",
    value: "88",
    stimulus: "69"
  },
  {
    neuron: "43",
    time: "4",
    value: "41",
    stimulus: "10"
  },
  {
    neuron: "8",
    time: "5",
    value: "99",
    stimulus: "97"
  },
  {
    neuron: "8",
    time: "1",
    value: "6",
    stimulus: "100"
  },
  {
    neuron: "16",
    time: "2",
    value: "29",
    stimulus: "39"
  },
  {
    neuron: "41",
    time: "4",
    value: "98",
    stimulus: "10"
  },
  {
    neuron: "20",
    time: "5",
    value: "12",
    stimulus: "78"
  },
  {
    neuron: "22",
    time: "1",
    value: "72",
    stimulus: "95"
  },
  {
    neuron: "19",
    time: "5",
    value: "48",
    stimulus: "76"
  },
  {
    neuron: "20",
    time: "4",
    value: "96",
    stimulus: "94"
  },
  {
    neuron: "41",
    time: "3",
    value: "1",
    stimulus: "80"
  },
  {
    neuron: "16",
    time: "1",
    value: "5",
    stimulus: "12"
  },
  {
    neuron: "42",
    time: "5",
    value: "38",
    stimulus: "38"
  },
  {
    neuron: "14",
    time: "4",
    value: "86",
    stimulus: "98"
  },
  {
    neuron: "31",
    time: "1",
    value: "68",
    stimulus: "95"
  },
  {
    neuron: "26",
    time: "5",
    value: "7",
    stimulus: "72"
  },
  {
    neuron: "13",
    time: "3",
    value: "55",
    stimulus: "70"
  },
  {
    neuron: "1",
    time: "2",
    value: "36",
    stimulus: "94"
  },
  {
    neuron: "38",
    time: "4",
    value: "40",
    stimulus: "49"
  },
  {
    neuron: "44",
    time: "4",
    value: "4",
    stimulus: "29"
  },
  {
    neuron: "21",
    time: "2",
    value: "99",
    stimulus: "14"
  },
  {
    neuron: "17",
    time: "4",
    value: "26",
    stimulus: "20"
  },
  {
    neuron: "42",
    time: "1",
    value: "29",
    stimulus: "32"
  },
  {
    neuron: "26",
    time: "4",
    value: "84",
    stimulus: "18"
  },
  {
    neuron: "40",
    time: "5",
    value: "90",
    stimulus: "26"
  },
  {
    neuron: "45",
    time: "4",
    value: "98",
    stimulus: "69"
  },
  {
    neuron: "45",
    time: "3",
    value: "38",
    stimulus: "44"
  },
  {
    neuron: "3",
    time: "1",
    value: "56",
    stimulus: "77"
  },
  {
    neuron: "2",
    time: "4",
    value: "84",
    stimulus: "38"
  },
  {
    neuron: "8",
    time: "1",
    value: "87",
    stimulus: "20"
  },
  {
    neuron: "39",
    time: "3",
    value: "92",
    stimulus: "38"
  },
  {
    neuron: "40",
    time: "1",
    value: "85",
    stimulus: "33"
  },
  {
    neuron: "40",
    time: "1",
    value: "8",
    stimulus: "39"
  },
  {
    neuron: "41",
    time: "3",
    value: "13",
    stimulus: "30"
  },
  {
    neuron: "33",
    time: "5",
    value: "9",
    stimulus: "77"
  },
  {
    neuron: "34",
    time: "3",
    value: "51",
    stimulus: "99"
  },
  {
    neuron: "45",
    time: "2",
    value: "15",
    stimulus: "45"
  },
  {
    neuron: "48",
    time: "3",
    value: "45",
    stimulus: "39"
  },
  {
    neuron: "18",
    time: "3",
    value: "66",
    stimulus: "75"
  },
  {
    neuron: "7",
    time: "5",
    value: "25",
    stimulus: "21"
  },
  {
    neuron: "7",
    time: "1",
    value: "19",
    stimulus: "56"
  },
  {
    neuron: "19",
    time: "2",
    value: "16",
    stimulus: "54"
  },
  {
    neuron: "40",
    time: "3",
    value: "94",
    stimulus: "62"
  },
  {
    neuron: "37",
    time: "2",
    value: "30",
    stimulus: "40"
  },
  {
    neuron: "3",
    time: "3",
    value: "58",
    stimulus: "88"
  },
  {
    neuron: "22",
    time: "1",
    value: "6",
    stimulus: "84"
  },
  {
    neuron: "31",
    time: "2",
    value: "48",
    stimulus: "83"
  },
  {
    neuron: "28",
    time: "3",
    value: "86",
    stimulus: "63"
  },
  {
    neuron: "33",
    time: "5",
    value: "6",
    stimulus: "97"
  },
  {
    neuron: "23",
    time: "2",
    value: "3",
    stimulus: "77"
  },
  {
    neuron: "29",
    time: "2",
    value: "36",
    stimulus: "63"
  },
  {
    neuron: "50",
    time: "2",
    value: "66",
    stimulus: "42"
  },
  {
    neuron: "3",
    time: "1",
    value: "11",
    stimulus: "69"
  },
  {
    neuron: "44",
    time: "1",
    value: "96",
    stimulus: "46"
  },
  {
    neuron: "48",
    time: "1",
    value: "100",
    stimulus: "34"
  },
  {
    neuron: "1",
    time: "1",
    value: "26",
    stimulus: "83"
  },
  {
    neuron: "25",
    time: "1",
    value: "19",
    stimulus: "34"
  },
  {
    neuron: "16",
    time: "2",
    value: "46",
    stimulus: "32"
  },
  {
    neuron: "43",
    time: "3",
    value: "81",
    stimulus: "80"
  },
  {
    neuron: "17",
    time: "3",
    value: "6",
    stimulus: "11"
  },
  {
    neuron: "33",
    time: "2",
    value: "65",
    stimulus: "28"
  },
  {
    neuron: "21",
    time: "3",
    value: "21",
    stimulus: "60"
  },
  {
    neuron: "22",
    time: "3",
    value: "61",
    stimulus: "1"
  },
  {
    neuron: "46",
    time: "4",
    value: "54",
    stimulus: "100"
  },
  {
    neuron: "39",
    time: "1",
    value: "77",
    stimulus: "24"
  },
  {
    neuron: "11",
    time: "4",
    value: "59",
    stimulus: "21"
  },
  {
    neuron: "6",
    time: "5",
    value: "37",
    stimulus: "80"
  },
  {
    neuron: "10",
    time: "1",
    value: "37",
    stimulus: "57"
  },
  {
    neuron: "38",
    time: "3",
    value: "11",
    stimulus: "13"
  },
  {
    neuron: "49",
    time: "4",
    value: "55",
    stimulus: "74"
  },
  {
    neuron: "41",
    time: "2",
    value: "7",
    stimulus: "19"
  },
  {
    neuron: "23",
    time: "5",
    value: "98",
    stimulus: "58"
  },
  {
    neuron: "32",
    time: "1",
    value: "4",
    stimulus: "28"
  },
  {
    neuron: "9",
    time: "1",
    value: "20",
    stimulus: "46"
  },
  {
    neuron: "43",
    time: "4",
    value: "1",
    stimulus: "96"
  },
  {
    neuron: "28",
    time: "1",
    value: "42",
    stimulus: "47"
  },
  {
    neuron: "17",
    time: "2",
    value: "39",
    stimulus: "7"
  },
  {
    neuron: "34",
    time: "3",
    value: "84",
    stimulus: "16"
  },
  {
    neuron: "7",
    time: "2",
    value: "73",
    stimulus: "18"
  },
  {
    neuron: "31",
    time: "1",
    value: "85",
    stimulus: "36"
  },
  {
    neuron: "26",
    time: "5",
    value: "78",
    stimulus: "53"
  },
  {
    neuron: "4",
    time: "5",
    value: "33",
    stimulus: "33"
  },
  {
    neuron: "15",
    time: "3",
    value: "71",
    stimulus: "87"
  },
  {
    neuron: "13",
    time: "4",
    value: "2",
    stimulus: "64"
  },
  {
    neuron: "9",
    time: "5",
    value: "32",
    stimulus: "39"
  },
  {
    neuron: "46",
    time: "3",
    value: "50",
    stimulus: "32"
  },
  {
    neuron: "1",
    time: "2",
    value: "65",
    stimulus: "39"
  },
  {
    neuron: "11",
    time: "5",
    value: "16",
    stimulus: "41"
  },
  {
    neuron: "35",
    time: "5",
    value: "79",
    stimulus: "54"
  },
  {
    neuron: "3",
    time: "2",
    value: "80",
    stimulus: "84"
  },
  {
    neuron: "8",
    time: "1",
    value: "4",
    stimulus: "81"
  },
  {
    neuron: "27",
    time: "3",
    value: "8",
    stimulus: "55"
  },
  {
    neuron: "9",
    time: "5",
    value: "6",
    stimulus: "72"
  },
  {
    neuron: "17",
    time: "4",
    value: "91",
    stimulus: "59"
  },
  {
    neuron: "46",
    time: "3",
    value: "32",
    stimulus: "19"
  },
  {
    neuron: "1",
    time: "1",
    value: "89",
    stimulus: "18"
  },
  {
    neuron: "13",
    time: "2",
    value: "62",
    stimulus: "1"
  },
  {
    neuron: "32",
    time: "2",
    value: "27",
    stimulus: "67"
  },
  {
    neuron: "24",
    time: "1",
    value: "16",
    stimulus: "63"
  },
  {
    neuron: "12",
    time: "5",
    value: "9",
    stimulus: "34"
  },
  {
    neuron: "27",
    time: "4",
    value: "72",
    stimulus: "56"
  },
  {
    neuron: "42",
    time: "2",
    value: "70",
    stimulus: "23"
  },
  {
    neuron: "30",
    time: "3",
    value: "65",
    stimulus: "78"
  },
  {
    neuron: "21",
    time: "3",
    value: "90",
    stimulus: "41"
  },
  {
    neuron: "8",
    time: "1",
    value: "11",
    stimulus: "25"
  },
  {
    neuron: "1",
    time: "1",
    value: "68",
    stimulus: "62"
  },
  {
    neuron: "39",
    time: "1",
    value: "22",
    stimulus: "66"
  },
  {
    neuron: "21",
    time: "2",
    value: "22",
    stimulus: "51"
  },
  {
    neuron: "18",
    time: "2",
    value: "27",
    stimulus: "39"
  },
  {
    neuron: "26",
    time: "5",
    value: "71",
    stimulus: "6"
  },
  {
    neuron: "26",
    time: "2",
    value: "45",
    stimulus: "93"
  },
  {
    neuron: "23",
    time: "1",
    value: "89",
    stimulus: "44"
  },
  {
    neuron: "5",
    time: "4",
    value: "24",
    stimulus: "94"
  },
  {
    neuron: "37",
    time: "1",
    value: "36",
    stimulus: "26"
  },
  {
    neuron: "1",
    time: "1",
    value: "93",
    stimulus: "17"
  },
  {
    neuron: "30",
    time: "2",
    value: "91",
    stimulus: "43"
  },
  {
    neuron: "21",
    time: "1",
    value: "56",
    stimulus: "86"
  },
  {
    neuron: "39",
    time: "2",
    value: "42",
    stimulus: "42"
  },
  {
    neuron: "16",
    time: "3",
    value: "64",
    stimulus: "90"
  },
  {
    neuron: "1",
    time: "2",
    value: "86",
    stimulus: "89"
  },
  {
    neuron: "41",
    time: "2",
    value: "18",
    stimulus: "11"
  },
  {
    neuron: "2",
    time: "2",
    value: "93",
    stimulus: "56"
  },
  {
    neuron: "33",
    time: "2",
    value: "75",
    stimulus: "39"
  },
  {
    neuron: "13",
    time: "1",
    value: "71",
    stimulus: "100"
  },
  {
    neuron: "20",
    time: "3",
    value: "30",
    stimulus: "95"
  },
  {
    neuron: "36",
    time: "1",
    value: "15",
    stimulus: "44"
  },
  {
    neuron: "23",
    time: "1",
    value: "3",
    stimulus: "50"
  },
  {
    neuron: "12",
    time: "2",
    value: "72",
    stimulus: "19"
  },
  {
    neuron: "13",
    time: "3",
    value: "94",
    stimulus: "35"
  },
  {
    neuron: "45",
    time: "2",
    value: "43",
    stimulus: "60"
  },
  {
    neuron: "22",
    time: "5",
    value: "3",
    stimulus: "34"
  },
  {
    neuron: "40",
    time: "5",
    value: "99",
    stimulus: "43"
  },
  {
    neuron: "16",
    time: "1",
    value: "24",
    stimulus: "25"
  },
  {
    neuron: "42",
    time: "2",
    value: "83",
    stimulus: "66"
  },
  {
    neuron: "23",
    time: "4",
    value: "94",
    stimulus: "15"
  },
  {
    neuron: "40",
    time: "4",
    value: "76",
    stimulus: "92"
  },
  {
    neuron: "3",
    time: "1",
    value: "83",
    stimulus: "3"
  },
  {
    neuron: "33",
    time: "4",
    value: "55",
    stimulus: "86"
  },
  {
    neuron: "4",
    time: "1",
    value: "99",
    stimulus: "45"
  },
  {
    neuron: "43",
    time: "4",
    value: "97",
    stimulus: "66"
  },
  {
    neuron: "21",
    time: "1",
    value: "56",
    stimulus: "98"
  },
  {
    neuron: "34",
    time: "1",
    value: "76",
    stimulus: "55"
  },
  {
    neuron: "7",
    time: "5",
    value: "39",
    stimulus: "45"
  },
  {
    neuron: "30",
    time: "4",
    value: "11",
    stimulus: "91"
  },
  {
    neuron: "33",
    time: "3",
    value: "67",
    stimulus: "62"
  },
  {
    neuron: "1",
    time: "1",
    value: "35",
    stimulus: "19"
  },
  {
    neuron: "9",
    time: "5",
    value: "36",
    stimulus: "79"
  },
  {
    neuron: "36",
    time: "1",
    value: "70",
    stimulus: "1"
  },
  {
    neuron: "36",
    time: "4",
    value: "46",
    stimulus: "31"
  },
  {
    neuron: "37",
    time: "4",
    value: "45",
    stimulus: "67"
  },
  {
    neuron: "50",
    time: "4",
    value: "70",
    stimulus: "46"
  },
  {
    neuron: "47",
    time: "4",
    value: "67",
    stimulus: "98"
  },
  {
    neuron: "13",
    time: "5",
    value: "34",
    stimulus: "23"
  },
  {
    neuron: "23",
    time: "4",
    value: "76",
    stimulus: "92"
  },
  {
    neuron: "20",
    time: "2",
    value: "56",
    stimulus: "52"
  },
  {
    neuron: "41",
    time: "1",
    value: "30",
    stimulus: "91"
  },
  {
    neuron: "42",
    time: "5",
    value: "48",
    stimulus: "83"
  },
  {
    neuron: "30",
    time: "2",
    value: "14",
    stimulus: "37"
  },
  {
    neuron: "5",
    time: "2",
    value: "66",
    stimulus: "31"
  },
  {
    neuron: "42",
    time: "2",
    value: "50",
    stimulus: "64"
  },
  {
    neuron: "39",
    time: "2",
    value: "71",
    stimulus: "90"
  },
  {
    neuron: "28",
    time: "4",
    value: "82",
    stimulus: "1"
  },
  {
    neuron: "50",
    time: "4",
    value: "77",
    stimulus: "100"
  },
  {
    neuron: "3",
    time: "5",
    value: "58",
    stimulus: "94"
  },
  {
    neuron: "12",
    time: "3",
    value: "81",
    stimulus: "80"
  },
  {
    neuron: "32",
    time: "2",
    value: "45",
    stimulus: "78"
  },
  {
    neuron: "23",
    time: "4",
    value: "56",
    stimulus: "4"
  },
  {
    neuron: "48",
    time: "4",
    value: "17",
    stimulus: "64"
  },
  {
    neuron: "30",
    time: "1",
    value: "71",
    stimulus: "94"
  },
  {
    neuron: "36",
    time: "4",
    value: "76",
    stimulus: "90"
  },
  {
    neuron: "41",
    time: "2",
    value: "89",
    stimulus: "86"
  },
  {
    neuron: "32",
    time: "2",
    value: "16",
    stimulus: "93"
  },
  {
    neuron: "42",
    time: "5",
    value: "91",
    stimulus: "94"
  },
  {
    neuron: "46",
    time: "3",
    value: "51",
    stimulus: "62"
  },
  {
    neuron: "4",
    time: "1",
    value: "88",
    stimulus: "64"
  },
  {
    neuron: "36",
    time: "1",
    value: "54",
    stimulus: "68"
  },
  {
    neuron: "33",
    time: "2",
    value: "58",
    stimulus: "78"
  },
  {
    neuron: "3",
    time: "4",
    value: "78",
    stimulus: "34"
  },
  {
    neuron: "46",
    time: "4",
    value: "90",
    stimulus: "86"
  },
  {
    neuron: "25",
    time: "5",
    value: "74",
    stimulus: "42"
  },
  {
    neuron: "41",
    time: "2",
    value: "51",
    stimulus: "21"
  },
  {
    neuron: "35",
    time: "1",
    value: "62",
    stimulus: "98"
  },
  {
    neuron: "20",
    time: "4",
    value: "91",
    stimulus: "98"
  },
  {
    neuron: "34",
    time: "2",
    value: "4",
    stimulus: "70"
  },
  {
    neuron: "19",
    time: "4",
    value: "46",
    stimulus: "21"
  },
  {
    neuron: "32",
    time: "4",
    value: "23",
    stimulus: "11"
  },
  {
    neuron: "27",
    time: "1",
    value: "15",
    stimulus: "49"
  },
  {
    neuron: "38",
    time: "2",
    value: "81",
    stimulus: "10"
  },
  {
    neuron: "22",
    time: "4",
    value: "44",
    stimulus: "79"
  },
  {
    neuron: "10",
    time: "4",
    value: "69",
    stimulus: "48"
  },
  {
    neuron: "11",
    time: "4",
    value: "16",
    stimulus: "43"
  },
  {
    neuron: "34",
    time: "4",
    value: "19",
    stimulus: "84"
  },
  {
    neuron: "48",
    time: "5",
    value: "43",
    stimulus: "25"
  },
  {
    neuron: "31",
    time: "2",
    value: "12",
    stimulus: "39"
  },
  {
    neuron: "10",
    time: "4",
    value: "18",
    stimulus: "93"
  },
  {
    neuron: "9",
    time: "3",
    value: "89",
    stimulus: "30"
  },
  {
    neuron: "15",
    time: "1",
    value: "85",
    stimulus: "37"
  },
  {
    neuron: "31",
    time: "1",
    value: "66",
    stimulus: "29"
  },
  {
    neuron: "24",
    time: "2",
    value: "40",
    stimulus: "79"
  },
  {
    neuron: "16",
    time: "5",
    value: "66",
    stimulus: "55"
  },
  {
    neuron: "36",
    time: "3",
    value: "49",
    stimulus: "23"
  },
  {
    neuron: "9",
    time: "4",
    value: "69",
    stimulus: "12"
  },
  {
    neuron: "9",
    time: "3",
    value: "36",
    stimulus: "59"
  },
  {
    neuron: "11",
    time: "4",
    value: "19",
    stimulus: "77"
  },
  {
    neuron: "28",
    time: "2",
    value: "25",
    stimulus: "57"
  },
  {
    neuron: "30",
    time: "5",
    value: "39",
    stimulus: "98"
  },
  {
    neuron: "11",
    time: "2",
    value: "60",
    stimulus: "84"
  },
  {
    neuron: "42",
    time: "2",
    value: "40",
    stimulus: "54"
  },
  {
    neuron: "16",
    time: "1",
    value: "77",
    stimulus: "34"
  },
  {
    neuron: "44",
    time: "5",
    value: "96",
    stimulus: "16"
  },
  {
    neuron: "36",
    time: "3",
    value: "84",
    stimulus: "73"
  },
  {
    neuron: "47",
    time: "4",
    value: "12",
    stimulus: "20"
  },
  {
    neuron: "1",
    time: "4",
    value: "78",
    stimulus: "26"
  },
  {
    neuron: "5",
    time: "3",
    value: "97",
    stimulus: "20"
  },
  {
    neuron: "39",
    time: "2",
    value: "8",
    stimulus: "59"
  },
  {
    neuron: "40",
    time: "5",
    value: "75",
    stimulus: "91"
  },
  {
    neuron: "32",
    time: "4",
    value: "31",
    stimulus: "84"
  },
  {
    neuron: "38",
    time: "4",
    value: "15",
    stimulus: "33"
  },
  {
    neuron: "16",
    time: "4",
    value: "22",
    stimulus: "32"
  },
  {
    neuron: "35",
    time: "4",
    value: "2",
    stimulus: "23"
  },
  {
    neuron: "3",
    time: "4",
    value: "46",
    stimulus: "67"
  },
  {
    neuron: "13",
    time: "4",
    value: "68",
    stimulus: "1"
  },
  {
    neuron: "31",
    time: "2",
    value: "6",
    stimulus: "19"
  },
  {
    neuron: "28",
    time: "1",
    value: "27",
    stimulus: "78"
  },
  {
    neuron: "33",
    time: "4",
    value: "82",
    stimulus: "94"
  },
  {
    neuron: "30",
    time: "3",
    value: "7",
    stimulus: "19"
  },
  {
    neuron: "33",
    time: "2",
    value: "80",
    stimulus: "99"
  },
  {
    neuron: "40",
    time: "5",
    value: "70",
    stimulus: "93"
  },
  {
    neuron: "25",
    time: "3",
    value: "32",
    stimulus: "27"
  },
  {
    neuron: "8",
    time: "4",
    value: "54",
    stimulus: "57"
  },
  {
    neuron: "11",
    time: "1",
    value: "89",
    stimulus: "78"
  },
  {
    neuron: "7",
    time: "3",
    value: "50",
    stimulus: "89"
  },
  {
    neuron: "11",
    time: "1",
    value: "37",
    stimulus: "62"
  },
  {
    neuron: "17",
    time: "5",
    value: "65",
    stimulus: "77"
  },
  {
    neuron: "1",
    time: "5",
    value: "89",
    stimulus: "43"
  },
  {
    neuron: "47",
    time: "4",
    value: "46",
    stimulus: "34"
  },
  {
    neuron: "45",
    time: "1",
    value: "23",
    stimulus: "54"
  },
  {
    neuron: "11",
    time: "3",
    value: "8",
    stimulus: "65"
  },
  {
    neuron: "43",
    time: "5",
    value: "57",
    stimulus: "76"
  },
  {
    neuron: "38",
    time: "2",
    value: "77",
    stimulus: "11"
  },
  {
    neuron: "18",
    time: "3",
    value: "9",
    stimulus: "83"
  },
  {
    neuron: "15",
    time: "4",
    value: "94",
    stimulus: "42"
  },
  {
    neuron: "24",
    time: "3",
    value: "97",
    stimulus: "41"
  },
  {
    neuron: "30",
    time: "2",
    value: "40",
    stimulus: "64"
  },
  {
    neuron: "31",
    time: "1",
    value: "60",
    stimulus: "22"
  },
  {
    neuron: "49",
    time: "1",
    value: "82",
    stimulus: "24"
  },
  {
    neuron: "8",
    time: "2",
    value: "5",
    stimulus: "44"
  },
  {
    neuron: "9",
    time: "2",
    value: "28",
    stimulus: "18"
  },
  {
    neuron: "47",
    time: "4",
    value: "1",
    stimulus: "72"
  },
  {
    neuron: "37",
    time: "1",
    value: "50",
    stimulus: "57"
  },
  {
    neuron: "33",
    time: "3",
    value: "46",
    stimulus: "61"
  },
  {
    neuron: "8",
    time: "3",
    value: "68",
    stimulus: "34"
  },
  {
    neuron: "5",
    time: "1",
    value: "47",
    stimulus: "61"
  },
  {
    neuron: "44",
    time: "2",
    value: "3",
    stimulus: "31"
  },
  {
    neuron: "11",
    time: "5",
    value: "92",
    stimulus: "37"
  },
  {
    neuron: "46",
    time: "2",
    value: "65",
    stimulus: "48"
  },
  {
    neuron: "4",
    time: "2",
    value: "17",
    stimulus: "99"
  },
  {
    neuron: "11",
    time: "3",
    value: "78",
    stimulus: "25"
  },
  {
    neuron: "7",
    time: "4",
    value: "14",
    stimulus: "46"
  },
  {
    neuron: "29",
    time: "1",
    value: "99",
    stimulus: "17"
  },
  {
    neuron: "34",
    time: "1",
    value: "73",
    stimulus: "87"
  },
  {
    neuron: "6",
    time: "3",
    value: "90",
    stimulus: "43"
  },
  {
    neuron: "11",
    time: "4",
    value: "76",
    stimulus: "38"
  },
  {
    neuron: "10",
    time: "5",
    value: "76",
    stimulus: "41"
  },
  {
    neuron: "23",
    time: "1",
    value: "14",
    stimulus: "15"
  },
  {
    neuron: "9",
    time: "3",
    value: "85",
    stimulus: "23"
  },
  {
    neuron: "23",
    time: "3",
    value: "62",
    stimulus: "18"
  },
  {
    neuron: "49",
    time: "1",
    value: "7",
    stimulus: "10"
  },
  {
    neuron: "1",
    time: "5",
    value: "6",
    stimulus: "99"
  },
  {
    neuron: "32",
    time: "2",
    value: "73",
    stimulus: "86"
  },
  {
    neuron: "20",
    time: "4",
    value: "17",
    stimulus: "81"
  },
  {
    neuron: "14",
    time: "4",
    value: "4",
    stimulus: "33"
  },
  {
    neuron: "28",
    time: "2",
    value: "84",
    stimulus: "31"
  },
  {
    neuron: "40",
    time: "5",
    value: "35",
    stimulus: "63"
  },
  {
    neuron: "42",
    time: "2",
    value: "61",
    stimulus: "71"
  },
  {
    neuron: "9",
    time: "3",
    value: "70",
    stimulus: "86"
  },
  {
    neuron: "21",
    time: "1",
    value: "4",
    stimulus: "24"
  },
  {
    neuron: "38",
    time: "1",
    value: "23",
    stimulus: "44"
  },
  {
    neuron: "43",
    time: "2",
    value: "31",
    stimulus: "65"
  }
];
const zKey = "time";
const Viz2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const seriesNameSet = /* @__PURE__ */ new Set();
  data.forEach((d) => {
    seriesNameSet.add(d[zKey]);
  });
  [...seriesNameSet];
  return `<div class="${""}"></div>`;
});
export { Viz2 as default };

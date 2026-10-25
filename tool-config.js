export const tool = {
  "id": "E008",
  "title": "유체 압력동력 계산기",
  "inputs_text": "압력 증가 Δp [Pa], 체적유량 Q [m³/s]",
  "formula": "P_h = Δp Q",
  "output_text": "유체에 전달되는 압력동력 P_h [W]",
  "assumptions": "Δp,Q≥0. 등밀도 유체의 압력일률로 한정한다. 모터 입력동력·축동력과 구분하며 효율을 임의로 가정하지 않는다. 유동일 pΔV를 시간으로 나눈 관계다.",
  "purpose": "압력 유량 동력 계산 / 펌프 압력일률 검산",
  "sources": [
    {
      "label": "OpenStax · Fluids, Density, and Pressure",
      "url": "https://openstax.org/books/university-physics-volume-1/pages/14-1-fluids-density-and-pressure"
    },
    {
      "label": "OpenStax · Fluid Dynamics",
      "url": "https://openstax.org/books/university-physics-volume-1/pages/14-5-fluid-dynamics"
    }
  ],
  "slug": "eng-hydraulic-power",
  "category": "유체",
  "result_label": "유체 압력동력 P_h",
  "result_dimension": "power",
  "fields": [
    {
      "key": "dp",
      "label": "압력 증가 Δp",
      "dimension": "pressure",
      "example": 200000,
      "constraint": "nonnegative",
      "display_unit": "kPa",
      "display_value": "200"
    },
    {
      "key": "q",
      "label": "체적유량 Q",
      "dimension": "flow",
      "example": 0.005,
      "constraint": "nonnegative",
      "display_unit": "m3s",
      "display_value": "0.005"
    }
  ],
  "site": "https://nanalab.kr/eng-hydraulic-power/",
  "repository": "https://github.com/NaNaCompany/eng-hydraulic-power",
  "condition": "",
  "output_unit": "W"
};

import { Request, Response } from 'express';
import { BMI_Res_Obj } from "./types";

class PublicController {
  /**
   * @description Calculate BMI API
   * @param req
   * @param res
   */
  async calculateBMI(req: Request, res: Response) {
    try {
      const { rawData } = req.body;
      const bmiArr = [];

      for (const obj of rawData) {
        // Extracting weight and height from object
        const weight = obj.WeightKg;
        const height = obj.HeightCm;

        // If weight && height are not undefined
        if (weight && height) {
          let resObj: BMI_Res_Obj = {}
          const heightInM = height / 100 // 100cm = 1 m
          const finalBmi = weight / (heightInM * heightInM);

          if (finalBmi < 18.4) {
            resObj.bmiCategory = "Underweight";
            resObj.bmiRange = "18.4 and below";
            resObj.healthRisk = 'Malnutrition risk'
          } else if (finalBmi > 18.5 && finalBmi < 25) {
            resObj.bmiCategory = "Underweight";
            resObj.bmiRange = "18.4 and below";
            resObj.healthRisk = 'Malnutrition risk'
          } else if (finalBmi > 25) {
            resObj.bmiCategory = "Underweight";
            resObj.bmiRange = "18.4 and below";
            resObj.healthRisk = 'Malnutrition risk'
          }
          obj.bmi_report = resObj
          bmiArr.push(obj)
        }
      }

      return res.status(200).json({
        status: 200,
        message: "BMI",
        payload: bmiArr
      });

    } catch (e) {
      return res.status(500).json({
        status: 500,
        message: "Server Error",
        payload: ""
      });
    }
  }

}

const controllerObj = new PublicController();
export default controllerObj;

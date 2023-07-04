import { getApiData } from "../../CatalogueModule/Services/Axios";

class FeedbackService{
    public static async giveFeedback(prodID:number,rating:number,comment:string,q1:string,q2:string,q3:string,q4:string){
   //Product Feedback
      let res =   await getApiData('https://feedbackbackend-dev.azurewebsites.net/api/feedback','POST',
      {
        "user_id": "e1ac6adc-388c-477e-912b-60d503c7892a",
        "client_id": "d1bb78ca-d9e1-4f72-b4d7-677e8ecb3172",
        "deliveryagent_id": 6,
        "product_id": prodID,
        "template_id": "615f45d5fa301d5f77e5d5af",
        "rating": rating,
        "comment": comment,
        "feedback_type": 1,
        "feedback_language": 1,
         "qas": [
           {
             "question": "How was the delivery experience of the product ?",
             "answer": q1
           },
           {
             "question": "How was the packaging of the product  ?",
             "answer": q2
           },
           {
             "question": "Was any defects in the product?",
             "answer": q3
           }
         ]
       }
        ).then(res => {return res})
        .catch(err => {return err});

        // Delivery Feedback
        await getApiData('https://feedbackbackend-dev.azurewebsites.net/api/feedback/deliveryFeedback','POST',
        {
          "deliveryagent_id": 1,
          "user_id": 5,
          "product_id": prodID,
          "rating": q2,
          "comment": comment,
          "feedback_language": 1,
          "feedback_type": 1
        }
        );
        return res;
    }
    
}

export default FeedbackService;
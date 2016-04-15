模板消息仅用于公众号向用户发送重要的服务通知，只能用于符合其要求的服务场景中，如信用卡刷卡通知，商品购买成功通知等。  

**接口地址：**
    
    https://api.weixin.qq.com/cgi-bin/template/api_set_industry?access_token=ACCESS_TOKEN

**请求方式：**
	
	POST

**请求参数：**
	
	industry_id1	// 行业一id
	industry_id2	// 行业二id

**请求成功时返回数据：**

    {
        "code": 200,
        "message": "ok",
        "template_id": "Doclyl5uP7Aciu-qZ7mJNPtWkbkYnWBWVja26EGbNyk" // 消息模板ID
    }

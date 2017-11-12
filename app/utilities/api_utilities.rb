module ApiUtilities
  cattr_accessor :logger
  self.logger ||= Rails.logger
  
  
  def self.check_content(message)
    logger.info(message)
    val = {
      type: 'text',
      text: message
    }
    val
  end
  
  def self.list_button()
    val = {
      "type":     "template",
      "altText":  "this is a buttons template",
      "template": {
        "type":              "buttons",
        "thumbnailImageUrl": "https://example.com/bot/images/image.jpg",
        "title":             "Menu",
        "text":              "Please select",
        "actions":           [
                               {
                                 "type":  "postback",
                                 "label": "Buy",
                                 "data":  "action=buy&itemid=123"
                               },
                               {
                                 "type":  "postback",
                                 "label": "Add to cart",
                                 "data":  "action=add&itemid=123"
                               },
                               {
                                 "type":  "uri",
                                 "label": "View detail",
                                 "uri":   "http://example.com/page/123"
                               }
                             ]
      }
    }
    val
  end
  
  def self.confirm_button()
    val = {
      "type": "template",
      # "altText":  "this is a confirm template",
      "altText":  "確認画面です。\nA、またはBを入力してください",
      "template": {
        "type":    "confirm",
        "text":    "リクエストを確定いたしますか？",
        "actions": [
                     {
                       "type":  "message",
                       "label": "ここは、Userが確認できる部分(YES)",
                       "text":  "ここに、入力メッセージが送られる(YES)"
                     },
                     {
                       "type":  "message",
                       "label": "ここは、Userが確認できる部分(NO)",
                       "text":  "ここに、入力メッセージが送られる(NO)"
                     }
                   ]
      }
    }
    val
  end
  
  def self.text_carousel()
    val = {
      "type":     "template",
      "altText":  "this is a carousel template",
      "template": {
        "type":    "carousel",
        "columns": [
                     {
                       "thumbnailImageUrl": "https://example.com/bot/images/item1.jpg",
                       "title":             "this is menu",
                       "text":              "description",
                       "actions":           [
                                              {
                                                "type":  "postback",
                                                "label": "Buy",
                                                "data":  "action=buy&itemid=111"
                                              },
                                              {
                                                "type":  "postback",
                                                "label": "Add to cart",
                                                "data":  "action=add&itemid=111"
                                              },
                                              {
                                                "type":  "uri",
                                                "label": "View detail",
                                                "uri":   "http://example.com/page/111"
                                              }
                                            ]
                     },
                     {
                       "thumbnailImageUrl": "https://example.com/bot/images/item2.jpg",
                       "title":             "this is menu",
                       "text":              "description",
                       "actions":           [
                                              {
                                                "type":  "postback",
                                                "label": "Buy",
                                                "data":  "action=buy&itemid=222"
                                              },
                                              {
                                                "type":  "postback",
                                                "label": "Add to cart",
                                                "data":  "action=add&itemid=222"
                                              },
                                              {
                                                "type":  "uri",
                                                "label": "View detail",
                                                "uri":   "http://example.com/page/222"
                                              }
                                            ]
                     }
                   ]
      }
    }
    val
  end
  
  def self.imaga_carousel()
    val = {
      "type":     "template",
      "altText":  "this is a image carousel template",
      "template": {
        "type":    "image_carousel",
        "columns": [
                     {
                       "imageUrl": "https://example.com/bot/images/item1.jpg",
                       "action":   {
                         "type":  "postback",
                         "label": "Buy",
                         "data":  "action=buy&itemid=111"
                       }
                     },
                     {
                       "imageUrl": "https://example.com/bot/images/item2.jpg",
                       "action":   {
                         "type":  "message",
                         "label": "Yes",
                         "text":  "yes"
                       }
                     },
                     {
                       "imageUrl": "https://example.com/bot/images/item3.jpg",
                       "action":   {
                         "type":  "uri",
                         "label": "View detail",
                         "uri":   "http://example.com/page/222"
                       }
                     }
                   ]
      }
    }
    val
  end
  
  
  private
  
  def logger_login
    logger.info('[Login] ' + DateTime.now.strftime("%Y-%m-%d %H:%M:%S"))
  end
  
  def logger_logout
    logger.info('[Logout] ' + DateTime.now.strftime("%Y-%m-%d %H:%M:%S"))
  end
  
  def dispatch_action
  
  
  end
  
  def format_message
  
  
  end


end

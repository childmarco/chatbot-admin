class LoggerUtilities


  def logger_login
    logger.debug('[Login] ' + DateTime.now.strftime("%Y-%m-%d %H:%M:%S"))
  end


  def logger_logout
    logger.debug('[Logout] ' + DateTime.now.strftime("%Y-%m-%d %H:%M:%S"))
  end


  private

  def sample_private_method


  end


end
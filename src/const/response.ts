class response
{
  succes=(message:string, id)=>{
    return {
      status: 200,
      data: message,
      id:id
    }
  }

  failedDatabase=(message)=>{
    return {
      status: 403,
      message: message,
    }
  }

  failed=(message)=>{
    return {
      status: 400,
      message: message,
    }
  }
}

export default response;
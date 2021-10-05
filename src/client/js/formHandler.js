import checkURL from './checkURL'

const formHandler = async () => {

  const url = document.getElementById('article-url').value

  if (checkURL(url)) {

    const data = await fetch('http://localhost:8082/url-data', {

      method: 'POST',
      credentials: 'same-origin',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url }),
    })

    data.json().then(returnedData => {

      document.getElementById('text').textContent = returnedData.text
      document.getElementById('agreement').textContent = returnedData.agreement
      document.getElementById('confidence').textContent = returnedData.confidence
      document.getElementById('score_tag').textContent = returnedData.score_tag
      document.getElementById('subjectivity').textContent = returnedData.subjectivity
      document.getElementById('irony').textContent = returnedData.irony


    })

  } else {
    alert('Enter a valid URL')
  }
}

export default formHandler

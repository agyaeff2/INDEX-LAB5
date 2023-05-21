function appendValue(value) {
    document.getElementById('result').value += value;
  }
  
  function clearResult() {
    document.getElementById('result').value = '';
  }
  
  function calculate() {
    let result = document.getElementById('result').value;
    let answer;
  
    try {
      answer = eval(result);
      document.getElementById('result').value = answer.toFixed(2);
    } catch (error) {
      document.getElementById('result').value = 'Error';
    }
  }
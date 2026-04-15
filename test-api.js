fetch('https://emkc.org/api/v2/piston/execute', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ 
    language: 'c', 
    version: '10.2.0', 
    files: [{ content: '#include<stdio.h>\nint main(){printf("Test");return 0;}' }] 
  })
}).then(r => r.text().then(t => console.log('HTTP:', r.status, t))).catch(console.error);

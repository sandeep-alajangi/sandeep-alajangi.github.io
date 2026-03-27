const output = document.getElementById('output');
const input = document.getElementById('command-input');

const bootSequence = [
    "INITIALIZING AI INFRASTRUCTURE...",
    "LOADING TENSORFLOW KERNELS... [OK]",
    "ESTABLISHING LOW-LATENCY WEBSOCKETS... [OK]",
    "BYPASSING INPUT BOTTLENECKS... [OK]",
    "WELCOME TO SANDEEP ALAJANGI'S TERMINAL.",
    "Type 'help' to view available commands."
];

const commands = {
    'help': `AVAILABLE COMMANDS:
  <span class="highlight">whoami</span>    - Display summary
  <span class="highlight">google</span>    - Fetch AI/ML Infra metrics
  <span class="highlight">hft</span>       - Fetch Low-Latency C++ metrics
  <span class="highlight">skills</span>    - List technical arsenal
  <span class="highlight">clear</span>     - Clear terminal`,
  
    'whoami': `> SANDEEP ALAJANGI | STAFF SYSTEMS ENGINEER
> Operating at the intersection of AI Infrastructure and Ultra-Low Latency.
> Currently building the backbone for LLM training at exabyte scale.`,

    'google': `> GOOGLE | AI/ML INFRASTRUCTURE (Nov 2019 - Present)
> <span class="highlight">Throughput:</span> Architected lineage platforms processing >30TB/month at >500K QPS.
> <span class="highlight">Scale:</span> Implemented tf.data features feeding >400K ML training chips/day.
> <span class="highlight">Optimization:</span> Automated TPU/GPU input bottleneck mitigation, saving 2 SWE-days/issue.`,

    'hft': `> ALPHAGREP & DIRECTI | LOW-LATENCY C++
> <span class="highlight">Architecture:</span> Designed microsecond-precision C++ trading infrastructure.
> <span class="highlight">Networking:</span> Implemented zero-copy RFC-6455 WebSocket protocols for Crypto local book building.
> <span class="highlight">Performance:</span> Optimized C++-to-Python connectors for high-frequency quant strategies.`,

    'skills': `> [LANGUAGES]: Modern C++ (C++20/23), Python, Java, Go
> [DOMAINS]: Distributed Systems, Bare-Metal Performance, Limit Order Books
> [AI CORE]: TensorFlow (tf.data internals), JAX, CUDA/Triton`
};

async function typeWriter(text, element, speed = 10) {
    element.innerHTML += '<br>';
    let tempDiv = document.createElement('div');
    element.appendChild(tempDiv);
    
    // Quick hack to allow HTML rendering without typing out tags
    tempDiv.innerHTML = text; 
}

async function runBootSequence() {
    input.disabled = true;
    for (let msg of bootSequence) {
        let div = document.createElement('div');
        div.className = 'system-msg';
        div.innerText = msg;
        output.appendChild(div);
        await new Promise(r => setTimeout(r, 400));
    }
    input.disabled = false;
    input.focus();
}

input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        const cmd = input.value.trim().toLowerCase();
        input.value = '';
        
        // Echo command
        output.innerHTML += \`<br><span class="prompt">guest@sandeep.ai:~$</span> \${cmd}\`;

        if (cmd === 'clear') {
            output.innerHTML = '';
            return;
        }

        const response = commands[cmd] || \`Command not found: \${cmd}. Type 'help' for available commands.\`;
        typeWriter(response, output);
        
        // Auto-scroll to bottom
        window.scrollTo(0, document.body.scrollHeight);
    }
});

// Start the terminal
runBootSequence();
    function calcular() {
        const formula = document.getElementById('formula').value;
        const calculation = document.getElementById('calculation').value;
        const variables = document.getElementById('variables').value;
        let resultado;

        switch(formula) {
            case 'massa-molar':
                resultado = calcularMassaMolar(variables, calculation);
                break;
            case 'numero-mols':
                resultado = calcularNumeroMols(variables, calculation);
                break;
            case 'densidade':
                resultado = calcularDensidade(variables, calculation);
                break;
            case 'concentracao-molar':
                resultado = calcularConcentracaoMolar(variables, calculation);
                break;
            case 'concentracao-comum':
                resultado = calcularConcentracaoComum(variables, calculation);
                break;
            case 'mistura-solucoes':
                resultado = calcularMisturaSolucoes(variables, calculation);
                break;
            case 'diluicao':
                resultado = calcularDiluicao(variables, calculation);
                break;
            case 'ph':
                resultado = calcularPh(variables, calculation);
                break;
            case 'poh':
                resultado = calcularPoh(variables, calculation);
                break;
            case 'velocidade':
                resultado = calcularVelocidadeMedia(variables, calculation);
                break;
            case 'trabalho':
                resultado = calcularTrabalho(variables, calculation);
                break;
            case 'massa-buraco':
                resultado = calcularMassaBuracoNegro(variables, calculation);
                break;
            case 'clapeyron':
                resultado = calcularClapeyron(variables, calculation);
                break;
            case 'equacao-gases':
                resultado = calcularEquacaoGeralGases(variables, calculation);
                break;
            default:
                resultado = 'Fórmula não reconhecida';
        }

        document.getElementById('resultado').innerHTML = 'Resultado: ' + resultado;
    }

    function calcularDensidade(vars, calculation) {
        let dados = vars.split(',').map(parseFloat);
        let massa = dados[0];
        let volume = dados[1];

        if (isNaN(massa) || isNaN(volume)) return 'Valores inválidos';

        if (calculation === 'variavel1') { // Calcular densidade
            return massa / volume;
        } else if (calculation === 'variavel2') { // Calcular massa
            return volume * parseFloat(dados[2]);
        } else if (calculation === 'variavel3') { // Calcular volume
            return massa / parseFloat(dados[2]);
        }
    }

    function calcularVelocidadeMedia(vars, calculation) {
        let dados = vars.split(',').map(parseFloat);
        let distancia = dados[0];
        let tempo = dados[1];

        if (isNaN(distancia) || isNaN(tempo)) return 'Valores inválidos';

        if (calculation === 'variavel1') { // Calcular velocidade
            return distancia / tempo;
        } else if (calculation === 'variavel2') { // Calcular distância
            return parseFloat(dados[1]) * tempo;
        } else if (calculation === 'variavel3') { // Calcular tempo
            return distancia / parseFloat(dados[0]);
        }
    }

    function calcularTrabalho(vars, calculation) {
        let dados = vars.split(',').map(parseFloat);
        let forca = dados[0];
        let distancia = dados[1];

        if (isNaN(forca) || isNaN(distancia)) return 'Valores inválidos';

        if (calculation === 'variavel1') { // Calcular trabalho
            return forca * distancia;
        } else if (calculation === 'variavel2') { // Calcular força
            return parseFloat(dados[2]) / distancia;
        } else if (calculation === 'variavel3') { // Calcular distância
            return parseFloat(dados[2]) / forca;
        }
    }

    function calcularMassaBuracoNegro(vars, calculation) {
        const c = 2.99792458e8; // Velocidade da luz em metros por segundo
        const G = 6.67430e-11; // Constante gravitacional em N(m^2/kg^2)

        let dados = vars.split(',').map(parseFloat);
        let massa = dados[0]; // massa do buraco negro
        let raioSchwarzschild;

        if (isNaN(massa)) return 'Valores inválidos';

        if (calculation === 'variavel1') { // Calcular massa do buraco negro
            raioSchwarzschild = (2 * G * massa) / Math.pow(c, 2);
            return 'Raio de Schwarzschild: ' + raioSchwarzschild;
        } else if (calculation === 'variavel2') { // Calcular raio de Schwarzschild
            raioSchwarzschild = dados[1]; // raio fornecido
            if (isNaN(raioSchwarzschild)) return 'Valores inválidos';
            massa = (raioSchwarzschild * Math.pow(c, 2)) / (2 * G);
            return 'Massa do Buraco Negro: ' + massa;
        }
    }

    function calcularMassaMolar(vars, calculation) {
        let dados = vars.split(',').map(parseFloat);
        let numeroMassa = dados[0]; // Número de massa
        let numeroMols = dados[1]; // Número de mols

        if (isNaN(numeroMassa) || isNaN(numeroMols)) return 'Valores inválidos';

        if (calculation === 'variavel1') { // Calcular massa molar
            return numeroMassa / numeroMols;
        } else if (calculation === 'variavel2') { // Calcular número de mols
            return numeroMassa * parseFloat(dados[2]);
        } else if (calculation === 'variavel3') { // Calcular número de massa
            return numeroMols / parseFloat(dados[2]);
        }
    }

    function calcularNumeroMols(vars, calculation) {
        let dados = vars.split(',').map(parseFloat);
        let massa = dados[0]; // Massa
        let massaMolar = dados[1]; // Massa molar

        if (isNaN(massa) || isNaN(massaMolar)) return 'Valores inválidos';

        if (calculation === 'variavel1') { // Calcular número de mols
            return massa / massaMolar;
        } else if (calculation === 'variavel2') { // Calcular massa
            return massaMolar * parseFloat(dados[2]);
        } else if (calculation === 'variavel3') { // Calcular massa molar
            return massa / parseFloat(dados[2]);
        }
    }

    function calcularConcentracaoMolar(vars, calculation) {
        let dados = vars.split(',').map(parseFloat);
        let numeroMols = dados[0];
    // Número de mols
    let volume = dados[1]; // Volume

    if (isNaN(numeroMols) || isNaN(volume)) return 'Valores inválidos';

    if (calculation === 'variavel1') { // Calcular concentração molar
        return numeroMols / volume;
    } else if (calculation === 'variavel2') { // Calcular número de mols
        return volume * parseFloat(dados[2]);
    } else if (calculation === 'variavel3') { // Calcular volume
        return numeroMols / parseFloat(dados[2]);
    }
    }

    function calcularConcentracaoComum(vars, calculation) {
    let dados = vars.split(',').map(parseFloat);
    let massaSoluto = dados[0]; // Massa do soluto
    let volumeSolucao = dados[1]; // Volume da solução

    if (isNaN(massaSoluto) || isNaN(volumeSolucao)) return 'Valores inválidos';

    if (calculation === 'variavel1') { // Calcular concentração comum
        return massaSoluto / volumeSolucao;
    } else if (calculation === 'variavel2') { // Calcular massa do soluto
        return volumeSolucao * parseFloat(dados[2]);
    } else if (calculation === 'variavel3') { // Calcular volume da solução
        return massaSoluto / parseFloat(dados[2]);
    }
    }

    function calcularMisturaSolucoes(vars, calculation) {
    let dados = vars.split(',').map(parseFloat);
    let c1 = dados[0]; // Concentração da solução 1
    let v1 = dados[1]; // Volume da solução 1
    let c2 = dados[2]; // Concentração da solução 2
    let v2 = dados[3]; // Volume da solução 2

    if (isNaN(c1) || isNaN(v1) || isNaN(c2) || isNaN(v2)) return 'Valores inválidos';

    if (calculation === 'variavel1') { // Calcular concentração final
        return (c1 * v1 + c2 * v2) / (v1 + v2);
    } else if (calculation === 'variavel2') { // Calcular volume final
        return parseFloat(dados[4]) * parseFloat(dados[5]);
    } else if (calculation === 'variavel3') { // Calcular concentração inicial
        return (v1 * c1 - parseFloat(dados[4])) / parseFloat(dados[5]);
    } else if (calculation === 'variavel4') { // Calcular volume inicial
        return (parseFloat(dados[4]) - v2 * c2) / parseFloat(dados[5]);
    }
    }

    function calcularDiluicao(vars, calculation) {
    let dados = vars.split(',').map(parseFloat);
    let c1 = dados[0]; // Concentração inicial
    let v1 = dados[1]; // Volume inicial
    let c2 = dados[2]; // Concentração final
    let v2; // Volume final

    if (isNaN(c1) || isNaN(v1) || isNaN(c2)) return 'Valores inválidos';

    if (calculation === 'variavel1') { // Calcular volume final
        return c1 * v1 / c2;
    } else if (calculation === 'variavel2') { // Calcular concentração inicial
        v2 = parseFloat(dados[3]); // Volume final
        return c2 * v2 / v1;
    } else if(calculation === 'variavel3') { // Calcular concentração final
        v2 = parseFloat(dados[3]); // Volume final
        return c1 * v1 / v2;
    }
    }

    function calcularPh(vars, calculation) {
        let dados = vars.split(',').map(parseFloat);
        let poh; // pOH
        if (calculation === 'variavel1') { // Calcular pH
            poh = parseFloat(dados[0]); // pOH
            return 14 - poh;
        }
    }

    function calcularPoh(vars, calculation) {
        let dados = vars.split(',').map(parseFloat);
        let ph; // pH
        if (calculation === 'variavel1') { // Calcular pOH
            ph = parseFloat(dados[0]); // pH
            return 14 - ph;
        }
    }

    function calcularClapeyron(vars, calculation) {
    const R = 8.314; //
    const P = parseFloat(vars.split(',')[0]); // Pressão
    const V = parseFloat(vars.split(',')[1]); // Volume
    const n = parseFloat(vars.split(',')[2]); // Número de mols
    const T = parseFloat(vars.split(',')[3]); // Temperatura

    if (isNaN(P) || isNaN(V) || isNaN(n) || isNaN(T)) return 'Valores inválidos';

    if (calculation === 'variavel1') { // Calcular pressão
        return (n * R * T) / V;
    } else if (calculation === 'variavel2') { // Calcular volume
        return (n * R * T) / P;
    } else if (calculation === 'variavel3') { // Calcular número de mols
        return (P * V) / (R * T);
    } else if (calculation === 'variavel4') { // Calcular temperatura
        return (P * V) / (n * R);
    }
    }

    function calcularEquacaoGeralGases(vars, calculation) {
    const P1 = parseFloat(vars.split(',')[0]); // Pressão inicial
    const V1 = parseFloat(vars.split(',')[1]); // Volume inicial
    const T1 = parseFloat(vars.split(',')[2]); // Temperatura inicial
    const P2 = parseFloat(vars.split(',')[3]); // Pressão final
    let V2; // Volume final
    let T2; // Temperatura final

    if (isNaN(P1) || isNaN(V1) || isNaN(T1) || isNaN(P2)) return 'Valores inválidos';

    if (calculation === 'variavel1') { // Calcular volume final
        V2 = (P1 * V1 * T2) / (P2 * T1);
        return V2;
    } else if (calculation === 'variavel2') { // Calcular temperatura final
        T2 = (P1 * V1 * T2) / (P2 * V2);
        return T2;
    }
    }

    function showTab(tabId) {
        const tabs = document.querySelectorAll('.tab');
        const tabButtons = document.querySelectorAll('.tab-button');
        tabs.forEach(tab => tab.classList.remove('active'));
        tabButtons.forEach(button => button.classList.remove('active'));
        document.getElementById(tabId).classList.add('active');
        document.querySelector(`.tab-button[onclick="showTab('${tabId}')"]`).classList.add('active');
    }

function exibirFormula(tabId) {
    const formulaTextElement = document.getElementById(`formula-texto_${tabId}`);
    const formulaSelectElement = document.getElementById(`${tabId}_formula`);
    const selectedFormula = formulaSelectElement.value;
  
    switch (selectedFormula) {
  
      case 'velocidade':
        formulaTextElement.textContent = 'Velocidade Média (v = d / t)';
        break;
      case 'trabalho':
        formulaTextElement.textContent = 'Trabalho (W = F * d)';
        break;
      case 'massa-buraco':
        formulaTextElement.textContent = 'Massa do Buraco Negro (M = (2 * G * m) / c^2)';
        break;
    }
  }
  
function showTab(tabId) {
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => button.classList.remove('active'));
tabContents.forEach(content => content.style.display = 'none');

const selectedTabButton = document.getElementById(`${tabId}-button`);
const selectedTabContent = document.getElementById(`${tabId}-content`);
selectedTabButton.classList.add('active');
selectedTabContent.style.display = 'block';


exibirFormula(tabId);
}
  
 
  document.addEventListener('DOMContentLoaded', () => {
    showTab('fisica'); // Mostra a aba Química por padrão
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    showTab('quimica'); // Mostra a aba Química por padrão
  });
  
  document.addEventListener('change', function(event) {
    if (event.target.classList.contains('tab-button')) {
      const tabId = event.target.id.split('-')[0];
      showTab(tabId);
      exibirFormula(tabId);
    }
  });
  
  document.addEventListener('change', function(event) {
    if (event.target.id === 'quimica_formula' || event.target.id === 'fisica_formula') {
      const tabId = event.target.id.split('_')[0];
      exibirFormula(tabId);
    }
  });
  


    document.addEventListener('DOMContentLoaded', () => {
    showTab('fisica'); // Mostra a aba Química por padrão
    });
    document.addEventListener('DOMContentLoaded', () => {
        showTab('quimica'); // Mostra a aba Química por padrão
    });

function exibirVariaveis(tabId) {
    const variablesElement = document.getElementById(`variables_${tabId}`);
    const selectedFormula = document.getElementById(`${tabId}_formula`).value;
    const selectedCalculation = document.getElementById(`${tabId}_calculation`).value;
  
    let variableNames;
    switch (selectedFormula) {
  
      case 'velocidade':
        if (selectedCalculation === 'variavel1') {
          variableNames = ['Distância (d)', 'Tempo (t)'];
        } else if (selectedCalculation === 'variavel2') {
          variableNames = ['Velocidade (v)', 'Tempo (t)'];
        } else if (selectedCalculation === 'variavel3') {
          variableNames = ['Distância (d)', 'Velocidade (v)'];
        }
        break;
      case 'trabalho':
        if (selectedCalculation === 'variavel1') {
          variableNames = ['Força (F)', 'Distância (d)'];
        } else if (selectedCalculation === 'variavel2') {
          variableNames = ['Trabalho (W)', 'Distância (d)'];
        } else if (selectedCalculation === 'variavel3') {
          variableNames = ['Força (F)', 'Trabalho (W)'];
        }
        break;
      case 'massa-buraco':
        if (selectedCalculation === 'variavel1') {
          variableNames = ['Raio de Schwarzschild (r)'];
        }
        break;
    }
  
    if (variableNames) {
      variablesElement.placeholder = variableNames.join(', ');
    } else {
      variablesElement.placeholder = 'Variáveis'; 
    }
  }
  

function calcular() {
    const formula = document.getElementById('formula').value;
    const calculation = document.getElementById('calculation').value;
    const variables = document.getElementById('variables').value;
    let resultado;

    switch(formula) {
        case 'massa-molar':
            resultado = calcularMassaMolar(variables, calculation);
            break;
        case 'numero-mols':
            resultado = calcularNumeroMols(variables, calculation);
            break;
        case 'densidade':
            resultado = calcularDensidade(variables, calculation);
            break;
        case 'concentracao-molar':
            resultado = calcularConcentracaoMolar(variables, calculation);
            break;
        case 'concentracao-comum':
            resultado = calcularConcentracaoComum(variables, calculation);
            break;
        case 'mistura-solucoes':
            resultado = calcularMisturaSolucoes(variables, calculation);
            break;
        case 'diluicao':
            resultado = calcularDiluicao(variables, calculation);
            break;
        case 'ph-poh':
            resultado = calcularPhPoh(variables, calculation);
            break;
        case 'velocidade':
            resultado = calcularVelocidadeMedia(variables, calculation);
            break;
        case 'trabalho':
            resultado = calcularTrabalho(variables, calculation);
            break;
        case 'massa-buraco':
            resultado = calcularMassaBuracoNegro(variables, calculation);
            break;
        case 'clapeyron':
            resultado = calcularClapeyron(variables, calculation);
            break;
        case 'equacao-gases':
            resultado = calcularEquacaoGeralGases(variables, calculation);
            break;
        default:
            resultado = 'Fórmula não reconhecida';
    }

    document.getElementById('resultado').innerHTML = 'Resultado: ' + resultado;
}

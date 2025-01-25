document.addEventListener('DOMContentLoaded', function() {
    const codeSummoningScroll = document.getElementById('codeSummoningScroll');
    const summonSpellBtn = document.getElementById('summonSpellBtn');
    const resetSummoningBtn = document.getElementById('resetSummoningBtn');
    const spellArchiveBtn = document.getElementById('spellArchiveBtn');
    const spellOutcome = document.getElementById('spellOutcome');
    const summoningErrors = document.getElementById('summoningErrors');
    const spellArchive = document.getElementById('spellArchive');

    // Spell Archive Predefined Spells
    const spellCodex = {
        'realm-greeting': `#include <stdio.h>

int main() {
    printf("Greetings from the Magical Realms!\\n");
    printf("Code transcends dimensions...\\n");
    return 0;
}`,
        'elemental-calculation': `#include <stdio.h>

// Elemental Calculation Spell
int calculateElementalPower(int fire, int water) {
    return fire * water;
}

int main() {
    int firePower = 7;
    int waterPower = 5;
    
    int elementalSynergy = calculateElementalPower(firePower, waterPower);
    
    printf("Elemental Synergy: %d\\n", elementalSynergy);
    return 0;
}`,
        'dimensional-logic': `#include <stdio.h>

typedef struct {
    int x;
    int y;
    char *dimension;
} Portal;

int traverseDimensions(Portal *p) {
    printf("Traversing Dimension: %s\\n", p->dimension);
    return p->x * p->y;
}

int main() {
    Portal mysticalPortal = {5, 4, "Arcane Realm"};
    
    int dimensionalScore = traverseDimensions(&mysticalPortal);
    printf("Dimensional Traversal Score: %d\\n", dimensionalScore);
    
    return 0;
}`
    };

    // Spell Summoning Mechanism
    function invokeSpell() {
        spellOutcome.innerHTML = '';
        summoningErrors.innerHTML = '';

        const spellIncantation = codeSummoningScroll.value;

        try {
            // Advanced Simulation of Code Execution
            const lines = spellIncantation.split('\n');
            const simulationContext = {
                variables: {},
                functions: {},
                output: []
            };

            lines.forEach(line => {
                // Complex Line Parsing
                processCodeLine(line, simulationContext);
            });

            // Display Magical Outcome
            if (simulationContext.output.length > 0) {
                spellOutcome.innerHTML = simulationContext.output.join('<br>');
                spellOutcome.classList.add('magical-reveal');
            } else {
                spellOutcome.innerHTML = 'Spell Cast: No Visible Manifestation';
            }
        } catch (mysticalError) {
            summoningErrors.innerHTML = `Spell Disruption: ${mysticalError.message}`;
            summoningErrors.classList.add('error-manifestation');
        }
    }

    // Advanced Line Processing
    function processCodeLine(line, context) {
        // Comprehensive Parsing Logic
        const printfMatch = line.match(/printf\s*\(([^)]+)\)/);
        const variableDeclaration = line.match(/\b(int|char|float|double)\s+(\w+)\s*=\s*(.+);/);
        const functionDeclaration = line.match(/(\w+)\s+(\w+)\s*\(([^)]*)\)\s*{/);

        if (printfMatch) {
            const output = simulatePrintf(printfMatch[1], context);
            if (output) context.output.push(output);
        }

        if (variableDeclaration) {
            const [, type, name, value] = variableDeclaration;
            context.variables[name] = { type, value: evaluateExpression(value, context) };
        }

        if (functionDeclaration) {
            const [, returnType, name, params] = functionDeclaration;
            context.functions[name] = { returnType, params };
        }
    }

    // Expression Evaluation
    function evaluateExpression(expr, context) {
        // Basic Expression Handling
        try {
            return Function(`"use strict"; return (${expr})`)();
        } catch {
            return expr;
        }
    }

    // Printf Simulation
    function simulatePrintf(format, context) {
        // Advanced Printf Simulation
        format = format.replace(/^["']|["']$/g, '');
        return format.replace(/\\n/g, '');
    }

    // Event Listeners
    summonSpellBtn.addEventListener('click', invokeSpell);
    resetSummoningBtn.addEventListener('click', () => {
        codeSummoningScroll.value = '';
        spellOutcome.innerHTML = '';
        summoningErrors.innerHTML = '';
    });

    spellArchiveBtn.addEventListener('click', () => {
        spellArchive.classList.toggle('hidden');
    });

    // Spell Archive Event Delegation
    spellArchive.addEventListener('click', (e) => {
        const spellSigil = e.target.closest('.spell-sigil');
        if (spellSigil) {
            const spellName = spellSigil.dataset.spell;
            codeSummoningScroll.value = spellCodex[spellName];
            spellArchive.classList.add('hidden');
        }
    });

    // Persistent Spell Scroll
    const savedSpell = localStorage.getItem('savedCodeSpell');
    if (savedSpell) {
        codeSummoningScroll.value = savedSpell;
    }

    codeSummoningScroll.addEventListener('input', () => {
        localStorage.setItem('savedCodeSpell', codeSummoningScroll.value);
    });
});

// ── DATA ──
const papersData = {
    TS: [
        {
            year: 2020, papers: [
                { date: "Sep 09", shift: "1st Shift", link: "#https://drive.google.com/file/d/1nncLoanlR36Lvxh53bu0ZwCbrFwQdWjH/view" },
                { date: "Sep 09", shift: "2nd Shift", link: "#https://drive.google.com/file/d/1P7cWOQ943FINxZD7xhhTVBDT143iOJzT/view" },
                { date: "Sep 10", shift: "1st Shift", link: "#https://drive.google.com/file/d/19IzgpgrICi2k85BY2PTbPVSf2J-CywGE/view" },
                { date: "Sep 10", shift: "2nd Shift", link: "#https://drive.google.com/file/d/1QtIGd77ndxTU-yIbPjEd5oL8KQ7MPbVS/view" },
                { date: "Sep 11", shift: "1st Shift", link: "#https://drive.google.com/file/d/1vYpmmCuCC-7QlYC-dJ1zv-Gfc7uCIIlR/view" },
                { date: "Sep 11", shift: "2nd Shift", link: "#https://drive.google.com/file/d/1aY5OyrEm4xMVUIMy8KoylKoJMRL2IlP2/view" },
                { date: "Sep 14", shift: "1st Shift", link: "#https://drive.google.com/file/d/1PydRs-t-fM-yKpJ2S6GugVltGLr2Rx2Z/view" },
                { date: "Sep 14", shift: "1st Shift", link: "#https://drive.google.com/file/d/1-SB5iZAKYhOvy2CtWfSJcN7w4bDTZiUQ/view" },
            ]
        },
        {
            year: 2021, papers: [
                { date: "Aug 04", shift: "1st Shift", link: "#https://drive.google.com/file/d/105kwCGKOidvbnftv36w2wXcE8um2o0II/view" },
                { date: "Aug 04", shift: "2nd Shift", link: "#https://drive.google.com/file/d/1lmxBO2KEYLXII841X_5ne1VbONhCADan/view" },
                { date: "Aug 05", shift: "1st Shift", link: "#https://drive.google.com/file/d/1IdhHP_FINMOhOhjJn4htybj3GIa52WSb/view" },
                { date: "Aug 05", shift: "2nd Shift", link: "#https://drive.google.com/file/d/1FU6ul-83F3LIA19xFQnVq48KYNChbPDX/view" },
                { date: "Aug 06", shift: "1st Shift", link: "#https://drive.google.com/file/d/1mXzpBci-1vBhcTI-sDHMcuW4f76q2feM/view" },
                { date: "Aug 06", shift: "2nd Shift", link: "#https://drive.google.com/file/d/1-brGHZuvvmq2gsF7zoFYwsJ6qjEFuAPk/view" },
            ]
        },
        {
            year: 2022, papers: [
                { date: "July 18", shift: "1st Shift", link: "#https://drive.google.com/file/d/1Acv7DZESBCFDCIv1yqSjY-ryM1fxsgPL/view" },
                { date: "July 18", shift: "2nd Shift", link: "#https://drive.google.com/file/d/1A8SA34ETN1PeDjrO0y6J0qgCWTEioCOf/view" },
                { date: "July 19", shift: "1st Shift", link: "#https://drive.google.com/file/d/1Abw63tgYu3TUUShAGVAMTvURQ14QIOH3/view" },
                { date: "July 19", shift: "2nd Shift", link: "#https://drive.google.com/file/d/1inMBSwswvE5Xxf-VeGwNEUEr6uWyp3ZD/view" },
                { date: "July 20", shift: "1st Shift", link: "#https://drive.google.com/file/d/1dM-CdbWBDFaDYXkkiH3MH-DwiwzVNOIo/view" },
                { date: "July 20", shift: "2nd Shift", link: "#https://drive.google.com/file/d/1UopCEhAZT1MLMrSzKJlooyGmGd9mURSJ/view" },
            ]
        },
        {
            year: 2023, papers: [
                { date: "May 15", shift: "1st Shift", link: "#https://drive.google.com/file/d/1J7WqFCAvBl2QIERBnc3QG9KLHappOxvE/view" },
                { date: "May 12", shift: "2nd Shift", link: "#https://drive.google.com/file/d/1ybHxxlU36fiJd8h2axTFamYc_0VlR93N/view" },
                { date: "May 13", shift: "1st Shift", link: "#https://drive.google.com/file/d/1dDvXQGwY31S9iUimvlqhnEUVfIY5eMzQ/view" },
                { date: "May 13", shift: "2nd Shift", link: "#https://drive.google.com/file/d/1c_wTsIZ9qmDK4r4rJs3CQ6I_6TSpRVC8/view" },
                { date: "May 14", shift: "1st Shift", link: "#https://drive.google.com/file/d/1iWGc4qFbG_uaXmct9K-dSsfIojH1furh/view" },
                { date: "May 14", shift: "2nd Shift", link: "#https://drive.google.com/file/d/1Q59OZwTa6KS9KkxNOHSiRTFL9xanboza/view" },
            ]
        },
        {
            year: 2024, papers: [
                { date: "May 09", shift: "1st Shift", link: "#https://drive.google.com/file/d/12FJmVbvXcNqqebD22JyigHs1L7y_1Ue1/view" },
                { date: "May 09", shift: "2nd Shift", link: "#https://drive.google.com/file/d/1H9CG-qW0We_koUTsaxOtexIObhzFubDP/view" },
                { date: "May 10", shift: "1st Shift", link: "#https://drive.google.com/file/d/1lwpfkIZiYENI4QXkAM2S9ShQNNlaFvJk/view" },
                { date: "May 10", shift: "2nd Shift", link: "#https://drive.google.com/file/d/1xfdIkJpiPQ3V6uuNsUWD-ya1r7kl1SIn/view" },
                { date: "May 11", shift: "1st Shift", link: "#https://drive.google.com/file/d/1CVjOKVdXQUWaOsO4seYTR1xD0n2J5tbe/view" },
                { date: "May 11", shift: "2nd Shift", link: "#https://drive.google.com/file/d/18DRdU3bOEXmCw1ovBE0BS6_VuKnKTUwy/view" },
            ]
        },
        {
            year: 2025, papers: [
                { date: "May 03", shift: "1st Shift", link: "#https://drive.google.com/file/d/1Zg-ynPzooSpJ9Idye2cQRq4R_Me1guCH/view" },
                { date: "May 03", shift: "2nd Shift", link: "#https://drive.google.com/file/d/1Ol5IJcdNKVuhfvUZZhJqJxu9cnJPQpH0/view" },
                { date: "May 04", shift: "1st Shift", link: "#https://drive.google.com/file/d/1QXDFTRzHzBBrh5bJsX-SU0j_e5WCqUpt/view" },
            ]
        },
    ],
    AP: [
        {
            year: 2020, papers: [
                { date: "Sep 17", shift: "1st Shift", link: "#https://drive.google.com/file/d/1KD1EhZnhtaXMdI3fD4CtU0mL8Jf6EOaV/view" },
                { date: "Sep 17", shift: "2nd Shift", link: "#https://drive.google.com/file/d/1KEXdezvgi2smpIkzw7J2mpBXyU9txCN7/view" },
                { date: "Sep 18", shift: "1st Shift", link: "#https://drive.google.com/file/d/1lpdiH8pbmjEC3MV209f5xgkBxSAVQmyF/view" },
                { date: "Sep 18", shift: "2nd Shift", link: "#https://drive.google.com/file/d/1xLVEIrReHqUIQKbUCxjIx0BhPe71JWwu/view" },
                { date: "Sep 21", shift: "1st Shift", link: "#https://drive.google.com/file/d/1VrfgHe2pNxHGHpVuP3IoJ3m457OGrXwp/view" },
                { date: "Sep 21", shift: "2nd Shift", link: "#https://drive.google.com/file/d/1TROfCAD-fhTl1bYKf_nW_ouTRZIW28p5/view" },
                { date: "Sep 22", shift: "1st Shift", link: "#https://drive.google.com/file/d/1wV2FZd8Qw0Ui_bnAMfpBZCyLVns5CE0r/view" },
                { date: "Sep 22", shift: "2nd Shift", link: "#https://drive.google.com/file/d/1nx949e0okFuCES4WJ7efo5N5wb1z7wYO/view" },
                { date: "Sep 23", shift: "1st Shift", link: "#https://drive.google.com/file/d/1PRA20ekCTnfQVU3i-8RuzLsLzrz7AZau/view" },
            ]
        },
        {
            year: 2021, papers: [
                { date: "Aug 19", shift: "1st Shift", link: "#https://drive.google.com/file/d/1IqRoCfknNLm09QJGsr6lqzD4A37jjpfS/view" },
                { date: "Aug 19", shift: "2nd Shift", link: "#https://drive.google.com/file/d/1PmXfk-cXiLlxe_lKimkqB9hp-iYODi6b/view" },
                { date: "Aug 20", shift: "1st Shift", link: "#https://drive.google.com/file/d/1zQ2kHWRaRarDM5xbANiDM6nICNpfMzSK/view" },
                { date: "Aug 20", shift: "2nd Shift", link: "#https://drive.google.com/file/d/1AxsINTsGvm0kdITcM2UE0hsZwDLeWIm2/view" },
                { date: "Aug 23", shift: "1st Shift", link: "#https://drive.google.com/file/d/1uysXXTihs2FW2vVG1I0wFZlzT6qTuPn4/view" },
                { date: "Aug 24", shift: "2nd Shift", link: "#https://drive.google.com/file/d/1Zszi_UuZ0IaRK9oFnr1yULE7fkCd2daF/view" },
                { date: "Aug 25", shift: "1st Shift", link: "#https://drive.google.com/file/d/1hnQPUl44qjwLTMHvW91ARFpJ0gHxppkA/view" },
                { date: "Aug 25", shift: "2nd Shift", link: "#https://drive.google.com/file/d/1ABDwEIlTcjstJ4xbzFUgXc87BXeX7RxP/view" },
            ]
        },
        {
            year: 2022, papers: [
                { date: "July 04", shift: "1st Shift", link: "#https://drive.google.com/file/d/1UmHw0Uqkw2cXwM4oDB57_LioLUcqdcda/view" },
                { date: "July 04", shift: "2nd Shift", link: "#https://drive.google.com/file/d/1vt59qwl3WKsKDQf1sEj6SkbVkWDkpS6X/view" },
                { date: "July 05", shift: "1st Shift", link: "#https://drive.google.com/file/d/1n6ixf3QtjPbvqSDt_PdVhlL1ZJnhmdu5/view" },
                { date: "July 05", shift: "2nd Shift", link: "#https://drive.google.com/file/d/1P9wpbcPMz9Kk0l8K-CTnUIFc65JdSELX/view" },
                { date: "July 06", shift: "1st Shift", link: "#https://drive.google.com/file/d/1z0seGZJkzMZ5nC3PSJc8tS85dp-Rq6Hq/view" },
                { date: "July 06", shift: "2nd Shift", link: "#https://drive.google.com/file/d/1nwhd5bixyH9KdO4LAB7hW9_lETM6A8Fm/view" },
                { date: "July 07", shift: "1st Shift", link: "#https://drive.google.com/file/d/1oIsOF9y8BoLl0RISJ0-gkiew9ihZKizB/view" },
                { date: "July 07", shift: "2nd Shift", link: "#https://drive.google.com/file/d/1rXNjzh82ityke10SIViBaQmMI9n9ctXM/view" },
                { date: "July 08", shift: "1st Shift", link: "#https://drive.google.com/file/d/10UZEZJxyZH_4SVPpf7tLnzWqc4pIniy-/view" },
                { date: "July 08", shift: "2nd Shift", link: "#https://drive.google.com/file/d/1oJHsS_9F-XNMYj2kWsG38CJNULkD7DMZ/view" },
            ]
        },
        {
            year: 2023, papers: [
                { date: "May 15", shift: "1st Shift", link: "#https://drive.google.com/file/d/1J7WqFCAvBl2QIERBnc3QG9KLHappOxvE/view" },
                { date: "May 15", shift: "2nd Shift", link: "#https://drive.google.com/file/d/1XKmZ7rCTAH9EuceGZqU_ZD-r-aRLUEgj/view" },
                { date: "May 16", shift: "1st Shift", link: "#https://drive.google.com/file/d/1LVpVljNTLdckZ08OBy2iXD1krqUWUMNY/view" },
                { date: "May 16", shift: "2nd Shift", link: "#https://drive.google.com/file/d/1kmpnzy8MHQ84oDstwresfXqQWCPl5i5r/view" },
                { date: "May 17", shift: "1st Shift", link: "#https://drive.google.com/file/d/1NGuyS9e1wpMifWftfRThVT5rRLScuiI8/view" },
                { date: "May 17", shift: "2nd Shift", link: "#https://drive.google.com/file/d/1RaL7rcEuU25HIXNCERTEs5-IjmI20dU8/view" },
                { date: "May 18", shift: "1st Shift", link: "#https://drive.google.com/file/d/17Lugp9fQybWIIcdUQAApnkIgh_ZeHhmd/view" },
                { date: "May 18", shift: "2nd Shift", link: "#https://drive.google.com/file/d/1jppU0cUF_Lga0hz6jhxEhinJe0GPbjEU/view" },
                { date: "May 19", shift: "1st Shift", link: "#https://drive.google.com/file/d/1iH432eMBcTiOuz2UfjxNJ-b5KmNltP1g/view" },
            ]
        },
        {
            year: 2024, papers: [
                { date: "May 18", shift: "1st Shift", link: "#https://drive.google.com/file/d/1vgU9COzIs4JIhHnQVHi2E1OeSvT7ZgAj/view" },
                { date: "May 19", shift: "2nd Shift", link: "#https://drive.google.com/file/d/1jF4_jEmakZC0sNmJCcJ6sUxqrCwqyDQr/view" },
                { date: "May 20", shift: "1st Shift", link: "#https://drive.google.com/file/d/1thAB_zUPlrpTSQVT6s0mwjE9jl0mqSbO/view" },
                { date: "May 20", shift: "2nd Shift", link: "#https://drive.google.com/file/d/1w9LJ7ZZ1Xb8DV0gCjhZJrMmdOxlP6PYG/view" },
                { date: "May 21", shift: "1st Shift", link: "#https://drive.google.com/file/d/1BPl9PggXYKzRWkLl6rsJkhFiS2pBVt5i/view" },
                { date: "May 21", shift: "2nd Shift", link: "#https://drive.google.com/file/d/1WWkvsnOY3QwTmlwLCI98a2JZLU7g-eBh/view" },
                { date: "May 22", shift: "1st Shift", link: "#https://drive.google.com/file/d/1lyyBQ7NEagmThN6QV_dAIa8maHvMgwwN/view" },
                { date: "May 22", shift: "2nd Shift", link: "#https://drive.google.com/file/d/1r9Atxl449qX6v2tr4BKhbQIHupIs4Mwt/view" },
                { date: "May 23", shift: "1st Shift", link: "#https://drive.google.com/file/d/1u5m6vIHbB1RSThqbaesdf7aZJ9sg837z/view" },
            ]
        },
        {
            year: 2025, papers: [
                { date: "May 21", shift: "1st Shift", link: "#https://drive.google.com/file/d/1n18HLq-rmmFcL3XSFRHa4L7jfAlo0o7P/view" },
                { date: "May 21", shift: "2nd Shift", link: "#https://drive.google.com/file/d/1rbnmscKme2eZDmvHA3mweJqcBm-te821/view" },
                { date: "May 22", shift: "1st Shift", link: "#https://drive.google.com/file/d/1OxEnwPCR-EfdRMDtj_NebpeEpU3A_DaT/view" },
                { date: "May 22", shift: "2nd Shift", link: "#https://drive.google.com/file/d/1O9crQW1yIrVGCqDKTejkGlsBEzM2J9jL/view" },
                { date: "May 23", shift: "1st Shift", link: "#https://drive.google.com/file/d/1fsZkRP7w2F2uixJ1zy78fR5paLJeJojc/view" },
                { date: "May 23", shift: "2nd Shift", link: "#https://drive.google.com/file/d/10btoLvlip83HahSxLAK96ou9rmxLH5Cj/view" },
                { date: "May 24", shift: "1st Shift", link: "#https://drive.google.com/file/d/1CTCt2sli2Sutdp0r85ibiiouem_pi7IA/view" },
                { date: "May 26", shift: "1st Shift", link: "#https://drive.google.com/file/d/1DM-LcnLXJ2fRfImZW_3WF5X8WK3KzR8-/view" },
                { date: "May 27", shift: "1st Shift", link: "#https://drive.google.com/file/d/1DM-LcnLXJ2fRfImZW_3WF5X8WK3KzR8-/view" },
            ]
        },
    ]
};

// Converts a Google Drive share link to a direct download link
function driveDownloadLink(url) {
    const fileMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
    if (fileMatch) return `https://drive.google.com/uc?export=download&id=${fileMatch[1]}`;
    const openMatch = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
    if (openMatch) return `https://drive.google.com/uc?export=download&id=${openMatch[1]}`;
    return url;
}

let currentState = 'TS';

function filterState(state, navEl) {
    currentState = state;

    // Update hero buttons
    document.querySelectorAll('.state-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.state-btn').forEach(b => {
        if (b.classList.contains(state.toLowerCase())) b.classList.add('active');
    });

    // Update badge
    const badge = document.getElementById('active-badge');
    badge.textContent = state;
    badge.className = 'state-badge ' + state.toLowerCase();

    // Update nav
    document.getElementById('nav-ap').className = state === 'AP' ? 'active-ap' : '';
    document.getElementById('nav-ts').className = state === 'TS' ? 'active-ts' : '';

    renderPapers();
    document.getElementById('papers').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function renderPapers() {
    const container = document.getElementById('papers-container');
    const data = papersData[currentState] || [];
    container.innerHTML = '';

    data.forEach((yearGroup, idx) => {
        const div = document.createElement('div');
        div.className = 'year-group' + (idx === 0 ? ' open' : '');
        div.style.animationDelay = (idx * 0.07) + 's';

        const count = yearGroup.papers.length;
        div.innerHTML = `
        <div class="year-header" onclick="toggleYear(this)">
          <div>
            <div class="year-title">${yearGroup.year} Papers</div>
            <div class="year-meta">${count} paper${count !== 1 ? 's' : ''} available</div>
          </div>
          <button class="year-toggle">+</button>
        </div>
        <div class="year-body">
          ${yearGroup.papers.map(p => `
            <div class="paper-row">
              <div class="paper-info">
                <span class="paper-name">${p.date}</span>
                <span class="paper-shift">
                  <span class="shift-dot"></span>${p.shift}
                </span>
              </div>
              <div class="btn-group">
                <a href="${p.link !== '#' ? p.link : 'javascript:void(0)'}" target="_blank" class="open-btn" title="Open in Google Drive">
                  <svg viewBox="0 0 24 24"><path d="M14 3v2H5v14h14v-9h2v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10zm7-1v6h-2V5.414l-9.293 9.293-1.414-1.414L17.586 4H14V2h7z"/></svg>
                  Open
                </a>
                <a href="${p.link !== '#' ? driveDownloadLink(p.link) : 'javascript:void(0)'}" class="dl-btn" title="Download PDF" ${p.link !== '#' ? 'target="_blank"' : ''}>
                  <svg viewBox="0 0 24 24"><path d="M12 16l-4-4h2.5V4h3v8H16l-4 4zm-6 2h12v2H6v-2z"/></svg>
                  Download
                </a>
              </div>
            </div>
          `).join('')}
        </div>
      `;

        container.appendChild(div);
    });
}

function toggleYear(header) {
    const group = header.closest('.year-group');
    group.classList.toggle('open');
}

// ── MODAL ──
function openModal() {
    document.getElementById('modal').classList.add('show');
    document.getElementById('m-state').value = currentState;
}
function closeModal() {
    document.getElementById('modal').classList.remove('show');
}
function closeModalOutside(e) {
    if (e.target.id === 'modal') closeModal();
}
function submitPaper() {
    const state = document.getElementById('m-state').value;
    const year = parseInt(document.getElementById('m-year').value);
    const date = document.getElementById('m-date').value;
    const shift = document.getElementById('m-shift').value;
    const link = document.getElementById('m-link').value;

    if (!year || !date || !link) {
        alert('Please fill in all fields.');
        return;
    }

    // Add to data
    let yearGroup = papersData[state].find(g => g.year === year);
    if (!yearGroup) {
        yearGroup = { year, papers: [] };
        papersData[state].unshift(yearGroup);
        papersData[state].sort((a, b) => b.year - a.year);
    }
    yearGroup.papers.push({ date, shift, link });

    closeModal();
    if (currentState === state) renderPapers();
    alert('Thank you! Your submission has been received.');
}

// ── INIT ──
renderPapers();
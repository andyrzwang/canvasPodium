(function () {
  'use me';

  // Prevent duplicate injections
  if (document.getElementById('canvas-podium-container')) return;

  // HARDCODED DATA (Edit your courses and teacher names here)
  const podiumData = {
    first: {
      rank: '🥇 1st Place',
      course: '',      // Line 1: Course Name
      teacher: ''   // Line 2: Teacher Name
    },
    second: {
      rank: '🥈 2nd Place',
      course: '',      // Line 1: Course Name
      teacher: ''   // Line 2: Teacher Name
    },
    third: {
      rank: '🥉 3rd Place',
      course: '',      // Line 1: Course Name
      teacher: ''   // Line 2: Teacher Name
    }
  };

  // Create podium root container
  const container = document.createElement('div');
  container.id = 'canvas-podium-container';

  // Build structure
  container.innerHTML = `
    <div class="podium-wrapper">
      <!-- 2nd Place -->
      <div class="podium-step second">
        <div class="podium-rank">${podiumData.second.rank}</div>
        <div class="podium-info">
          <div class="podium-course">${podiumData.second.course}</div>
          <div class="podium-teacher">${podiumData.second.teacher}</div>
        </div>
      </div>

      <!-- 1st Place -->
      <div class="podium-step first">
        <div class="podium-rank">${podiumData.first.rank}</div>
        <div class="podium-info">
          <div class="podium-course">${podiumData.first.course}</div>
          <div class="podium-teacher">${podiumData.first.teacher}</div>
        </div>
      </div>

      <!-- 3rd Place -->
      <div class="podium-step third">
        <div class="podium-rank">${podiumData.third.rank}</div>
        <div class="podium-info">
          <div class="podium-course">${podiumData.third.course}</div>
          <div class="podium-teacher">${podiumData.third.teacher}</div>
        </div>
      </div>
    </div>

    <!-- Bottom label banner -->
    <div class="podium-label-banner">The Most XXXX course</div>
  `;

  // Attach directly to body so it persists fixed at bottom
  document.body.appendChild(container);
})();
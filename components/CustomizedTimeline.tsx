import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';

export default function CustomizedTimeline() {
  return (
    <Timeline position="alternate">
              <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          Aug 2024 - Present
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ height: '5px' }} />
          <TimelineDot sx={{ p: 0, overflow: 'hidden', width: 50, height: 50 }}>
            <img
              src="asu.png"
              alt="Custom Icon"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
            />
          </TimelineDot>
          <TimelineConnector sx={{ height: '5px' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Graduate Teaching Assistant (CSE 578)
          </Typography>
          <Typography>Arizona State University</Typography>
        </TimelineContent>
      </TimelineItem>
        <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          May 2024 - Aug 2024
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot sx={{ p: 0, overflow: 'hidden', width: 50, height: 50 }}>
            <img
              src="resilience.jpg"
              alt="Custom Icon"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
            />
          </TimelineDot>
          <TimelineConnector sx={{ height: '5px' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            AI/ML Developer Intern
          </Typography>
          <Typography>Resilience Inc.</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          Aug 2023 - Present
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ height: '5px' }} />
          <TimelineDot sx={{ p: 0, overflow: 'hidden', width: 50, height: 50 }}>
            <img
              src="asu.png"
              alt="Custom Icon"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
            />
          </TimelineDot>
          <TimelineConnector sx={{ height: '5px' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            MS CS
          </Typography>
          <Typography>Arizona State University</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          Jun 2021 - Feb 2023
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ height: '5px' }} />
          <TimelineDot sx={{ p: 0, overflow: 'hidden', width: 50, height: 50 }}>
            <img
              src="jio.png"
              alt="Custom Icon"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
            />
          </TimelineDot>
          <TimelineConnector sx={{ height: '5px' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Software Enginner
          </Typography>
          <Typography>Jio Platforms Ltd.</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          Jan 2021 - May 2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ height: '5px' }} />
          <TimelineDot sx={{ p: 0, overflow: 'hidden', width: 50, height: 50 }}>
            <img
              src="cognizant.jpg"
              alt="Custom Icon"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
            />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Application Development Intern
          </Typography>
          <Typography>Cognizant Technology Solutions</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          Jun 2018 - Aug 2018
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot sx={{ p: 0, overflow: 'hidden', width: 50, height: 50 }}>
            <img
              src="drdo.png"
              alt="Custom Icon"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
            />
          </TimelineDot>
          <TimelineConnector sx={{ height: '5px' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Summer Intern
          </Typography>
          <Typography>Defence Research & Development Organisation</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          Jul 2017 - May 2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot sx={{ p: 0, overflow: 'hidden', width: 50, height: 50 }}>
            <img
              src="srm.png"
              alt="Custom Icon"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
            />
          </TimelineDot>
          <TimelineConnector sx={{ height: '5px' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            B.Tech
          </Typography>
          <Typography>SRM Institute of Science and Technology (India)</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

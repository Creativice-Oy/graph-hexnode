import { executeStepWithDependencies } from '@jupiterone/integration-sdk-testing';
import { buildStepTestConfigForStep } from '../../../test/config';
import { Recording, setupProjectRecording } from '../../../test/recording';
import { Steps } from '../constants';

// See test/README.md for details
let recording: Recording;
afterEach(async () => {
  await recording.stop();
});

test('fetch-device-groups', async () => {
  recording = setupProjectRecording({
    directory: __dirname,
    name: 'fetch-device-groups',
  });

  const stepConfig = buildStepTestConfigForStep(Steps.DEVICE_GROUPS);
  const stepResult = await executeStepWithDependencies(stepConfig);
  expect(stepResult).toMatchStepMetadata(stepConfig);
});

test('build-device-groups-and-devices-relationships', async () => {
  recording = setupProjectRecording({
    directory: __dirname,
    name: 'build-device-groups-and-devices-relationships',
  });

  const stepConfig = buildStepTestConfigForStep(
    Steps.BUILD_DEVICE_GROUPS_DEVICES_RELATIONSHIPS,
  );
  const stepResult = await executeStepWithDependencies(stepConfig);
  expect(stepResult).toMatchStepMetadata(stepConfig);
});

import tick from "../../../assets/images/tick.svg";

function Accuracy() {
  return (
    <>
      <div class="container b-child-container">
        <section class="a-section">
          <div>
            <h2 class="title text-center mb-4">
              How Accoric Management Maintains Accuracy
            </h2>
            <div class="description text-center  mb-4">
            Accuracy in Accoric Management is maintained through process ownership, not assumptions.
          
            </div>

            <div class="row justify-content-center g-4 b-boxes">
              <div class="col-md-4">
                <div class="p-4 b-box bordered-dashed bg-1 h-100">
                  <div class="d-flex justify-content-between align-items-center">
                    <img class="fs-3" src={tick} />
                    <span class="number">01</span>
                  </div>

                  <h5>Initial System Establishment</h5>
                  <p>
                    Accoric begins by structuring an authoritative baseline. Existing workforce and certification data is collected from all relevant sources, reviewed for consistency, normalized into standard certification classes, and organized within Accoric Management. This step eliminates:
                  </p>
                  <div class="mb-2">
                    ● Duplicate Or Conflicting Records
                  </div>
                  <div class="mb-2">
                    ● Inconsistent Naming Conventions
                  </div>
                  <div class="mb-2">
                    ● Incomplete Certification Histories
                  </div>

                  <p>Onboarding is treated as a continuous process, not a one-time event</p>
                </div>
              </div>

              <div class="col-md-4">
                <div class="p-4 b-box bordered-dashed bg-2 h-100">
                  <div class="d-flex justify-content-between align-items-center">
                    <img class="fs-3" src={tick} />
                    <span class="number">02</span>
                  </div>

                  <h5>Ongoing Onboarding Support</h5>
                  <p>
                    As new workers are hired, or new training is conducted, Accoric Management processes this new information and incorporates it into the system. This ensures:
                  </p>
                  <div class="mb-2">
                    ● New Certifications Are Captured Consistently
                  </div>
                  <div class="mb-2">
                    ● Prior Certifications Are Preserved
                  </div>
                  <div class="mb-2">
                    ● Records Remain Structured From The Moment They Enter The System
                  </div>

                  <p>At regular intervals, Accoric reconciles the system of record against a current workforce roster provided by the client.</p>
                </div>
              </div>

              <div class="col-md-4">
                <div class="p-4 b-box bordered-dashed bg-3 h-100">
                  <div class="d-flex justify-content-between align-items-center">
                    <img class="fs-3" src={tick} />
                    <span class="number">03</span>
                  </div>
                  <h5>Recurring Workforce Reconciliation</h5>
                  <p>
                    At regular intervals, Accoric reconciles the system of record against a current workforce roster provided by the client. This comparison identifies:
                  </p>

                  <div class="mb-2">
                    ● New Hires Not Yet Reflected In The System
                  </div>
                  <div class="mb-2">
                    ● Terminated Workers Still Present
                  </div>
                  <div class="mb-2">
                    ● Structural Changes Across Crews Or Roles
                  </div>

                  <p>
                    Discrepancies are resolved so the system continues to mirror reality, not historical snapshots. This reconciliation layer is what prevents long-term data erosion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Accuracy;

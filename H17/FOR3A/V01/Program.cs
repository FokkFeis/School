using System;
using System.Windows.Forms;
using System.Threading;
using System.Drawing;

namespace TickingClock
{
    class WorldTime : Form
    {
        PictureBox picture;
        Thread clockThread;
        private Label label1;
        private TextBox textBox1;
        private System.Windows.Forms.Timer timer1;
        private System.ComponentModel.IContainer components;
        bool ended = false;

        protected override void Dispose(bool disposing)
        {
            ended = true;
            Console.WriteLine("Wait while we shut down...");
            clockThread.Join();
            base.Dispose(disposing);
            Application.Exit();
        }

        WorldTime()
        {    
            Text = "Clock";
            this.label1 = new System.Windows.Forms.Label();
            this.textBox1 = new System.Windows.Forms.TextBox();
            this.SuspendLayout();
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(0, 0);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(72, 13);
            this.label1.TabIndex = 0;
            this.label1.Text = "Ticking Clock";
            this.label1.Click += new System.EventHandler(this.label1_Click);
            // 
            // textBox1
            // 
            this.textBox1.Location = new System.Drawing.Point(3, 218);
            this.textBox1.Name = "textBox1";
            this.textBox1.Size = new System.Drawing.Size(100, 20);
            this.textBox1.TabIndex = 1;
            this.textBox1.Text = (DateTime.Now.Hour + ":" + DateTime.Now.Minute + ":" + DateTime.Now.Second).ToString();
            // 
            // WorldTime
            // 
            this.ClientSize = new System.Drawing.Size(284, 261);
            this.Controls.Add(this.textBox1);
            this.Controls.Add(this.label1);
            this.Name = "WorldTime";
            this.Load += new System.EventHandler(this.WorldTime_Load);
            this.ResumeLayout(false);
            this.PerformLayout();
            // Set up a picture box 
            picture = new PictureBox();
            picture.Size = new Size(150, 150);
            // add the picture to the form
            Controls.Add(picture);
            
            // add the event 
            picture.Paint += new PaintEventHandler(new Clock().ClockPaint);
            // create and start a thread to control the clock
            clockThread = new Thread(new ThreadStart(TickClock));
            clockThread.Start();
        }


        void TickClock()
        {
            while (!ended)
            {
                picture.Invalidate();
                Thread.Sleep(1000);
            }
        }

        public class Clock
        {
            int seconds = 0;
            SolidBrush bluebrush, whitebrush;
            Pen blackpen;
            int start = 100;

            public Clock()
            {
                blackpen = new Pen(Color.Black);
                bluebrush = new SolidBrush(Color.Blue);
                whitebrush = new SolidBrush(Color.LightGray);
            }

            // The handler redraws the whole clock
            public void ClockPaint(object source, PaintEventArgs e)
            {
                Graphics g = e.Graphics;
                g.DrawEllipse(blackpen, start / 2, start / 2, 100, 100);
                g.FillEllipse(whitebrush, start / 2, start / 2, 100, 100);
                g.FillEllipse(bluebrush, start, start, 5, 5);
                Hands(g);
                seconds++;
            }

            void Hands(Graphics g)
            {
                double hourAngle = 2 * Math.PI * (seconds - 3 * 60 * 60) / (12 * 60 * 60);
                double minuteAngle = 2 * Math.PI * (seconds - 15 * 60) / (60 * 60);
                double secondAngle = 2 * Math.PI * (seconds - 15) / 60;
                g.DrawLine(blackpen, start, start,
                    start + (int)(30 * Math.Cos(hourAngle)),
                    start + (int)(30 * Math.Sin(hourAngle)) + 5);
                g.DrawLine(blackpen, start, start,
                    start + (int)(40 * Math.Cos(minuteAngle)),
                    start + (int)(40 * Math.Sin(minuteAngle)));
                g.DrawLine(blackpen, start, start,
                    start + (int)(45 * Math.Cos(secondAngle)),
                    start + (int)(45 * Math.Sin(secondAngle)));
            }
        }

        static void Main()
        {
            Application.Run(new WorldTime());
        }

        private void WorldTime_Load(object sender, EventArgs e)
        {

        }

        private void label1_Click(object sender, EventArgs e)
        {

        }

        private void InitializeComponent()
        {
            this.components = new System.ComponentModel.Container();
            this.timer1 = new System.Windows.Forms.Timer(this.components);
            this.SuspendLayout();
            // 
            // WorldTime
            // 
            this.ClientSize = new System.Drawing.Size(284, 261);
            this.Name = "WorldTime";
            this.ResumeLayout(false);

        }
    }
}
